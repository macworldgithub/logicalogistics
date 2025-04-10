"use client";
import React from "react";
import Image from "next/image";

const solutions = [
  {
    title: "Wharf Cartage",
    image: "/wharf.jpg", // Replace with your actual file
  },
  {
    title: "Freight Movement",
    image: "/freight.jpg",
  },
  {
    title: "Bio Security",
    image: "/bio.jpg",
  },
  {
    title: "Inventory Management",
    image: "/inventory.jpg",
  },
  {
    title: "Cross Docking",
    image: "/dock.jpg",
  },
];

export default function SolutionsSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions we offer</h2>
      <p className="text-gray-600 mb-10 max-w-3xl">
        Provides high quality and comprehensive transportation services with
        competitive rates and always understand client’s requirements.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {solutions.map((item, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded shadow-md">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-2">
              <div className="text-sm text-white font-semibold flex items-center gap-2">
                <span className="text-orange-500">▸</span> {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
