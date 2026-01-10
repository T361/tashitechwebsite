import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ViewState } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroView from './components/HeroView';
import ServicesView from './components/ServicesView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

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
    <div className="min-h-screen bg-tashi-black text-white selection:bg-tashi-blue/30 selection:text-tashi-blue flex flex-col">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: "easeOut" }}
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