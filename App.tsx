import React, { useState, useEffect } from 'react';
import { ViewState } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroView from './components/HeroView';
import ServicesView from './components/ServicesView';
import ContactView from './components/ContactView';
import RippleBackground from './components/RippleBackground';
import Lenis from 'lenis';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
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

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans relative selection:bg-black selection:text-white">
      <RippleBackground />
      <Header currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-grow pt-0 relative z-10">
        {currentView === 'home' && (
          <>
            <HeroView navigateToServices={() => setCurrentView('services')} />
            <ServicesView />
            <ContactView />
          </>
        )}
        
        {currentView === 'services' && (
           <div className="pt-20">
             <ServicesView />
             <ContactView />
           </div>
        )}

        {currentView === 'contact' && (
           <div className="pt-20">
             <ContactView />
           </div>
        )}

        {currentView === 'about' && (
           <div className="pt-20">
             <HeroView navigateToServices={() => setCurrentView('services')} />
             <ServicesView />
           </div>
        )}
      </main>

      <Footer onViewChange={setCurrentView} />
    </div>
  );
};

export default App;