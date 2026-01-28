import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const SupportPage = () => {
    const { t } = useApp();
    const { addToast } = useToast();
    const [openFaq, setOpenFaq] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        addToast('Message sent! We will contact you shortly.', 'success');
        e.target.reset();
    };

    const faqs = [
        {
            q: { en: 'How do I place an order?', hi: 'मैं ऑर्डर कैसे दे सकता हूं?' },
            a: { en: 'Simply browse the Market section, add items to your cart, and proceed to checkout. It is that easy!', hi: 'बस मार्केट सेक्शन ब्राउज़ करें, अपने कार्ट में आइटम जोड़ें और चेकआउट करें। यह इतना आसान है!' }
        },
        {
            q: { en: 'Is cash on delivery available?', hi: 'क्या कैश ऑन डिलीवरी उपलब्ध है?' },
            a: { en: 'Yes, we support Cash on Delivery (COD) for all local orders in Tonk.', hi: 'हां, हम टोंक में सभी स्थानीय ऑर्डर के लिए कैश ऑन डिलीवरी (COD) का समर्थन करते हैं।' }
        },
        {
            q: { en: 'How can I become a seller?', hi: 'मैं विक्रेता कैसे बन सकता हूं?' },
            a: { en: 'Click on "Register as Partner" on the home page or contact our support team directly.', hi: 'होम पेज पर "पार्टनर के रूप में रजिस्टर करें" पर क्लिक करें या सीधे हमारी सहायता टीम से संपर्क करें।' }
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 bg-slate-50">
            <Navbar />
            <div className="container-padding max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4 font-display">{t({en: 'How can we help you?', hi: 'हम आपकी कैसे मदद कर सकते हैं?'})}</h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        {t({en: 'We are here to assist you with any questions or issues you might have using MeraTonk.', hi: 'मेराटोंक का उपयोग करते समय आपके किसी भी प्रश्न या समस्या में सहायता के लिए हम यहां हैं।'})}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <Mail className="text-primary" />
                            {t({en: 'Send us a message', hi: 'हमें संदेश भेजें'})}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">{t({en: 'Your Name', hi: 'आपका नाम'})}</label>
                                <input required type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary" placeholder="Rahul Sharma" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">{t({en: 'Email Address', hi: 'ईमेल पता'})}</label>
                                <input required type="email" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary" placeholder="rahul@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">{t({en: 'Message', hi: 'संदेश'})}</label>
                                <textarea required rows="4" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                                <Send size={18} />
                                {t({en: 'Send Message', hi: 'संदेश भेजें'})}
                            </button>
                        </form>
                    </motion.div>

                    <motion.div 
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         className="space-y-8"
                    >
                        <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                             <h3 className="text-xl font-bold text-blue-900 mb-6">{t({en: 'Contact Information', hi: 'संपर्क जानकारी'})}</h3>
                             <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white rounded-xl text-blue-600 shadow-sm">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">{t({en: 'Our Office', hi: 'हमारा कार्यालय'})}</p>
                                        <p className="text-slate-600">123, Gandhi Chowk, Tonk, Rajasthan 304001</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white rounded-xl text-blue-600 shadow-sm">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">{t({en: 'Phone', hi: 'फ़ोन'})}</p>
                                        <p className="text-slate-600">+91 12345 67890</p>
                                        <p className="text-sm text-slate-400">Mon-Sat, 9am - 7pm</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white rounded-xl text-blue-600 shadow-sm">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">{t({en: 'Email', hi: 'ईमेल'})}</p>
                                        <p className="text-slate-600">support@meratonk.com</p>
                                    </div>
                                </div>
                             </div>
                        </div>

                        <div className="bg-green-50 p-6 rounded-3xl border border-green-100 flex items-center justify-between cursor-pointer hover:bg-green-100 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-green-500 text-white rounded-full">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-green-900 text-lg">{t({en: 'Chat on WhatsApp', hi: 'व्हाट्सएप पर चैट करें'})}</p>
                                    <p className="text-green-700 text-sm">{t({en: 'Get instant replies', hi: 'त्वरित उत्तर प्राप्त करें'})}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-center text-slate-900 mb-8 font-display">{t({en: 'Frequently Asked Questions', hi: 'अक्सर पूछे जाने वाले प्रश्न'})}</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                                <button 
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-bold text-slate-800 text-lg">{t(faq.q)}</span>
                                    {openFaq === i ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100 pt-4">
                                        {t(faq.a)}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
