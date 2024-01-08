import { useState } from "react";
import HeadQuarters from "@/components/ContactPage/HeadQuarters";
import HelpLine from "@/components/Shared/HelpLine";
import OthersCompanyLogo from "@/components/Shared/OthersCompany";

// Import Swiper styles
import "swiper/css";
import ContactBanner from "@/components/ContactPage/ContactBanner";

const ContactPage = () => {
  const [agreed, setAgreed] = useState(false);
  return (
    <div>
      <ContactBanner />
      <div className="mx-10">
        <HeadQuarters />
      </div>
      <HelpLine />
      <OthersCompanyLogo />
    </div>
  );
};

export default ContactPage;
