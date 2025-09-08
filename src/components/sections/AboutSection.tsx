import React from 'react';
import {StatCard} from "../ui/StatCard.tsx";

export const AboutSection: React.FC = () => {
    return (
        <section id="story" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Về chúng tôi</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="w-full h-96 bg-gradient-to-br from-green-200 to-blue-200 rounded-3xl shadow-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-green-900/20"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                                    <p className="text-sm text-gray-700">Vườn điều ở Việt Nam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <p className="text-amber-800 leading-relaxed">
                            Được trồng trên vùng đất màu mỡ, Nhân Trí là thương hiệu Việt Nam.
                            Chúng tôi làm việc trực tiếp, chọn lọc từng hạt cà phê chất lượng hảo hạng nhất của từng nông dân để đảm bảo chất lượng tốt nhất.
                            Phương pháp rang xay truyền thống của chúng tôi lưu giữ và trân trọng những giá trị tinh túy khó quên.
                            Từ những trang trại gia đình, chúng tôi mang đến trải nghiệm khác biệt mà niềm đam mê đích thực tạo nên.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <StatCard number="15+" label="Kinh nghiệm" />
                            <StatCard number="100%" label="Sản phẩm tự nhiên" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};