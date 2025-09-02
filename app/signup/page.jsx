'use client';
import { useState } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('Silver');
  const [selectedPayment, setSelectedPayment] = useState('Razorpay');
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', mobile: '', password: '',
    state: '', referralCode: '', couponCode: '', agreeToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup attempt:', { ...formData, selectedPackage, selectedPayment });
  };

  const packages = [
    { name: 'Bronze Bundle', price: '₹1,899', originalPrice: '₹2,500' },
    { name: 'Silver Package', price: '₹2,999', originalPrice: '₹3,500' },
    { name: 'Gold Package', price: '₹4,999', originalPrice: '₹5,500' },
    { name: 'Platinum Package', price: '₹7,999', originalPrice: '₹8,500' },
    { name: 'Diamond Package', price: '₹12,999', originalPrice: '₹14,500' }
  ];

  const paymentOptions = [
    { name: 'Razorpay', icon: '💳' },
    { name: 'PayPal', icon: '🌐' },
    { name: 'Bank Transfer', icon: '🏦' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* <Header /> */}
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Join{' '}
              <span className="relative">
                DCC
                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 rounded-full"></div>
              </span>
            </h1>
            <p className="text-gray-600 text-lg">
              Start your journey towards professional excellence
            </p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select State</option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="chennai">Chennai</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Package Selection */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Select Your Package</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedPackage === pkg.name
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-red-300'
                    }`}
                    onClick={() => setSelectedPackage(pkg.name)}
                  >
                    <h4 className="font-semibold text-gray-800">{pkg.name}</h4>
                    <div className="mt-2">
                      <span className="text-lg font-bold text-red-600">{pkg.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {paymentOptions.map((option) => (
                  <div
                    key={option.name}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedPayment === option.name
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-red-300'
                    }`}
                    onClick={() => setSelectedPayment(option.name)}
                  >
                    <div className="text-2xl mb-2">{option.icon}</div>
                    <span className="font-medium text-gray-800">{option.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Fields */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700 mb-2">
                    Referral Code (Optional)
                  </label>
                  <input
                    type="text"
                    id="referralCode"
                    name="referralCode"
                    value={formData.referralCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="couponCode" className="block text-sm font-medium text-gray-700 mb-2">
                    Coupon Code (Optional)
                  </label>
                  <input
                    type="text"
                    id="couponCode"
                    name="couponCode"
                    value={formData.couponCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500 focus:ring-2 mt-1"
                required
              />
              <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-red-600 hover:text-red-800 underline">
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-red-600 hover:text-red-800 underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Create Account & Get Started
            </button>
          </form>
        </div>
      </div>
      
      {/* <Footer /> */}
    </div>
  );
}
