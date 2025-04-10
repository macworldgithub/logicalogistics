"use client";

import PageHeader from "../../../common/PageHeader";
import SidebarServices from "../../../common/services";
import PageWrapper from "../../../utils/PageWrapper";
import Sider from "../cartage/sider";

const Page = () => {
  return (
    <PageWrapper>
      <PageHeader title="Wharf Cartage" breadcrumb="FCL Container Movement" />
      <div className="w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-10">
          {/* Sidebar */}
          <div className="max-sm:w-full w-1/4 mt-10">
            <SidebarServices />
          </div>

          {/* Main Content */}
          <div className="max-sm:w-full w-3/4">
            <Sider />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Page;
