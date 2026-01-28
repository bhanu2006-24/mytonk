import React from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { t, addToCart } = useApp();

    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="group relative bg-surface/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:bg-surface/60 transition-all duration-300"
        >
            <Link to={`/market/${product.id}`}>
                <div className="aspect-square overflow-hidden relative p-4 flex items-center justify-center bg-white/50 cursor-pointer">
                    <img 
                        src={product.image} 
                        alt={t(product.name)} 
                        className="w-full h-full object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </Link>
             <button 
                onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                }}
                className="absolute bottom-3 right-3 p-3 bg-white text-black rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white z-10"
            >
                <Plus size={20} />
            </button>
            
            <div className="p-5">
                <span className="text-xs font-medium text-secondary uppercase tracking-wider">{t(product.category)}</span>
                <Link to={`/market/${product.id}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2 line-clamp-1 hover:text-primary transition-colors">{t(product.name)}</h3>
                </Link>
                
                <div className="flex items-end justify-between">
                    <div>
                        <span className="text-sm text-gray-500">Price</span>
                        <div className="text-xl font-bold text-gray-900">₹{product.price}<span className="text-sm text-gray-500 font-normal">/{product.unit}</span></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
