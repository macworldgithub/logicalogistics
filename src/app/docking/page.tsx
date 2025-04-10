"use client";

import PageHeader from "../../../common/PageHeader";
import SidebarServices from "../../../common/services";
import PageWrapper from "../../../utils/PageWrapper";
import Cross from "../docking/cross";

const Page = () => {
  return (
    <PageWrapper>
      <PageHeader title="Cross Docking" breadcrumb="Fumigation" />
      <div className="w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-10">
          {/* Sidebar */}
          <div className="max-sm:w-full w-1/4 mt-10">
            <SidebarServices />
          </div>

          {/* Main Content */}
          <div className="max-sm:w-full w-3/4">
            <Cross />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Page;
