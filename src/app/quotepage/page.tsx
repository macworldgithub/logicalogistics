import React from "react";
import Image from "next/image";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import cartage from "../assets/cartage.png";
import { FaShieldAlt, FaClock, FaLock, FaArrowRight } from "react-icons/fa";

const QuotePage = () => {
  return (
    <div className="w-full overflow-hidden bg-white text-gray-800 font-sans">
      <Navbar />

      {/* Hero Image */}
      <div className="relative w-full h-[400px]">
        <Image
          src={cartage}
          alt="Cartage"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-white bg-opacity-30 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-black">Get A Quote</h1>
        </div>
      </div>

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
        <form className="bg-[#f9f9f9] p-8 rounded-lg shadow-md space-y-10">
          {/* Shipment Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shipment infor</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Origin</label>
                <select className="border p-2 rounded bg-white text-sm">
                  <option>Select Origin</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Destination</label>
                <select className="border p-2 rounded bg-white text-sm">
                  <option>Select Destination</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Commodity</label>
                <select className="border p-2 rounded bg-white text-sm">
                  <option>Select Commodity</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Service Type</label>
                <select className="border p-2 rounded bg-white text-sm">
                  <option>Select Service</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Package</label>
                <select className="border p-2 rounded bg-white text-sm">
                  <option>Select</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Dimensions</label>
                <select className="border p-2 rounded bg-white text-sm">
                  <option>Select</option>
                </select>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="flex flex-wrap gap-4 mt-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-orange-500" />
                Insurance
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-orange-500" />
                Packaging
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-orange-500" />
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
                placeholder="Enter Name"
                className="border p-2 rounded bg-white text-sm"
              />
              <input
                type="email"
                placeholder="Your email"
                className="border p-2 rounded bg-white text-sm"
              />
              <input
                type="text"
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
          </div>
        </form>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default QuotePage;
