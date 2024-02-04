import AddBlogsSection from "@/components/dashboard/Add-Blogs/AddBlogsSection";

import React from "react";
import WishlistBanner from "../../../components/dashboard/WishList/wishlistBanner";
import DashboardSidebar from "../../../components/dashboard/DashboardSidebar";
import DashboardWishlist from "../../../components/dashboard/WishList/wishlist";

const index = () => {
  return (
    <>
      <WishlistBanner />
      {/* <AddBlogsSection />  */}
      <div className="bg-gray-50">
        <div className="p-8 sm:grid grid-cols-4 gap-4 bg-gray-50 ">
          <DashboardSidebar />
          <section className="col-span-3 bg-white m-3 p-6">
            <DashboardWishlist />
          </section>
        </div>
      </div>
    </>
  );
};

export default index;
