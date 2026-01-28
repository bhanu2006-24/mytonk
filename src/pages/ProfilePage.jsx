import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Edit3, Settings, LogOut, Package, Heart, ChevronRight, Bell, Shield, CreditCard, HelpCircle } from 'lucide-react';

const ProfilePage = () => {
    const { t, orders } = useApp();
    const [activeTab, setActiveTab] = useState('profile');

    // Mock User Data
    const user = {
        name: 'ViJaY Saini',
        email: 'vijaysaini@example.com',
        phone: '+91 98765 43210',
        location: 'Tonk, Rajasthan',
        joinDate: 'Jan 2026',
        avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60'
    };

    const tabs = [
        { id: 'profile', label: { en: 'My Profile', hi: 'मेरी प्रोफ़ाइल' }, icon: User, color: 'text-blue-600 bg-blue-50' },
        { id: 'orders', label: { en: 'My Orders', hi: 'मेरे आर्डर' }, icon: Package, color: 'text-orange-600 bg-orange-50' },
        { id: 'wishlist', label: { en: 'Wishlist', hi: 'इच्छा सूची' }, icon: Heart, color: 'text-pink-600 bg-pink-50' },
        { id: 'payments', label: { en: 'Payments', hi: 'भुगतान' }, icon: CreditCard, color: 'text-green-600 bg-green-50' },
        { id: 'settings', label: { en: 'Settings', hi: 'सेटिंग्स' }, icon: Settings, color: 'text-gray-600 bg-gray-50' },
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 bg-slate-50">
            <Navbar />
            <div className="container-padding max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-8">
                    <div className="h-32 bg-gradient-to-r from-primary to-purple-600 relative"></div>
                    <div className="px-8 pb-8 relative">
                        <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
                            <div className="relative -mt-12 shrink-0">
                                <img 
                                    src={user.avatar} 
                                    alt={user.name} 
                                    className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg bg-white"
                                />
                                <button className="absolute bottom-1 right-1 p-2 bg-primary text-white rounded-full shadow-md hover:bg-primary/90 transition-colors">
                                    <Edit3 size={16} />
                                </button>
                            </div>
                            <div className="flex-1 pt-2 md:pt-0 mb-2">
                                 <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                                 <p className="text-gray-500 font-medium flex items-center gap-2 mt-1">
                                    <MapPin size={16} />
                                    {user.location} • Member since {user.joinDate}
                                 </p>
                            </div>
                            <div className="flex gap-3 mb-2 w-full md:w-auto">
                                <button className="flex-1 md:flex-none px-6 py-2.5 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors">
                                    {t({en: 'Edit Profile', hi: 'संपादित करें'})}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
                    {/* Sidebar Navigation */}
                    <div className="space-y-6">
                        <nav className="bg-white rounded-2xl border border-slate-200 shadow-sm p-3">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-bold transition-all mb-1 ${
                                        activeTab === tab.id 
                                            ? 'bg-slate-100 text-slate-900' 
                                            : 'text-gray-500 hover:bg-slate-50 hover:text-gray-700'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg ${activeTab === tab.id ? 'bg-white shadow-sm' : tab.color}`}>
                                            <tab.icon size={18} className={activeTab === tab.id ? 'text-primary' : ''} />
                                        </div>
                                        <span>{t(tab.label)}</span>
                                    </div>
                                    {activeTab === tab.id && <ChevronRight size={16} className="text-gray-400" />}
                                </button>
                            ))}
                        </nav>
                        
                        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                             <h3 className="font-bold text-blue-900 mb-2">Need Help?</h3>
                             <p className="text-sm text-blue-700 mb-4">Check our detailed FAQs or contact support.</p>
                             <button className="w-full py-2 bg-white text-blue-600 font-bold rounded-lg text-sm shadow-sm hover:bg-blue-50 border border-blue-100 transition-colors">
                                 Contact Support
                             </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {activeTab === 'profile' && (
                                    <div className="max-w-xl">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t({en: 'Profile Information', hi: 'प्रोफ़ाइल जानकारी'})}</h2>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t({en: 'Full Name', hi: 'पूरा नाम'})}</label>
                                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 font-bold text-gray-900 flex items-center gap-3">
                                                        <User size={18} className="text-gray-400" />
                                                        {user.name}
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t({en: 'Phone', hi: 'फ़ोन'})}</label>
                                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 font-bold text-gray-900 flex items-center gap-3">
                                                        <Phone size={18} className="text-gray-400" />
                                                        {user.phone}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t({en: 'Email Address', hi: 'ईमेल पता'})}</label>
                                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 font-bold text-gray-900 flex items-center gap-3">
                                                    <Mail size={18} className="text-gray-400" />
                                                    {user.email}
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t({en: 'Location', hi: 'स्थान'})}</label>
                                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 font-bold text-gray-900 flex items-center gap-3">
                                                    <MapPin size={18} className="text-gray-400" />
                                                    {user.location}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                {activeTab === 'orders' && (
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t({en: 'My Orders', hi: 'मेरे आर्डर'})}</h2>
                                        {orders.length > 0 ? (
                                            <div className="space-y-4">
                                                {orders.map((order) => (
                                                    <div key={order.id} className="p-4 bg-white border border-slate-200 rounded-xl hover:border-primary/50 transition-all shadow-sm">
                                                        <div className="flex justify-between items-start mb-4">
                                                            <div>
                                                                <p className="text-sm font-bold text-gray-500">Order #{order.id.slice(-6)}</p>
                                                                <p className="text-xs text-gray-400">{order.date}</p>
                                                            </div>
                                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                                order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                                            }`}>
                                                                {order.status}
                                                            </span>
                                                        </div>
                                                        <div className="space-y-2 mb-4">
                                                            {order.items.map((item, idx) => (
                                                                <div key={idx} className="flex justify-between text-sm">
                                                                    <span className="text-gray-700 max-w-[70%] truncate flex items-center gap-2">
                                                                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                                                                        {t(item.name)}
                                                                    </span>
                                                                    <span className="font-medium text-gray-900">₹{item.price}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                                                            <span className="font-bold text-gray-500 text-sm">Total</span>
                                                            <span className="font-bold text-xl text-primary">₹{order.total}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="text-center py-20">
                                                <div className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <Package size={48} className="text-orange-400 opacity-50" />
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{t({en: 'No orders yet', hi: 'अभी तक कोई आदेश नहीं'})}</h3>
                                                <p className="text-gray-500 mb-8 max-w-sm mx-auto">{t({en: 'Looks like you haven\'t ordered anything yet. Explore our market to find great local products.', hi: 'लगता है आपने अभी तक कुछ भी ऑर्डर नहीं किया है। महान स्थानीय उत्पाद खोजने के लिए हमारे बाज़ार का अन्वेषण करें।'})}</p>
                                                <Link to="/market" onClick={() => setActiveTab('profile')} className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all inline-block cursor-pointer">
                                                    {t({en: 'Start Shopping', hi: 'खरीदारी शुरू करें'})}
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                )}
                                
                                {activeTab === 'settings' && (
                                    <div className="space-y-4">
                                         <h2 className="text-2xl font-bold text-gray-900 mb-6">{t({en: 'Account Settings', hi: 'खाता सेटिंग्स'})}</h2>
                                         
                                         {[
                                            { title: 'Notifications', desc: 'Manage your email and push notifications', icon: Bell },
                                            { title: 'Privacy & Security', desc: 'Secure your account with 2FA', icon: Shield },
                                            { title: 'Help & Support', desc: 'Get help with your orders', icon: HelpCircle },
                                         ].map((item, i) => (
                                             <button key={i} className="w-full flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-primary/30 hover:bg-slate-50 transition-all group">
                                                 <div className="flex items-center gap-4">
                                                     <div className="p-3 bg-slate-100 rounded-lg text-slate-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                         <item.icon size={20} />
                                                     </div>
                                                     <div className="text-left">
                                                         <h4 className="font-bold text-gray-900">{item.title}</h4>
                                                         <p className="text-sm text-gray-500">{item.desc}</p>
                                                     </div>
                                                 </div>
                                                 <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
                                             </button>
                                         ))}
                                         
                                         <div className="pt-8 mt-8 border-t border-slate-100">
                                              <button className="flex items-center gap-2 text-red-500 font-bold hover:bg-red-50 px-4 py-2 rounded-lg transition-colors">
                                                  <LogOut size={20} />
                                                  <span>{t({en: 'Log Out', hi: 'लॉग आउट'})}</span>
                                              </button>
                                         </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
