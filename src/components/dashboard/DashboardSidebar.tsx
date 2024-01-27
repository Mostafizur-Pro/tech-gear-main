
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardSidebar = () => {

  const pathname = usePathname()

  const NavLInks = [
    {id: 1, name: "My Account", path: "/dashboard/account"},
    {id: 2, name: "Address Book", path: "/dashboard/address-book"},
    {id: 3, name: "Password Recovery", path: "/dashboard/password-recovery"},
    {id: 4, name: "Add Blog Post", path: "/dashboard/add-blogs"},
    {id: 5, name: "NewsLetter", path: "/dashboard/newsletter"},
    {id: 6, name: "Wishlist", path: "/dashboard/wishlist"},
    {id: 7, name: "Returns", path: "/dashboard/returns"},
  ]

  return (
    <div>
      <div className="col-span-1 bg-white h-full">
        <ul className="">
          {
            NavLInks.map(link => <li key={link.id} className={`px-[15px] py-[10px] ${link.path === pathname ? "active-Navlink" : "normal-Navlink"}`}>
            <Link href={link.path}>{link.name}</Link>
          </li>)
          }
          
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
