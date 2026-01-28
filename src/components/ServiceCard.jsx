import React from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { t } = useApp();
    
    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="group relative bg-surface/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:bg-surface/60 transition-all duration-300"
        >
            <Link to={`/services/${service.id}`}>
                <div className="aspect-4/3 overflow-hidden relative cursor-pointer">
                    <img 
                        src={service.image} 
                        alt={t(service.name)} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" /> {/* Lighter overlay for light theme */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/20 shadow-sm">
                        <Star size={12} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-bold text-gray-800">{service.rating}</span>
                    </div>
                </div>
            </Link>
            
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">{service.category}</span>
                        <h3 className="text-lg font-semibold text-white mt-1 group-hover:text-primary transition-colors">{t(service.name)}</h3>
                    </div>
                </div>
                
                <p className="text-sm text-gray-400 line-clamp-2 mb-4">{t(service.description)}</p>
                
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-bold text-white">₹{service.price}</span>
                    <button className="p-2 bg-white/5 hover:bg-primary text-primary hover:text-white rounded-lg transition-all border border-white/10 hover:border-primary/50">
                        <ArrowRight size={18} />
                    </button>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                    <span>{service.provider}</span>
                    <span>{service.reviews} reviews</span>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
