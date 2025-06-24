import React from 'react';
import { Instagram, Users, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold">Instagram Followers</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              HOW TO GROW{' '}
              <span className="text-yellow-300">INSTAGRAM FOLLOWERS</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get real, active, and permanent Instagram followers instantly. 
              Boost your social media presence with our premium growth services.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold">100% Real Followers</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold">Instant Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold">0% Drop Rate</span>
              </div>
            </div>
            
            <a
              href="#packages"
              className="inline-block bg-white text-purple-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Get Started Now
            </a>
          </div>
          
          <div className="lg:flex justify-center hidden">
            <div className="relative">
              <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center mb-6">
                  <Instagram className="w-16 h-16 text-white" />
                </div>
                
                <div className="space-y-4 w-full">
                  <div className="flex items-center justify-between text-white">
                    <span className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-orange-300" />
                      <span className="text-sm">25</span>
                    </span>
                    <span className="text-2xl font-bold">10K</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-white">
                    <span className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-orange-300" />
                      <span className="text-sm">1500</span>
                    </span>
                    <span className="text-2xl font-bold">1500</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold">
                10K
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                1.5K
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;