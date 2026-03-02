import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import NewHero from './components/NewHero';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ReviewsSection from './components/ReviewsSection';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-[#09090b] text-white">
        <NewHero />
        <AboutSection />
        <PortfolioSection />
        <ReviewsSection />
      </div>
    </LanguageProvider>
  );
}

export default App;