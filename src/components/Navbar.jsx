import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ShoppingCart, User, Search, Menu, X, Globe, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { toggleLanguage, language, cart, t } = useApp();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 shadow-sm">
            <div className="container-padding h-20 flex items-center justify-between gap-4">
                
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 shrink-0 group">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-primary/30">
                        MT
                    </div>
                    <div>
                        <span className="block text-xl font-display font-black text-primary leading-none">
                            MERA TONK
                        </span>
                        <span className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">
                            Your City App
                        </span>
                    </div>
                </Link>

                {/* Search Bar - Central & Prominent like Super Apps */}
                <div className="hidden md:flex flex-1 max-w-xl mx-auto relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                        <Search size={20} />
                    </div>
                    <input 
                        type="text" 
                        placeholder={t({en: "Search anything in Tonk...", hi: "टोंक में कुछ भी खोजें..."})}
                        className="w-full bg-slate-100 border border-slate-200 rounded-full py-3 pl-12 pr-12 text-gray-700 font-medium placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-white rounded-full text-primary shadow-sm hover:scale-110 transition-transform">
                        <Mic size={18} />
                    </button>
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                     <button 
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 hover:border-primary/50 bg-white text-sm font-bold text-gray-700 hover:text-primary transition-all"
                    >
                        <Globe size={16} />
                        {language === 'en' ? 'English' : 'हिंदी'}
                    </button>

                    <Link to="/cart" className="relative p-2.5 rounded-full bg-slate-50 text-slate-700 hover:bg-primary hover:text-white transition-all group">
                        <ShoppingCart size={22} />
                        {cart.length > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                                {cart.length}
                            </span>
                        )}
                    </Link>
                    
                    <Link to="/profile" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary font-bold hover:bg-primary hover:text-white transition-colors border-2 border-slate-200 hover:border-primary">
                        <User size={20} />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 rounded-lg bg-slate-50 text-gray-700 hover:bg-slate-100"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-lg"
                    >
                        <div className="p-4 space-y-4">
                            {/* Mobile Search */}
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input 
                                    type="text" 
                                    placeholder={t({en: "Search...", hi: "खोजें..."})}
                                    className="w-full bg-slate-100 rounded-lg py-3 pl-10 pr-10"
                                />
                                <Mic className="absolute right-3 top-1/2 -translate-y-1/2 text-primary" size={18} />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <Link to="/services" onClick={() => setIsMenuOpen(false)} className="p-4 bg-purple-50 rounded-xl text-center">
                                    <span className="block font-bold text-purple-700">{t({en: 'Services', hi: 'सेवाएं'})}</span>
                                </Link>
                                <Link to="/market" onClick={() => setIsMenuOpen(false)} className="p-4 bg-orange-50 rounded-xl text-center">
                                    <span className="block font-bold text-orange-700">{t({en: 'Market', hi: 'बाजार'})}</span>
                                </Link>
                                <Link to="/events" onClick={() => setIsMenuOpen(false)} className="p-4 bg-pink-50 rounded-xl text-center">
                                    <span className="block font-bold text-pink-700">{t({en: 'Events', hi: 'कार्यक्रम'})}</span>
                                </Link>
                                <Link to="/transport" onClick={() => setIsMenuOpen(false)} className="p-4 bg-blue-50 rounded-xl text-center">
                                    <span className="block font-bold text-blue-700">{t({en: 'Transport', hi: 'परिवहन'})}</span>
                                </Link>
                            </div>

                            <div className="flex items-center justify-between p-2">
                                <button onClick={toggleLanguage} className="flex items-center gap-2 font-bold text-gray-600">
                                    <Globe size={18} />
                                    {language === 'en' ? 'Change Language' : 'भाषा बदलें'}
                                </button>
                                <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 font-bold text-gray-600">
                                    <User size={18} />
                                    {t({en: 'Profile', hi: 'प्रोफ़ाइल'})}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
