import React, { createContext, useContext, useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      removeToast(id);
    }, 3000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
            {toasts.map((toast) => (
            <motion.div
                key={toast.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 100 }}
                layout
                className={`pointer-events-auto min-w-[300px] p-4 rounded-xl shadow-2xl border flex items-center gap-3 ${
                    toast.type === 'success' ? 'bg-white border-green-100 text-green-800' :
                    toast.type === 'error' ? 'bg-white border-red-100 text-red-800' :
                    'bg-white border-blue-100 text-blue-800'
                }`}
            >
                <div className={`p-2 rounded-full ${
                    toast.type === 'success' ? 'bg-green-100 text-green-600' :
                    toast.type === 'error' ? 'bg-red-100 text-red-600' :
                    'bg-blue-100 text-blue-600'
                }`}>
                    {toast.type === 'success' && <CheckCircle size={18} />}
                    {toast.type === 'error' && <AlertCircle size={18} />}
                    {toast.type === 'info' && <Info size={18} />}
                </div>
                <p className="font-medium text-sm flex-1">{toast.message}</p>
                <button 
                    onClick={() => removeToast(toast.id)}
                    className="p-1 rounded-md hover:bg-gray-100 text-gray-400 transition-colors"
                >
                    <X size={16} />
                </button>
            </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
