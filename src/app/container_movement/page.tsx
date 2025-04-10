"use client";

import SidebarServices from "../../../common/services";
import PageWrapper from "../../../utils/PageWrapper";
import FCLvsLCL from "./diagram1";
import FCLvsLCLDiagram2 from "./diagram2";
import PageHeader from "../../../common/PageHeader";
const Page = () => {
  return (
    <PageWrapper>
      <PageHeader
        title="FCL Container Movement"
        breadcrumb="FCL Container Movement"
      />
      <div className="w-[99vw] px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row">
          {/* Sidebar */}
          <div className="max-sm:w-full w-[30%] mt-10">
            <SidebarServices />
          </div>

          {/* Main Content */}
          <div className="max-sm:w-full w-[70%] mb-20">
            <FCLvsLCL />
            <FCLvsLCLDiagram2 />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Page;
