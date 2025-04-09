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

const Service = () => {
  return (
    <ContentWrapper>
      <div className="w-full flex flex-col items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black text-center md:text-left">
            Local
          </h2>
          <p className="mb-4 text-gray-800 text-xs">
            At Logica, we understand that efficient local container movement is
            essential to keeping your supply chain running smoothly. Whether
            you’re moving containers between ports, warehouses, or distribution
            centers, our team is equipped to handle every aspect with precision
            and speed. We offer flexible, reliable solutions tailored to your
            specific needs, ensuring that your goods are where they need to be,
            exactly when they need to be there. With a focus on minimizing
            delays and maximizing efficiency, our local container movement
            services help you stay ahead in a fast-paced market. Trust Logica to
            manage the logistics, so you can focus on growing your business.
          </p>

          <div className="w-full flex justify-center mb-10">
            <Image
              src="/truck.png"
              alt="Wharf Cartage"
              width={750}
              height={538}
              className="w-full h-auto object-cover mt-10"
            />
          </div>

          <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
            LCL Services
          </h3>
          <p className="mb-4 text-gray-800 text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </p>
          <p className="mb-4 text-gray-800 text-xs">
            Remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <Image
            src="/container.png"
            alt="Wharf Cartage"
            width={750}
            height={538}
            className="w-full h-auto object-cover"
          />

          <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
            LCL – Diagram 1
          </h3>
          <p className="mb-4 text-gray-800 text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </p>
          <p className="mb-4 text-gray-800 text-xs">
            Remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <Image
            src="/shipment.png"
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
    </ContentWrapper>
  );
};

export default Service;
