'use client';

import React from 'react';
import PageWrapper from '../../../utils/PageWrapper';
import GlobalError from './global';
import AboutCompany from './company_stats';
import SpecialFeatures from './special_features';
import StaticImage from './static_Image'; // Import reusable component

const Aboutus = () => {
  return (
    <PageWrapper>
      <div>
        <GlobalError />
        <AboutCompany />
        <SpecialFeatures />

        {/* Reusable StaticImage component use kiya */}
        <StaticImage src="/section4.png" alt="Container Ship Image" />
        <StaticImage src="/section5.png" alt="Another Section Image" />

      </div>
    </PageWrapper>
  );
};

export default Aboutus;
