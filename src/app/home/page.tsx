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
    <div className="w-[99vw]">
      <QuoteBanner />
      <PageWrapper>
        <div className="relative z-10">
          <TransportationSection />
          <SolutionsSection />
          <ProcessSection />
          <StaticImage src="/section12.png" alt="Container Ship Image" />
          <TeamMembersSection />
          <StaticImage src="/SECTION 11.png" alt="Container Ship Image" />
          <ContactSection />
          <NewsSection />
          <OurNetwork />
        </div>
      </PageWrapper>
    </div>
  );
};
export default Home;
