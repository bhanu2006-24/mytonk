import React from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const { t } = useApp();

    return (
        <footer className="bg-[#0b1120] border-t border-white/5 pt-16 pb-8">
            <div className="container-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 mb-6">
                             <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold text-white">
                                TW
                            </div>
                            <span className="text-2xl font-display font-bold text-white">Tonk Wale</span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {t({
                                en: 'Your hyperlocal companion for Tonk city. Discover services, shops, and events happening around you.',
                                hi: 'टोंक शहर के लिए आपका हाइपरलोकल साथी। अपने आस-पास होने वाली सेवाओं, दुकानों और कार्यक्रमों की खोज करें।'
                            })}
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <button key={i} className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-primary hover:bg-white/10 transition-all">
                                    <Icon size={18} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6">{t({en: 'Quick Links', hi: 'त्वरित लिंक'})}</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link to="/services" className="hover:text-primary transition-colors">{t({en: 'Find Services', hi: 'सेवाएं खोजें'})}</Link></li>
                            <li><Link to="/market" className="hover:text-primary transition-colors">{t({en: 'Local Market', hi: 'स्थानीय बाज़ार'})}</Link></li>
                            <li><Link to="/events" className="hover:text-primary transition-colors">{t({en: 'Upcoming Events', hi: 'आगामी कार्यक्रम'})}</Link></li>
                            <li><Link to="/transport" className="hover:text-primary transition-colors">{t({en: 'Transport', hi: 'परिवहन'})}</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-bold mb-6">{t({en: 'Support', hi: 'समर्थन'})}</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link to="/about" className="hover:text-primary transition-colors">{t({en: 'About Us', hi: 'हमारे बारे में'})}</Link></li>
                            <li><Link to="/support" className="hover:text-primary transition-colors">{t({en: 'Contact', hi: 'संपर्क करें'})}</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">{t({en: 'Privacy Policy', hi: 'गोपनीयता नीति'})}</Link></li>
                            <li><Link to="/terms" className="hover:text-primary transition-colors">{t({en: 'Terms of Service', hi: 'सेवा की शर्तें'})}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                         <h3 className="text-white font-bold mb-6">{t({en: 'Contact Us', hi: 'संपर्क करें'})}</h3>
                         <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                                <span>123, Gandhi Chowk, Tonk, Rajasthan 304001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-primary shrink-0" />
                                <span>+91 12345 67890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-primary shrink-0" />
                                <span>support@meratonk.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
                    <p>&copy; 2025 Tonk Wale. All rights reserved.</p>
                    <p>{t({en: 'Made with ❤️ for Tonk', hi: 'टोंक के लिए ❤️ के साथ बनाया गया'})}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
