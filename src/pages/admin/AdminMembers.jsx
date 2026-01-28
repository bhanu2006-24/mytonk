import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useApp } from '../../context/AppContext';
import { Search, Filter, MoreVertical, Star, Shield } from 'lucide-react';

const AdminMembers = () => {
    const { t } = useApp();
    const [searchTerm, setSearchTerm] = useState('');

    const members = [
        { id: 1, name: 'Rajesh Kumar', service: 'Electrician', rating: 4.8, status: 'Active', joined: 'Jan 2024', earnings: '₹12,400' },
        { id: 2, name: 'Sunita Devi', service: 'Beauty Spa', rating: 4.9, status: 'Active', joined: 'Feb 2024', earnings: '₹28,100' },
        { id: 3, name: 'Tonk AC Repair', service: 'AC Repair', rating: 4.5, status: 'Suspended', joined: 'Dec 2023', earnings: '₹8,400' },
        { id: 4, name: 'Clean Homes Co', service: 'Cleaning', rating: 4.7, status: 'Active', joined: 'Mar 2024', earnings: '₹15,200' },
        { id: 5, name: 'Mehndi Art', service: 'Salon', rating: 5.0, status: 'Active', joined: 'Jan 2024', earnings: '₹5,600' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <Navbar />
            <div className="container-padding max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 font-display">Manage Partners</h1>
                        <p className="text-slate-500">View and manage service providers</p>
                    </div>
                    <button className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 shadow-lg shadow-primary/25">
                        + Add Check Member
                    </button>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                    {/* Toolbar */}
                    <div className="p-4 border-b border-slate-100 flex gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input 
                                type="text" 
                                placeholder="Search by name, service or ID..." 
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                        <button className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 font-bold flex items-center gap-2 hover:bg-slate-100">
                            <Filter size={18} />
                            Filter
                        </button>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 text-slate-500 text-xs uppercase tracking-wider">
                                    <th className="p-6 font-bold border-b border-slate-100">Partner Details</th>
                                    <th className="p-6 font-bold border-b border-slate-100">Service Type</th>
                                    <th className="p-6 font-bold border-b border-slate-100">Performance</th>
                                    <th className="p-6 font-bold border-b border-slate-100">Status</th>
                                    <th className="p-6 font-bold border-b border-slate-100">Earnings</th>
                                    <th className="p-6 font-bold border-b border-slate-100 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {members.map((member) => (
                                    <tr key={member.id} className="group hover:bg-slate-50 transition-colors">
                                        <td className="p-6 border-b border-slate-100">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                                    {member.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 text-base">{member.name}</p>
                                                    <p className="text-xs text-slate-500">Joined {member.joined}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6 border-b border-slate-100">
                                            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg font-medium text-xs">
                                                {member.service}
                                            </span>
                                        </td>
                                        <td className="p-6 border-b border-slate-100">
                                            <div className="flex items-center gap-1 font-bold text-slate-700">
                                                <span>{member.rating}</span>
                                                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                            </div>
                                        </td>
                                        <td className="p-6 border-b border-slate-100">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                                                member.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                            }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${member.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                                {member.status}
                                            </span>
                                        </td>
                                        <td className="p-6 border-b border-slate-100 font-bold text-slate-900">
                                            {member.earnings}
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

export default AdminMembers;
