import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import HomePage from './pages/HomePage';

import ServicesPage from './pages/ServicesPage';
import MarketPage from './pages/MarketPage';
import EventsPage from './pages/EventsPage';
import CartPage from './pages/CartPage';
import TransportPage from './pages/TransportPage';
import Footer from './components/Footer';

import ServiceDetails from './pages/ServiceDetails';
import ProductDetails from './pages/ProductDetails';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/market/:id" element={<ProductDetails />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/transport" element={<TransportPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
