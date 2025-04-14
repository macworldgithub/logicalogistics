// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// type Location = {
//   name: string;
//   top: string;
//   left: string;
// };

// const locations: Location[] = [
//   { name: "New York, United States", top: "32%", left: "22%" },
//   { name: "London, United Kingdom", top: "28%", left: "43%" },
//   { name: "Berlin, Germany", top: "30%", left: "47%" },
//   { name: "Dubai, UAE", top: "35%", left: "57%" },
//   { name: "Mumbai, India", top: "38%", left: "62%" },
//   { name: "Beijing, China", top: "28%", left: "70%" },
//   { name: "Tokyo, Japan", top: "32%", left: "77%" },
//   { name: "Sydney, Australia", top: "70%", left: "85%" },
//   { name: "São Paulo, Brazil", top: "62%", left: "28%" },
//   { name: "Cape Town, South Africa", top: "75%", left: "48%" },
// ];

// const NetworkMap: React.FC = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <section className="w-full bg-white py-10 px-4">
//       <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8">Our network</h2>
//       <div className="relative w-full max-w-5xl mx-auto aspect-[2/1]">
//         <Image
//           src="/map.png"
//           alt="World Map"
//           fill
//           className="object-contain"
//         />
//         {locations.map((loc, index) => (
//           <div
//             key={index}
//             className="absolute"
//             style={{ top: loc.top, left: loc.left, transform: "translate(-50%, -50%)" }}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <div className="w-3 h-3 md:w-4 md:h-4 bg-orange-500 rounded-full shadow-md cursor-pointer relative">
//               {hoveredIndex === index && (
//                 <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded shadow">
//                   {loc.name}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default NetworkMap;






"use client";

import React, { useState } from "react";
import Image from "next/image";

type Location = {
  name: string;
  top: string;
  left: string;
};

const locations: Location[] = [
  { name: "New York, United States", top: "32%", left: "22%" },
  { name: "London, United Kingdom", top: "28%", left: "43%" },
  { name: "Berlin, Germany", top: "30%", left: "47%" },
  { name: "Dubai, UAE", top: "35%", left: "57%" },
  { name: "Mumbai, India", top: "38%", left: "62%" },
  { name: "Beijing, China", top: "28%", left: "70%" },
  { name: "Tokyo, Japan", top: "32%", left: "77%" },
  { name: "Sydney, Australia", top: "70%", left: "85%" },
  { name: "São Paulo, Brazil", top: "62%", left: "28%" },
  { name: "Cape Town, South Africa", top: "75%", left: "48%" },
];

const NetworkMap: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-10 px-4">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8">Our network</h2>
      <div className="relative w-full max-w-5xl mx-auto aspect-[2/1]">
        <Image
          src="/map.png"
          alt="World Map"
          fill
          className="object-contain"
        />
        {locations.map((loc, index) => (
          <div
            key={index}
            className="absolute"
            style={{ top: loc.top, left: loc.left, transform: "translate(-50%, -50%)" }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="w-3 h-3 md:w-4 md:h-4 bg-orange-500 rounded-full shadow-md cursor-pointer relative">
              {hoveredIndex === index && (
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
