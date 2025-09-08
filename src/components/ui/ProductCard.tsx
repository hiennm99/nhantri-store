import React from 'react';
import type {Product} from "../../types";

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
            <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden">
                <div className="absolute inset-4 bg-amber-50 rounded-xl flex items-center justify-center">
                    <div className="w-20 h-12 bg-amber-200 rounded-lg opacity-80"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">{product.name}</h3>
                <p className="text-amber-700 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};