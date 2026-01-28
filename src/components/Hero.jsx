import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Wrench, ShoppingBag, Calendar, Truck, ArrowRight, Music, Utensils, Zap, PenTool } from 'lucide-react';

const Hero = () => {
  const { t } = useApp();

  const categories = [
    { id: 'services', name: { en: 'Services', hi: 'सेवाएं' }, icon: Wrench, color: 'bg-purple-100 text-purple-600', link: '/services' },
    { id: 'market', name: { en: 'Market', hi: 'बाज़ार' }, icon: ShoppingBag, color: 'bg-orange-100 text-orange-600', link: '/market' },
    { id: 'events', name: { en: 'Events', hi: 'कार्यक्रम' }, icon: Calendar, color: 'bg-pink-100 text-pink-600', link: '/events' },
    { id: 'transport', name: { en: 'Transport', hi: 'परिवहन' }, icon: Truck, color: 'bg-blue-100 text-blue-600', link: '/transport' },
    { id: 'food', name: { en: 'Food', hi: 'खाना' }, icon: Utensils, color: 'bg-green-100 text-green-600', link: '/market' },
    { id: 'repairs', name: { en: 'Repairs', hi: 'मरम्मत' }, icon: Zap, color: 'bg-yellow-100 text-yellow-600', link: '/services' },
  ];

  return (
    <div className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-primary/5">
        
       {/* Abstract Background Shapes */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Text Content */}
            <div className="text-center lg:text-left">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
                >
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-sm font-bold text-slate-600 uppercase tracking-wide">
                        {t({en: 'Live in Tonk, Rajasthan', hi: 'टोंक, राजस्थान'})}
                    </span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl lg:text-7xl font-display font-black text-slate-900 leading-[1.1] mb-6"
                >
                    {t({en: 'Your Local', hi: 'आपका अपना'})} <br />
                    <span className="text-primary">
                        {t({en: 'Super App.', hi: 'सुपर ऐप।'})}
                    </span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-500 mb-10 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed"
                >
                    {t({
                        en: 'Everything you need, delivered right to your location in Tonk. From plumbers to fresh mangoes.',
                        hi: 'आपको जो कुछ भी चाहिए, वह सीधे आपके टोंक में आपके स्थान पर पहुंचाया जाता है। प्लंबर से लेकर ताजे आम तक।'
                    })}
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                >
                    <Link to="/services" className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all text-center">
                        {t({en: 'Book Service', hi: 'सेवा बुक करें'})}
                    </Link>
                    <Link to="/market" className="w-full sm:w-auto px-8 py-4 bg-white text-primary border-2 border-primary/20 rounded-xl font-bold hover:bg-purple-50 transition-all text-center">
                        {t({en: 'Order Goods', hi: 'सामान ऑर्डर करें'})}
                    </Link>
                </motion.div>
            </div>

            {/* Quick Access Grid (The visual anchor) */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
                {categories.map((cat, idx) => (
                    <Link 
                        key={cat.id} 
                        to={cat.link}
                        className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${cat.color} group-hover:scale-110 transition-transform`}>
                            <cat.icon size={28} />
                        </div>
                        <span className="font-bold text-slate-700 group-hover:text-primary transition-colors">{t(cat.name)}</span>
                    </Link>
                ))}
            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
