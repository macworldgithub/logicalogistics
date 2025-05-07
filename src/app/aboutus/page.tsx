import React from 'react';
import PageWrapper from '../../../utils/PageWrapper';
import GlobalError from './global';
import SpecialFeatures from './special_features';
import StaticImage from './static_Image';
import PageHeader from "./../../../common/PageHeader";
const Aboutus = () => {
  return (
    <>
    <PageWrapper>
      <PageHeader title="About us" breadcrumb="About us" />
        <div className='w-[99vw] lg:mt-6'>
          <div className='w-[70%] mx-auto'>
          <GlobalError />
          <SpecialFeatures />
          </div>
          </div>
          </PageWrapper>
          <StaticImage src="/section4.png" alt="Container Ship Image"  />
          <StaticImage src="/section5.png" alt="Another Section Image" />
           </>

  );
};

export default Aboutus;
