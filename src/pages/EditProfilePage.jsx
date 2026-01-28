import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Camera, User, Phone, Mail, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const EditProfilePage = () => {
    const { t } = useApp();
    const navigate = useNavigate();

    // Mock initial user data - in a real app, this would come from context/auth
    const [formData, setFormData] = useState({
        name: 'ViJaY',
        phone: '+91 98765 43210',
        email: 'vijay@example.com',
        location: 'Civil Lines, Tonk',
        bio: 'Love exploring local markets and food.',
        language: 'Hindi'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        // Here you would typically make an API call to update the profile
        console.log('Profile Updated:', formData);
        // Show success message (using alert for now, could be Toast)
        alert('Profile updated successfully!');
        navigate('/profile');
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-20 pb-12">
            <Navbar />
            
            <form onSubmit={handleSave} className="container-padding max-w-2xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <button 
                        type="button" 
                        onClick={() => navigate(-1)} 
                        className="p-2 bg-white rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                        <ArrowLeft size={20} className="text-slate-600" />
                    </button>
                    <h1 className="text-2xl font-bold text-slate-900 font-display">Edit Profile</h1>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                    {/* Cover & Avatar */}
                    <div className="h-32 bg-linear-to-r from-blue-500 to-indigo-600 relative">
                        <button type="button" className="absolute right-4 top-4 p-2 bg-black/30 text-white rounded-lg hover:bg-black/40 backdrop-blur-sm transition-colors cursor-pointer">
                            <Camera size={18} />
                        </button>
                    </div>
                    <div className="px-8 pb-8">
                        <div className="relative -mt-12 mb-8 w-fit mx-auto md:mx-0">
                            <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-lg">
                                <img 
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&auto=format&fit=crop&q=60" 
                                    alt="Profile" 
                                    className="w-full h-full object-cover rounded-xl bg-slate-100"
                                />
                            </div>
                            <button type="button" className="absolute bottom-0 -right-2 p-2 bg-slate-900 text-white rounded-full border-4 border-white shadow-sm hover:scale-105 transition-transform cursor-pointer">
                                <Camera size={14} />
                            </button>
                        </div>

                        {/* Form Fields */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <input 
                                            type="text" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <input 
                                            type="tel" 
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Home Address</label>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-3 text-slate-400" size={18} />
                                    <textarea 
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        rows="2"
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium resize-none"
                                    ></textarea>
                                </div>
                            </div>

                             <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Bio</label>
                                <textarea 
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium resize-none"
                                    placeholder="Tell us a bit about yourself..."
                                ></textarea>
                            </div>

                            {/* Action Buttons */}
                            <div className="pt-4 flex gap-4">
                                <button 
                                    type="button" 
                                    onClick={() => navigate(-1)}
                                    className="flex-1 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-700 font-bold hover:bg-slate-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit" 
                                    className="flex-1 py-3.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Save size={18} />
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditProfilePage;
