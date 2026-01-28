import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { Search, ShoppingBag } from 'lucide-react';

const MarketPage = () => {
    const { products, t } = useApp();
    const [category, setCategory] = useState('All');
    const [search, setSearch] = useState('');

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = products.filter(product => {
        const matchesCategory = category === 'All' || product.category === category;
        const matchesSearch = t(product.name).toLowerCase().includes(search.toLowerCase()) || 
                              t(product.description).toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen pt-24 pb-12">
            <Navbar />
            <div className="container-padding">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl font-bold font-display mb-2">{t({en: 'Tonk Market', hi: 'टोंक बाज़ार'})}</h1>
                    <p className="text-gray-400">{t({en: 'Fresh produce and local goods delivered to you.', hi: 'ताजा उपज और स्थानीय सामान आप तक पहुँचाया गया।'})}</p>
                </motion.div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 bg-surface/30 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 text-gray-500" size={20} />
                        <input 
                            type="text" 
                            placeholder={t({en: "Search market...", hi: "बाज़ार खोजें..."})}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-primary/50 text-white placeholder-gray-500"
                        />
                    </div>
                    
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors border ${
                                    category === cat 
                                        ? 'bg-secondary text-white border-secondary' 
                                        : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <div className="col-span-full py-12 text-center text-gray-500">
                             {t({en: 'No products found.', hi: 'कोई उत्पाद नहीं मिला।'})}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MarketPage;
