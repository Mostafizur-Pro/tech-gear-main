import DashboardBanner from "@/components/dashboard/DashboardBanner";
import MyAccount from "@/components/dashboard/MyAccount";
import React from "react";

const DashboardSidebar = () => {
  return (
    <div>
      <div className="col-span-1 bg-white m-3 ">
        <ul className="">
          <li className="active px-[15px] py-[10px] bg-rose-500 font-medium text-[18px] text-white">
            <a href="#">Login/Register</a>
          </li>
          <li className="px-[15px] py-[10px] font-medium text-gray-500 text-[16px] ">
            <a href="#">Password Recovery</a>
          </li>
          <li className="px-[15px] py-[10px] font-medium text-gray-500 text-[16px]">
            <a href="/dashboard/account">My Account</a>
          </li>
          <li className="px-[15px] py-[10px] font-medium text-gray-500 text-[16px]">
            <a href="#">Address Book</a>
          </li>
          <li className="px-[15px] py-[10px] font-medium text-gray-500 text-[16px]">
            <a href="/dashboard/wishlist">Wishlist</a>
          </li>
          <li className="px-[15px] py-[10px] font-medium text-gray-500 text-[16px]">
            <a href="#">Returns</a>
          </li>
          <li className="px-[15px] py-[10px] font-medium text-gray-500 text-[16px]">
            <a href="#">Newsletter</a>
          </li>
          <li className="px-[15px] py-[10px] font-medium text-gray-500 text-[16px]">
            <a href="/dashboard/add-blogs">Add Blogs</a>
          </li>
          <li className="px-[15px] py-[10px] font-medium text-gray-500 text-[16px]">
            <a href="/dashboard/add-products">Add Product</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
