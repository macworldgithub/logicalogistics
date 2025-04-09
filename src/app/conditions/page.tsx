'use client';

import React from 'react';
import TermsAndConditions from './terms';
import PageWrapper from '../../../utils/PageWrapper';

const page = () => {
    return (
        <PageWrapper>
             <div className='w-[99vw]'>
             <div className='w-[80%] mx-auto'>
                <TermsAndConditions />
            </div>
            </div>
            </PageWrapper>
    )
}
    
export default page;