import React from "react";
import BlogForm from "./BlogForm";

const AddBlogsSection = () => {
  

  return (
    <div className="bg-gray-50">
      <div className="p-8 sm:grid grid-cols-4 gap-4 bg-gray-50 ">
        <div className="col-span-1 bg-white m-3 ">
          <ul className="">
            <li className="active px-[15px] py-[10px] bg-rose-500 font-medium text-[18px] text-white">
              <a href="#">Login/Register</a>
            </li>
            <li className="px-[15px] py-[10px] font-medium text-gray-500 text-[16px] ">
              <a href="#">Password Recovery</a>
            </li>
            <li className="px-[15px] py-[10px] font-medium text-gray-500 text-[16px]">
              <a href="#">My Account</a>
            </li>
            <li className="px-[15px] py-[10px] font-medium text-gray-500 text-[16px]">
              <a href="#">Address Book</a>
            </li>
            <li className="px-[15px] py-[10px] font-medium text-gray-500 text-[16px]">
              <a href="#">Wishlist</a>
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
          </ul>
        </div>

        <section className="col-span-3 bg-white m-3 p-6">
          <BlogForm />
        </section>
      </div>
    </div>
  );
};

export default AddBlogsSection;
