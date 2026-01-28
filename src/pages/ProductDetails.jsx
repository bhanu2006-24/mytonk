import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Truck, ShieldCheck, ArrowLeft, Minus, Plus, Heart, Share2, Info } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
    const { id } = useParams();
    const { products, t, addToCart } = useApp();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const found = products.find(p => p.id === id);
        setProduct(found);
        if (found) {
            setRelatedProducts(products.filter(p => p.category === found.category && p.id !== found.id));
        }
        setQuantity(1);
        window.scrollTo(0, 0);
    }, [id, products]);

    if (!product) return <div className="min-h-screen pt-24 text-center flex items-center justify-center">{t({en: 'Loading...', hi: 'लोड हो रहा है...'})}</div>;

    const handleAddToCart = () => {
        // In a real app we'd pass quantity
        for(let i=0; i<quantity; i++) {
             addToCart(product, 'product');
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 bg-slate-50">
            <Navbar />
            
            <div className="container-padding">
                <nav className="flex items-center text-sm text-gray-500 mb-6 font-medium">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to="/market" className="hover:text-primary transition-colors">{t({en: 'Market', hi: 'बाज़ार'})}</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900">{t(product.name)}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex items-center justify-center h-[400px] relative overflow-hidden group">
                           <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                                <button className="p-2.5 rounded-full bg-white shadow-md border border-slate-100 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all">
                                    <Heart size={20} />
                                </button>
                                <button className="p-2.5 rounded-full bg-white shadow-md border border-slate-100 text-gray-400 hover:text-primary hover:bg-blue-50 transition-all">
                                    <Share2 size={20} />
                                </button>
                           </div>
                            <motion.img 
                                key={product.image}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                src={product.image} 
                                alt={t(product.name)} 
                                className="max-h-full max-w-full object-contain drop-shadow-xl"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[product.image, product.image, product.image, product.image].map((img, i) => (
                                <button key={i} className={`bg-white rounded-xl p-2 border ${i === 0 ? 'border-primary ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300'} transition-all h-24 flex items-center justify-center`}>
                                    <img src={img} alt="" className="max-h-full max-w-full object-contain" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>
                        <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold uppercase tracking-wider mb-4 border border-green-200">
                            {t({en: 'In Stock', hi: 'स्टॉक में उपलब्ध'})}
                        </div>
                        
                        <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 font-display leading-tight">{t(product.name)}</h1>
                        
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-100">
                                <Star fill="#EAB308" className="text-yellow-500" size={16} />
                                <span className="font-bold text-gray-900">{product.rating}</span>
                            </div>
                            <span className="text-gray-400">|</span>
                            <span className="text-gray-500 font-medium">{product.seller}</span>
                        </div>

                        <div className="flex items-baseline gap-2 mb-8">
                            <span className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">₹{product.price}</span>
                            <span className="text-xl text-gray-500 font-medium">/{product.unit}</span>
                        </div>

                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            {t(product.description)}
                        </p>

                        <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 mb-8 grid grid-cols-2 gap-4">
                             <div className="flex items-start gap-3">
                                <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
                                    <Truck size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-sm">{t({en: 'Fast Delivery', hi: 'शीघ्र वितरण'})}</p>
                                    <p className="text-xs text-slate-500">Within 2 hours</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-white rounded-lg shadow-sm text-green-600">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-sm">{t({en: 'Quality Checked', hi: 'गुणवत्ता आश्वासन'})}</p>
                                    <p className="text-xs text-slate-500">100% Organic</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200">
                             <div className="flex items-center bg-white border border-slate-300 rounded-xl max-w-[140px]">
                                <button 
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="p-4 hover:bg-slate-50 transition-colors rounded-l-xl text-gray-500 hover:text-primary"
                                >
                                    <Minus size={20} />
                                </button>
                                <span className="flex-1 text-center font-bold text-gray-900 text-lg">{quantity}</span>
                                <button 
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="p-4 hover:bg-slate-50 transition-colors rounded-r-xl text-gray-500 hover:text-primary"
                                >
                                    <Plus size={20} />
                                </button>
                            </div>
                            
                            <button 
                                onClick={handleAddToCart}
                                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white hover:bg-primary/90 rounded-xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-95"
                            >
                                <ShoppingCart size={20} />
                                <span>{t({en: 'Add to Cart', hi: 'कार्ट में डालें'})} - ₹{product.price * quantity}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Info Tabs */}
                <div className="mb-16">
                    <div className="flex border-b border-slate-200 mb-6 overflow-x-auto">
                        {['description', 'specifications', 'reviews'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-4 font-bold text-sm uppercase tracking-wide transition-colors whitespace-nowrap ${
                                    activeTab === tab 
                                        ? 'text-primary border-b-2 border-primary' 
                                        : 'text-gray-500 hover:text-gray-900'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    
                    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm min-h-[200px]">
                        {activeTab === 'description' && (
                             <div className="prose prose-slate max-w-none">
                                <p className="text-gray-600 leading-relaxed">
                                    {t({
                                        en: `Experience the finest quality ${t(product.name)} sourced directly from the best local farms in Tonk. Each batch is carefully selected to ensure freshness, taste, and nutritional value. Whether you are looking for daily essentials or special seasonal treats, our products promise authenticity and purity.`,
                                        hi: `टोंक के सर्वोत्तम स्थानीय फार्मों से सीधे प्राप्त बेहतरीन गुणवत्ता वाले ${t(product.name)} का अनुभव करें। ताजगी, स्वाद और पोषण मूल्य सुनिश्चित करने के लिए प्रत्येक बैच को सावधानीपूर्वक चुना जाता है। चाहे आप दैनिक आवश्यक वस्तुओं या विशेष मौसमी व्यंजनों की तलाश कर रहे हों, हमारे उत्पाद प्रमाणिकता और शुद्धता का वादा करते हैं।`
                                    })}
                                </p>
                             </div>
                        )}
                        {activeTab === 'specifications' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex justify-between py-3 border-b border-slate-100">
                                    <span className="text-gray-500 font-medium">Category</span>
                                    <span className="text-gray-900 font-bold">{product.category}</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-slate-100">
                                    <span className="text-gray-500 font-medium">Unit</span>
                                    <span className="text-gray-900 font-bold">{product.unit}</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-slate-100">
                                    <span className="text-gray-500 font-medium">Origin</span>
                                    <span className="text-gray-900 font-bold">Tonk, Local</span>
                                </div>
                            </div>
                        )}
                         {activeTab === 'reviews' && (
                            <div className="text-center py-12">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-50 text-yellow-500 mb-4">
                                    <Star size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">4.8 / 5</h3>
                                <p className="text-gray-500 mb-6">Based on 124 ratings</p>
                                <button className="text-primary font-bold hover:underline">Write a Review</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">{t({en: 'More Like This', hi: 'इसके जैसा और'})}</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {relatedProducts.map(p => (
                                <motion.div key={p.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                                    <ProductCard product={p} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
