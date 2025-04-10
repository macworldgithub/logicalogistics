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
import ContentWrapper from "../../../utils/ContentWrapper";

const System = () => {
  return (
    <ContentWrapper>
      <div className="w-full flex flex-col items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black text-center md:text-left">
            Inventory Management
          </h2>
          <p className="mb-4 text-gray-800 text-xs">
            At Logica we are constantly striving to achieve a seamless supply
            chain for your goods, ensuring that you can entrust us with their
            handling and transportation. When outsourcing third- or fourth-party
            logistics we want to ensure you are being represented to the highest
            level
          </p>
          <p className="mb-4 text-gray-800 text-xs">
            We can assist with container unpacking/packing, goods can be
            received for storage or cross-docked for expedient delivery
          </p>
          <p className="mb-4 text-gray-800 text-xs">
            Logica handles cartons through to steel pipe, our 3PL warehousing
            aims to offer our clients a strategic advantage with our
            cost-effective solutions and improved supply chain efficiencie
          </p>

          <div className="w-full flex justify-center mb-10">
            <Image
              src="/set.png"
              alt="Wharf Cartage"
              width={750}
              height={538}
              className="w-full h-auto object-cover mt-10"
            />
          </div>

          <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
            Packing, Tracking and Shipping
          </h3>
          <p className="mb-4 text-gray-800 text-xs">
            At Logica, we understand that seamless logistics is about more than
            just moving goods—it’s about ensuring that every step of the journey
            is handled with care and precision. Our packing services are
            designed to protect your valuable shipments, using industry-leading
            materials and techniques to minimize risk. With our advanced
            tracking systems, you can stay informed at every stage, knowing
            exactly where your goods are and when they’ll arrive. And when it
            comes to shipping, we offer a range of reliable, cost-effective
            solutions tailored to meet your specific needs, whether you’re
            sending items locally or across the globe. At Logica, we’re
            committed to delivering peace of mind, one shipment at a time.
          </p>

          <Image
            src="/pl.png"
            alt="Wharf Cartage"
            width={750}
            height={538}
            className="w-full h-auto object-cover"
          />

          <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
            Outsourcing Third or Fourth Party Logistics
          </h3>
          <p className="mb-4 text-gray-800 text-xs">
            Outsourcing your logistics to a trusted third- or fourth-party
            provider like Logica can transform the way you do business. We
            specialize in managing complex supply chains, allowing you to focus
            on what you do best. Whether you need us to oversee your entire
            logistics operation or just specific elements, our expert team will
            tailor a solution that meets your unique needs. From warehousing and
            inventory management to transportation and order fulfillment, we
            handle it all with efficiency and precision. Partnering with Logica
            means gaining access to cutting-edge technology, industry expertise,
            and a dedicated team committed to driving your success. Let us
            simplify your logistics so you can concentrate on growing your
            business
          </p>

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
    </ContentWrapper>
  );
};

export default System;
