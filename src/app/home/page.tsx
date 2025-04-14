import StaticImage from "./image";
import ProcessSection from "./process";
import SolutionsSection from "./solution";
import CompanyStats from "./stats";
import TeamMembersSection from "./teamMember";
import TransportationSection from "./transport";
import ContactSection from "./contactSection";
import NewsSection from "./NewSection"
import OurNetwork from "./map"
import QuoteBanner from "./banner"
import PageWrapper from "../../../utils/PageWrapper";
const Home = () => {
  return (
    
    <div className="w-[99vw]">
      <QuoteBanner/>
      <PageWrapper>
      <div className="relative z-10">
        <CompanyStats />
        <TransportationSection />
        <SolutionsSection />
        <ProcessSection/>
        <StaticImage src="/section12.png" alt="Container Ship Image" />
        <TeamMembersSection/>
        <StaticImage src="/SECTION 11.png" alt="Container Ship Image" />
        <ContactSection/>
        <NewsSection/>
        <OurNetwork/>
      </div>
      </PageWrapper>
    </div>
    
  );
};
export default Home;