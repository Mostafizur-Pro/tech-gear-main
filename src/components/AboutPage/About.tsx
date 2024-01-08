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
import Subtribe from "./Subtribe";
// import AboutPage from "@/components/AboutPage/About";

const AboutPage = () => {
  return (
    <div>
      <div className="">
        <AboutHero />
        <WhoChooseUs />
        <OurTeam />
        <WhyChooseUs />
        <DeliveryCondition />
        <Subtribe />
      </div>
    </div>
  );
};

export default AboutPage;
