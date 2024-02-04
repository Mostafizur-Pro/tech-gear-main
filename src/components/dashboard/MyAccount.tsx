import React from "react";
import DashboardSidebar from "./DashboardSidebar";

const MyAccount = () => {
  return (
      <div className="py-2">
        <div className="well bg-white m-8 ">
          <h6 className="text-xl text-gray-600 text-uppercase ">My Account</h6>
          <ul className="text-rose-500 font-[14px] font-medium ms-2 mt-4">
            <li>
              <a href="#">Edit your account informations</a>
            </li>
            <li>
              <a href="#">Change your password</a>
            </li>
            <li>
              <a href="#">Modify your address book</a>
            </li>
            <li>
              <a href="#">Modify your wishlist</a>
            </li>
          </ul>

          <hr className="my-8" />

          <h6 className="text-xl text-gray-600 text-uppercase">My Orders</h6>
          <ul className="text-rose-500 font-[14px] font-medium ms-2 mt-4">
            <li>
              <a href="#">Order History</a>
            </li>
            <li>
              <a href="#">Downloads</a>
            </li>
            <li>
              <a href="#">Reward Points</a>
            </li>
            <li>
              <a href="#">Returns Requests</a>
            </li>
            <li>
              <a href="#">Transactions</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default MyAccount;
