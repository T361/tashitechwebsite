import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
  <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600 font-medium">
             © 2025 - 2026 Tashi Technologies Corp (Pvt) Ltd
          </div>
          
          {/* No links remain in the footer */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;