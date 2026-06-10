import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import NewHero from './components/NewHero';
import AboutSection from './components/AboutSection';
import MetricsSection from './components/MetricsSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-[#09090b] text-white">
        {currentHash === '#/privacy' || currentHash === '#privacy' ? (
          <PrivacyPolicy />
        ) : currentHash === '#/terms' || currentHash === '#terms' ? (
          <TermsOfUse />
        ) : (
          <>
            <NewHero />
            <AboutSection />
            <MetricsSection />
            <PortfolioSection />
            <ServicesSection />
            <ReviewsSection />
            <ContactSection />
            <Footer />
          </>
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;