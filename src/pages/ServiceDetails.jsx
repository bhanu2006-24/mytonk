import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { Star, Phone, MapPin, Calendar, Clock, CheckCircle, Share2, ArrowLeft, User, ThumbsUp } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const ServiceDetails = () => {
    const { id } = useParams();
    const { services, t, addToCart } = useApp();
    const [service, setService] = useState(null);
    const [relatedServices, setRelatedServices] = useState([]);

    useEffect(() => {
        const found = services.find(s => s.id === id);
        setService(found);
        if (found) {
            setRelatedServices(services.filter(s => s.category === found.category && s.id !== found.id));
        }
    }, [id, services]);

    if (!service) return <div className="min-h-screen pt-24 text-center items-center flex justify-center">{t({en: 'Loading...', hi: 'लोड हो रहा है...'})}</div>;

    const reviews = [
        { id: 1, user: 'Amit Kumar', rating: 5, comment: 'Excellent service, very professional!', date: '2 days ago' },
        { id: 2, user: 'Priya Singh', rating: 4, comment: 'Good work, but arrived 10 mins late.', date: '1 week ago' },
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 bg-slate-50">
            <Navbar />
            
            <div className="container-padding">
                <nav className="flex items-center text-sm text-gray-500 mb-6 font-medium">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to="/services" className="hover:text-primary transition-colors">{t({en: 'Services', hi: 'सेवाएं'})}</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900">{t(service.name)}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white rounded-3xl p-1 shadow-sm border border-slate-200 overflow-hidden">
                            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
                                <img 
                                    src={service.image} 
                                    alt={t(service.name)} 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
                                    {service.category}
                                </div>
                            </div>
                        </div>

                        {/* Info & Reviews Tabs */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                             <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-display">{t(service.name)}</h1>
                                    <div className="flex items-center gap-2 text-yellow-500">
                                        <Star fill="currentColor" size={20} />
                                        <span className="font-bold text-gray-900">{service.rating}</span>
                                        <span className="text-gray-500 text-sm">({service.reviews} {t({en: 'verified reviews', hi: 'सत्यापित समीक्षाएं'})})</span>
                                    </div>
                                </div>
                                <button className="p-3 rounded-full bg-slate-50 text-gray-500 hover:bg-primary/10 hover:text-primary transition-colors border border-slate-100">
                                    <Share2 size={20} />
                                </button>
                            </div>

                            <div className="prose prose-slate max-w-none mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{t({en: 'About this Service', hi: 'इस सेवा के बारे में'})}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {t(service.description)}
                                </p>
                            </div>

                            <hr className="border-slate-100 my-8" />

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-6">{t({en: 'Customer Reviews', hi: 'ग्राहक समीक्षा'})}</h3>
                                <div className="space-y-6">
                                    {reviews.map(review => (
                                        <div key={review.id} className="flex gap-4">
                                            <div className="w-10 h-10 bg-linear-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold shrink-0">
                                                {review.user.charAt(0)}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-1">
                                                    <h4 className="font-bold text-gray-900">{review.user}</h4>
                                                    <span className="text-xs text-gray-400">{review.date}</span>
                                                </div>
                                                <div className="flex text-yellow-500 text-xs mb-2">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} strokeWidth={i < review.rating ? 0 : 2} className={i >= review.rating ? "text-gray-300" : ""} />
                                                    ))}
                                                </div>
                                                <p className="text-gray-600 text-sm">{review.comment}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl p-6 shadow-xl border border-blue-100 sticky top-24">
                            <div className="text-center mb-6">
                                <p className="text-sm text-gray-500 mb-1">{t({en: 'Best Price Guaranteed', hi: 'सर्वोत्तम मूल्य की गारंटी'})}</p>
                                <div className="flex items-center justify-center gap-2">
                                     <span className="text-4xl font-bold text-primary">₹{service.price}</span>
                                     <span className="text-gray-400 line-through text-lg">₹{service.price + 200}</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl text-sm font-medium text-blue-800">
                                    <CheckCircle size={18} className="shrink-0" />
                                    <span>{t({en: 'Verified Professional', hi: 'सत्यापित पेशेवर'})}</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl text-sm font-medium text-green-800">
                                    <Clock size={18} className="shrink-0" />
                                    <span>{t({en: 'Available Today', hi: 'आज उपलब्ध'})}</span>
                                </div>
                            </div>

                            <div className="space-y-3 mb-8">
                                <div className="p-4 border border-slate-200 rounded-xl">
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">{t({en: 'Provider', hi: 'प्रदाता'})}</p>
                                    <div className="flex items-center gap-2 font-bold text-gray-900">
                                        <User size={18} className="text-primary" />
                                        {service.provider}
                                    </div>
                                </div>
                                <div className="p-4 border border-slate-200 rounded-xl">
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">{t({en: 'Contact', hi: 'संपर्क'})}</p>
                                    <div className="flex items-center gap-2 font-bold text-gray-900">
                                        <Phone size={18} className="text-primary" />
                                        {service.contact}
                                    </div>
                                </div>
                            </div>

                            <button 
                                onClick={() => addToCart(service, 'service')}
                                className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all active:scale-95"
                            >
                                {t({en: 'Book Now', hi: 'अभी बुक करें'})}
                            </button>
                            <p className="text-xs text-center text-gray-400 mt-4">
                                {t({en: 'No payment needed now. Pay after service.', hi: 'अभी भुगतान की आवश्यकता नहीं है। सेवा के बाद भुगतान करें।'})}
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Related Services */}
                {relatedServices.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">{t({en: 'Similar Services', hi: 'समान सेवाएं'})}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedServices.map(s => (
                                <motion.div key={s.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                                    <ServiceCard service={s} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceDetails;
