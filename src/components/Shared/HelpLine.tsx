import {
    AiFillAccountBook,
    AiFillFacebook,
    AiFillGoogleCircle,
    AiFillAmazonSquare,
  } from "react-icons/ai";

  
const HelpLine = () => {
  return (
    <div>
      <div className="sm:flex mt-3  justify-around items-center w-full h-auto sm:p-5 bg-rose-500">
        <div className="flex gap-x-4 justify-center items-center">
          <button className="text-gray-200">
            <AiFillAccountBook size={40} />
          </button>
          <div className="">
            <p className=" text-xl font-bold text-gray-200">+421 964 335 12</p>
            <p className="text-[12px] mt-2 font-bold text-gray-300">
              CUSTOMER SUPPORT 24/7
            </p>
          </div>
        </div>
        <div className="flex gap-x-4 justify-center items-center">
          <button className="text-gray-200">
            <AiFillAccountBook size={40} />
          </button>
          <div className="">
            <p className=" text-xl font-bold text-gray-200">+421 964 335 12</p>
            <p className="text-[12px] mt-2 font-bold text-gray-300">
              CUSTOMER SUPPORT 24/7
            </p>
          </div>
        </div>
        <div className="flex gap-x-4 justify-center items-center">
          <button className="text-gray-200">
            <AiFillAccountBook size={40} />
          </button>
          <div className="">
            <p className=" text-xl font-bold text-gray-200">+421 964 335 12</p>
            <p className="text-[12px] mt-2 font-bold text-gray-300">
              CUSTOMER SUPPORT 24/7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpLine;
