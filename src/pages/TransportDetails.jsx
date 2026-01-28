import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import { initialTransport } from '../data/mockData'; 
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { Car, Phone, MapPin, ArrowLeft, Star, ShieldCheck, Clock } from 'lucide-react';

const TransportDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useApp();
    const [transportItem, setTransportItem] = useState(null);

    useEffect(() => {
        let found = null;
        if (initialTransport) {
             found = initialTransport.find(e => e.id === id);
        }
        setTransportItem(found);
    }, [id]);

    if (!transportItem) return <div className="min-h-screen bg-slate-50 pt-24 text-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <Navbar />
            
            {/* Hero Image */}
            <div className="relative h-[40vh] md:h-[50vh] bg-slate-900">
                <img 
                    src={transportItem.image} 
                    alt={t(transportItem.name)} 
                    className="w-full h-full object-cover opacity-80"
                />
                 <div className="absolute top-24 left-4 z-10">
                    <button 
                         onClick={() => navigate(-1)}
                         className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                        <ArrowLeft size={24} />
                    </button>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-slate-50 to-transparent"></div>
            </div>

            <div className="container-padding relative -mt-10 z-10">
                 <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8">
                     <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 font-bold text-xs uppercase tracking-wider rounded-lg">
                                {transportItem.type}
                            </span>
                            <div className="flex items-center gap-1 text-slate-700 font-bold text-sm">
                                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                                4.9 (50+ Trips)
                            </div>
                        </div>

                         <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">
                            {t(transportItem.name)}
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                             <div className="flex items-center gap-3 text-slate-600">
                                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Verification</p>
                                    <p className="font-bold text-slate-900">Verified Driver</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-slate-600">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Availability</p>
                                    <p className="font-bold text-slate-900">24/7 Available</p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-slate max-w-none">
                            <h3 className="font-bold text-lg text-slate-900 mb-2">Service Details</h3>
                            <p className="text-slate-500 leading-relaxed">
                                {t(transportItem.description)}
                            </p>
                            <ul>
                                <li>Clean and sanitized vehicles</li>
                                <li>Experienced and polite drivers</li>
                                <li>On-time pickup and drop</li>
                            </ul>
                        </div>
                     </div>

                     <div className="md:w-80 shrink-0">
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 sticky top-24">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Book a Ride</h3>
                             <div className="flex justify-between items-center mb-6">
                                <span className="text-slate-500">Starting from</span>
                                <span className="text-2xl font-bold text-slate-900">{transportItem.price}</span>
                            </div>

                            <a href={`tel:${transportItem.contact}`} className="w-full py-3.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-transform active:scale-95 flex items-center justify-center gap-2 mb-3">
                                <Phone size={20} />
                                Call Driver
                            </a>
                            <button className="w-full py-3.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors">
                                Send Message
                            </button>
                        </div>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default TransportDetails;
