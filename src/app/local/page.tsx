"use client";

import React from "react";
import PageWrapper from "../../../utils/PageWrapper";
import SidebarServices from "../../../common/services";
import Service from "../local/service";
import Image from "next/image";
import PageHeader from "../../../common/PageHeader";
const Page = () => {
  return (
    <PageWrapper>
      <PageHeader title="Local" breadcrumb="Local" />
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
      <div className="w-[99vw]">
        <div className="w-[80%] mx-auto">
          <div className="flex flex-row">
            <SidebarServices />
            <div className="-mt-5">
              <Service />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Page;
