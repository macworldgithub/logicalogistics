import React from 'react';
import TermsAndConditions from './terms';
import PageWrapper from '../../../utils/PageWrapper';
import PageHeader from '../../../common/PageHeader';
const page = () => {
    return (
        <PageWrapper>
            <PageHeader title="Container Movement" breadcrumb="Container Movement" />
             <div className='w-[99vw]'>
             
             <div className='w-[80%] mx-auto'>
                <TermsAndConditions />
            </div>
            </div>
            </PageWrapper>
    )
}
    
export default page;