import React from 'react';
import { Instagram, Eye, CheckCircle, Star, Crown, Flame } from 'lucide-react';
import { useOrder } from '../context/OrderContext';

const packages = [
  // Followers
  {
    id: 'followers-5k',
    type: 'followers',
    icon: Instagram,
    title: '5K Followers',
    quantity: '5,000 Followers',
    price: 150,
    originalPrice: 299,
    badge: 'Popular',
    badgeColor: 'bg-blue-500',
    features: [
      'Real, Active & Permanent Followers',
      'Lifetime Refill & Permanent',
      'Time: Ultrafast',
      'Drop Rate: 0%'
    ]
  },
  {
    id: 'followers-10k',
    type: 'followers',
    icon: Instagram,
    title: '10K Followers',
    quantity: '10,000 Followers',
    price: 250,
    originalPrice: 499,
    badge: 'Best Value',
    badgeColor: 'bg-green-500',
    features: [
      'Real, Active & Permanent Followers',
      'Lifetime Refill & Permanent',
      'Time: Ultrafast',
      'Drop Rate: 0%'
    ]
  },
  {
    id: 'followers-50k',
    type: 'followers',
    icon: Instagram,
    title: '50K Followers',
    quantity: '50,000 Followers',
    price: 850,
    originalPrice: 1499,
    badge: 'Premium',
    badgeColor: 'bg-purple-500',
    features: [
      'Real, Active & Permanent Followers',
      'Lifetime Refill & Permanent',
      'Time: Ultrafast',
      'Drop Rate: 0%'
    ]
  },
  {
    id: 'followers-100k',
    type: 'followers',
    icon: Instagram,
    title: '100K Followers',
    quantity: '100,000 Followers',
    price: 1500,
    originalPrice: 2999,
    badge: 'Elite',
    badgeColor: 'bg-gold-500',
    features: [
      'Real, Active & Permanent Followers',
      'Lifetime Refill & Permanent',
      'Time: Ultrafast',
      'Drop Rate: 0%'
    ]
  },
  {
    id: 'followers-1m',
    type: 'followers',
    icon: Instagram,
    title: '1M Followers',
    quantity: '1,000,000 Followers',
    price: 12000,
    originalPrice: 25000,
    badge: 'Exclusive',
    badgeColor: 'bg-red-500',
    features: [
      'Real, Active & Permanent Followers',
      'Lifetime Refill & Permanent',
      'Time: Ultrafast',
      'Drop Rate: 0%'
    ]
  },
  // Views
  {
    id: 'views-5k',
    type: 'views',
    icon: Eye,
    title: '5K Views',
    quantity: '5,000 Views',
    price: 100,
    originalPrice: 149,
    badge: 'Hot',
    badgeColor: 'bg-orange-500',
    features: [
      'Real, Active & Permanent Views',
      'Lifetime Refill & Permanent',
      'Time: Ultrafast',
      'Drop Rate: 0%'
    ]
  },
  {
    id: 'views-10k',
    type: 'views',
    icon: Eye,
    title: '10K Views',
    quantity: '10,000 Views',
    price: 190,
    originalPrice: 349,
    badge: 'Trending',
    badgeColor: 'bg-teal-500',
    features: [
      'Real, Active & Permanent Views',
      'Lifetime Refill & Permanent',
      'Time: Ultrafast',
      'Drop Rate: 0%'
    ]
  },
  {
    id: 'views-50k',
    type: 'views',
    icon: Eye,
    title: '50K Views',
    quantity: '50,000 Views',
    price: 450,
    originalPrice: 800,
    badge: 'Popular',
    badgeColor: 'bg-indigo-500',
    features: [
      'Real, Active & Permanent Views',
      'Lifetime Refill & Permanent',
      'Time: Ultrafast',
      'Drop Rate: 0%'
    ]
  },
  {
    id: 'views-1m',
    type: 'views',
    icon: Eye,
    title: '1M Views',
    quantity: '1,000,000 Views',
    price: 5500,
    originalPrice: 10000,
    badge: 'Viral',
    badgeColor: 'bg-pink-500',
    features: [
      'Real, Active & Permanent Views',
      'Lifetime Refill & Permanent',
      'Time: Ultrafast',
      'Drop Rate: 0%'
    ]
  },
  // Blue Tick
  {
    id: 'blue-tick',
    type: 'verification',
    icon: Crown,
    title: 'Blue Tick Verification',
    quantity: 'Verified Badge',
    price: 2500,
    originalPrice: 5000,
    badge: 'VIP',
    badgeColor: 'bg-blue-600',
    features: [
      'Official Instagram Verification',
      'Permanent Blue Tick',
      'Enhanced Credibility',
      '100% Success Rate'
    ]
  }
];

const Packages = () => {
  const { openModal } = useOrder();

  const handleOrderClick = (pkg: typeof packages[0]) => {
    openModal(pkg);
  };

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Growth Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select from our premium packages designed to boost your Instagram presence instantly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon;
            const savings = pkg.originalPrice - pkg.price;
            const savingsPercent = Math.round((savings / pkg.originalPrice) * 100);

            return (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
              >
                <div className="relative p-6">
                  {pkg.badge && (
                    <div className={`absolute top-4 right-4 ${pkg.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1`}>
                      <Flame className="w-3 h-3" />
                      <span>{pkg.badge}</span>
                    </div>
                  )}

                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 ${pkg.type === 'followers' ? 'bg-gradient-to-r from-pink-500 to-purple-600' : pkg.type === 'views' ? 'bg-gradient-to-r from-blue-500 to-teal-600' : 'bg-gradient-to-r from-yellow-500 to-orange-600'} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{pkg.title}</h3>
                      <p className="text-gray-600 text-sm">{pkg.quantity}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-gray-900">₹{pkg.price}</span>
                      <span className="text-lg text-gray-500 line-through">₹{pkg.originalPrice}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                        Save {savingsPercent}%
                      </span>
                      <span className="text-sm text-gray-600">Limited Time Offer</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleOrderClick(pkg)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-colors ${
                      pkg.type === 'followers' 
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700' 
                        : pkg.type === 'views'
                        ? 'bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-700'
                        : 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700'
                    }`}
                  >
                    {pkg.type === 'followers' ? 'Get Followers Now' : pkg.type === 'views' ? 'Get Views Now' : 'Get Verified Now'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packages;