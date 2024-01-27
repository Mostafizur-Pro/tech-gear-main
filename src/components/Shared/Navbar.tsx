import logo from "@/assets/logo.png";
import { Fragment, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { BsBagFill } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";

const navigation = {
  categories: [
    {
      id: "women",
      name: "WOMEN",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc: " ",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc: " ",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "MEN",
      featured: [
        {
          name: "New Arrivals",
          href: "/man/new-arrivals",
          //   className: "w-22 ",
          imageSrc:
            "https://www.aarong.com/media/wysiwyg/d-puja-men-mm-23092023_2.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        // {
        //     name: "Artwork Tees",
        //     href: "#",
        //     imageSrc: " ",
        //     imageAlt:
        //         "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        // },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Panjabi", href: "/man/panjabi" },
            { name: "Panjabi Pajama Sets", href: "/man/panjabi-pajama" },
            { name: "Pajama", href: "/man/pajama" },
            { name: "Coaty", href: "/man/coaty" },
            { name: "Short Kurta", href: "/man/short-kurta" },
            { name: "Jackets", href: "/man/jackets" },
            { name: "Shirts", href: "/man/shirts" },
            { name: "Trousers", href: "/man/trousers" },
          ],
        },
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Fatua", href: "/man/fatua" },
            { name: "Lungi", href: "/man/lungi" },
            { name: "Shawls", href: "/man/shawls" },
            { name: "Scarves & Mufflers", href: "/man/scarves-mufflers" },
            { name: "T-Shirts", href: "/man/t-shirts" },
            { name: "Polos", href: "/man/polos" },
            { name: "Shoes", href: "/man/shoes" },
            { name: "Tupi", href: "/man/tupi" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "/man/watches" },
            { name: "Wallets", href: "/man/wallets" },
            { name: "Bags", href: "/man/bags" },
            { name: "Sunglasses", href: "/man/sunglasses" },
            { name: "Hats", href: "/man/hats" },
            { name: "Belts", href: "/man/belts" },
          ],
        },
        // {
        //   id: "brands",
        //   name: "Brands",
        //   items: [
        //     { name: "Re-Arranged", href: "#" },
        //     { name: "Counterfeit", href: "#" },
        //     { name: "Full Nelson", href: "#" },
        //     { name: "My Way", href: "#" },
        //   ],
        // },
      ],
    },
    {
      id: "page",
      name: "PAGE",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc: " ",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc: " ",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "section",
          name: "Section",
          items: [
            { name: "Contact", href: "/contact" },
            { name: "About Us", href: "/about" },
            { name: "FAQ", href: "/faq" },
            { name: "Blog", href: "/blog" },
            // { name: "Jackets", href: "#" },
            // { name: "Activewear", href: "#" },
            // { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    // { name: "Home", href: "/" },
    // { name: "Contact", href: "/contact" },
    { name: "Product Details", href: "/product-details" },
    { name: "Shopping Cart", href: "/shopping-cart" },
    // { name: "Wishlist", href: "/wishlist" },
    // { name: "About US", href: "/about" },
    { name: "Dashboard", href: "/dashboard" },
    // { name: "Blog", href: "/blog" },
    // { name: "Faq", href: "/faq" },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { data: session } = useSession();

  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex flex-wrap space-x-4 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <Link
                      href="/login"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Computer Menu */}
      <header className="relative bg-white ">
        <div className="flex justify-between  h-10 items-center  bg-rose-300 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          <div>Discount 20%</div>
          <div>0182934357</div>
        </div>

        <nav
          aria-label="Top"
          className="container mx-auto lg:px-6 px-3 bg-white uppercase"
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white py-2 md:px-2 px-0 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <Image className="h-8 w-auto" src={logo} alt="Logo" />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch ">
                <div className="flex h-full flex-wrap space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow "
                                aria-hidden="true"
                              />

                              <div className="relative bg-white z-[1]">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className=" grid grid-cols-2 gap-x-8 gap-y-10 py-16 ">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8 ">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm "
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm ">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center gap-1">
                {/* Search */}
                <div className="flex lg:mr-4">
                  {/* <a
                                        href="#"
                                        className="p-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <div>
                                            <div className="relative mt-2 rounded-md shadow-sm">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                    <span className="text-gray-500 sm:text-sm">
                                                        $
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="price"
                                                    id="price"
                                                    className="block outline-none w-[149px] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
                                                    placeholder="search"
                                                />
                                                <div className="absolute inset-y-0 right-0 flex items-center">
                                                    <select
                                                        id="currency"
                                                        name="currency"
                                                        className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 outline-none sm:text-sm"
                                                    >
                                                        <option>Bangla</option>
                                                        <option>English</option>
                                                        <option>Hindi</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </a> */}
                  {/* Search */}
                  <LuSearch className="h-7 w-7 text-gray-400 hover:text-gray-500" />
                </div>
                <div className="lg:me-3">
                  {session ? (
                    <div className="flex gap-4">
                      <Link
                        data-tip={`${session?.user?.name}`}
                        className="tooltip tooltip-top hover:tooltip-open lowercase"
                        href={"/dashboard"}
                      >
                        <IoPersonSharp className="h-6 w-6 text-gray-400 hover:text-gray-500" />
                      </Link>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          signOut();
                        }}
                      >
                        <LuLogOut className="h-6 w-6 text-gray-400 hover:text-gray-500 cursor-pointer" />
                      </button>
                    </div>
                  ) : (
                    <Link href={"/login"}>
                      <IoPersonSharp className="h-6 w-6 text-gray-400 hover:text-gray-500" />
                    </Link>
                  )}
                </div>

                {/* <div className="hidden lg:ml-8 lg:flex">
                                    <a
                                        href="#"
                                        className="flex items-center text-gray-700 hover:text-gray-800"
                                    >
                                        <img
                                            src="https://tailwindui.com/img/flags/flag-canada.svg"
                                            alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-sm font-medium">
                                            CAD
                                        </span>
                                        <span className="sr-only">
                                            , change currency
                                        </span>
                                    </a>
                                </div> */}

                {/* Cart */}
                <div className="ml-4 flow-root me-2">
                  <a
                    href="#"
                    className="group -m-2 flex items-center relative "
                  >
                    <BsBagFill
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <div className="absolute -bottom-1 right-3.5 border flex justify-center items-center px-1.5 rounded-full bg-white">
                      <span className="text-xs font-medium  text-gray-700 group-hover:text-gray-800">
                        0
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
