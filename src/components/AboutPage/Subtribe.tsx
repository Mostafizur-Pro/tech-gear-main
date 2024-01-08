import React from "react";

const Subtribe = () => {
  return (
    <div>
      <div className="sm:flex justify-between items-center mt-10 p-5 bg-rose-600 text-center ">
        <h2 className="text-[23px] font-bold text-white">
          Subscribe Our Newsletter
        </h2>
        <div className="flex justify-center items-center">
          <input
            type="text"
            name=""
            id=""
            className="py-2 outline-none  px-3 text-gray-700 font-bold"
          />
          <button className="px-4 py-2 bg-black text-white font-bold hover:bg-white hover:text-black duration-300">
            Subtribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subtribe;
