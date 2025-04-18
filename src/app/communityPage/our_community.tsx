'use client';

import Image from 'next/image';

export default function CommunityPage() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top section with image and text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="w-full">
            <Image
              src="/community.webp"
              alt="Team Leader"
              width={500}
              height={500}
              className="w-full h-auto  object-cover"
            />
          </div>

          {/* Text content */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Our Community/Team
            </h2>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              At Logica we are a collection of people who have worked together over the years for different companies and decided that we wanted to be able to implement the best of what we have learned over time. We have been brought together as a part of Rhys’s vision that the right people are the biggest asset a company can ever have...
            </p>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              The greatest pleasure in our professional careers has been forming this team together, and through our loyalty to staff development Logica are creating a solution focused team with a common goal of “making Logistics simple”...
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Reconnecting this team has been my greatest pleasure having worked with everyone over my professional career (
              <a href="#" className="text-blue-600 underline">Logica CEO</a>).
            </p>
          </div>
        </div>

        {/* Community logos */}
        <div className="mt-20">
          <h3 className="text-lg md:text-xl font-semibold mb-10">Our Community</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { name: 'Peter Mac', logo: '/peter.png' },
              { name: 'Black Dog Institute', logo: '/dog.png' },
              { name: 'Frontier Medicines', logo: '/medicain.png' },
              { name: 'Core Flight', logo: '/flight.png' },
            ].map((partner) => (
              <div key={partner.name} className="flex flex-col items-center space-y-3">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={80}
                  height={80}
                  className="h-20 object-contain"
                />
                <p className="text-xs text-gray-800">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
