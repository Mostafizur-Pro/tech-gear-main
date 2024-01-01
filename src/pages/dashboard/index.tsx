import DashboardBanner from '@/components/dashboard/DashboardBanner';
import MyAccount from '@/components/dashboard/MyAccount';
import React from 'react';

const index = () => {
    return (
        <div>
            <DashboardBanner/>
            <MyAccount/>
        </div>
    );
};

export default index;