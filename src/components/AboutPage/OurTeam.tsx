import React from "react";
import { AiFillAccountBook } from "react-icons/ai";

const OurTeam = () => {
  return (
    <div>
      <div className="mt-5 p-10">
        <div>
          <h2 className="text-xl font-bold text-center tracking-tight text-gray-900 sm:text-2xl">
            Our Team Members
          </h2>
          <p className="text-center mt-4 leading-7 text-[16px] text-gray-600">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="flex justify-center items-center  gap-8">
          <div className="grid grid-cols-3   justify-between items-center gap-6 ">
            {[1, 3, 5, 4, 6].map((v, i) => (
              <div>
                <div className="mt-10 relative gap-4 overflow-hidden group">
                  <div>
                    <img
                      className="w-[300px]"
                      src="https://media-ccu1-2.cdn.whatsapp.net/v/t61.24694-24/370496278_306861878691336_4975369644041756366_n.jpg?ccb=11-4&oh=01_AdQNJ_Ku4TLjyb3BB4gXhFTrUvTenAM0fxk5-t2jlZsCDg&oe=65996A6A&_nc_sid=e6ed6c&_nc_cat=109"
                      alt=""
                    />
                  </div>

                  <div className="absolute h-full w-full  bg-black/20 flex justify-center items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex justify-center items-center gap-2">
                      <button className="text-white hover:text-rose-400">
                        <AiFillAccountBook size={40} />
                      </button>
                      <button className="text-white hover:text-rose-400">
                        <AiFillAccountBook size={40} />
                      </button>{" "}
                      <button className="text-white hover:text-rose-400">
                        <AiFillAccountBook size={40} />
                      </button>
                    </div>
                  </div>
                </div>
                <h2 className="text-xl font-bold mt-4 tracking-tight text-gray-900 sm:text-2xl">
                  Mostafizur Rahman
                </h2>{" "}
                <p className="mt-2 text-gray-500">Project Engineer</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
