import React, { useState } from 'react';
import { X, Upload, QrCode, Instagram, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useOrder } from '../context/OrderContext';
import toast from 'react-hot-toast';

const OrderModal = () => {
  const { isModalOpen, closeModal, selectedPackage } = useOrder();
  const [formData, setFormData] = useState({
    instagramId: '',
    email: '',
    phone: '',
    paymentScreenshot: null as File | null
  });
  const [step, setStep] = useState(1);
  const [isValidating, setIsValidating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isModalOpen || !selectedPackage) return null;

  // Mock Instagram validation
  const validateInstagramId = async (username: string) => {
    setIsValidating(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsValidating(false);
    
    // Simple validation - check if it looks like an Instagram username
    const isValid = /^[a-zA-Z0-9._]{1,30}$/.test(username) && username.length >= 3;
    
    if (!isValid) {
      toast.error('Invalid Instagram username. Please check and try again.');
      return false;
    }
    
    toast.success('Instagram username verified!');
    return true;
  };

  const handleInstagramValidation = async () => {
    if (!formData.instagramId.trim()) {
      toast.error('Please enter your Instagram username');
      return;
    }

    const isValid = await validateInstagramId(formData.instagramId);
    if (isValid) {
      setStep(2);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size should be less than 5MB');
        return;
      }
      
      if (!file.type.startsWith('image/')) {
        toast.error('Please upload an image file');
        return;
      }
      
      setFormData({ ...formData, paymentScreenshot: file });
      toast.success('Payment screenshot uploaded!');
    }
  };

  const handleSubmit = async () => {
    if (!formData.email || !formData.phone || !formData.paymentScreenshot) {
      toast.error('Please fill all fields and upload payment screenshot');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call to store data in Excel
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock email sending
    const orderData = {
      packageId: selectedPackage.id,
      packageTitle: selectedPackage.title,
      packagePrice: selectedPackage.price,
      instagramId: formData.instagramId,
      email: formData.email,
      phone: formData.phone,
      timestamp: new Date().toISOString(),
      orderId: `IG-${Date.now()}`
    };

    // In a real app, this would be sent to your backend
    console.log('Order submitted:', orderData);
    
    // Simulate success
    setIsSubmitting(false);
    toast.success('Order submitted successfully! Check your email for confirmation.');
    
    // Auto email response simulation
    setTimeout(() => {
      toast.success('Confirmation email sent! Your request will be fulfilled within 24 hours.');
    }, 1000);
    
    closeModal();
    setStep(1);
    setFormData({
      instagramId: '',
      email: '',
      phone: '',
      paymentScreenshot: null
    });
  };

  const resetModal = () => {
    closeModal();
    setStep(1);
    setFormData({
      instagramId: '',
      email: '',
      phone: '',
      paymentScreenshot: null
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Complete Your Order</h2>
            <button
              onClick={resetModal}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Package Summary */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <selectedPackage.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{selectedPackage.title}</h3>
                <p className="text-sm text-gray-600">{selectedPackage.quantity}</p>
                <p className="text-lg font-bold text-purple-600">₹{selectedPackage.price}</p>
              </div>
            </div>
          </div>

          {/* Step 1: Instagram Username */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instagram Username
                </label>
                <div className="relative">
                  <Instagram className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.instagramId}
                    onChange={(e) => setFormData({ ...formData, instagramId: e.target.value.replace('@', '') })}
                    placeholder="your_username"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Enter your Instagram username without @ symbol
                </p>
              </div>

              <button
                onClick={handleInstagramValidation}
                disabled={isValidating || !formData.instagramId.trim()}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isValidating ? (
                  <span className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Validating...</span>
                  </span>
                ) : (
                  'Verify Instagram Account'
                )}
              </button>
            </div>
          )}

          {/* Step 2: Payment & Contact Info */}
          {step === 2 && (
            <div className="space-y-6">
              {/* Payment QR Code */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <QrCode className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Payment Details</h3>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <QrCode className="w-16 h-16 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600">Scan QR code to pay ₹{selectedPackage.price}</p>
                  <p className="text-xs text-gray-500 mt-1">Google Pay / PhonePe / Paytm</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Screenshot
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="payment-screenshot"
                    />
                    <label
                      htmlFor="payment-screenshot"
                      className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-purple-500 transition-colors"
                    >
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        {formData.paymentScreenshot 
                          ? `Selected: ${formData.paymentScreenshot.name}`
                          : 'Click to upload payment screenshot'
                        }
                      </p>
                    </label>
                  </div>
                </div>
              </div>

              {/* Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-yellow-800">
                    <p className="font-semibold mb-1">Important:</p>
                    <p>Please upload a clear screenshot of your payment. Orders without valid payment proof will not be processed.</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting Order...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Submit Order</span>
                  </span>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderModal;