import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialServices as defaultServices, initialProducts as defaultProducts, initialEvents as defaultEvents, initialTransport as defaultTransport } from '../data/mockData';
import { useToast } from './ToastContext';
import { db, defaultUsers } from '../lib/db';
import { authService } from '../lib/auth';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { addToast } = useToast();
  
  // -- App State --
  const [language, setLanguage] = useState(() => db.get('language', 'en'));
  const [searchQuery, setSearchQuery] = useState('');
  
  // -- Data State (Persistent) --
  const [services, setServices] = useState(() => db.services.getAll(defaultServices));
  const [products, setProducts] = useState(() => db.get('products', defaultProducts));
  const [events, setEvents] = useState(() => db.get('events', defaultEvents));
  const [transport, setTransport] = useState(() => db.get('transport', defaultTransport));
  
  // -- User/Auth State (Persistent) --
  const [users, setUsers] = useState(() => db.users.getAll());
  const [user, setUser] = useState(() => db.get('currentUser', null)); 
  const [isAdmin, setIsAdmin] = useState(false);

  // -- Commerce State (Persistent) --
  const [cart, setCart] = useState(() => db.get('cart', []));
  const [orders, setOrders] = useState(() => db.get('orders', []));

  // -- Effects for Persistence --
  useEffect(() => db.set('language', language), [language]);
  useEffect(() => db.services.save(services), [services]);
  useEffect(() => db.set('products', products), [products]);
  useEffect(() => db.set('events', events), [events]);
  useEffect(() => db.set('transport', transport), [transport]);
  useEffect(() => db.users.save(users), [users]);
  useEffect(() => db.set('currentUser', user), [user]);
  useEffect(() => db.set('cart', cart), [cart]);
  useEffect(() => db.set('orders', orders), [orders]);

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

  const register = (userData) => {
    const result = authService.register(userData, users);
    
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
  
  const placeOrder = () => {
      if (cart.length === 0) return;
      
      const newOrder = {
          id: Date.now().toString(),
          date: new Date().toLocaleDateString(),
          items: [...cart],
          total: cart.reduce((sum, item) => sum + item.price, 0),
          status: 'Pending',
          userId: user?.id || 'guest'
      };
      
      setOrders(prev => [newOrder, ...prev]);
      setCart([]);
      addToast('Order placed successfully!', 'success');
  }

  const addService = (service) => {
    setServices(prev => [...prev, { ...service, id: Date.now().toString() }]);
    addToast('Service added!', 'success');
  }

  const addProduct = (product) => {
    setProducts(prev => [...prev, { ...product, id: Date.now().toString() }]);
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
      t
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
