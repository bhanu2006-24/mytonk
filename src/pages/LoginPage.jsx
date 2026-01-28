import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

const LoginPage = () => {
    const navigate = useNavigate();
    const { t } = useApp();
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock login - in real app, auth logic here
        console.log('Login:', formData);
        navigate('/profile');
    };

    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row">
            {/* Visual Side */}
            <div className="hidden md:flex flex-1 bg-slate-900 relative overflow-hidden items-center justify-center p-12 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-purple-800/80 z-10"></div>
                <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    alt="Background"
                />
                <div className="relative z-20 text-center">
                    <h1 className="text-5xl font-black font-display mb-6">TONK WALE</h1>
                    <p className="text-xl text-blue-100 max-w-md mx-auto">
                        Your one-stop destination for all local services, transport, and market needs in Tonk.
                    </p>
                </div>
            </div>

            {/* Form Side */}
            <div className="flex-1 flex items-center justify-center p-6 md:p-12 bg-slate-50">
                <div className="w-full max-w-md">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                        <div className="text-center mb-8">
                             <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                TW
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Welcome Back</h2>
                            <p className="text-slate-500">Please enter your details to sign in.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Email or Phone</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input 
                                        type="text" 
                                        name="email"
                                        placeholder="Enter your email or phone"
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input 
                                        type="password" 
                                        name="password"
                                        placeholder="••••••••"
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                                    <span className="text-slate-600 font-medium">Remember me</span>
                                </label>
                                <a href="#" className="font-bold text-primary hover:underline">
                                    Forgot Password?
                                </a>
                            </div>

                            <button 
                                type="submit"
                                className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-transform active:scale-95 flex items-center justify-center gap-2"
                            >
                                Sign In
                                <ArrowRight size={18} />
                            </button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                            <p className="text-slate-500">
                                Don't have an account?{' '}
                                <Link to="/signup" className="font-bold text-primary hover:underline">
                                    Create Account
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
