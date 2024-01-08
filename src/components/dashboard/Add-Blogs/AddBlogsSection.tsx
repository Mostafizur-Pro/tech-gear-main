import React from "react";
import BlogForm from "./BlogForm";
import DashboardSidebar from "@/components/dashboard/sidebar";

const AddBlogsSection = () => {
  return (
    <div className="bg-gray-50">
      <div className="p-8 sm:grid grid-cols-4 gap-4 bg-gray-50 ">
        <DashboardSidebar />
        <section className="col-span-3 bg-white m-3 p-6">
          <BlogForm />
        </section>
      </div>
    </div>
  );
};

export default AddBlogsSection;
