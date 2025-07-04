"use client";

import React, { useState } from "react";
import Image from "next/image";

type Location = {
  name: string;
  top: string;
  left: string;
};

const locations: Location[] = [
  { name: "Seattle, USA", top: "25%", left: "20%" },
  { name: "Toronto, Canada", top: "22%", left: "25%" },
  { name: "Mexico City, Mexico", top: "35%", left: "20%" },
  { name: "Lima, Peru", top: "55%", left: "25%" },
  { name: "Buenos Aires, Argentina", top: "70%", left: "30%" },
  { name: "Lisbon, Portugal", top: "28%", left: "40%" },
  { name: "Madrid, Spain", top: "30%", left: "42%" },
  { name: "Rome, Italy", top: "32%", left: "46%" },
  { name: "Istanbul, Turkey", top: "34%", left: "52%" },
  { name: "Nairobi, Kenya", top: "60%", left: "53%" },
  { name: "Karachi, Pakistan", top: "40%", left: "60%" },
  { name: "Dhaka, Bangladesh", top: "42%", left: "65%" },
  { name: "Seoul, South Korea", top: "30%", left: "75%" },
  { name: "Melbourne, Australia", top: "72%", left: "82%" },
  { name: "Auckland, New Zealand", top: "78%", left: "88%" },
];

const NetworkMap: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTooltipActive, setIsTooltipActive] = useState(false);

  return (
    <section className="w-full bg-white ">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">Our network</h2>

      <div className="relative w-full max-w-5xl mx-auto aspect-[2/1]">
        <Image
          src="/mapp.png"
          alt="World Map"
          fill
          className=" w-[400px] h-[400px]"
          priority
        />

        {locations.map((loc, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              top: loc.top,
              left: loc.left,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => {
              setHoveredIndex(index);
              setIsTooltipActive(true);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setIsTooltipActive(false);
            }}
          >
            <div className="w-3 h-3 md:w-4 md:h-4 bg-orange-500 rounded-full shadow-md cursor-pointer relative">
              {isTooltipActive && hoveredIndex === index && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded shadow whitespace-nowrap z-10">
                  {loc.name}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NetworkMap;
