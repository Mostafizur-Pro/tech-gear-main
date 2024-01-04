import AddBlogsSection from '@/components/dashboard/Add-Blogs/AddBlogsSection';
import DashboardBanner from '@/components/dashboard/DashboardBanner';
import React from 'react';

const index = () => {
    return (
        <>
           <DashboardBanner />
           <AddBlogsSection /> 
        </>
    );
};

export default index;