import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Header} from "./components/common/Header.tsx";
import {Footer} from "./components/common/Footer.tsx";
import {HeroSection} from "./components/sections/HeroSection.tsx";
import {WhyChooseUsSection} from "./components/sections/WhyChooseUsSection.tsx";
import {ProductsSection} from "./components/sections/ProductsSection.tsx";
import {OurStorySection} from "./components/sections/OurStorySection.tsx";
import {navigation} from "./data/navigation.ts";


const App: React.FC = () => {
    const [currentSection, setCurrentSection] = useState('home');

    const scrollToSection = (sectionId: string) => {
        setCurrentSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products" element={<ProductPage />} />
                    </Routes>
                </Router>
            </div>
        </>
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
            <Header
                navigation={navigation}
                currentSection={currentSection}
                onNavigate={scrollToSection}
            />
            <HeroSection />
            <WhyChooseUsSection />
            <ProductsSection />
            <OurStorySection />
            <Footer />
        </div>
    );
};

export default App;