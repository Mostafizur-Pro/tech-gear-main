import Link from "next/link";
import React from "react";
import { RxSlash } from "react-icons/rx";

const AccountBanner = () => {
  return (
    <div>
      <div className="py-10 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="">
              <h2 className="uppercase font-bold text-2xl">Dashboard</h2>
              <p className="text-xl text-gray-500">Le Manifique</p>
            </div>
            <div className="">
              <p className="flex items-center gap-2">
                <Link className="text-[#E47282]" href={"/"}>
                  Home
                </Link>
                <RxSlash className="text-[#E47282]" />
                <Link className="text-[#E47282]" href={"/dashboard"}>
                  Dashboard
                </Link>
                <RxSlash className="text-[#E47282]" />
                <Link href={"/account"}>My Account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountBanner;
