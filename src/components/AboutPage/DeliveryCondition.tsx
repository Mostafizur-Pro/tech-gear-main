import React from "react";
import { LuHelpingHand } from "react-icons/lu";

const DeliveryCondition = () => {
  return (
    <div>
      <div className="mt-10 mb-12">
        <div className="sm:flex justify-around items-center ">
          {[1, 3, 5].map((v, i) => (
            <div className="p-4 sm:w-1/4 w-full  ">
              <span className="flex justify-center items-center">
                <LuHelpingHand
                  size={40}
                  className="w-[50px] bg-rose-500 text-white h-[50px] rounded-full p-2"
                />
              </span>
              <h2 className="text-center text-[18px] text-gray-800 mt-6">
                Free Delivery
              </h2>
              <p className="text-gray-600 text-center ">
                If you are going to use of Lorem, you need to be sure there
                anything
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryCondition;
