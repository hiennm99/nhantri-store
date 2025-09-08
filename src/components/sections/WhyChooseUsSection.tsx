import React from 'react';
import { Award, Users, Leaf } from 'lucide-react';
import {FeatureCard} from "../ui/FeatureCard.tsx";

export const WhyChooseUsSection: React.FC = () => {
    const features = [
        {
            icon: <Award className="w-8 h-8 text-amber-700" />,
            title: "Nguồn gốc rõ ràng",
            description: "Có nguồn gốc trực tiếp từ những trang trại điều tốt nhất."
        },
        {
            icon: <Users className="w-8 h-8 text-amber-700" />,
            title: "Rang bằng tay",
            description: "Rang cẩn thận bằng tay để có hương vị hoàn hảo."
        },
        {
            icon: <Leaf className="w-8 h-8 text-amber-700" />,
            title: "100% Tự nhiên",
            description: "Không có chất phụ gia nhân tạo, chỉ có hương vị tinh khiết."
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
                    Tại sao chọn chúng tôi
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};