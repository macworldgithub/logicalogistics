import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="w-[99vw] h-[99vw] bg-amber-300">
      <div className="relative w-full h-1/2">
        <Image
          src="/home/BANNER.svg"
          alt="Home Banner"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
