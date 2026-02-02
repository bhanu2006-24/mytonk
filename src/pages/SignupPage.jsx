import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Store, ArrowRight, CheckCircle, Mail, Phone, Lock, User as UserIcon } from 'lucide-react';
import { useApp } from '../context/AppContext';

const SignupPage = () => {
    const navigate = useNavigate();
    const { register } = useApp();
    const [role, setRole] = useState('customer'); // customer | seller
    const [step, setStep] = useState('role'); // role | form
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleContinue = () => {
        if (role === 'seller') {
            navigate('/register-seller');
        } else {
            // Show customer registration form
            setStep('form');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        const success = register({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
            role: 'customer'
        });

        if (success) {
            navigate('/profile');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
            <Link to="/" className="mb-8 font-black font-display text-3xl text-primary tracking-tight">TONK WALE</Link>
            
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-8 md:p-12 text-center border-b border-slate-100">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2 font-display">
                        {step === 'role' ? 'Join Community' : 'Create Account'}
                    </h2>
                    <p className="text-slate-500">
                        {step === 'role' ? 'Choose how you want to use the platform' : 'Enter your details to get started'}
                    </p>
                </div>

                {step === 'role' ? (
                    <>
                        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Customer Option */}
                            <div 
                                onClick={() => setRole('customer')}
                                className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                                    role === 'customer' 
                                        ? 'border-primary bg-primary/5 ring-4 ring-primary/10' 
                                        : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                                }`}
                            >
                                {role === 'customer' && (
                                    <div className="absolute top-4 right-4 text-primary">
                                        <CheckCircle size={20} className="fill-current" />
                                    </div>
                                )}
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                                    role === 'customer' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'
                                }`}>
                                    <User size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Customer</h3>
                                <p className="text-sm text-slate-500">
                                    I want to book services, buy products, and discover events.
                                </p>
                            </div>

                            {/* Seller Option */}
                            <div 
                                onClick={() => setRole('seller')}
                                className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                                    role === 'seller' 
                                        ? 'border-indigo-500 bg-indigo-50 ring-4 ring-indigo-500/10' 
                                        : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                                }`}
                            >
                                {role === 'seller' && (
                                    <div className="absolute top-4 right-4 text-indigo-500">
                                        <CheckCircle size={20} className="fill-current" />
                                    </div>
                                )}
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                                    role === 'seller' ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-400'
                                }`}>
                                    <Store size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Partner / Seller</h3>
                                <p className="text-sm text-slate-500">
                                    I want to sell products, offer services, or list my vehicle.
                                </p>
                            </div>
                        </div>

                        <div className="p-8 border-t border-slate-100 bg-slate-50 flex flex-col items-center">
                            <button 
                                onClick={handleContinue}
                                className="w-full max-w-md py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                            >
                                Continue as {role === 'customer' ? 'Customer' : 'Partner'}
                                <ArrowRight size={18} />
                            </button>
                            <p className="mt-6 text-sm text-slate-500">
                                Already have an account? <Link to="/login" className="font-bold text-primary hover:underline">Log In</Link>
                            </p>
                        </div>
                    </>
                ) : (
                    <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                <div className="relative">
                                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input 
                                        type="text" 
                                        name="name"
                                        placeholder="Vijay Saini"
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
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
                                        placeholder="9876543210"
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
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
                                    placeholder="vijay@example.com"
                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                             <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Confirm Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input 
                                        type="password" 
                                        name="confirmPassword"
                                        placeholder="••••••••"
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button 
                                type="submit"
                                className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-transform active:scale-95 flex items-center justify-center gap-2"
                            >
                                Complete Registration
                                <ArrowRight size={18} />
                            </button>
                            <button 
                                type="button"
                                onClick={() => setStep('role')}
                                className="w-full mt-4 py-2 text-slate-500 font-bold hover:text-slate-700"
                            >
                                Back
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default SignupPage;
