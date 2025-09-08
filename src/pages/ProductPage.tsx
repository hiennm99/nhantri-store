import React, { useState } from 'react';
import { Link } from 'react-router';
import { Leaf } from 'lucide-react';
import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../data/products';

export const ProductPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Lọc sản phẩm theo search
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                                <Leaf className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-amber-900">NHAN TRI</span>
                            <span className="text-sm text-amber-700">CASHEW NUTS</span>
                        </Link>

                        {/* Breadcrumb */}
                        <nav className="flex items-center space-x-2 text-sm">
                            <Link to="/" className="text-amber-600 hover:text-amber-700">
                                Trang chủ
                            </Link>
                            <span className="text-gray-500">/</span>
                            <span className="text-gray-900">Sản phẩm</span>
                        </nav>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-amber-900 mb-4">
                        Tất cả sản phẩm
                    </h1>
                    <p className="text-lg text-amber-700 max-w-2xl mx-auto">
                        Khám phá bộ sưu tập đầy đủ các sản phẩm hạt điều chất lượng cao của chúng tôi
                    </p>
                </div>

                {/* Search */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm p-6 mb-8">
                    <div className="max-w-md mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Tìm kiếm sản phẩm..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/80"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-amber-700">
                        Hiển thị {filteredProducts.length} sản phẩm
                        {searchTerm && (
                            <span> cho từ khóa "<strong>{searchTerm}</strong>"</span>
                        )}
                    </p>
                </div>

                {/* Products Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="text-amber-400 mb-4">
                            <svg className="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-amber-900 mb-2">
                            Không tìm thấy sản phẩm
                        </h3>
                        <p className="text-amber-700 mb-6">
                            Thử thay đổi từ khóa tìm kiếm để xem thêm sản phẩm.
                        </p>
                        <button
                            onClick={() => setSearchTerm('')}
                            className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-300"
                        >
                            Xóa bộ lọc
                        </button>
                    </div>
                )}

                {/* Back to Home */}
                <div className="text-center mt-12 pt-8 border-t border-amber-200">
                    <Link
                        to="/"
                        className="inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-sm text-amber-700 rounded-lg hover:bg-white/80 transition-all duration-300 shadow-sm"
                    >
                        <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Quay về trang chủ
                    </Link>
                </div>
            </div>
        </div>
    );
};