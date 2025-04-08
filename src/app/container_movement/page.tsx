'use client';

import React from 'react';
import PageWrapper from '../../../utils/PageWrapper';
import SidebarServices from '../../../common/services';
const Page = () => {
  return (
    <PageWrapper>
        <div className='w-[99vw]'>
        <div className='w-[80%] mx-auto'>
      <SidebarServices/>
      </div>
      </div>
    </PageWrapper>
  )
}

export default Page