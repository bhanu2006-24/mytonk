import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { Star, Phone, MapPin, Calendar, Clock, CheckCircle, Share2, ArrowLeft } from 'lucide-react';

const ServiceDetails = () => {
    const { id } = useParams();
    const { services, t, addToCart } = useApp();
    const [service, setService] = useState(null);

    useEffect(() => {
        const found = services.find(s => s.id === id);
        setService(found);
    }, [id, services]);

    if (!service) return <div className="min-h-screen pt-24 text-center">{t({en: 'Loading...', hi: 'लोड हो रहा है...'})}</div>;

    return (
        <div className="min-h-screen pt-24 pb-12">
            <Navbar />
            
            <div className="container-padding">
                <Link to="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-6 transition-colors">
                    <ArrowLeft size={20} />
                    <span>{t({en: 'Back to Services', hi: 'सेवाओं पर वापस जाएं'})}</span>
                </Link>

                <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/50">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Image Section */}
                        <div className="relative h-64 lg:h-auto">
                            <img 
                                src={service.image} 
                                alt={t(service.name)} 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
                                {service.category}
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="p-8 lg:p-12">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-display">{t(service.name)}</h1>
                                    <div className="flex items-center gap-2 text-yellow-500">
                                        <Star fill="currentColor" size={20} />
                                        <span className="font-bold text-gray-900">{service.rating}</span>
                                        <span className="text-gray-500">({service.reviews} {t({en: 'Reviews', hi: 'समीक्षाएं'})})</span>
                                    </div>
                                </div>
                                <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary transition-colors">
                                    <Share2 size={24} />
                                </button>
                            </div>

                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                {t(service.description)}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
                                    <div className="bg-white p-2 rounded-lg text-primary shadow-sm">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold">{t({en: 'Contact', hi: 'संपर्क'})}</p>
                                        <p className="font-bold text-gray-900">{service.contact}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
                                    <div className="bg-white p-2 rounded-lg text-primary shadow-sm">
                                        <CheckCircle size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold">{t({en: 'Provider', hi: 'प्रदाता'})}</p>
                                        <p className="font-bold text-gray-900">{service.provider}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">{t({en: 'Starting From', hi: 'शुरूआती कीमत'})}</p>
                                    <p className="text-4xl font-bold text-primary">₹{service.price}</p>
                                </div>
                                <button 
                                    onClick={() => addToCart(service, 'service')}
                                    className="px-8 py-4 bg-linear-to-r from-primary to-secondary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:-translate-y-1"
                                >
                                    {t({en: 'Book Now', hi: 'अभी बुक करें'})}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
