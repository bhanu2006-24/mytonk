import React, { createContext, useContext, useState } from 'react';
import { initialServices, initialProducts, initialEvents, initialTransport } from '../data/mockData';

import { useToast } from './ToastContext';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // 'en' or 'hi'
  const [searchQuery, setSearchQuery] = useState('');
  const { addToast } = useToast();
  
  // Data states
  const [services, setServices] = useState(initialServices);
  const [products, setProducts] = useState(initialProducts);
  const [events, setEvents] = useState(initialEvents);
  const [transport, setTransport] = useState(initialTransport);
  
  // Cart
  const [cart, setCart] = useState([]);
  
  // Auth State
  const [user, setUser] = useState(null); // { name, role: 'customer' | 'seller' | 'admin' }
  const [isAdmin, setIsAdmin] = useState(false); // Legacy support

  const login = (role = 'customer') => {
      setUser({
          name: role === 'admin' ? 'Admin User' : role === 'seller' ? 'Partner User' : 'Vijay Saini',
          email: 'user@example.com',
          role: role
      });
      if (role === 'admin') setIsAdmin(true);
      else setIsAdmin(false);
  };

  const logout = () => {
      setUser(null);
      setIsAdmin(false);
  };

  const updateUser = (userData) => {
      setUser(prev => ({ ...prev, ...userData }));
      addToast('Profile updated successfully!', 'success');
  };

  // Orders
  const [orders, setOrders] = useState([]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const addToCart = (item, type = 'product') => {
    setCart(prev => [...prev, { ...item, type, cartId: Date.now() }]);
    const name = t(item.name); 
    // Let's just use the current language directly or pass raw obj
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
          status: 'Pending'
      };
      setOrders(prev => [newOrder, ...prev]);
      setCart([]);
      addToast('Order placed successfully!', 'success');
  }

  const addService = (service) => {
    setServices(prev => [...prev, { ...service, id: Date.now().toString() }]);
  }

  const addProduct = (product) => {
    setProducts(prev => [...prev, { ...product, id: Date.now().toString() }]);
  }

  // Translation helper
  const t = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    if (obj[language]) return obj[language];
    return obj?.en || '';
  };

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
      setIsAdmin,
      user,
      login,
      logout,
      updateUser,
      t
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
