'use client';


import Image from 'next/image';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const featuresTop: Feature[] = [
  {
    icon: "/competitive.png",
    title: 'Competitive Rates',
    description: 'Offer low cost for transportation & logistics services',
  },
  {
    icon: "/time.png",
    title: 'Always On Time',
    description: 'Guarantee on-time delivery with all our customers',
  },
];

const featuresBottom: Feature[] = [
  {
    icon: "/tech.png",
    title: 'Advanced Technology',
    description: 'Enhance our performance with modern technology',
  },
  {
    icon: "/reliability.png",
    title: 'Fast And Reliable',
    description: 'A mandatory requirement for logistics companies',
  },
  {
    icon: "/24support.png",
    title: '24/7 Support',
    description: 'We answer all your questions anytime you need us',
  },
  {
    icon: "/packaging.png",
    title: 'Safe Packaging',
    description: 'Ensure safety for cargo with our careful packaging',
  },
];

const SpecialFeatures = () => {
  return (
    <section className="w-full py-16 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1f38] mb-4">
              What Make Us Special
            </h2>
            <p className="text-[#5f6f81] text-base max-w-xl">
              Our strengths and advantages make us different from our competitors that meets all our customers' demand
            </p>
          </div>

          {/* Right Column - 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featuresTop.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                 <Image src={feature.icon} alt="Feature Icon" width={30} height={30} className="mb-4 mx-auto" />
                <h3 className="text-lg font-bold text-[#0c1f38] mb-2">{feature.title}</h3>
                <p className="text-[#5f6f81] text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresBottom.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <Image src={feature.icon} alt="Feature Icon" width={30} height={30} className="mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-[#0c1f38] mb-2">{feature.title}</h3>
              <p className="text-[#5f6f81] text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialFeatures;
