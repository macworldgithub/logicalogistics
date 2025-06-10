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

const Docking = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black text-center md:text-left">
          Cross Docking
        </h2>
        <p className="mb-4 text-gray-800 text-xs">
         At Logica we can offer end to end services, with trailer capabilities such as tailgate rigids, semi and B-double tautliners (including mezzanine floor tautliners) and flat top trailer.
         </p>
        <p className="text-gray-800 text-xs"> 
         Goods can be collected or delivered depending on the requirement. 
        </p>

        <div className="w-full flex justify-center mb-10">
          <Image
            src="/plane.webp"
            alt="Wharf Cartage"
            width={750}
            height={538}
            className="w-full h-auto object-cover mt-10"
          />
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
          Cross Document for FCL and LCL shipments
        </h3>
        <p className="mb-4 text-gray-800 text-xs">
          Our cross-docking services for both Full Container Load (FCL) and Less
          than Container Load (LCL) shipments are designed to streamline your
          supply chain by minimizing handling and reducing storage time. Whether
          you’re moving a full container or a smaller consolidated load, our
          expert team quickly transfers your cargo directly from one mode of
          transportation to another, bypassing traditional warehousing. This not
          only accelerates delivery times but also cuts down on costs, ensuring
          your goods reach their destination faster and more efficiently. Trust
          Logica to optimize your logistics with seamless cross-docking
          solutions tailored to your needs.
        </p>

        <Image
          src="/heat.webp"
          alt="Wharf Cartage"
          width={750}
          height={538}
          className="w-full h-auto object-cover "
        />

        <h3 className="text-xl md:text-2xl font-bold mb-4 text-black mt-16">
          Timely turn-around of your freight
        </h3>
        <p className="mb-4 text-gray-800 text-xs">
          At Logica, we prioritize the timely turnaround of your freight,
          ensuring that your shipments are handled with speed and precision from
          start to finish. We understand that time is of the essence in
          logistics, and our streamlined processes are designed to expedite
          every stage of your freight’s journey. From prompt loading and
          efficient transit to on-time delivery, our dedicated team works
          diligently to minimize delays and maximize efficiency. With our
          commitment to punctuality and our advanced tracking systems, you can
          confidently rely on Logica to keep your supply chain moving smoothly
          and meet your critical deadlines
        </p>

        <Image
          src="/truck1.webp"
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

export default Docking;
