import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Edit3, Settings, LogOut, Package, Heart } from 'lucide-react';

const ProfilePage = () => {
    const { t } = useApp();
    const [activeTab, setActiveTab] = useState('profile');

    // Mock User Data
    const user = {
        name: 'ViJaY Saini',
        email: 'vijaysaini@example.com',
        phone: '+91 98765 43210',
        location: 'Tonk, Rajasthan',
        joinDate: 'Jan 2026'
    };

    const tabs = [
        { id: 'profile', label: { en: 'Profile', hi: 'प्रोफ़ाइल' }, icon: User },
        { id: 'orders', label: { en: 'Orders', hi: 'आर्डर' }, icon: Package },
        { id: 'wishlist', label: { en: 'Wishlist', hi: 'इच्छा सूची' }, icon: Heart },
        { id: 'settings', label: { en: 'Settings', hi: 'सेटिंग्स' }, icon: Settings },
    ];

    return (
        <div className="min-h-screen pt-24 pb-12">
            <Navbar />
            <div className="container-padding max-w-6xl mx-auto">
                
                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg text-center">
                            <div className="w-24 h-24 mx-auto bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-3xl font-bold text-white mb-4 shadow-lg shadow-primary/30">
                                {user.name.charAt(0)}
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                            <p className="text-gray-500 text-sm mb-6">{user.location}</p>
                            
                            <button className="w-full py-2 border border-gray-200 rounded-lg text-gray-600 font-medium hover:bg-gray-50 transition-colors text-sm">
                                {t({en: 'Edit Profile', hi: 'प्रोफ़ाइल संपादित करें'})}
                            </button>
                        </div>

                        <nav className="bg-white/70 backdrop-blur-md p-2 rounded-2xl border border-white/50 shadow-lg">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                                        activeTab === tab.id 
                                            ? 'bg-primary text-white shadow-md shadow-primary/20' 
                                            : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                >
                                    <tab.icon size={18} />
                                    <span>{t(tab.label)}</span>
                                </button>
                            ))}
                            <div className="h-px bg-gray-100 my-2"></div>
                             <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-500 hover:bg-red-50 transition-colors">
                                <LogOut size={18} />
                                <span>{t({en: 'Logout', hi: 'लॉग आउट'})}</span>
                            </button>
                        </nav>
                    </div>

                    {/* Content Area */}
                    <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-white/50 shadow-lg p-8 min-h-[500px]">
                        {activeTab === 'profile' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <h1 className="text-2xl font-bold text-gray-900 mb-8">{t({en: 'My Profile', hi: 'मेरी प्रोफ़ाइल'})}</h1>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-500">{t({en: 'Full Name', hi: 'पूरा नाम'})}</label>
                                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 text-gray-900 font-medium">
                                            <User size={18} className="text-gray-400" />
                                            {user.name}
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-500">{t({en: 'Email Address', hi: 'ईमेल पता'})}</label>
                                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 text-gray-900 font-medium">
                                            <Mail size={18} className="text-gray-400" />
                                            {user.email}
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-500">{t({en: 'Phone Number', hi: 'फ़ोन नंबर'})}</label>
                                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 text-gray-900 font-medium">
                                            <Phone size={18} className="text-gray-400" />
                                            {user.phone}
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-500">{t({en: 'Location', hi: 'स्थान'})}</label>
                                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 text-gray-900 font-medium">
                                            <MapPin size={18} className="text-gray-400" />
                                            {user.location}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        
                        {activeTab === 'orders' && (
                             <div className="text-center py-20">
                                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Package size={32} className="text-gray-400" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">{t({en: 'No orders yet', hi: 'अभी तक कोई आदेश नहीं'})}</h3>
                                <p className="text-gray-500">{t({en: 'Go to market and buy something awesome!', hi: 'बाज़ार पर जाएं और कुछ बढ़िया खरीदें!'})}</p>
                            </div>
                        )}
                        
                        {/* More tabs implementation can go here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
