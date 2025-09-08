import React from 'react';
import { ShoppingCart, Leaf } from 'lucide-react';
import type {NavigationItem} from "../../types";

interface HeaderProps {
    navigation: NavigationItem[];
    currentSection: string;
    onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ navigation, currentSection, onNavigate }) => {
    return (
        <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                            <Leaf className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-amber-900">NHAN TRI</span>
                        <span className="text-sm text-amber-700">CASHEW NUTS</span>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => onNavigate(item.id)}
                                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                                    currentSection === item.id ? 'text-amber-600' : 'text-gray-600'
                                }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>

                    <button className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors">
                        <ShoppingCart className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </header>
    );
};