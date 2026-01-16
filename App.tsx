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
import CosmicBackground from './components/CosmicBackground';
import NoiseOverlay from './components/NoiseOverlay';
import Lenis from 'lenis';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  useEffect(() => {
    // Ultra-smooth scroll configuration
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
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
    <div className="min-h-screen bg-black text-white flex flex-col font-sans relative selection:bg-white selection:text-black overflow-x-hidden">
      {/* Global Background Layers */}
      <CosmicBackground />
      <RippleBackground />
      <NoiseOverlay />
      
      <Header currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-grow pt-20 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, filter: 'blur(5px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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