import React from "react";
import Image from "next/image";
import ContentWrapper from "../utils/ContentWrapper";

interface BannerProps {
  title: string;
  breadcrumb: string;
}
const PageHeader = ({ title, breadcrumb }: BannerProps) => {
  return (
   <ContentWrapper>
    <div className="w-[100%] h-[20vw] relative  ">
      <Image
        src="/home/BANNER.svg"
        alt={`${title} Banner`}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-10 ">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
        <p className="text-white text-sm mt-2">Home &gt; {breadcrumb}</p>
      </div>
    </div>
    </ContentWrapper>
  );
};

export default PageHeader;


