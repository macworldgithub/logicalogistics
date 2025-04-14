"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ContentWrapper from "../../../utils/ContentWrapper";

const navItems = [
  {
    label: "Wharf Cartage",
    icon: "/vector.png",
    content: {
      description: "Transportation is offered from home to abroad and vice versa for clients.",
      points: [
        "Standard operating procedures for vehicle maintenance",
        "Journey management plan",
        "Standard operating procedures for loading"
      ],
      image: "/vehical.png"
    }
  },
  {
    label: "Container Movement",
    icon: "/Component 179.png",
    content: {
      description: "Efficient container movement tailored to your needs.",
      points: [
        "Real-time container tracking",
        "Secure port-to-port handling",
        "Optimized scheduling system"
      ],
      image: "/vehical.png"
    }
  },
  {
    label: "LCL Freight Movement",
    icon: "/lcl.png",
    content: {
      description: "Flexible LCL freight solutions for cost-effective delivery.",
      points: [
        "Shared cargo load options",
        "Safe storage and handling",
        "Extensive logistics network"
      ],
      image: "/vehical.png"
    }
  },
  {
    label: "Freight Movement",
    icon: "/bus.png",
    content: {
      description: "Transportation is offered from home to abroad and vice versa for clients.",
      points: [
        "Standard operating procedures for vehicle maintenance",
        "Journey management plan",
        "Standard operating procedures for loading"
      ],
      image: "/vehical.png"
    }
  }
];

export default function TransportationSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeContent = navItems[activeIndex].content;
  const router = useRouter();

  const handleViewDetails = () => {
    switch (activeIndex) {
      case 0:
        router.push("/container_movement");
        break;
      case 1:
        router.push("/local");
        break;
      case 2:
        router.push("/steel");
        break;
      case 3:
        router.push("/freight");
        break;
      default:
        break;
    }
  };

  return (
    <ContentWrapper>
      <section className="bg-white py-16 px-6 md:px-20 mt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our transportation</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-gray-200 pb-4 mb-10">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center justify-center gap-2 pb-2 transition-colors duration-300 ${
                activeIndex === index
                  ? "text-orange-500 font-medium border-b-2 border-orange-500"
                  : "text-gray-600"
              }`}
            >
              <Image src={item.icon} alt={item.label} width={20} height={20} />
              <span className="text-sm text-center">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div>
            <p className="text-gray-500 mb-6">{activeContent.description}</p>

            <ul className="space-y-4 text-sm text-black font-medium">
              {activeContent.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">◆</span>
                  {point}
                </li>
              ))}
            </ul>

            <button
              onClick={handleViewDetails}
              className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded flex items-center gap-2"
            >
              View details <span>→</span>
            </button>
          </div>

          {/* Image Section */}
          <div>
            <Image
              src={activeContent.image}
              alt="Transportation"
              width={600}
              height={400}
              className="rounded shadow-md w-full h-auto"
            />
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
}
