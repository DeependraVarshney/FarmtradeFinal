import React, { useState } from 'react';

const InvestorRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    email: '',
    phone: '',
    address: '',
    governmentId: null,
    addressProof: null,
    taxIdNumber: '',
    sectorsOfInterest: '',
    geographicPreferences: '',
    expectedROI: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Investor Registration Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-light-blue flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-custom w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-primary-blue mb-6 text-center">Investor Registration Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Information */}
          {step === 1 && (
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="nationality">Nationality</label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="Enter your nationality"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="address">Residential Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="Enter your address"
                />
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="bg-primary-blue text-white py-2 px-4 rounded hover:bg-dark-blue transition-colors"
              >
                Next
              </button>
            </div>
          )}

          {/* Step 2: Identification Verification */}
          {step === 2 && (
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="governmentId">Government-issued ID</label>
                <input
                  type="file"
                  id="governmentId"
                  name="governmentId"
                  onChange={handleChange}
                  required
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full text-gray-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="addressProof">Proof of Address</label>
                <input
                  type="file"
                  id="addressProof"
                  name="addressProof"
                  onChange={handleChange}
                  required
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full text-gray-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="taxIdNumber">Tax Identification Number</label>
                <input
                  type="text"
                  id="taxIdNumber"
                  name="taxIdNumber"
                  value={formData.taxIdNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="Enter your Tax ID Number"
                />
              </div>
              <button
                type="button"
                onClick={handlePrevious}
                className="bg-primary-blue text-white py-2 px-4 rounded hover:bg-dark-blue transition-colors"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="bg-primary-blue text-white py-2 px-4 rounded hover:bg-dark-blue transition-colors"
              >
                Next
              </button>
            </div>
          )}

          {/* Step 3: Preferences */}
          {step === 3 && (
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="sectorsOfInterest">Sectors of Interest</label>
                <input
                  type="text"
                  id="sectorsOfInterest"
                  name="sectorsOfInterest"
                  value={formData.sectorsOfInterest}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="Enter sectors of interest (e.g., Crops, Livestock)"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="geographicPreferences">Geographic Preferences</label>
                <input
                  type="text"
                  id="geographicPreferences"
                  name="geographicPreferences"
                  value={formData.geographicPreferences}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="Enter geographic preferences (e.g., regions or countries)"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="expectedROI">Expected ROI (%)</label>
                <input
                  type="number"
                  id="expectedROI"
                  name="expectedROI"
                  value={formData.expectedROI}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="Enter expected ROI"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="bg-primary-blue text-white py-2 px-4 rounded hover:bg-dark-blue transition-colors"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-primary-blue text-white py-2 px-4 rounded hover:bg-dark-blue transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default InvestorRegistrationForm;
