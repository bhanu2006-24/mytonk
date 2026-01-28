import React from 'react';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';
import { FileText, Lock, Eye } from 'lucide-react';

const DataProtection = () => {
    const { t } = useApp();

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <Navbar />
            <div className="container-padding max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-50/50">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                            <Lock size={32} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">Privacy Policy</h1>
                        <p className="text-slate-500">Last updated: January 2026</p>
                    </div>
                    
                    <div className="p-8 md:p-12 prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary">
                        <p className="lead text-lg text-slate-600 mb-8">
                            At <strong>Tonk Wale</strong>, we take your privacy seriously. This policy describes how we collect, use, and handle your data when you use our website and services.
                        </p>

                        <h3>1. Information We Collect</h3>
                        <p>We collect information you provide directly to us, such as when you create an account, place an order, or contact customer support.</p>
                        <ul>
                            <li><strong>Personal Data:</strong> Name, Email, Phone Number, Address.</li>
                            <li><strong>Transaction Data:</strong> Order details, payment history (we do not store card details).</li>
                            <li><strong>Usage Data:</strong> How you interact with our app.</li>
                        </ul>

                        <h3>2. How We Use Your Information</h3>
                        <p>We use your data to provide and improve our services.</p>
                        <ul>
                            <li>To process and deliver your orders.</li>
                            <li>To communicate with you regarding updates, offers, and security alerts.</li>
                            <li>To improve platform security and prevent fraud.</li>
                        </ul>

                        <h3>3. Data Sharing</h3>
                        <p>
                            We do not sell your data. We only share information with third parties necessary to provide our services, such as:
                        </p>
                        <ul>
                            <li><strong>Service Partners:</strong> To fulfill your service requests (e.g., sharing your address with the plumber).</li>
                            <li><strong>Delivery Partners:</strong> To deliver your market orders.</li>
                        </ul>

                        <h3>4. Your Rights</h3>
                        <p>
                            You have the right to access, correct, or delete your personal data. You can manage your profile settings directly in the app or contact our support team.
                        </p>

                        <h3>5. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@tonkwale.com">privacy@tonkwale.com</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataProtection;
