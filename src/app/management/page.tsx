// "use client";

// import React from "react";
// import PageWrapper from "../../../utils/PageWrapper";
// import SidebarServices from "../../../common/services";
// import Image from "next/image";
// import State from "../inter/state";
// const Page = () => {
//   return (
//     <PageWrapper>
//       <div className="w-[99vw] h-[50vw]  ">
//         <div className="relative w-full h-1/2">
//           <Image
//             src="/home/BANNER.svg"
//             alt="Home Banner"
//             fill
//             className="object-cover"
//           />
//         </div>
//       </div>
//       <div className="w-[99vw]">
//         <div className="w-[80%] mx-auto">
//           <div className="flex flex-row">
//             <SidebarServices />
//             <div className="-mt-5">
//               <State />
//             </div>
//           </div>
//         </div>
//       </div>
//     </PageWrapper>
//   );
// };

// export default Page;

"use client";

import PageHeader from "../../../common/PageHeader";
import SidebarServices from "../../../common/services";
import PageWrapper from "../../../utils/PageWrapper";
import Inventory from "../management/inventory";

const Page = () => {
  return (
    <PageWrapper>
      <PageHeader title="Interstate" breadcrumb="Interstate" />
      <div className="w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-10">
          {/* Sidebar */}
          <div className="max-sm:w-full w-1/4 mt-10">
            <SidebarServices />
          </div>

          {/* Main Content */}
          <div className="max-sm:w-full w-3/4">
            <Inventory />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Page;
