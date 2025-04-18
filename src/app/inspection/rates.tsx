"use client";
import Image from "next/image";
import React from "react";
import {
  FaChartBar,
  FaClock,
  FaCogs,
  FaTruckMoving,
  FaHeadset,
  FaBoxOpen,
} from "react-icons/fa";

const Rates = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black text-center md:text-left">
          Inspections
        </h2>
        <p className="mb-4 text-gray-800 text-xs">
          <ul>
            <li> Services Offered: </li>
            <li> . Unpacking (Goods Inspection) </li>
            <li>.Tailgate Inspection </li>
            <li> .Deep Burial</li>
          </ul>
        </p>

        <div className="w-full flex justify-center mb-10">
          <Image
            src="/check.webp"
            alt="Wharf Cartage"
            width={750}
            height={538}
            className="w-full h-auto object-cover "
          />
        </div>

        <div className="w-full max-w-4xl mx-auto mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-black mb-6">
            <div className="flex items-center gap-3">
              <FaChartBar className="text-orange-500 text-xl" />
              <span>Competitive rates</span>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-orange-500 text-xl" />
              <span>always on time</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCogs className="text-orange-500 text-xl" />
              <span>advanced technology</span>
            </div>
            <div className="flex items-center gap-3">
              <FaTruckMoving className="text-orange-500 text-xl" />
              <span>fast and reliable</span>
            </div>
            <div className="flex items-center gap-3">
              <FaHeadset className="text-orange-500 text-xl" />
              <span>24/7 support</span>
            </div>
            <div className="flex items-center gap-3">
              <FaBoxOpen className="text-orange-500 text-xl" />
              <span>safe packaging</span>
            </div>
          </div>

          <p className="text-gray-600 text-xs">
            We are proud to serve more than 3,000 customers and are the most
            environment friendly mode of land transportation, so our rail
            freight service is always the top choice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rates;
