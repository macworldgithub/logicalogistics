import React from "react";
import Image from "next/image";
import Sider from "../../app/cartage/sider";
const Page = () => {
  return (
    <div>
      <div className="w-[99vw] h-[50vw]  ">
        <div className="relative w-full h-1/2">
          <Image
            src="/home/BANNER.svg"
            alt="Home Banner"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <Sider />
    </div>
  );
};

export default Page;
