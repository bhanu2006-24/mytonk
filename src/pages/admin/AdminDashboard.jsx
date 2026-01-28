import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useApp } from '../../context/AppContext';
import { Users, Briefcase, ShoppingBag, BarChart2, Search, Filter, MoreVertical, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
    const { t } = useApp();

    const stats = [
        { label: 'Total Users', value: '1,234', icon: Users, color: 'bg-blue-100 text-blue-600' },
        { label: 'Active Partners', value: '56', icon: Briefcase, color: 'bg-indigo-100 text-indigo-600' },
        { label: 'Orders Today', value: '23', icon: ShoppingBag, color: 'bg-orange-100 text-orange-600' },
        { label: 'Total Revenue', value: '₹45,200', icon: BarChart2, color: 'bg-green-100 text-green-600' },
    ];

    const recentOrders = [
        { id: '#ORD-001', customer: 'Rahul Sharma', amount: '₹1,200', status: 'Completed', date: 'Today, 10:30 AM' },
        { id: '#ORD-002', customer: 'Priya Verma', amount: '₹450', status: 'Pending', date: 'Today, 11:15 AM' },
        { id: '#ORD-003', customer: 'Amit Singh', amount: '₹2,100', status: 'Processing', date: 'Today, 12:00 PM' },
        { id: '#ORD-004', customer: 'Sneha Gupta', amount: '₹850', status: 'Completed', date: 'Yesterday' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <Navbar />
            <div className="container-padding">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 font-display">Admin Dashboard</h1>
                        <p className="text-slate-500">Welcome back, Admin</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold shadow-sm">Export Data</button>
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
                                <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">+12%</span>
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
                                    {recentOrders.map((order, i) => (
                                        <tr key={i} className="group hover:bg-slate-50 transition-colors">
                                            <td className="p-4 font-bold text-slate-900 border-b border-slate-100">{order.id}</td>
                                            <td className="p-4 text-slate-600 border-b border-slate-100">{order.customer}</td>
                                            <td className="p-4 font-bold text-slate-900 border-b border-slate-100">{order.amount}</td>
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
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Quick Actions / New Members */}
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
                        <h2 className="text-xl font-bold text-slate-900 mb-6">Pending Approvals</h2>
                        <div className="space-y-4">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                        <div>
                                            <p className="font-bold text-slate-900 text-sm">New Partner {i+1}</p>
                                            <p className="text-xs text-slate-500">Electrician • Tonk</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200">
                                            <CheckCircle size={16} />
                                        </button>
                                        <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                                            <XCircle size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-colors">
                            View All Requests
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
