import PageHeader from '../../../common/PageHeader';
import PageWrapper from '../../../utils/PageWrapper';
import CommunitySection from './our_community';
export default function Home() {
  return (
    <PageWrapper>
      <PageHeader title="Container Movement" breadcrumb="Container Movement" />
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
