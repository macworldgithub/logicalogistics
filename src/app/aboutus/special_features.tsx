'use client';

import {
  Clock,
  BarChart2,
  MonitorSmartphone,
  ShieldCheck,
  Headphones,
  Truck,
} from 'lucide-react';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <BarChart2 className="w-8 h-8 text-orange-500" />,
    title: 'Competitive Rates',
    description: 'Offer low cost for transportation & logistics services',
  },
  {
    icon: <Clock className="w-8 h-8 text-orange-500" />,
    title: 'Always On Time',
    description: 'Guarantee on-time delivery with all our customers',
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-orange-500" />,
    title: 'Advanced Technology',
    description: 'Enhance our performance with modern technology',
  },
  {
    icon: <Truck className="w-8 h-8 text-orange-500" />,
    title: 'Fast And Reliable',
    description: 'A mandatory requirement for logistics companies',
  },
  {
    icon: <Headphones className="w-8 h-8 text-orange-500" />,
    title: '24/7 Support',
    description: 'We answer all your questions anytime you need us',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
    title: 'Safe Packaging',
    description: 'Ensure safety for cargo with our careful packaging',
  },
];

const SpecialFeatures = () => {
  return (
    <section className="w-full py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Make Us Special
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Our strengths and advantages make us different from our competitors that meets all our customers' demand
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialFeatures;
