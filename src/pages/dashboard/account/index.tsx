import AccountBanner from "@/components/dashboard/Account/AccountBanner";
import Profile from "@/components/dashboard/Account/Profile";
import DashboardBanner from "@/components/dashboard/DashboardBanner";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import React from "react";

const Account = () => {
  return (
    <div>
      <DashboardBanner link="My Account" />
      <div className="bg-gray-50">
        <div className="p-8 sm:grid grid-cols-4 gap-4 bg-gray-50 ">
          <DashboardSidebar />
          <section className="col-span-3 bg-white m-3 p-6">
            <Profile />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Account;
