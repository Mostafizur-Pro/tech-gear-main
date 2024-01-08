import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";
import { AiFillAlert, AiFillAccountBook } from "react-icons/ai";

import AboutHero from "./AboutHero";
import WhoChooseUs from "./WhoChooseUs";
import OurTeam from "./OurTeam";
import WhyChooseUs from "./WhyChooseUs";
import DeliveryCondition from "./DeliveryCondition";
// import AboutPage from "@/components/AboutPage/About";

const AboutPage = () => {
  return (
    <div>
      <div className="">
        <AboutHero />
        <WhoChooseUs />
        <OurTeam />
        <WhyChooseUs />

        {/* delivary Condition  */}
        <DeliveryCondition />
        
        {/* subscrib  */}
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
    </div>
  );
};

export default AboutPage;
