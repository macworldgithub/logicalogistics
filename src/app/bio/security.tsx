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

const Security = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black text-center md:text-left">
          Bio Security
        </h2>
        <p className="mb-4 text-gray-800 text-xs">
          At Logica, we take bio-security seriously, ensuring that your goods
          meet the highest standards of safety and compliance. As a
          government-accredited provider, we adhere to strict regulations and
          protocols designed to protect against biological threats and prevent
          the spread of pests and diseases. Our bio-security services include
          thorough inspections, quarantine management, and precise
          documentation, all handled by our highly trained and certified team.
          Whether you’re importing or exporting, you can trust Logica to
          safeguard your shipments and ensure they meet all necessary legal and
          environmental requirements. With our commitment to excellence, we help
          you navigate the complexities of bio-security, giving you peace of
          mind and protecting public health.
        </p>

        <div className="w-full flex justify-center mb-10">
          <Image
            src="/scan.webp"
            alt="Wharf Cartage"
            width={750}
            height={538}
            className="w-full h-auto object-cover mt-10"
          />
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
          Government Accredited Bio-Security
        </h3>
        <p className="mb-4 text-gray-800 text-xs">
          At Logica, we take bio-security seriously, ensuring that your goods
          meet the highest standards of safety and compliance. As a
          government-accredited provider, we adhere to strict regulations and
          protocols designed to protect against biological threats and prevent
          the spread of pests and diseases. Our bio-security services include
          thorough inspections, quarantine management, and precise
          documentation, all handled by our highly trained and certified team.
          Whether you’re importing or exporting, you can trust Logica to
          safeguard your shipments and ensure they meet all necessary legal and
          environmental requirements. With our commitment to excellence, we help
          you navigate the complexities of bio-security, giving you peace of
          mind and protecting public health
        </p>

        <Image
          src="/work.webp"
          alt="Wharf Cartage"
          width={750}
          height={538}
          className="w-full h-auto object-cover "
        />

        <h3 className="text-xl md:text-2xl font-bold mb-4 text-black mt-16">
          Quarantine Inspection, Fumigation Storage and Distribution
        </h3>
        <p className="mb-4 text-gray-800 text-xs">
          At Logica, we provide comprehensive services to ensure your goods meet
          all regulatory requirements and are handled with the utmost care. Our
          quarantine inspection services thoroughly examine shipments to prevent
          the entry of pests and diseases, safeguarding both your cargo and
          public health. If necessary, we offer fumigation services to address
          any potential bio-security concerns, ensuring your goods are compliant
          with all regulations. Our state-of-the-art storage facilities provide
          a secure environment for your products, with controlled conditions to
          maintain their integrity. From there, our efficient distribution
          network ensures timely and accurate delivery to your desired location.
          Trust Logica to manage every aspect of your logistics with precision
          and care, from inspection to distribution.
        </p>

        <Image
          src="/total.webp"
          alt="Wharf Cartage"
          width={750}
          height={538}
          className="w-full h-auto object-cover mt-14"
        />

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

export default Security;
