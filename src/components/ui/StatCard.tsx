import React from 'react';

interface StatCardProps {
    number: string;
    label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
    return (
        <div className="text-center p-4 bg-amber-50 rounded-xl">
            <div className="text-2xl font-bold text-amber-600">{number}</div>
            <div className="text-sm text-amber-700">{label}</div>
        </div>
    );
};