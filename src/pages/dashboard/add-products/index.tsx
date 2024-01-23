import AddProductsSection from '@/components/dashboard/Add-Products/AddProductsSection';
import DashboardBanner from '@/components/dashboard/DashboardBanner';
import React from 'react';

const index = () => {
  return (
    <div>
      <DashboardBanner></DashboardBanner>
      <AddProductsSection></AddProductsSection>
    </div>
  );
};

export default index;