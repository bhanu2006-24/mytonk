import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const EventsPage = () => {
    const { events, t } = useApp();

    return (
        <div className="min-h-screen pt-24 pb-12">
            <Navbar />
            <div className="container-padding">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl font-bold font-display mb-2">{t({en: 'Upcoming Events', hi: 'आगामी कार्यक्रम'})}</h1>
                    <p className="text-gray-400">{t({en: 'Don\'t miss out on what\'s happening in Tonk.', hi: 'टोंक में क्या हो रहा है, यह न चूकें।'})}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div 
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-surface/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:bg-surface/60 transition-all duration-300 group"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img 
                                    src={event.image} 
                                    alt={t(event.title)} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-center">
                                    <span className="block text-xs text-gray-400 uppercase">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                                    <span className="block text-xl font-bold text-white">{new Date(event.date).getDate()}</span>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{t(event.title)}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{t(event.description)}</p>
                                
                                <div className="space-y-2 text-sm text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} className="text-primary" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-primary" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventsPage;
