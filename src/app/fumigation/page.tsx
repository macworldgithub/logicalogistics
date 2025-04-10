"use client";

import PageHeader from "../../../common/PageHeader";
import SidebarServices from "../../../common/services";
import PageWrapper from "../../../utils/PageWrapper";
import Fast from "../fumigation/fast";

const Page = () => {
  return (
    <PageWrapper>
      <PageHeader title="Fumigation" breadcrumb="Fumigation" />
      <div className="w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-10">
          {/* Sidebar */}
          <div className="max-sm:w-full w-1/4 mt-10">
            <SidebarServices />
          </div>

          {/* Main Content */}
          <div className="max-sm:w-full w-3/4">
            <Fast />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Page;
