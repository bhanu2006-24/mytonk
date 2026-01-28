import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import { initialEvents } from '../data/mockData'; // Assuming this exists or I'll fallback
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Share2, Heart, ArrowLeft, Ticket } from 'lucide-react';

const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useApp();
    const [event, setEvent] = useState(null);

    // Fallback data if initialEvents isn't exported or empty
    const fallbackEvents = [
        {
             id: 'e1',
             name: { en: 'Tonk Music Festival', hi: 'टोंक संगीत महोत्सव' },
             date: '25 Oct 2024',
             time: '7:00 PM',
             location: 'Town Hall, Tonk',
             price: 499,
             image: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?w=1200&auto=format&fit=crop&q=80',
             description: { en: 'Experience the magical evening of classical and folk music with renowned artists.', hi: 'प्रसिद्ध कलाकारों के साथ शास्त्रीय और लोक संगीत की जादुई शाम का अनुभव करें।' }
        }
    ];

    useEffect(() => {
        // Try to find in mockData, else fallback
        let found = null;
        if (initialEvents) {
            found = initialEvents.find(e => e.id === id);
        }
        if (!found) {
             found = fallbackEvents.find(e => e.id === id) || fallbackEvents[0]; // Default to first for demo if id not found
        }
        setEvent(found);
    }, [id]);

    if (!event) return <div className="min-h-screen bg-white pt-24 text-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <Navbar />
            
            {/* Hero Image */}
            <div className="relative h-[40vh] md:h-[50vh] bg-slate-900">
                <img 
                    src={event.image} 
                    alt={t(event.name)} 
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
                    {/* Main Info */}
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 font-bold text-xs uppercase tracking-wider rounded-lg">
                                Music Event
                            </span>
                            <div className="flex gap-2">
                                <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors">
                                    <Heart size={20} />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-primary hover:bg-blue-50 rounded-full transition-colors">
                                    <Share2 size={20} />
                                </button>
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">
                            {t(event.name)}
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3 text-slate-600">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Date</p>
                                    <p className="font-bold text-slate-900">{event.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-slate-600">
                                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Time</p>
                                    <p className="font-bold text-slate-900">{event.time}</p>
                                </div>
                            </div>
                             <div className="flex items-center gap-3 text-slate-600 sm:col-span-2">
                                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Location</p>
                                    <p className="font-bold text-slate-900">{event.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-slate max-w-none">
                            <h3 className="font-bold text-lg text-slate-900 mb-2">About Event</h3>
                            <p className="text-slate-500 leading-relaxed">
                                {t(event.description)}
                            </p>
                        </div>
                    </div>

                    {/* Booking Card */}
                    <div className="md:w-80 shrink-0">
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 sticky top-24">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Book Tickets</h3>
                            
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-slate-500">Price per person</span>
                                <span className="text-2xl font-bold text-slate-900">₹{event.price || 499}</span>
                            </div>

                            <button className="w-full py-3.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-transform active:scale-95 flex items-center justify-center gap-2 mb-4">
                                <Ticket size={20} />
                                Book Now
                            </button>
                            
                            <p className="text-xs text-center text-slate-400">
                                100% Refundable until 24 hours before event.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default EventDetails;
