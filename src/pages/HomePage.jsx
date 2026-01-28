import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Tag, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { services, products, t } = useApp();

  const offers = [
    { id: 1, title: 'Summer Special', subtitle: '50% OFF on AC Service', color: 'from-blue-500 to-blue-700', icon: '❄️' },
    { id: 2, title: 'Fresh Arrival', subtitle: 'Organic Mangoes @ ₹100/kg', color: 'from-orange-500 to-red-500', icon: '🥭' },
    { id: 3, title: 'New in Town', subtitle: 'Free Haircut Trial', color: 'from-purple-500 to-pink-500', icon: '💇' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      
      {/* Special Offers Banner */}
      <section className="py-8 container-padding -mt-8 relative z-20">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {offers.map((offer, index) => (
                <motion.div 
                    key={offer.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`min-w-[280px] md:min-w-[320px] p-6 rounded-2xl bg-linear-to-r ${offer.color} text-white shadow-lg snap-start flex items-center justify-between cursor-pointer hover:scale-105 transition-transform`}
                >
                    <div>
                        <div className="bg-white/20 w-fit px-2 py-1 rounded text-xs font-bold mb-2 flex items-center gap-1">
                            <Tag size={12} />
                            Limited Offer
                        </div>
                        <h3 className="text-xl font-bold font-display">{offer.title}</h3>
                        <p className="text-white/90 text-sm font-medium">{offer.subtitle}</p>
                    </div>
                    <div className="text-4xl">{offer.icon}</div>
                </motion.div>
            ))}
        </div>
      </section>
      
      {/* Featured Services */}
      <section className="py-12 container-padding">
        <div className="flex items-end justify-between mb-8">
            <div>
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-2"
                >
                    <Sparkles size={16} />
                    <span>{t({en: 'Top Rated', hi: 'सबसे लोकप्रिय'})}</span>
                </motion.div>
                <div className="flex items-center gap-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">
                        {t({en: 'Home Services', hi: 'घरेलू सेवाएं'})}
                    </h2>
                    <span className="hidden w-2 h-2 rounded-full bg-red-500 animate-pulse md:block"></span>
                </div>
            </div>
            
            <Link to="/services" className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                {t({en: 'View All', hi: 'सभी देखें'})}
                <ArrowRight size={18} />
            </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
                <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    <ServiceCard service={service} />
                </motion.div>
            ))}
        </div>
        
        <Link to="/services" className="md:hidden mt-8 w-full block text-center py-3 bg-white border border-slate-200 text-primary font-bold rounded-xl shadow-sm">
             {t({en: 'View All Services', hi: 'सभी सेवाएं देखें'})}
        </Link>
      </section>

      {/* Local Market */}
      <section className="py-16 bg-linear-to-b from-orange-50 to-white border-y border-orange-100/50">
        <div className="container-padding">
            <div className="flex items-end justify-between mb-8">
                <div>
                     <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-orange-600 font-bold uppercase tracking-wider text-sm mb-2"
                    >
                        <Clock size={16} />
                        <span>{t({en: 'Fresh Arrivals', hi: 'ताज़ा आमद'})}</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">
                        {t({en: 'Tonk Mandi', hi: 'टोंक मंडी'})}
                    </h2>
                    <p className="text-slate-500 mt-2 font-medium">
                        {t({en: 'Direct from farmers to your doorstep', hi: 'किसानों से सीधे आपके घर तक'})}
                    </p>
                </div>
                
                <Link to="/market" className="hidden md:flex items-center gap-2 text-orange-600 font-bold hover:gap-3 transition-all">
                    {t({en: 'Visit Market', hi: 'बाज़ार देखें'})}
                    <ArrowRight size={18} />
                </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {products.slice(0, 5).map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </div>

            <Link to="/market" className="md:hidden mt-8 w-full block text-center py-3 bg-orange-100 text-orange-700 font-bold rounded-xl shadow-sm">
                 {t({en: 'Visit Market', hi: 'बाज़ार देखें'})}
            </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 container-padding text-center">
        <div className="max-w-4xl mx-auto bg-primary text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display relative z-10">{t({en: 'Are you a local business?', hi: 'क्या आप एक स्थानीय व्यवसाय हैं?'})}</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
                {t({en: 'Join Tonk Wale and reach thousands of customers in your city. Grow your business with us.', hi: 'टोंक वाले से जुड़ें और अपने शहर के हजारों ग्राहकों तक पहुंचें। हमारे साथ अपना व्यवसाय बढ़ाएं।'})}
            </p>
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg relative z-10">
                {t({en: 'Register as Partner', hi: 'पार्टनर के रूप में रजिस्टर करें'})}
            </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
