// import React from "react";
// import Image from "next/image";
// import Sider from "../../app/cartage/sider";
// import Service from "../../app/container_movement/services";
// const Page = () => {
//   return (
//     <div>
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
//       <div className="flex flex-row lg:px-32 md:px-4 max-md:px-4 ">
//         <div className="max-sm:hidden">
//           <Service />
//         </div>
//         <Sider />
//       </div>
//     </div>
//   );
// };

// export default Page;

import React from "react";
import Image from "next/image";
import Sider from "../../app/cartage/sider";
import Service from "../../app/container_movement/services";

const Page = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="w-[99vw] h-[50vw]">
        <div className="relative w-full h-1/2">
          <Image
            src="/home/BANNER.svg"
            alt="Home Banner"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-row   ">
        <Service />
        <Sider />
      </div>
    </div>
  );
};

export default Page;
