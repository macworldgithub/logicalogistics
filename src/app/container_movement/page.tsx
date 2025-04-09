"use client";

import React from "react";
import PageWrapper from "../../../utils/PageWrapper";
import SidebarServices from '../../../common/services';
import FCLvsLCL from './diagram1';
import FCLvsLCLDiagram2 from './diagram2';

const Page = () => {
  return (
    <PageWrapper>
      <div className="w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <SidebarServices />
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <FCLvsLCL />
            <FCLvsLCLDiagram2 />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Page;
