import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-black flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
          <span className="text-sm font-semibold tracking-tight text-black">Tashi Technologies Corp.</span>
        </div>

        <div className="text-center text-sm text-gray-500">
          © 2025 - 2026 Tashi Technologies Corp (Pvt) Ltd
        </div>

        <div>
          <a
            href="#"
            aria-label="Tashi on X"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-black text-white hover:bg-gray-900 transition-colors"
          >
            {/* Minimal X icon (stylized) */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6.5c-.5.7-1.1 1.3-1.8 1.8 0 .1 0 .1.1.2 1.4-.2 2.5-.6 3-.9-.6.8-1.4 1.5-2.2 1.9-.7.4-1.5.6-2.3.8-.7.2-1.2.3-1.7.5-.5.2-.9.4-1.3.7-.3.3-.6.6-.9 1-.2.3-.4.7-.6 1-.2.3-.4.7-.6 1-.4.8-.9 1.7-1.5 2.4-.6.8-1.4 1.4-2.4 1.6-.9.2-1.9.1-2.7-.3 1.6 1 3.5 1.3 5.4.8 2-.5 3.6-1.8 4.6-3.5.9-1.6 1.2-3.5.8-5.3.8-.6 1.4-1.3 1.9-2.1z" fill="white" fillOpacity="0.98"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;