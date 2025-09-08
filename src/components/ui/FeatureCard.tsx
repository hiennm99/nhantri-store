import React from 'react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="text-center p-6 rounded-2xl bg-amber-50 hover:bg-amber-100 transition-colors">
            <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
            <p className="text-amber-700">{description}</p>
        </div>
    );
};