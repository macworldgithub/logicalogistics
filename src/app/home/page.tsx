import React from "react";
import Image from "next/image";
import CompanyStats from './stats' 
import TransportationSection from "./transport";
import PageWrapper from "../../../utils/PageWrapper";
import SolutionsSection from "./solution";
const Home = () => {
  return (
    <div className="w-[99vw] h-[50vw] ">
      <div className="relative w-full h-1/2">
        <Image
          src="/home/BANNER.svg"
          alt="Home Banner"
          fill
          className="object-cover"
        />
        <PageWrapper>
        <div className='w-[99vw]'>
        <div className='w-[80%] mx-auto'>
        <CompanyStats/>
        <TransportationSection/>
        <SolutionsSection/>
      </div>
    </div>
    </PageWrapper>
       </div>
      
      </div> 
    
  );
};

export default Home;

