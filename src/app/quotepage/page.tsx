'use client';

import React, { useState } from "react";
import { FaShieldAlt, FaClock, FaLock, FaArrowRight } from "react-icons/fa";
import PageWrapper from "../../../utils/PageWrapper";
import PageHeader from "../../../common/PageHeader";

const QuotePage = () => {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    commodity: '',
    serviceType: '',
    package: '',
    dimensions: '',
    options: [] as string[],
    name: '',
    email: '',
    phone: ''
  });

  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value } = target;

    if (target.type === 'checkbox') {
      const checked = (target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        options: checked ? [value] : []
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error on change
    setFormErrors(prev => prev.filter(error => error !== name));
  };

  const validateForm = () => {
    const errors: string[] = [];

    for (const field in formData) {
      const value = (formData as any)[field];
      if ((Array.isArray(value) && value.length === 0) || (!Array.isArray(value) && !value)) {
        errors.push(field);
      }
    }

    setFormErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setMessage("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch('/api/GetInTouch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setMessage(data.message || 'Submission successful!');
    } catch {
      setMessage('Something went wrong. Please try again.');
    }
  };

  const hasError = (field: string) => formErrors.includes(field);

  return (
    <PageWrapper>
      <PageHeader title="Get a quote" breadcrumb="Get a quote" />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-2">Fill out the form and we will get in touch</h2>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-sm text-gray-700">
          <div className="flex items-center gap-3">
            <FaClock className="text-orange-500" />
            <p>It’s quick and easy</p>
          </div>
          <div className="flex items-center gap-3">
            <FaLock className="text-orange-500" />
            <p>It’s secure</p>
          </div>
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-orange-500" />
            <p>We will come back to you within 24 hours</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-[#f9f9f9] p-8 rounded-lg shadow-md space-y-10 text-black">
          {/* Shipment Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shipment Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'origin', label: 'Origin', options: ['New York', 'Los Angeles', 'Chicago'] },
                { name: 'destination', label: 'Destination', options: ['Houston', 'Miami', 'Seattle'] },
                { name: 'commodity', label: 'Commodity', options: ['Electronics', 'Furniture', 'Food'] },
                { name: 'serviceType', label: 'Service Type', options: ['Air Freight', 'Ocean Freight', 'Ground Shipping'] },
                { name: 'package', label: 'Package', options: ['Box', 'Pallet', 'Crate'] },
                { name: 'dimensions', label: 'Dimensions', options: ['Small', 'Medium', 'Large'] },
              ].map(({ name, label, options }) => (
                <div className="flex flex-col" key={name}>
                  <label className="mb-1 text-sm">{label}</label>
                  <select
                    name={name}
                    value={(formData as any)[name]}
                    onChange={handleChange}
                    className={`border p-2 rounded bg-white text-sm ${hasError(name) ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select {label}</option>
                    {options.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {/* Checkboxes */}
            <div className="flex flex-wrap gap-4 mt-6 text-sm">
              {['Insurance', 'Packaging', 'Fast delivery'].map(option => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="options"
                    value={option}
                    checked={formData.options.includes(option)}
                    onChange={handleChange}
                    className="accent-orange-500"
                  />
                  {option}
                </label>
              ))}
              {hasError('options') && (
                <p className="text-red-500 text-sm mt-2">Please select one option.</p>
              )}
            </div>
          </div>

          {/* Personal Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Personal Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'name', placeholder: 'Enter Name', type: 'text' },
                { name: 'email', placeholder: 'Your email', type: 'email' },
                { name: 'phone', placeholder: 'Your phone number', type: 'text', full: true },
              ].map(({ name, placeholder, type, full }) => (
                <input
                  key={name}
                  type={type}
                  name={name}
                  value={(formData as any)[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className={`border p-2 rounded bg-white text-sm ${full ? 'md:col-span-2' : ''} ${hasError(name) ? 'border-red-500' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 flex items-center gap-2 text-sm"
            >
              Send information <FaArrowRight />
            </button>
            {message && <p className="mt-4 text-sm text-green-500">{message}</p>}
          </div>
        </form>
      </section>
    </PageWrapper>
  );
};

export default QuotePage;
