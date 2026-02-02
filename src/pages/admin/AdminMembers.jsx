import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useApp } from '../../context/AppContext';
import { Search, Filter, MoreVertical, Star, Shield } from 'lucide-react';
import { Navigate } from 'react-router-dom';

const AdminMembers = () => {
    const { t, users, user: currentUser } = useApp();
    const [searchTerm, setSearchTerm] = useState('');

    if (currentUser?.role !== 'admin') {
        return <Navigate to="/login" replace />;
    }

    const members = users.filter(u => u.role === 'seller')
        .filter(u => u.name.toLowerCase().includes(searchTerm.toLowerCase()));

    // Mock calculations for demo
    const calculateEarnings = () => `₹${Math.floor(Math.random() * 50000)}`;
    const calculateRating = () => (4 + Math.random()).toFixed(1);

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <Navbar />
            <div className="container-padding max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 font-display">Manage Partners</h1>
                        <p className="text-slate-500">View and manage service providers</p>
                    </div>
                    {/* <button className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 shadow-lg shadow-primary/25">
                        + Add Check Member
                    </button> */}
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                    {/* Toolbar */}
                    <div className="p-4 border-b border-slate-100 flex gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input 
                                type="text" 
                                placeholder="Search by name..." 
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
                                    <th className="p-6 font-bold border-b border-slate-100">Partner Details</th>
                                    <th className="p-6 font-bold border-b border-slate-100">Role</th>
                                    <th className="p-6 font-bold border-b border-slate-100">Rating</th>
                                    <th className="p-6 font-bold border-b border-slate-100">Status</th>
                                    <th className="p-6 font-bold border-b border-slate-100">Earnings (Est)</th>
                                    <th className="p-6 font-bold border-b border-slate-100 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {members.length > 0 ? members.map((member) => (
                                    <tr key={member.id} className="group hover:bg-slate-50 transition-colors">
                                        <td className="p-6 border-b border-slate-100">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-linear-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                                    {member.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 text-base">{member.name}</p>
                                                    <p className="text-xs text-slate-500">Joined 2024</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6 border-b border-slate-100">
                                            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg font-medium text-xs uppercase">
                                                {member.role}
                                            </span>
                                        </td>
                                        <td className="p-6 border-b border-slate-100">
                                            <div className="flex items-center gap-1 font-bold text-slate-700">
                                                <span>{calculateRating()}</span>
                                                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                            </div>
                                        </td>
                                        <td className="p-6 border-b border-slate-100">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700`}>
                                                <span className={`w-1.5 h-1.5 rounded-full bg-green-500`}></span>
                                                Active
                                            </span>
                                        </td>
                                        <td className="p-6 border-b border-slate-100 font-bold text-slate-900">
                                            {calculateEarnings()}
                                        </td>
                                        <td className="p-6 border-b border-slate-100 text-right">
                                            <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                                                <MoreVertical size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="6" className="p-8 text-center text-slate-500">No partners found.</td>
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

export default AdminMembers;
