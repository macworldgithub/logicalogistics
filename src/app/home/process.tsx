// components/ProcessSection.tsx
import Image from "next/image";
import React from "react";

const ProcessSection: React.FC = () => {
  return (
    <section className="px-4 md:px-16 py-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">Our process</h2>
      <p className="text-gray-600 mb-8">
        We guarantee strict compliance in all procedures in journeys.
      </p>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-64 md:h-96 rounded-md overflow-hidden shadow-md">
            <Image
              src="/process.png"
              alt="Process"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Steps */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 relative">
              <Image
                src="/num1.png"
                alt="Step 1"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Before journey</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Standard operating procedures for vehicle maintenance</li>
                <li>Journey management plan</li>
                <li>Standard operating procedures for loading</li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 relative">
              <Image
                src="/no2.png"
                alt="Step 2"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">During journey</h3>
              <p className="text-gray-700 mt-2">
                During journey, we have to face with logistics logistics, so an emergency response plan is a must
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Emergency response plan</li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 relative">
              <Image
                src="/no3.png"
                alt="Step 3"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">After journey</h3>
              <p className="text-gray-700 mt-2">
                Our process will continue after journey by checking all tasks were completed to find out issues
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Incident management checklist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
