import React from "react";
import { AiFillAlert } from "react-icons/ai";

const WhoChooseUs = () => {
  return (
    <div>
      <div className="px-5 mt-7 bg-slate-100 pb-8">
        <div className="p-4 text-center">
          <h2 className="text-gray-600 font-medium text-2xl mt-14 ">
            Why Choose Us?
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>{" "}
          <p>sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        {/* // cart  */}
        <div className="  px-5 flex items-center justify-center">
          <div className="sm:flex justify-around items-center  gap-6 py-4 ">
            {[1, 2, 3].map((v, i) => (
              <div className="w-[300px] mt-4 h-auto p-10  flex flex-col justify-center items-center gap-y-3 bg-white rounded-md shadow">
                <div className="w-[60px] h-[60px] rounded-full bg-rose-500 text-white flex justify-center items-center ">
                  <AiFillAlert size={40} className="  " />
                </div>
                <h2 className="text-xl   tracking-tight text-gray-800 sm:text-2xl">
                  Creative Design
                </h2>
                <p className="text-center leading-[22px] text-[16px] text-gray-600">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoChooseUs;
