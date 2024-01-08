import DashboardBanner from '@/components/dashboard/DashboardBanner';
import MyAccount from '@/components/dashboard/MyAccount';
import React from 'react';

const index = () => {
    return (
        <div className="container mx-auto">
            <DashboardBanner/>
            <MyAccount/>
        </div>
    );
};

export default index;