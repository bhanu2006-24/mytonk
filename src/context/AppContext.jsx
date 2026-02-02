import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialServices as defaultServices, initialProducts as defaultProducts, initialEvents as defaultEvents, initialTransport as defaultTransport } from '../data/data';
import { useToast } from './ToastContext';
import { db } from '../lib/database';
import { authService } from '../lib/auth';
import { initializeSchema } from '/src/lib/database/schema'; // Absolute import attempt
// Re-trigger HMR check

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { addToast } = useToast();
  
  // -- App State --
  const [language, setLanguage] = useState(() => db.get('language', 'en'));
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  // -- Data State (Persistent) --
  // We initialize with what we have in LS immediately (sync), then verify with Neon (async)
  const [services, setServices] = useState(() => db.get('services', defaultServices));
  const [products, setProducts] = useState(() => db.get('products', defaultProducts));
  const [events, setEvents] = useState(() => db.get('events', defaultEvents));
  const [transport, setTransport] = useState(() => db.get('transport', defaultTransport));
  
  // -- User/Auth State (Persistent) --
  const [users, setUsers] = useState(() => db.users.getAllSync());
  const [user, setUser] = useState(() => db.get('currentUser', null)); 
  const [isAdmin, setIsAdmin] = useState(false);

  // -- Commerce State (Persistent) --
  const [cart, setCart] = useState(() => db.get('cart', []));
  const [orders, setOrders] = useState(() => db.get('orders', []));

  // -- Load Data from Neon on Mount --
  useEffect(() => {
    const loadData = async () => {
        try {
            // Attempt to load data
            const [remoteUsers, remoteServices, remoteProducts, remoteEvents, remoteTransport] = await Promise.all([
                db.users.getAll(),
                db.table('services').getAll(defaultServices),
                db.table('products').getAll(defaultProducts),
                db.table('events').getAll(defaultEvents),
                db.table('transport').getAll(defaultTransport)
            ]);

            if (remoteUsers) setUsers(remoteUsers);
            if (remoteServices) setServices(remoteServices);
            if (remoteProducts) setProducts(remoteProducts);
            if (remoteEvents) setEvents(remoteEvents);
            if (remoteTransport) setTransport(remoteTransport);
            
        } catch (e) {
            console.error("Failed to load remote data", e);
             // Check for missing tables (Postgres error code 42P01 is undefined_table, but we might just catch the string)
             if (e.message && e.message.includes('relation') && e.message.includes('does not exist')) {
                 console.log("Tables missing. Attempting to auto-create schema...");
                 try {
                     await initializeSchema();
                     addToast("Database initialized successfully!", "success");
                     // Retry load? Maybe next reload.
                 } catch (schemaErr) {
                     console.error("Failed to auto-create schema", schemaErr);
                 }
             }
        } finally {
            setIsLoading(false);
        }
    };
    loadData();
  }, []);


  // -- Effects for Persistence (Sync to LS for offline) --
  // Fix: Wrapped in braces to avoid returning Promises to useEffect
  useEffect(() => { db.set('language', language); }, [language]);
  useEffect(() => { db.table('services').save(services); }, [services]);
  useEffect(() => { db.table('products').save(products); }, [products]);
  useEffect(() => { db.table('events').save(events); }, [events]);
  useEffect(() => { db.table('transport').save(transport); }, [transport]);
  useEffect(() => { db.set('users', users); }, [users]); 
  useEffect(() => { db.set('currentUser', user); }, [user]);
  useEffect(() => { db.set('cart', cart); }, [cart]);
  useEffect(() => { db.set('orders', orders); }, [orders]);

  // Sync isAdmin based on user role
  useEffect(() => {
    setIsAdmin(user?.role === 'admin');
  }, [user]);

  // -- Actions --

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  // Auth Actions using Service
  const login = (emailOrPhone, password) => {
    const result = authService.login(emailOrPhone, password, users);
    
    if (result.success) {
        setUser(result.user);
        addToast(`Welcome back, ${result.user.name}!`, 'success');
        return true;
    } else {
        addToast(result.error, 'error');
        return false;
    }
  };

  const register = async (userData) => {
    const result = await authService.register(userData, users);
    
    if (result.success) {
        setUsers(result.allUsers); // Update local state
        // Remove password for session
        const { password, ...sessionUser } = result.user;
        setUser(sessionUser);
        addToast('Account created successfully!', 'success');
        return true;
    } else {
        addToast(result.error, 'error');
        return false;
    }
  };

  const logout = () => {
      setUser(null);
      setIsAdmin(false);
      addToast('Logged out successfully', 'info');
  };

  const updateUser = (userData) => {
      setUser(prev => {
          const updated = { ...prev, ...userData };
          // Also update in the main users list
          setUsers(currentUsers => currentUsers.map(u => u.id === prev.id ? { ...u, ...userData } : u));
          return updated;
      });
      addToast('Profile updated successfully!', 'success');
  };


  // Commerce Actions
  const t = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    if (obj[language]) return obj[language];
    return obj?.en || '';
  };

  const addToCart = (item, type = 'product') => {
    setCart(prev => [...prev, { ...item, type, cartId: Date.now() }]);
    const itemName = item.name[language] || item.name.en || 'Item';
    
    if (type === 'service') {
         addToast(`${itemName} added to requests!`, 'success');
    } else {
         addToast(`${itemName} added to cart!`, 'success');
    }
  };

  const removeFromCart = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };
  
  const placeOrder = async (paymentDetails = null) => {
      if (cart.length === 0) return;
      
      const newOrder = {
          id: Date.now().toString(),
          date: new Date().toLocaleDateString(),
          items: [...cart],
          total: cart.reduce((sum, item) => sum + item.price, 0),
          status: paymentDetails ? 'Processing' : 'Pending',
          payment: paymentDetails || { method: 'COD' },
          userId: user?.id || 'guest'
      };
      
      await db.table('orders').add(newOrder);
      
      setOrders(prev => [newOrder, ...prev]);
      setCart([]);
      db.set('cart', []);
      addToast('Order placed successfully!', 'success');
  }

  const addService = async (service) => {
    const newItem = { ...service, id: Date.now().toString() };
    await db.table('services').add(newItem);
    setServices(prev => [...prev, newItem]);
    addToast('Service added!', 'success');
  }

  const addProduct = async (product) => {
    const newItem = { ...product, id: Date.now().toString() };
    await db.table('products').add(newItem);
    setProducts(prev => [...prev, newItem]);
    addToast('Product added!', 'success');
  }


  return (
    <AppContext.Provider value={{
      language,
      toggleLanguage,
      searchQuery,
      setSearchQuery,
      services,
      setServices,
      addService,
      products,
      setProducts,
      addProduct,
      events,
      setEvents,
      transport,
      setTransport,
      cart,
      addToCart,
      removeFromCart,
      orders,
      placeOrder,
      isAdmin,
      user,
      users,
      login,
      register,
      logout,
      updateUser,
      t,
      isLoading
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
