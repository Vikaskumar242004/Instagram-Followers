import React from 'react';
import { Instagram, Home, Package, HelpCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Instagram Followers</span>
          </div>
          
          <nav className="flex items-center space-x-8">
            <a href="#home" className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </a>
            <a href="#packages" className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors">
              <Package className="w-4 h-4" />
              <span>Packages</span>
            </a>
            <a href="#support" className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors">
              <HelpCircle className="w-4 h-4" />
              <span>Support</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;