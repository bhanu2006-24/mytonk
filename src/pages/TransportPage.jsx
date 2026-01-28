import React from 'react';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { Car, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const TransportPage = () => {
    const { transport, t } = useApp();

    return (
        <div className="min-h-screen pt-24 pb-12">
            <Navbar />
            <div className="container-padding">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl font-bold font-display mb-2">{t({en: 'Local Transport', hi: 'स्थानीय परिवहन'})}</h1>
                    <p className="text-gray-400">{t({en: 'Get around Tonk easily with reliable transport services.', hi: 'विश्वसनीय परिवहन सेवाओं के साथ टोंक में आसानी से घूमें।'})}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {transport.map((item, index) => (
                        <Link to={`/transport/${item.id}`} key={item.id}>
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-surface/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:bg-surface/60 transition-all duration-300 group h-full cursor-pointer"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img 
                                        src={item.image} 
                                        alt={t(item.name)} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-3 right-3 bg-primary/20 backdrop-blur-md px-3 py-1 rounded-lg border border-primary/20 text-primary font-bold">
                                        {item.type}
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{t(item.name)}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{t(item.description)}</p>
                                    
                                    <div className="flex items-center justify-between pb-4 border-b border-white/5">
                                        <span className="text-lg font-bold text-white">{item.price}</span>
                                    </div>
                                    
                                    <button className="w-full mt-4 py-3 bg-white/5 hover:bg-primary text-primary hover:text-white rounded-xl transition-all font-medium flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-primary/20">
                                        <Phone size={18} />
                                        <span>{t({en: 'Call Now', hi: 'अभी कॉल करें'})}</span>
                                    </button>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TransportPage;
