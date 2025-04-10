import Image from "next/image";
import StaticImage from "./image";
import ProcessSection from "./process";
import SolutionsSection from "./solution";
import CompanyStats from "./stats";
import TeamMembersSection from "./teamMember";
import TransportationSection from "./transport";
const Home = () => {
  return (
    <div className="w-[99vw]">
      <div className="relative w-full h-[50vw]">
        <Image
          src="/home/BANNER.svg"
          alt="Home Banner"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="relative z-10">
        <CompanyStats />
        <TransportationSection />
        <SolutionsSection />
        <ProcessSection/>
        <StaticImage src="/section12.png" alt="Container Ship Image" />
        <TeamMembersSection/>
        <StaticImage src="/SECTION 11.png" alt="Container Ship Image" />
      </div>
    </div>
    
  );
};

export default Home;