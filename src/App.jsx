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
import SellerProfilePage from './pages/SellerProfilePage';

import ServiceDetails from './pages/ServiceDetails';
import ProductDetails from './pages/ProductDetails';
import EventDetails from './pages/EventDetails';
import TransportDetails from './pages/TransportDetails';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SellerRegistrationPage from './pages/SellerRegistrationPage';
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
              <Route path="/events/:id" element={<EventDetails />} />
              <Route path="/transport" element={<TransportPage />} />
              <Route path="/transport/:id" element={<TransportDetails />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/profile/edit" element={<EditProfilePage />} />
              <Route path="/support" element={<SupportPage />} />
              {/* Legal & Info */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy" element={<DataProtection />} />
              <Route path="/terms" element={<TermsOfService />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/members" element={<AdminMembers />} />
              <Route path="/admin/customers" element={<AdminCustomers />} />
              
              <Route path="/partner" element={<SellerProfilePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/register-seller" element={<SellerRegistrationPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </AppProvider>
    </ToastProvider>
  );
}

export default App;
