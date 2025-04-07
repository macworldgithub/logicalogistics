import React from "react";
import Image from "next/image"; // if using Next.js

const Fta = () => {
  const logos = [
    { src: "/transport.png", alt: "" },
    { src: "/workface.png", alt: "" },
    { src: "/fta.png", alt: "" },
    { src: "/food.png", alt: "" },
  ];

  return (
    <div className="w-full bg-gray-200  py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fta;
