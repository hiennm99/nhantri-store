import React from 'react';
import { Link } from 'react-router'; // Hoặc Next.js Link nếu dùng Next.js
import {ProductCard} from "../ui/ProductCard.tsx";
import {products} from "../../data/products.ts";

export const ProductsSection: React.FC = () => {
    // Giới hạn chỉ hiển thị 4 sản phẩm đầu tiên
    const featuredProducts = products.slice(0, 4);

    return (
        <section id="products" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
                    Những sản phẩm đặc trưng
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Nút "Xem thêm" */}
                <div className="text-center">
                    <Link
                        to="/products"
                        className="inline-flex items-center px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                        <span>Xem thêm sản phẩm</span>
                        <svg
                            className="ml-2 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};