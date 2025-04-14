import React from "react";
import Image from "next/image";

interface BannerProps {
  title: string;
  breadcrumb: string;
}
const PageHeader = ({ title, breadcrumb }: BannerProps) => {
  return (
    <div className="w-[99vw] h-[20vw] relative -mt-4">
      <Image
        src="/home/BANNER.svg"
        alt="Banner"
        // alt={${title} Banner}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-10 ">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
        <p className="text-white text-sm mt-2">Home &gt; {breadcrumb}</p>
      </div>
    </div>
  );
};

export default PageHeader;
