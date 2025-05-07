"use client";

import React, { useState } from "react";
import { FaShieldAlt, FaClock, FaLock, FaArrowRight } from "react-icons/fa";
import PageWrapper from "../../../utils/PageWrapper";
import PageHeader from "../../../common/PageHeader";

type QuoteFormData = {
  origin: string;
  destination: string;
  commodity: string;
  serviceType: string;
  package: string;
  dimensions: string;
  options: string[];
  name: string;
  email: string;
  phone: string;
  comments: string;
};

const QuotePage = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    origin: "",
    destination: "",
    commodity: "",
    serviceType: "",
    package: "",
    dimensions: "",
    options: [],
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [selectedTab, setSelectedTab] = useState<"shipment" | "warehouse">("shipment");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        options: checked ? [value] : [],
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setFormErrors((prev) => prev.filter((error) => error !== name));
  };

  const validateForm = () => {
    const errors: string[] = [];

    const fieldsToValidate =
      selectedTab === "shipment"
        ? Object.keys(formData)
        : ["name", "email", "phone", "comments"];

    for (const field of fieldsToValidate) {
      const value = formData[field as keyof QuoteFormData];
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
      const response = await fetch("/api/GetInTouch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setMessage(data.message || "Submission successful!");
    } catch {
      setMessage("Something went wrong. Please try again.");
    }
  };

  const hasError = (field: string) => formErrors.includes(field);

  return (
    <PageWrapper>
      <PageHeader title="Get a quote" breadcrumb="Get a quote" />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-2">
          Fill out the form and we will get in touch
        </h2>

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
        <form
          onSubmit={handleSubmit}
          className="bg-[#f9f9f9] p-8 rounded-lg shadow-md space-y-10 text-black"
        >
          {/* Toggle Headings */}
          <div className="flex justify-between items-start">
            <h3
              className={`text-lg mb-4 cursor-pointer px-2 py-1 rounded transition ${
                selectedTab === "shipment"
                  ? "bg-orange-300 text-orange-500 font-semibold"
                  : "hover:text-orange-500 hover:bg-orange-50"
              }`}
              onClick={() => setSelectedTab("shipment")}
            >
              Shipment Info
            </h3>
            <h3
              className={`text-md mb-3 cursor-pointer px-2 py-1 rounded transition ${
                selectedTab === "warehouse"
                  ? "font-bold text-orange-500 bg-orange-300"
                  : "hover:text-orange-500 hover:font-bold hover:bg-orange-50"
              }`}
              onClick={() => setSelectedTab("warehouse")}
            >
              Warehouse/Storage
            </h3>
          </div>

          {selectedTab === "shipment" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "origin",
                    label: "Origin",
                    options: [
                      "VIC",
                      "NSW",
                      "QLD",
                      "WA",
                      "SA",
                      "ACT",
                      "NT",
                      "TAS",
                      "International",
                    ],
                  },
                  {
                    name: "destination",
                    label: "Destination",
                    options: [
                      "VIC Metro",
                      "VIC Rural",
                      "Wharf",
                      "Logica Warehouse",
                      "Warehouse External",
                    ],
                  },
                  {
                    name: "commodity",
                    label: "Commodity",
                    options: ["Electronics", "Furniture", "Food"],
                  },
                  {
                    name: "serviceType",
                    label: "Service Type",
                    options: ["Air Freight", "Ocean Freight", "Ground Shipping"],
                  },
                  {
                    name: "package",
                    label: "Package",
                    options: ["Box", "Pallet", "Crate"],
                  },
                  {
                    name: "dimensions",
                    label: "Dimensions",
                    options: ["Small", "Medium", "Large"],
                  },
                ].map(({ name, label, options }) => (
                  <div className="flex flex-col" key={name}>
                    <label className="mb-1 text-sm">{label}</label>
                    <select
                      name={name}
                      value={formData[name as keyof QuoteFormData] as string}
                      onChange={handleChange}
                      className={`border p-2 rounded bg-white text-sm ${
                        hasError(name) ? "border-red-500" : ""
                      }`}
                    >
                      <option value="">Select {label}</option>
                      {options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              {/* Checkboxes */}
              <div className="flex flex-wrap gap-4 mt-6 text-sm">
                {["Insurance", "Packaging", "Fast delivery"].map((option) => (
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
                {hasError("options") && (
                  <p className="text-red-500 text-sm mt-2">
                    Please select one option.
                  </p>
                )}
              </div>
            </>
          )}

          {/* Common Fields */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Personal Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "name", placeholder: "Enter Name", type: "text" },
                { name: "email", placeholder: "Your email", type: "email" },
                { name: "phone", placeholder: "Your phone number", type: "text" },
              ].map(({ name, placeholder, type }) => (
                <input
                  key={name}
                  type={type}
                  name={name}
                  value={formData[name as keyof QuoteFormData] as string}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className={`border p-2 rounded bg-white text-sm ${
                    hasError(name) ? "border-red-500" : ""
                  }`}
                />
              ))}
              <textarea
                name="comments"
                placeholder="Comments"
                value={formData.comments}
                onChange={handleChange}
                rows={4}
                className={`md:col-span-2 border p-2 rounded bg-white text-sm ${
                  hasError("comments") ? "border-red-500" : ""
                }`}
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
            {message && (
              <p className="mt-4 text-sm text-green-500">{message}</p>
            )}
          </div>
        </form>
      </section>
    </PageWrapper>
  );
};

export default QuotePage;
