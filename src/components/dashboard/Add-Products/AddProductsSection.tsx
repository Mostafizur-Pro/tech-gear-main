import React from "react";
import DashboardSidebar from "@/components/dashboard/sidebar";
import BlogForm from "../Add-Blogs/BlogForm";
import ProductForm from "./ProductForm";

const AddProductsSection = () => {
  return (
    <div className="bg-gray-50">
      <div className="p-8 sm:grid grid-cols-4 gap-4 bg-gray-50 ">
        <DashboardSidebar />
        <section className="col-span-3 bg-white m-3 p-6">
          <ProductForm></ProductForm>
        </section>
      </div>
    </div>
  );
};

export default AddProductsSection;
