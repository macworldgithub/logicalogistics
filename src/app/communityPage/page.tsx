import PageWrapper from '../../../utils/PageWrapper';
import CommunitySection from './our_community';
export default function Home() {
  return (
    <PageWrapper>
    <div className='w-[99vw]'>
        <div className='w-[80%] mx-auto'>
    <main>
      <CommunitySection />
    </main>
    </div>
    </div>
    </PageWrapper>
  );
}
