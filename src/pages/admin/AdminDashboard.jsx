import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useApp } from '../../context/AppContext';
import { Users, Briefcase, ShoppingBag, BarChart2, Search, Filter, MoreVertical, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
    const { t, orders, user: currentUser, users, resetDatabase } = useApp();
    const [stats, setStats] = useState([
        { label: 'Total Users', value: '0', icon: Users, color: 'bg-blue-100 text-blue-600' },
        { label: 'Active Partners', value: '0', icon: Briefcase, color: 'bg-indigo-100 text-indigo-600' },
        { label: 'Orders Today', value: '0', icon: ShoppingBag, color: 'bg-orange-100 text-orange-600' },
        { label: 'Total Revenue', value: '₹0', icon: BarChart2, color: 'bg-green-100 text-green-600' },
    ]);

    useEffect(() => {
        // Calculate real stats
        const totalUsers = users.length;
        const partners = users.filter(u => u.role === 'seller').length;
        
        const today = new Date().toLocaleDateString();
        const ordersToday = orders.filter(o => o.date === today).length;
        
        const revenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);

        setStats([
            { label: 'Total Users', value: totalUsers.toString(), icon: Users, color: 'bg-blue-100 text-blue-600' },
            { label: 'Active Partners', value: partners.toString(), icon: Briefcase, color: 'bg-indigo-100 text-indigo-600' },
            { label: 'Orders Today', value: ordersToday.toString(), icon: ShoppingBag, color: 'bg-orange-100 text-orange-600' },
            { label: 'Total Revenue', value: `₹${revenue.toLocaleString()}`, icon: BarChart2, color: 'bg-green-100 text-green-600' },
        ]);
    }, [users, orders]);

    // Simple security check
    if (currentUser?.role !== 'admin') {
        return (
            <div className="min-h-screen pt-24 text-center">
                 <h1 className="text-2xl font-bold text-red-500">Access Denied</h1>
                 <p>You must be an admin to view this page.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <Navbar />
            <div className="container-padding">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 font-display">Admin Dashboard</h1>
                        <p className="text-slate-500">Welcome back, {currentUser.name}</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold shadow-sm">Export Data</button>
                        <button onClick={() => resetDatabase()} className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold shadow-sm hover:bg-blue-700 transition-colors">Sync New Data</button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-xl ${stat.color}`}>
                                    <stat.icon size={24} />
                                </div>
                                {/* <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">+12%</span> */}
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                            <p className="text-slate-500 font-medium text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Orders */}
                    <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-slate-900">Recent Orders</h2>
                            <button className="text-primary font-bold text-sm">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                                        <th className="p-4 font-bold border-b border-slate-100">Order ID</th>
                                        <th className="p-4 font-bold border-b border-slate-100">Customer</th>
                                        <th className="p-4 font-bold border-b border-slate-100">Amount</th>
                                        <th className="p-4 font-bold border-b border-slate-100">Status</th>
                                        <th className="p-4 font-bold border-b border-slate-100">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {orders.length > 0 ? orders.slice(0, 10).map((order, i) => (
                                        <tr key={i} className="group hover:bg-slate-50 transition-colors">
                                            <td className="p-4 font-bold text-slate-900 border-b border-slate-100">#{order.id.slice(-6)}</td>
                                            <td className="p-4 text-slate-600 border-b border-slate-100">{users.find(u => u.id === order.userId)?.name || 'Guest'}</td>
                                            <td className="p-4 font-bold text-slate-900 border-b border-slate-100">₹{order.total}</td>
                                            <td className="p-4 border-b border-slate-100">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                    order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                                    order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                                                    'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="p-4 text-slate-400 border-b border-slate-100">{order.date}</td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="5" className="p-8 text-center text-slate-500">No orders yet.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Quick Actions / New Members */}
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
                        <h2 className="text-xl font-bold text-slate-900 mb-6">Recent Users</h2>
                        <div className="space-y-4">
                            {users.slice(-5).reverse().map((u, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                                            {u.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 text-sm">{u.name}</p>
                                            <p className="text-xs text-slate-500 capitalize">{u.role}</p>
                                        </div>
                                    </div>
                                    {/* <div className="flex gap-2">
                                        <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200">
                                            <CheckCircle size={16} />
                                        </button>
                                    </div> */}
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-colors">
                            View All Users
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
