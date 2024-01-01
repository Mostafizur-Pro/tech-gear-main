import { useState } from "react";
import HeadQuarters from "@/components/ContactPage/HeadQuarters";
import HelpLine from "@/components/Shared/HelpLine";
import OthersCompanyLogo from "@/components/Shared/OthersCompany";

// Import Swiper styles
import "swiper/css";

const ContactPage = () => {
 
  const [agreed, setAgreed] = useState(false);
  return (
   <div>
    <HeadQuarters/>
    <HelpLine/>
    <OthersCompanyLogo/>
   </div>
  );
};

export default ContactPage;
