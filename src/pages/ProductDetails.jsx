import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Truck, ShieldCheck, ArrowLeft, Minus, Plus } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();
    const { products, t, addToCart } = useApp();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const found = products.find(p => p.id === id);
        setProduct(found);
    }, [id, products]);

    if (!product) return <div className="min-h-screen pt-24 text-center">{t({en: 'Loading...', hi: 'लोड हो रहा है...'})}</div>;

    const handleAddToCart = () => {
        // In a real app, send quantity too
        addToCart(product, 'product');
    };

    return (
        <div className="min-h-screen pt-24 pb-12">
            <Navbar />
            
            <div className="container-padding">
                <Link to="/market" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-6 transition-colors">
                    <ArrowLeft size={20} />
                    <span>{t({en: 'Back to Market', hi: 'बाज़ार पर वापस जाएं'})}</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/60 flex items-center justify-center">
                        <motion.img 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            src={product.image} 
                            alt={t(product.name)} 
                            className="max-h-[500px] w-full object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* Info Section */}
                    <div>
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
                            {t(product.category)}
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">{t(product.name)}</h1>
                        
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center gap-1 text-yellow-500">
                                <Star fill="currentColor" size={20} />
                                <span className="font-bold text-gray-900 text-lg">{product.rating}</span>
                            </div>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span className="text-gray-500 font-medium">{product.seller}</span>
                        </div>

                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            {t(product.description)}
                        </p>

                        <div className="flex items-center gap-2 mb-8 text-sm text-gray-500 font-medium">
                            <div className="flex items-center gap-1">
                                <Truck size={16} className="text-secondary" />
                                <span>{t({en: 'Fast Delivery', hi: 'शीघ्र वितरण'})}</span>
                            </div>
                            <div className="w-px h-4 bg-gray-300 mx-2"></div>
                            <div className="flex items-center gap-1">
                                <ShieldCheck size={16} className="text-secondary" />
                                <span>{t({en: 'Quality Assured', hi: 'गुणवत्ता आश्वासन'})}</span>
                            </div>
                        </div>

                        <div className="bg-white/60 p-6 rounded-2xl border border-white/60 backdrop-blur-sm">
                            <div className="flex items-end gap-2 mb-6">
                                <span className="text-4xl font-bold text-gray-900">₹{product.price}</span>
                                <span className="text-gray-500 mb-1 font-medium">/{product.unit}</span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center bg-white border border-gray-200 rounded-xl">
                                    <button 
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-4 hover:text-primary transition-colors"
                                    >
                                        <Minus size={20} />
                                    </button>
                                    <span className="w-12 text-center font-bold text-gray-900">{quantity}</span>
                                    <button 
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="p-4 hover:text-primary transition-colors"
                                    >
                                        <Plus size={20} />
                                    </button>
                                </div>
                                
                                <button 
                                    onClick={handleAddToCart}
                                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white hover:bg-black rounded-xl font-bold shadow-lg transition-all"
                                >
                                    <ShoppingCart size={20} />
                                    <span>{t({en: 'Add to Cart', hi: 'कार्ट में डालें'})}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
