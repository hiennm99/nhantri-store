import React, { useState } from 'react';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { WhyChooseUsSection } from '../components/sections/WhyChooseUsSection';
import { ProductsSection } from '../components/sections/ProductsSection';
import { AboutSection } from '../components/sections/AboutSection.tsx';
import { navigation } from '../data/navigation';

export const HomePage: React.FC = () => {
    const [currentSection, setCurrentSection] = useState('home');

    const scrollToSection = (sectionId: string) => {
        setCurrentSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
            <Header
                navigation={navigation}
                currentSection={currentSection}
                onNavigate={scrollToSection}
            />
            <HeroSection />
            <WhyChooseUsSection />
            <ProductsSection />
            <AboutSection />
            <Footer />
        </div>
    );
};