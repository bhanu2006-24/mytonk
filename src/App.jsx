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
import SupportPage from './pages/SupportPage';
import AboutPage from './pages/AboutPage';
import DataProtection from './pages/DataProtection';
import TermsOfService from './pages/TermsOfService';

import AdminDashboard from './pages/admin/AdminDashboard';
import AdminMembers from './pages/admin/AdminMembers';
import AdminCustomers from './pages/admin/AdminCustomers';

import ServiceDetails from './pages/ServiceDetails';
import ProductDetails from './pages/ProductDetails';
import ProfilePage from './pages/ProfilePage';
import { ToastProvider } from './context/ToastContext';

function App() {
  return (
    <ToastProvider>
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
              <Route path="/support" element={<SupportPage />} />
              {/* Legal & Info */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy" element={<DataProtection />} />
              <Route path="/terms" element={<TermsOfService />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/members" element={<AdminMembers />} />
              <Route path="/admin/customers" element={<AdminCustomers />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </AppProvider>
    </ToastProvider>
  );
}

export default App;
