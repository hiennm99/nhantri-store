import React from 'react';

export const HeroSection: React.FC = () => {
    return (
        <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-orange-100/50"></div>
            <div className="relative max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl lg:text-6xl font-bold text-amber-900 leading-tight">
                            Hạt Điều Rang Muối
                            <span className="block text-amber-700">Nhân Trí</span>
                        </h1>
                        <p className="text-lg text-amber-800/80 max-w-md">
                            Hạt điều Việt Nam hảo hạng, được tuyển chọn kỹ lưỡng và rang xay hoàn hảo. Trải nghiệm hương vị đích thực của hạt điều hảo hạng nhất Việt Nam.
                        </p>
                        <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">
                            Mua ngay
                        </button>
                    </div>
                    <div className="relative">
                        <div className="w-full h-96 bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-amber-900/20"></div>
                            <div className="absolute inset-4 flex items-center justify-center">
                                <div className="grid grid-cols-3 gap-2">
                                    {[...Array(9)].map((_, i) => (
                                        <div key={i} className="w-12 h-8 bg-amber-100 rounded-xl transform rotate-12 opacity-80"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};