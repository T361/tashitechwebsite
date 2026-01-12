import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ViewState } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroView from './components/HeroView';
import ServicesView from './components/ServicesView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import RippleBackground from './components/RippleBackground';
import MoleculeBackground from './components/MoleculeBackground';
import Lenis from 'lenis';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  useEffect(() => {
    // Ultra-smooth scroll configuration
    const lenis = new Lenis({
      duration: 2.0, // Increased for more "weight" and smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.7, // Lower multiplier for finer control
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Function to render the active view component
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HeroView key="home" navigateToServices={() => setCurrentView('services')} />;
      case 'services':
        return <ServicesView key="services" />;
      case 'about':
        return <AboutView key="about" />;
      case 'contact':
        return <ContactView key="contact" />;
      default:
        return <HeroView navigateToServices={() => setCurrentView('services')} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans relative selection:bg-black selection:text-white">
      {/* Global Background Layers */}
      <RippleBackground />
      <MoleculeBackground />
      
      <Header currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-grow pt-20 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onViewChange={setCurrentView} />
    </div>
  );
};

export default App;