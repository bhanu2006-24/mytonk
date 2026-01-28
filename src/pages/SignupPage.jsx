import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Store, ArrowRight, CheckCircle } from 'lucide-react';

const SignupPage = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('customer'); // customer | seller

    const handleContinue = () => {
        if (role === 'seller') {
            navigate('/register-seller');
        } else {
            // Mock Customer Signup
            navigate('/profile');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
            <Link to="/" className="mb-8 font-black font-display text-3xl text-primary tracking-tight">TONK WALE</Link>
            
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-8 md:p-12 text-center border-b border-slate-100">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2 font-display">Join Content</h2>
                    <p className="text-slate-500">Choose how you want to use the platform</p>
                </div>

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
            </div>
        </div>
    );
};

export default SignupPage;
