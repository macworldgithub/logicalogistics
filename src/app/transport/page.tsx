import React from "react";
import Image from "next/image";
import Lcl from "../../app/transport/lcl";

const Page = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="w-[99vw] h-[50vw]">
        <div className="relative w-full h-1/2">
          <Image
            src="/home/BANNER.svg"
            alt="Home Banner"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <Lcl />
    </div>
  );
};

export default Page;
