import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import NewHero from './components/NewHero';
import AboutSection from './components/AboutSection';
import MetricsSection from './components/MetricsSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-[#09090b] text-white">
        <NewHero />
        <AboutSection />
        <MetricsSection />
        <PortfolioSection />
        <ServicesSection />
        <ReviewsSection />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;