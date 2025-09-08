// src/components/cart/ShoppingCart.tsx
import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

export const ShoppingCart: React.FC = () => {
    const { state, removeItem, updateQuantity, clearCart, setCartOpen, totalPrice } = useCart();

    if (!state.isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            setCartOpen(false);
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
            onClick={handleBackdropClick}
        >
            <div className="w-full max-w-md bg-white h-full shadow-xl transform transition-transform duration-300 ease-in-out">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-2">
                        <ShoppingBag className="w-6 h-6 text-amber-600" />
                        <h2 className="text-lg font-semibold text-gray-900">
                            Giỏ hàng ({state.items.reduce((total, item) => total + item.quantity, 0)})
                        </h2>
                    </div>
                    <button
                        onClick={() => setCartOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {state.items.length === 0 ? (
                        <div className="text-center py-16">
                            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                Giỏ hàng trống
                            </h3>
                            <p className="text-gray-500 mb-6">
                                Thêm một vài sản phẩm để bắt đầu mua sắm!
                            </p>
                            <button
                                onClick={() => setCartOpen(false)}
                                className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
                            >
                                Tiếp tục mua sắm
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {state.items.map((item) => (
                                <div key={item.id} className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
                                    {/* Product Image */}
                                    <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <div className="w-8 h-5 bg-amber-100 rounded opacity-80"></div>
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-medium text-gray-900 truncate">
                                            {item.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 truncate">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="text-lg font-semibold text-amber-600">
                                                {item.price}
                                            </span>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center space-x-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="p-1 hover:bg-amber-200 rounded transition-colors"
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <Minus className="w-4 h-4 text-gray-600" />
                                                </button>
                                                <span className="w-8 text-center text-sm font-medium">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-1 hover:bg-amber-200 rounded transition-colors"
                                                >
                                                    <Plus className="w-4 h-4 text-gray-600" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Remove Button */}
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {state.items.length > 0 && (
                    <div className="border-t border-gray-200 p-6 space-y-4">
                        {/* Total */}
                        <div className="flex items-center justify-between text-lg font-semibold">
                            <span className="text-gray-900">Tổng cộng:</span>
                            <span className="text-amber-600">${totalPrice.toFixed(2)}</span>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                            <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium">
                                Thanh toán
                            </button>
                            <div className="flex space-x-3">
                                <button
                                    onClick={() => setCartOpen(false)}
                                    className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                                >
                                    Tiếp tục mua
                                </button>
                                <button
                                    onClick={clearCart}
                                    className="flex-1 bg-red-100 text-red-700 py-2 rounded-lg hover:bg-red-200 transition-colors font-medium"
                                >
                                    Xóa hết
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};