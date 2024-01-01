import React, { useState } from "react";
import Link  from "next/link";
import NavLinks from "./NavLinks";





const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <nav className="">
      <div className="">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>

          </div>
        </div>
        <ul className={` bg-white w-full  overflow-y-auto 
        duration-500 ${open ? "left-0" : "left-0"}
        `}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
