import React, { useState, useEffect } from 'react';
import { Instagram, Eye, Crown, X } from 'lucide-react';

interface PurchaseNotification {
  id: string;
  name: string;
  location: string;
  package: string;
  type: 'followers' | 'views' | 'verification';
  timestamp: Date;
}

const mockPurchases: Omit<PurchaseNotification, 'id' | 'timestamp'>[] = [
  { name: 'Rajesh Kumar', location: 'Mumbai', package: '10K Followers', type: 'followers' },
  { name: 'Priya Sharma', location: 'Delhi', package: '50K Views', type: 'views' },
  { name: 'Arjun Singh', location: 'Bangalore', package: '5K Followers', type: 'followers' },
  { name: 'Sneha Patel', location: 'Ahmedabad', package: 'Blue Tick Verification', type: 'verification' },
  { name: 'Vikram Yadav', location: 'Pune', package: '100K Views', type: 'views' },
  { name: 'Anita Gupta', location: 'Jaipur', package: '50K Followers', type: 'followers' },
  { name: 'Rohit Mehta', location: 'Chennai', package: '10K Views', type: 'views' },
  { name: 'Kavya Reddy', location: 'Hyderabad', package: '1M Views', type: 'views' },
  { name: 'Amit Joshi', location: 'Kolkata', package: '100K Followers', type: 'followers' },
  { name: 'Deepika Nair', location: 'Kochi', package: '5K Views', type: 'views' },
  { name: 'Sanjay Agarwal', location: 'Lucknow', package: '10K Followers', type: 'followers' },
  { name: 'Ritu Malhotra', location: 'Chandigarh', package: 'Blue Tick Verification', type: 'verification' },
  { name: 'Karan Kapoor', location: 'Indore', package: '50K Views', type: 'views' },
  { name: 'Meera Jain', location: 'Surat', package: '1M Followers', type: 'followers' },
  { name: 'Rahul Tiwari', location: 'Bhopal', package: '10K Views', type: 'views' }
];

const PurchaseNotifications = () => {
  const [notifications, setNotifications] = useState<PurchaseNotification[]>([]);
  const [visibleNotifications, setVisibleNotifications] = useState<PurchaseNotification[]>([]);

  useEffect(() => {
    // Generate initial notifications with random timestamps
    const initialNotifications = mockPurchases.map((purchase, index) => ({
      ...purchase,
      id: `notification-${index}`,
      timestamp: new Date(Date.now() - Math.random() * 3600000) // Random time within last hour
    }));

    setNotifications(initialNotifications);
  }, []);

  useEffect(() => {
    if (notifications.length === 0) return;

    const showNotification = () => {
      // Pick a random notification
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      
      // Update timestamp to current time
      const newNotification = {
        ...randomNotification,
        id: `notification-${Date.now()}`,
        timestamp: new Date()
      };

      setVisibleNotifications(prev => [newNotification, ...prev.slice(0, 2)]); // Keep max 3 notifications

      // Auto remove after 8 seconds
      setTimeout(() => {
        setVisibleNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 8000);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);

    // Then show notifications every 15-25 seconds
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 10000 + 15000); // Random between 15-25 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [notifications]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'followers':
        return Instagram;
      case 'views':
        return Eye;
      case 'verification':
        return Crown;
      default:
        return Instagram;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'followers':
        return 'text-pink-500';
      case 'views':
        return 'text-blue-500';
      case 'verification':
        return 'text-yellow-500';
      default:
        return 'text-pink-500';
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case 'followers':
        return 'from-pink-50 to-purple-50 border-pink-200';
      case 'views':
        return 'from-blue-50 to-cyan-50 border-blue-200';
      case 'verification':
        return 'from-yellow-50 to-orange-50 border-yellow-200';
      default:
        return 'from-pink-50 to-purple-50 border-pink-200';
    }
  };

  const getTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - timestamp.getTime()) / 1000);
    
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }
  };

  const removeNotification = (id: string) => {
    setVisibleNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 space-y-3 max-w-sm">
      {visibleNotifications.map((notification) => {
        const IconComponent = getIcon(notification.type);
        
        return (
          <div
            key={notification.id}
            className={`bg-gradient-to-r ${getBgColor(notification.type)} border rounded-lg p-4 shadow-lg transform transition-all duration-500 ease-in-out animate-slide-in-left`}
          >
            <div className="flex items-start space-x-3">
              <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}>
                <IconComponent className={`w-5 h-5 ${getIconColor(notification.type)}`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    {notification.name}
                  </p>
                  <button
                    onClick={() => removeNotification(notification.id)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <p className="text-xs text-gray-600 mb-1">
                  from {notification.location}
                </p>
                
                <p className="text-sm font-medium text-green-600 mb-1">
                  Just purchased {notification.package}
                </p>
                
                <p className="text-xs text-gray-500">
                  {getTimeAgo(notification.timestamp)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PurchaseNotifications;