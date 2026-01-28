import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useApp } from '../../context/AppContext';
import { Search, Filter, MoreVertical, Mail, Phone, MapPin } from 'lucide-react';

const AdminCustomers = () => {
    const { t } = useApp();

    const customers = [
        { id: 'CUST-001', name: 'Rahul Sharma', email: 'rahul@example.com', phone: '+91 98765 43210', location: 'Civil Lines, Tonk', orders: 12, spent: '₹15,400' },
        { id: 'CUST-002', name: 'Priya Verma', email: 'priya@example.com', phone: '+91 98765 12345', location: 'Subhash Bazar, Tonk', orders: 5, spent: '₹4,200' },
        { id: 'CUST-003', name: 'Amit Singh', email: 'amit@example.com', phone: '+91 91234 56789', location: 'Gandhi Nagar, Tonk', orders: 8, spent: '₹8,900' },
        { id: 'CUST-004', name: 'Sneha Gupta', email: 'sneha@example.com', phone: '+91 88997 76655', location: 'Housing Board, Tonk', orders: 3, spent: '₹2,500' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <Navbar />
            <div className="container-padding max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 font-display">Manage Customers</h1>
                        <p className="text-slate-500">View customer details and history</p>
                    </div>
                    <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 shadow-sm">
                        Export List
                    </button>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                    {/* Toolbar */}
                    <div className="p-4 border-b border-slate-100 flex gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input 
                                type="text" 
                                placeholder="Search customers..." 
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 text-slate-500 text-xs uppercase tracking-wider">
                                    <th className="p-6 font-bold border-b border-slate-100">Customer</th>
                                    <th className="p-6 font-bold border-b border-slate-100">Contact Info</th>
                                    <th className="p-6 font-bold border-b border-slate-100">Location</th>
                                    <th className="p-6 font-bold border-b border-slate-100">Orders</th>
                                    <th className="p-6 font-bold border-b border-slate-100">Total Spent</th>
                                    <th className="p-6 font-bold border-b border-slate-100 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {customers.map((cust) => (
                                    <tr key={cust.id} className="group hover:bg-slate-50 transition-colors">
                                        <td className="p-6 border-b border-slate-100">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                                                    {cust.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 text-base">{cust.name}</p>
                                                    <p className="text-xs text-slate-500">{cust.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6 border-b border-slate-100">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2 text-slate-600 text-xs">
                                                    <Mail size={14} /> {cust.email}
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-600 text-xs">
                                                    <Phone size={14} /> {cust.phone}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6 border-b border-slate-100 text-slate-600">
                                             <div className="flex items-center gap-2 text-xs font-medium">
                                                <MapPin size={14} className="text-slate-400" />
                                                {cust.location}
                                             </div>
                                        </td>
                                        <td className="p-6 border-b border-slate-100 font-bold text-slate-900">
                                            {cust.orders}
                                        </td>
                                        <td className="p-6 border-b border-slate-100 font-bold text-green-600">
                                            {cust.spent}
                                        </td>
                                        <td className="p-6 border-b border-slate-100 text-right">
                                            <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                                                <MoreVertical size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCustomers;
