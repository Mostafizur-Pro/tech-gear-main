import React from "react";
// import img1 from "../../assets/wishlist/9_thumb.jpg";
import img1 from '../../../assets/wishlist/9_thumb.jpg'
import Image from "next/image";
import Link from "next/link";

const DashboardWishlist = () => {
  return (
    <div>
      <div className="md:col-span-2 ">
        {/* <h1 className="uppercase">Your WishList</h1> */}
        <div className="mt-3 pt-10 bg-white">
          <table className=" w-full">
            <thead className="">
              <tr className="">
                <th></th>
                <th className="text-left">DESCRIPTION</th>
                <th className="text-left">ID</th>
                <th className="text-left">Unit Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-red-400">
                <td className="py-[30px] px-[8px] ">
                  <Image src={img1} alt="img1"></Image>
                </td>
                <td>
                  <p className="uppercase text-red-400 text-sm opacity-90">
                    <Link href={"/"}>Black T-Shirt</Link>
                  </p>
                  <p className="text-gray-400 text-xs">
                    Color: <span className="italic">Black</span>, Size:{" "}
                    <span className="italic">M</span>
                  </p>
                </td>
                <td>SK169841669</td>
                <td>$14.63</td>
                <td className="text-red-500 text-xl cursor-pointer">x</td>
              </tr>
              <tr className="border-t">
                <td className="py-[30px] px-[8px] ">
                  <Image src={img1} alt="img1"></Image>
                </td>
                <td>
                  <p className="uppercase text-red-400 text-sm opacity-90">
                    <Link href={"/"}>Black T-Shirt</Link>
                  </p>
                  <p className="text-gray-400 text-xs">
                    Color: <span className="italic">Black</span>, Size:{" "}
                    <span className="italic">M</span>
                  </p>
                </td>
                <td>SK169841669</td>
                <td>$14.63</td>
                <td className="text-red-500 text-xl cursor-pointer">x</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardWishlist;
