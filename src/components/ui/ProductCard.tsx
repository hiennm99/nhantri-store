// src/components/ui/ProductCard.tsx - Updated
import React, { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import type { Product } from "../../types";

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addItem } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        addItem(product);
        setIsAdded(true);

        // Reset animation after 2 seconds
        setTimeout(() => {
            setIsAdded(false);
        }, 2000);
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden">
                <div className="absolute inset-4 bg-amber-50 rounded-xl flex items-center justify-center">
                    <div className="w-20 h-12 bg-amber-200 rounded-lg opacity-80"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Quick Add Button on Image */}
                <button
                    onClick={handleAddToCart}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-amber-600 p-2 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                    {isAdded ? (
                        <Check className="w-4 h-4 text-green-600" />
                    ) : (
                        <ShoppingCart className="w-4 h-4" />
                    )}
                </button>
            </div>

            <div className="p-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">{product.name}</h3>
                <p className="text-amber-700 text-sm mb-4 line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                    <button
                        onClick={handleAddToCart}
                        disabled={isAdded}
                        className={`
                            px-4 py-2 rounded-lg transition-all duration-300 font-medium flex items-center space-x-2
                            ${isAdded
                            ? 'bg-green-500 text-white transform scale-95'
                            : 'bg-amber-500 hover:bg-amber-600 text-white hover:scale-105 shadow-md hover:shadow-lg'
                        }
                        `}
                    >
                        {isAdded ? (
                            <>
                                <Check className="w-4 h-4" />
                                <span>Đã thêm!</span>
                            </>
                        ) : (
                            <>
                                <ShoppingCart className="w-4 h-4" />
                                <span>Thêm vào giỏ</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};