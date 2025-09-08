import React, { useState, useEffect } from 'react';

export const HeroSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const images = [
        {
            id: 1,
            bgColor: "from-amber-200 to-orange-200",
            cashewPattern: "grid-cols-4 gap-3",
        },
        {
            id: 2,
            bgColor: "from-yellow-200 to-amber-300",
            cashewPattern: "grid-cols-3 gap-4",
        },
        {
            id: 3,
            bgColor: "from-orange-200 to-red-200",
            cashewPattern: "grid-cols-5 gap-2",
        },
        {
            id: 4,
            bgColor: "from-amber-100 to-yellow-200",
            cashewPattern: "grid-cols-6 gap-1",
        }
    ];

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 3500); // Chuyển slide mỗi 3.5 giây

        return () => clearInterval(interval);
    }, [images.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-orange-100/50"></div>
            <div className="relative max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl lg:text-6xl font-bold text-amber-900 leading-tight">
                            Hạt Điều Rang Muối
                            <span className="block text-amber-700">Nhân Trí</span>
                        </h1>
                        <p className="text-lg text-amber-800/80 max-w-md">
                            Hạt điều Việt Nam hảo hạng, được tuyển chọn kỹ lưỡng và rang xay hoàn hảo. Trải nghiệm hương vị đích thực của hạt điều hảo hạng nhất Việt Nam.
                        </p>

                        <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">
                            Mua ngay
                        </button>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative">
                        <div className="relative w-full h-96 rounded-3xl shadow-2xl overflow-hidden">
                            {/* Slides */}
                            <div
                                className="flex transition-transform duration-700 ease-in-out h-full"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {images.map((image, index) => (
                                    <div
                                        key={image.id}
                                        className={`min-w-full h-full bg-gradient-to-br ${image.bgColor} relative`}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-amber-900/20"></div>
                                        <div className="absolute inset-4 flex items-center justify-center">
                                            <div className={`grid ${image.cashewPattern}`}>
                                                {[...Array(index === 0 ? 16 : index === 1 ? 12 : index === 2 ? 20 : 24)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`
                                                            ${index === 0 ? 'w-10 h-7' : index === 1 ? 'w-12 h-8' : index === 2 ? 'w-8 h-6' : 'w-6 h-5'}
                                                            bg-gradient-to-br from-amber-100 to-amber-50 
                                                            rounded-xl transform rotate-12 opacity-90 shadow-sm
                                                            animate-pulse
                                                        `}
                                                        style={{
                                                            animationDelay: `${i * 0.1}s`,
                                                            transform: `rotate(${12 + (i % 3 - 1) * 5}deg)`
                                                        }}
                                                    ></div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Floating particles effect */}
                                        <div className="absolute inset-0 pointer-events-none">
                                            {[...Array(6)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="absolute w-2 h-2 bg-amber-300/60 rounded-full animate-bounce"
                                                    style={{
                                                        left: `${20 + (i * 15)}%`,
                                                        top: `${30 + (i % 3) * 20}%`,
                                                        animationDelay: `${i * 0.3}s`,
                                                        animationDuration: '2s'
                                                    }}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-amber-600 rounded-full p-3 shadow-lg transition-all hover:scale-110 backdrop-blur-sm"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-amber-600 rounded-full p-3 shadow-lg transition-all hover:scale-110 backdrop-blur-sm"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Dots Indicator */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`
                                        w-3 h-3 rounded-full transition-all duration-300
                                        ${currentSlide === index
                                        ? 'bg-amber-500 scale-125 shadow-lg'
                                        : 'bg-amber-200 hover:bg-amber-300'
                                    }
                                    `}
                                ></button>
                            ))}
                        </div>

                        {/* Progress Bar */}
                        <div className="absolute -bottom-12 left-0 right-0 h-1 bg-amber-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-700 ease-linear"
                                style={{
                                    width: `${((currentSlide + 1) / images.length) * 100}%`
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};