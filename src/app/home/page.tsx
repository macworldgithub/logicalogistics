import PageWrapper from "../../../utils/PageWrapper";
import QuoteBanner from "./banner";
import ContactSection from "./contactSection";
import StaticImage from "./image";
import OurNetwork from "./map";
import NewsSection from "./NewSection";
import ProcessSection from "./process";
import SolutionsSection from "./solution";
import TeamMembersSection from "./teamMember";
import TransportationSection from "./transport";
const Home = () => {
  return (
    <>
      <QuoteBanner />
      <PageWrapper>
        <div className='w-[99vw] lg:mt-6'>
        <div className='w-[70%] mx-auto'>
          <TransportationSection />
          <SolutionsSection />
          <ProcessSection />
          </div>
          </div>
          </PageWrapper>
          <StaticImage src="/section12.png" alt="Container Ship Image" />
        
          <TeamMembersSection />

          <StaticImage src="/SECTION 11.png" alt="Container Ship Image" />
          <PageWrapper>
          <div className='w-[99vw] lg:mt-6'>
          <div className='w-[70%] mx-auto'>
          <ContactSection />
          <NewsSection />
          </div>
        </div>
        </PageWrapper>
        <OurNetwork />
    
    </>
  );
};
export default Home;
