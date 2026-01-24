import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroView from './components/HeroView';
import ServicesView from './components/ServicesView';
import ContactView from './components/ContactView';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-black selection:text-white">
      {/* Header is fixed and does not need view state */}
      <Header />
      
      <main className="flex-grow w-full">
        {/* All sections are rendered sequentially for a single-page scroll experience */}
        <HeroView />
        <ServicesView />
        <ContactView />
      </main>

      {/* Footer is static */}
      <Footer />
    </div>
  );
};

export default App;