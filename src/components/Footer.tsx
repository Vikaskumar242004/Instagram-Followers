import React from 'react';
import { Instagram, Mail, Shield, Clock, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Instagram Followers</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Boost your Instagram presence with real, active followers and views. 
              Trusted by thousands of satisfied customers worldwide.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:support@instagramfollowers.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@instagramfollowers.com</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Instagram Followers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram Views</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blue Tick Verification</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram Likes</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Features */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm">100% Safe & Secure</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span className="text-sm">24/7 Customer Support</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Award className="w-5 h-5 text-purple-500" />
              <span className="text-sm">Premium Quality Service</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Instagram Followers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;