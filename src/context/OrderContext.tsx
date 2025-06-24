import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Package {
  id: string;
  type: string;
  icon: any;
  title: string;
  quantity: string;
  price: number;
  originalPrice: number;
  badge?: string;
  badgeColor?: string;
  features: string[];
}

interface OrderContextType {
  isModalOpen: boolean;
  selectedPackage: Package | null;
  openModal: (pkg: Package) => void;
  closeModal: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};

interface OrderProviderProps {
  children: ReactNode;
}

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const openModal = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  const value = {
    isModalOpen,
    selectedPackage,
    openModal,
    closeModal,
  };

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
};