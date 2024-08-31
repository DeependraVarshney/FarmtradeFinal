import React, { useState } from 'react';

const FarmerRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    farmerName: '',
    age: '',
    address: '',
    phone: '',
    email: '',
    landSize: '',
    landLocation: '',
    landDocuments: null,
    bankAccountNumber: '',
    ifscCode: '',
    incomeCertificate: null,
    aadhaarCard: null,
    panCard: null,
    landOwnershipType: '',
    farmerPhoto: null,
    landPhoto: null,
    soilType: '',
    irrigationFacilities: '',
    annualRevenue: '',
    existingLoans: ''
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
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center">Farmer Registration Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Farmer Details */}
          {step === 1 && (
            <div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="farmerName">Name</label>
                <input
                  type="text"
                  id="farmerName"
                  name="farmerName"
                  value={formData.farmerName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your age"
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your address"
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="landSize">Land Size (in acres)</label>
                <input
                  type="number"
                  id="landSize"
                  name="landSize"
                  value={formData.landSize}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter land size"
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="landLocation">Land Location</label>
                <input
                  type="text"
                  id="landLocation"
                  name="landLocation"
                  value={formData.landLocation}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter land location"
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="landDocuments">Land Documents</label>
                <input
                  type="file"
                  id="landDocuments"
                  name="landDocuments"
                  onChange={handleChange}
                  required
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full text-green-700"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Financial and Ownership Details */}
          {step === 2 && (
            <div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="bankAccountNumber">Bank Account Number</label>
                <input
                  type="text"
                  id="bankAccountNumber"
                  name="bankAccountNumber"
                  value={formData.bankAccountNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter bank account number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="ifscCode">IFSC Code</label>
                <input
                  type="text"
                  id="ifscCode"
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter IFSC code"
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="incomeCertificate">Income Certificate</label>
                <input
                  type="file"
                  id="incomeCertificate"
                  name="incomeCertificate"
                  onChange={handleChange}
                  required
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full text-green-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="aadhaarCard">Aadhaar Card</label>
                <input
                  type="file"
                  id="aadhaarCard"
                  name="aadhaarCard"
                  onChange={handleChange}
                  required
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full text-green-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="panCard">PAN Card</label>
                <input
                  type="file"
                  id="panCard"
                  name="panCard"
                  onChange={handleChange}
                  required
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full text-green-700"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Additional Details */}
          {step === 3 && (
            <div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="landOwnershipType">Land Ownership Type</label>
                <select
                  id="landOwnershipType"
                  name="landOwnershipType"
                  value={formData.landOwnershipType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <option value="">Select ownership type</option>
                  <option value="Owned">Owned</option>
                  <option value="Leased">Leased</option>
                  <option value="Government">Government</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="farmerPhoto">Photograph of Farmer</label>
                <input
                  type="file"
                  id="farmerPhoto"
                  name="farmerPhoto"
                  onChange={handleChange}
                  required
                  accept=".jpg,.jpeg,.png"
                  className="w-full text-green-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="landPhoto">Photograph of Land</label>
                <input
                  type="file"
                  id="landPhoto"
                  name="landPhoto"
                  onChange={handleChange}
                  required
                  accept=".jpg,.jpeg,.png"
                  className="w-full text-green-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="soilType">Soil Type</label>
                <input
                  type="text"
                  id="soilType"
                  name="soilType"
                  value={formData.soilType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter soil type"
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="irrigationFacilities">Irrigation Facilities</label>
                <select
                  id="irrigationFacilities"
                  name="irrigationFacilities"
                  value={formData.irrigationFacilities}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <option value="">Select irrigation type</option>
                  <option value="None">None</option>
                  <option value="Drip">Drip</option>
                  <option value="Sprinkler">Sprinkler</option>
                  <option value="Flood">Flood</option>
                  <option value="Manual">Manual</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="annualRevenue">Annual Average Revenue</label>
                <input
                  type="number"
                  id="annualRevenue"
                  name="annualRevenue"
                  value={formData.annualRevenue}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter annual revenue"
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-700 mb-2" htmlFor="existingLoans">Existing Loans and Subsidies</label>
                <input
                  type="text"
                  id="existingLoans"
                  name="existingLoans"
                  value={formData.existingLoans}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter details of existing loans and subsidies"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
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

export default FarmerRegistrationForm;
