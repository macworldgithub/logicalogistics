'use client';
import Image from 'next/image';
import { useState } from 'react';
import ContentWrapper from '../../../utils/ContentWrapper';

const AboutCompany = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');

  return (
    <ContentWrapper>
          <section className="w-full flex flex-col lg:flex-row bg-white">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 p-6 md:p-12 flex flex-col justify-between">
        {/* Heading */}
        <div>
          <p className="text-sm text-gray-500 mb-2">About company</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Global Leading business
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            We have built a team of employees, who are participated in professional
            training courses, are groomed to handle any emerging situation with a level
            of composure that gives the customer peace of mind.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm font-semibold">CEO Jenny Wilson</span>
            <Image
              src="/sign.png" // Replace with actual image path
              alt="Signature"
              width={100}
              height={40}
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-10">
          <div className="flex border-b border-gray-300">
            <button
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-300 ${
                activeTab === 'mission'
                  ? 'border-orange-500 text-black'
                  : 'border-transparent text-gray-500'
              }`}
              onClick={() => setActiveTab('mission')}
            >
              Our mission
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-300 ${
                activeTab === 'vision'
                  ? 'border-orange-500 text-black'
                  : 'border-transparent text-gray-500'
              }`}
              onClick={() => setActiveTab('vision')}
            >
              Our vision
            </button>
          </div>

          {/* Content */}
          <div className="mt-4 text-sm text-gray-700">
            {activeTab === 'mission' && (
              <>
                <p className="mb-4">
                  Offering our customers the opportunity to conduct their shipments in a
                  friendly environmental way
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Superior transportation and logistics services</li>
                  <li>Guarantee on-time delivery</li>
                  <li>The most cost-effective delivery for clients</li>
                </ul>
              </>
            )}
            {activeTab === 'vision' && (
              <>
                <p className="mb-4">
                  Our vision is to become the most reliable and sustainable shipping
                  partner worldwide.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Innovate through technology</li>
                  <li>Global presence and local approach</li>
                  <li>Customer-centric and eco-conscious</li>
                </ul>
              </>
            )}
          </div>
          <button className="mt-6 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm">
            Explore more
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-auto relative">
        <Image
          src="/ship_container.png" // Replace with actual image path
          alt="Cargo Ship"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
    </ContentWrapper>
  );
};

export default AboutCompany;
