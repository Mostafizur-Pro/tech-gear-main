import DashboardBanner from "@/components/dashboard/DashboardBanner";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import MyAccount from "@/components/dashboard/MyAccount";
import React from "react";

const index = () => {
  return (
    <div>
      <DashboardBanner link="" />
      <div className="bg-gray-50">
        <div className="p-8 sm:grid grid-cols-4 gap-4 bg-gray-50 ">
          <DashboardSidebar />
          <div className="col-span-3 bg-white ml-3 h-full">
            <MyAccount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
