import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useApp } from '../../context/AppContext';
import { Search, Filter, MoreVertical, Mail, Phone, MapPin } from 'lucide-react';
import { Navigate } from 'react-router-dom';

const AdminCustomers = () => {
    const { t, users, user: currentUser, orders } = useApp();
    const [searchTerm, setSearchTerm] = useState('');

    if (currentUser?.role !== 'admin') {
        return <Navigate to="/login" replace />;
    }

    const customers = users.filter(u => u.role === 'customer')
         .filter(u => u.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const getCustomerStats = (userId) => {
        const userOrders = orders.filter(o => o.userId === userId);
        const spent = userOrders.reduce((sum, o) => sum + o.total, 0);
        return { count: userOrders.length, spent };
    };

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
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
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
                                {customers.length > 0 ? customers.map((cust) => {
                                    const stats = getCustomerStats(cust.id);
                                    return (
                                    <tr key={cust.id} className="group hover:bg-slate-50 transition-colors">
                                        <td className="p-6 border-b border-slate-100">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-linear-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                                                    {cust.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 text-base">{cust.name}</p>
                                                    <p className="text-xs text-slate-500">{cust.id.slice(-6)}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6 border-b border-slate-100">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2 text-slate-600 text-xs">
                                                    <Mail size={14} /> {cust.email}
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-600 text-xs">
                                                    <Phone size={14} /> {cust.phone || 'N/A'}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6 border-b border-slate-100 text-slate-600">
                                             <div className="flex items-center gap-2 text-xs font-medium">
                                                <MapPin size={14} className="text-slate-400" />
                                                {cust.location || 'Tonk'}
                                             </div>
                                        </td>
                                        <td className="p-6 border-b border-slate-100 font-bold text-slate-900">
                                            {stats.count}
                                        </td>
                                        <td className="p-6 border-b border-slate-100 font-bold text-green-600">
                                            ₹{stats.spent}
                                        </td>
                                        <td className="p-6 border-b border-slate-100 text-right">
                                            <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                                                <MoreVertical size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                )}) : (
                                    <tr>
                                        <td colSpan="6" className="p-8 text-center text-slate-500">No customers found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCustomers;
