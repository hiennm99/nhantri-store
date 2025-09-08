// src/components/ui/Toast.tsx
import React, { useState, useEffect } from 'react';
import { Check, ShoppingCart, X } from 'lucide-react';
import type {ReactNode} from "react";

interface ToastProps {
    message: string;
    type: 'success' | 'error' | 'info';
    isVisible: boolean;
    onClose: () => void;
    duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
                                                message,
                                                type,
                                                isVisible,
                                                onClose,
                                                duration = 3000
                                            }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose, duration]);

    if (!isVisible) return null;

    const getTypeStyles = () => {
        switch (type) {
            case 'success':
                return 'bg-green-50 border-green-200 text-green-800';
            case 'error':
                return 'bg-red-50 border-red-200 text-red-800';
            default:
                return 'bg-amber-50 border-amber-200 text-amber-800';
        }
    };

    const getIcon = () => {
        switch (type) {
            case 'success':
                return <Check className="w-5 h-5 text-green-500" />;
            case 'error':
                return <X className="w-5 h-5 text-red-500" />;
            default:
                return <ShoppingCart className="w-5 h-5 text-amber-500" />;
        }
    };

    return (
        <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
            <div className={`
                flex items-center space-x-3 px-4 py-3 rounded-lg border shadow-lg backdrop-blur-sm
                ${getTypeStyles()}
                transform transition-all duration-300 ease-in-out
            `}>
                {getIcon()}
                <span className="font-medium">{message}</span>
                <button
                    onClick={onClose}
                    className="ml-2 text-gray-400 hover:text-gray-600"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

// Toast Provider Context
import { createContext, useContext } from 'react';

interface ToastContextType {
    showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Array<{
        id: number;
        message: string;
        type: 'success' | 'error' | 'info';
    }>>([]);

    const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
    };

    const removeToast = (id: number) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed top-4 right-4 space-y-2 z-50">
                {toasts.map(toast => (
                    <Toast
                        key={toast.id}
                        message={toast.message}
                        type={toast.type}
                        isVisible={true}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within ToastProvider');
    }
    return context;
};