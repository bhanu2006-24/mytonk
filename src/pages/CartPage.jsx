import React from 'react';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { Trash2, ShoppingBag } from 'lucide-react';

const CartPage = () => {
    const { cart, removeFromCart, placeOrder, t } = useApp();

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="min-h-screen pt-24 pb-12">
            <Navbar />
            <div className="container-padding max-w-4xl mx-auto">
                <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl font-bold font-display mb-8"
                >
                    {t({en: 'Your Cart', hi: 'आपकी कार्ट'})}
                </motion.h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="flex-1 space-y-4">
                        {cart.length > 0 ? (
                            cart.map((item, index) => (
                                <motion.div 
                                    key={item.cartId}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center gap-4 bg-surface/30 p-4 rounded-xl border border-white/5"
                                >
                                    <img src={item.image} alt={t(item.name)} className="w-20 h-20 object-cover rounded-lg bg-surface" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-white">{t(item.name)}</h3>
                                        <p className="text-sm text-gray-400">{item.type === 'service' ? 'Service' : 'Product'}</p>
                                        <span className="text-primary font-bold">₹{item.price}</span>
                                    </div>
                                    <button 
                                        onClick={() => removeFromCart(item.cartId)}
                                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </motion.div>
                            ))
                        ) : (
                            <div className="text-center py-12 bg-surface/20 rounded-xl border border-white/5 border-dashed">
                                <ShoppingBag className="mx-auto text-gray-500 mb-4" size={48} />
                                <p className="text-gray-400">{t({en: 'Your cart is empty', hi: 'आपकी कार्ट खाली है'})}</p>
                            </div>
                        )}
                    </div>

                    {/* Order Summary */}
                    {cart.length > 0 && (
                        <motion.div 
                             initial={{ opacity: 0, y: 20 }}
                             animate={{ opacity: 1, y: 0 }}
                             className="w-full lg:w-80 h-fit bg-surface/50 p-6 rounded-2xl border border-white/10 backdrop-blur-md"
                        >
                            <h3 className="text-lg font-bold text-white mb-4">{t({en: 'Order Summary', hi: 'आर्डर सारांश'})}</h3>
                            <div className="space-y-2 mb-6 text-sm text-gray-300">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>₹{total}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tax (5%)</span>
                                    <span>₹{Math.round(total * 0.05)}</span>
                                </div>
                                <div className="border-t border-white/10 pt-2 flex justify-between font-bold text-white text-base">
                                    <span>Total</span>
                                    <span>₹{total + Math.round(total * 0.05)}</span>
                                </div>
                            </div>
                            <button 
                                onClick={() => {
                                    if(confirm(t({en: 'Confirm order placement?', hi: 'आर्डर की पुष्टि करें?'}))) {
                                        placeOrder();
                                    }
                                }}
                                className="w-full py-3 bg-linear-to-r from-primary to-secondary rounded-xl font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                            >
                                {t({en: 'Checkout', hi: 'चेक आउट'})}
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartPage;
