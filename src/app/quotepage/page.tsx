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

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value } = target;

    if (target.type === 'checkbox') {
      const checked = (target as HTMLInputElement).checked;
      setFormData(prev => {
        const updatedOptions = checked
          ? [...prev.options, value]
          : prev.options.filter(opt => opt !== value);
        return { ...prev, options: updatedOptions };
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/GetInTouch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setMessage(data.message || 'Submission successful!');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <PageWrapper>
      <PageHeader title="Get a quote" breadcrumb="Get a quote" />
      {/* Form Section */}
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
            <h3 className="text-lg font-semibold mb-4">Shipment infor</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Origin</label>
                <select name="origin" value={formData.origin} onChange={handleChange} className="border p-2 rounded bg-white text-sm">
                  <option>Select Origin</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Destination</label>
                <select name="destination" value={formData.destination} onChange={handleChange} className="border p-2 rounded bg-white text-sm">
                  <option>Select Destination</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Commodity</label>
                <select name="commodity" value={formData.commodity} onChange={handleChange} className="border p-2 rounded bg-white text-sm">
                  <option>Select Commodity</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Service Type</label>
                <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="border p-2 rounded bg-white text-sm">
                  <option>Select Service</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Package</label>
                <select name="package" value={formData.package} onChange={handleChange} className="border p-2 rounded bg-white text-sm">
                  <option>Select</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Dimensions</label>
                <select name="dimensions" value={formData.dimensions} onChange={handleChange} className="border p-2 rounded bg-white text-sm">
                  <option>Select</option>
                </select>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="flex flex-wrap gap-4 mt-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" name="insurance" value="Insurance" onChange={handleChange} className="accent-orange-500" />
                Insurance
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="packaging" value="Packaging" onChange={handleChange} className="accent-orange-500" />
                Packaging
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="fastDelivery" value="Fast delivery" onChange={handleChange} className="accent-orange-500" />
                Fast delivery
              </label>
            </div>
          </div>

          {/* Personal Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Personal infor</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className="border p-2 rounded bg-white text-sm"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="border p-2 rounded bg-white text-sm"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="border p-2 rounded bg-white text-sm md:col-span-2"
              />
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
            {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
          </div>
        </form>
      </section>
    </PageWrapper>
  );
};

export default QuotePage;
