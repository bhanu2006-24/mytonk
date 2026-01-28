import React, { createContext, useContext, useState } from 'react';
import { initialServices, initialProducts, initialEvents, initialTransport } from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // 'en' or 'hi'
  const [searchQuery, setSearchQuery] = useState('');
  
  // Data states
  const [services, setServices] = useState(initialServices);
  const [products, setProducts] = useState(initialProducts);
  const [events, setEvents] = useState(initialEvents);
  const [transport, setTransport] = useState(initialTransport);
  
  // Cart
  const [cart, setCart] = useState([]);
  
  // Admin State (Mock)
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const addToCart = (item, type = 'product') => {
    setCart(prev => [...prev, { ...item, type, cartId: Date.now() }]);
  };

  const removeFromCart = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

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
      isAdmin,
      setIsAdmin,
      t
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
