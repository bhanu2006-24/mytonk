import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { 
    Star, DollarSign, Calendar, Settings, 
    Plus, Package, Edit2, Clock, CheckCircle 
} from 'lucide-react';

const SellerProfilePage = () => {
    const { t } = useApp();
    const [activeTab, setActiveTab] = useState('overview');

    const sellerInfo = {
        name: "Sharma Electronics",
        type: "Service & Retail",
        rating: 4.8,
        totalJobs: 154,
        earnings: "₹45,200",
        joined: "Jan 2024"
    };

    const activeOrders = [
        { id: 'ORD-123', service: 'AC Repair', customer: 'Rahul K.', status: 'Pending', time: '10:00 AM Today', price: '₹599' },
        { id: 'ORD-124', service: 'Fan Installation', customer: 'Priya S.', status: 'Accepted', time: '12:30 PM Today', price: '₹350' },
    ];

    const myServices = [
        { id: 1, name: 'AC Service', price: '₹599', status: 'Active' },
        { id: 2, name: 'Main Switch Change', price: '₹250', status: 'Active' },
        { id: 3, name: 'Fan Repair', price: '₹350', status: 'Inactive' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <Navbar />
            
            <div className="container-padding max-w-5xl mx-auto">
                {/* Header Profile Card */}
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold font-display shadow-lg shadow-indigo-200">
                        {sellerInfo.name.charAt(0)}
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 font-display">{sellerInfo.name}</h1>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-500 mb-4">
                            <span className="px-3 py-1 bg-slate-100 rounded-full font-medium">{sellerInfo.type}</span>
                            <span className="flex items-center gap-1 font-bold text-slate-700">
                                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                {sellerInfo.rating} (120 Reviews)
                            </span>
                            <span>Member since {sellerInfo.joined}</span>
                        </div>
                        <div className="flex justify-center md:justify-start gap-3">
                            <button className="px-5 py-2 bg-primary text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:scale-105 transition-transform">
                                Edit Profile
                            </button>
                            <button className="px-5 py-2 bg-white text-slate-700 font-bold border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                                Support
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
                    {/* Main Content Area */}
                    <div className="space-y-8">
                        {/* Stats Row */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-3">
                                    <DollarSign size={20} />
                                </div>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Total Earnings</p>
                                <p className="text-2xl font-bold text-slate-900">{sellerInfo.earnings}</p>
                            </motion.div>
                            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-3">
                                    <CheckCircle size={20} />
                                </div>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Jobs Done</p>
                                <p className="text-2xl font-bold text-slate-900">{sellerInfo.totalJobs}</p>
                            </motion.div>
                             <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm col-span-2 md:col-span-1">
                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-3">
                                    <Calendar size={20} />
                                </div>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">This Month</p>
                                <p className="text-2xl font-bold text-slate-900">+24 Orders</p>
                            </motion.div>
                        </div>

                        {/* Recent Orders Section */}
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                                <h3 className="font-bold text-lg text-slate-900">New Orders</h3>
                                <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full animate-pulse">2 New</span>
                            </div>
                            <div>
                                {activeOrders.map((order, i) => (
                                    <div key={i} className="p-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="font-bold text-slate-900">{order.service}</h4>
                                                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-bold rounded">{order.status}</span>
                                            </div>
                                            <p className="text-sm text-slate-500 flex items-center gap-2">
                                                <Clock size={14} /> {order.time} • {order.customer}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="font-bold text-slate-900 mr-2">{order.price}</div>
                                            <button className="px-4 py-2 bg-slate-900 text-white font-bold rounded-lg text-sm hover:bg-slate-800">Accept</button>
                                            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg text-sm hover:bg-red-50 hover:text-red-600 hover:border-red-200">Decline</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Services Management */}
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-lg text-slate-900">Manage Services</h3>
                                <button className="flex items-center gap-2 text-primary font-bold text-sm hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors">
                                    <Plus size={16} /> Add New
                                </button>
                            </div>
                            <div className="space-y-4">
                                {myServices.map((service) => (
                                    <div key={service.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="flex items-center gap-4">
                                             <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-slate-100 text-slate-400">
                                                <Package size={20} />
                                             </div>
                                             <div>
                                                 <p className="font-bold text-slate-900">{service.name}</p>
                                                 <p className="text-sm text-slate-500">{service.price}</p>
                                             </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className={`text-xs font-bold px-2 py-1 rounded ${service.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                                {service.status}
                                            </span>
                                            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                                <Edit2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Quick Actions */}
                    <div className="space-y-6">
                        <div className="bg-indigo-600 rounded-3xl p-6 text-white shadow-xl shadow-indigo-200">
                            <h3 className="font-bold text-lg mb-2">Pro Tip</h3>
                            <p className="text-indigo-100 text-sm mb-4 leading-relaxed">
                                Updating your calendar availability increases your chances of getting orders by 40%.
                            </p>
                            <button className="w-full py-2.5 bg-white text-indigo-600 font-bold rounded-xl text-sm">
                                Update Calendar
                            </button>
                        </div>

                         <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-lg text-slate-900 mb-4">Account</h3>
                            <ul className="space-y-1">
                                {['Bank Details', 'Business Info', 'Notification Settings', 'Help & Support'].map((item) => (
                                    <li key={item}>
                                        <button className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 text-slate-600 font-medium text-sm transition-colors flex justify-between items-center group">
                                            {item}
                                            <Settings size={14} className="text-slate-300 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 pt-4 border-t border-slate-100">
                                <button className="flex items-center gap-2 text-red-600 font-bold text-sm hover:underline">
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerProfilePage;
