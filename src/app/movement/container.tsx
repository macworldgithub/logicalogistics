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

const Sider = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black text-center md:text-left">
          Container Movement
        </h2>
        <p className="mb-4 text-gray-800 text-xs">
          While offering a link in the international logistic solutions we also
          can assist with all other container movement requirements. Be it out
          of Melbourne’s wharfs or simply moving containers throughout the
          country we can certainly assist.
        </p>

        <div className="w-full flex justify-center mb-10">
          <Image
            src="/movement1.png"
            alt="Wharf Cartage"
            width={750}
            height={538}
            className="w-full h-auto object-cover"
          />
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
          Unique Position within the Industry
        </h3>
        <p className="mb-4 text-gray-800 text-xs">
          At Logical we aim to hold a unique position within the logistics
          industry, we can offer a service more flexible than that of any large
          company whilst maintain the personality and dedication of a smaller
          company.
        </p>
        <p className="mb-4 text-gray-800 text-xs">
          We operate our wharf cartage fleet 24/7, collecting containers off the
          wharf throughout the evenings to ensure any next day delivery
          requirements can be met. We also can happily assist with out of gauge
          container requirements as well.
        </p>
        <p className="mb-10 text-gray-800 text-xs">
          Our fleet consist of a multitude of trailers such as side-loaders, and
          skels both retractable and non-retractable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div>
            <Image
              src="/ship1.png"
              alt="Container Ship at Port"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            <Image
              src="/truck.png"
              alt="Fleet Trucks"
              width={400}
              height={280}
              className="w-full h-full object-cover "
            />
            <Image
              src="/cargo.png"
              alt="Container Loader"
              width={400}
              height={280}
              className="w-full h-full object-cover "
            />
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-black">
            24 hour wharf to Door Capabilities
          </h3>
          <p className="text-gray-600 text-xs mb-2">
            Our fleet offers GPS tracking to ensure feedback and live accurate
            on time deliveries.
          </p>
          <p className="text-gray-600 text-xs mb-6">
            Gen-sets trailers for live reefer transportation are available, we
            also have 3-phase power on site for reefer storage containers, or
            containers just in transit.
          </p>

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

export default Sider;
