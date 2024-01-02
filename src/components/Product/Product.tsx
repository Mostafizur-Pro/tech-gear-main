import React from "react";
import pdImg1 from "../../../public/product_img1.jpg";
import Image from "next/image";
import { GoGitCompare } from "react-icons/go";
import { BsZoomIn } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import classes from "./index.module.css"

const Product = () => {
  return (
    <section className=" mx-4 lg:grid grid-cols-12 gap-3 sm:mx-32 max-w-6xl lg:mx-auto mt-6 mb-6">
      {/* sidebar */}
      <div className="col-span-3 bg-rose-300 text-3xl font-semibold">lefbar will be here</div>
      {/* product side */}
      <div className={`col-span-9 md:grid md:grid-cols-12 ${classes.custom_shadow} `}>
        <div className="col-span-4 ">
          <Image src={pdImg1} alt="product img-1" className=""></Image>
        </div>
        <div className="col-span-8 py-3 px-5">
          <div>
            <h1 className="hover:text-red-500 cursor-pointer duration-300 text-xl font-semibold mt-1">
              Blue Dress For Woman
            </h1>
            <p className="mt-2">
              <span className="text-red-500 font-bold">$45.00</span>{" "}
              <span className="line-through text-gray-500">$55.25</span>{" "}
              <span className="text-green-500 text-sm ">35% Off</span>
            </p>
            <p className="opacity-85 leading-7 tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              voluptate atque rem quidem doloribus temporibus dolorum! Totam,
              accusamus ea obcaecati voluptate nulla.
            </p>
            <form className=" flex gap-3 mt-3">
              <input
                className="w-4 h-4"
                type="radio"
                name="choose_color"
              />
              <input
                className="w-4 h-4 cursor-pointer"
                type="radio"
                name="choose_color"
              />
              <input
                className="w-4 h-4 cursor-pointer"
                type="radio"
                name="choose_color"
              />
            </form>
            <div className="flex gap-5 items-center mt-3 ">
              <button className="text-white duration-500 hover:text-[#FF324D] bg-[#FF324D] hover:bg-white border-[#FF324D] border px-4 py-2  rounded">
                Add To Cart
              </button>
              {/* icon */}
              <div className=" flex items-center justify-center gap-4 text-xl ">
                <i className="hover:text-[#ff324d] cursor-pointer duration-500">
                  <GoGitCompare />
                </i>
                <i className="hover:text-[#ff324d] cursor-pointer duration-500">
                  <BsZoomIn />
                </i>
                <i className="hover:text-[#ff324d] cursor-pointer duration-500">
                  <IoIosHeartEmpty />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
