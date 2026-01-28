import React from 'react';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';
import { ShieldAlert, CheckSquare } from 'lucide-react';

const TermsOfService = () => {
    const { t } = useApp();

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <Navbar />
            <div className="container-padding max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-50/50">
                        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                            <ShieldAlert size={32} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">Terms of Service</h1>
                        <p className="text-slate-500">Effective Date: January 1, 2026</p>
                    </div>
                    
                    <div className="p-8 md:p-12 prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary">
                        <p className="lead text-lg text-slate-600 mb-8">
                            Welcome to <strong>Tonk Wale</strong>. By accessing or using our platform, you agree to be bound by these Terms of Service.
                        </p>

                        <h3>1. Acceptance of Terms</h3>
                        <p>
                            By creating an account or using our services, you agree to comply with these terms. If you do not agree, you may not use our services.
                        </p>

                        <h3>2. User Accounts</h3>
                        <ul>
                            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                            <li>You must provide accurate and complete information during registration.</li>
                            <li>We reserve the right to suspend accounts that violate our policies.</li>
                        </ul>

                        <h3>3. Service Bookings & Orders</h3>
                        <p>
                            All bookings and orders are subject to availability.
                        </p>
                        <ul>
                            <li><strong>Cancellations:</strong> You may cancel a booking up to 2 hours before the scheduled time for a full refund.</li>
                            <li><strong>Pricing:</strong> Prices are subject to change. The price at the time of booking is final.</li>
                        </ul>

                        <h3>4. Marketplace Items</h3>
                        <p>
                            Products sold in the Tonk Mandi section are sourced from local vendors. Quality and warranty are the responsibility of the respective seller, though we facilitate returns for damaged goods.
                        </p>

                        <h3>5. Prohibited Activities</h3>
                        <p>You agree not to:</p>
                        <ul>
                            <li>Use the platform for any illegal purpose.</li>
                            <li>Harass or harm service providers.</li>
                            <li>Attempt to reverse engineer the app.</li>
                        </ul>

                        <h3>6. Limitation of Liability</h3>
                        <p>
                            Tonk Wale is a platform connecting users with providers. We are not liable for the conduct of third-party providers, although we strive to vet them thoroughly.
                        </p>

                        <h3>7. Changes to Terms</h3>
                        <p>
                            We may update these terms from time to time. Continued use of the platform constitutes acceptance of the new terms.
                        </p>

                        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="flex items-center gap-2 mb-2">
                                <CheckSquare size={20} className="text-primary" />
                                Contact & Disputes
                            </h4>
                            <p className="mb-0 text-sm">
                                For any disputes or queries regarding these terms, please contact our legal team at <a href="mailto:legal@tonkwale.com">legal@tonkwale.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
