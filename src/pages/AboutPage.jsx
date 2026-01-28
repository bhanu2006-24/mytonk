import React from 'react';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { Users, Target, Heart, ShieldCheck } from 'lucide-react';

const AboutPage = () => {
    const { t } = useApp();

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <Navbar />
            <div className="container-padding max-w-4xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display"
                    >
                        {t({en: 'Empowering Tonk, One Service at a Time', hi: 'टोंक को सशक्त बनाना, एक समय में एक सेवा'})}
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
                    >
                        {t({
                            en: 'Tonk Wale is your hyperlocal companion, connecting you with the best service providers and local businesses in your city.',
                            hi: 'टोंक वाले आपका हाइपरलोकल साथी है, जो आपको आपके शहर में सर्वोत्तम सेवा प्रदाताओं और स्थानीय व्यवसायों से जोड़ता है।'
                        })}
                    </motion.p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {[
                        { icon: Users, title: 'Community First', desc: 'We prioritize local businesses and skilled professionals from Tonk.' },
                        { icon: ShieldCheck, title: 'Trust & Safety', desc: 'Every partner is verified to ensure a safe experience for you.' },
                        { icon: Target, title: 'Mission Driven', desc: 'Our goal is to digitize 1000+ local businesses in Tonk by 2026.' },
                        { icon: Heart, title: 'Made with Love', desc: 'Built specifically for the people of Tonk, understanding local needs.' }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Story Section */}
                <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Our Story</h2>
                    <div className="prose prose-slate max-w-none text-slate-600">
                        <p className="mb-4">
                            Started in 2026, <strong>Tonk Wale</strong> was born out of a simple necessity: finding reliable help shouldn't be hard. Whether it was finding a plumber for a leaking tap or getting fresh organic produce, the options were fragmented.
                        </p>
                        <p className="mb-4">
                            We set out to build a platform that bridges the gap between digital convenience and local trust. Today, we are proud to serve thousands of households in Tonk, bringing the market to their fingertips.
                        </p>
                        <p>
                            We are not just an app; we are a movement to uplift the local economy and provide a seamless lifestyle experience for every resident of Tonk.
                        </p>
                    </div>
                </div>

                {/* Footer Quote */}
                <div className="text-center border-t border-slate-200 pt-12">
                     <p className="text-2xl font-display font-medium text-slate-400 italic">"For Tonk, By Tonk."</p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
