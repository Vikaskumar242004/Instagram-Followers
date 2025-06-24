import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import PurchaseNotifications from './components/PurchaseNotifications';
import { OrderProvider } from './context/OrderContext';

function App() {
  return (
    <OrderProvider>
      <div className="min-h-screen bg-white">
        <Toaster position="top-right" />
        <Header />
        <Hero />
        <Packages />
        <Testimonials />
        <Footer />
        <OrderModal />
        <PurchaseNotifications />
      </div>
    </OrderProvider>
  );
}

export default App;