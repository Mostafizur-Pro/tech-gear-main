import React from "react";
import { AiOutlineComment } from "react-icons/ai";
import { CiSearch, CiAlignLeft } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

export default function index() {
  return (
    <div className="max-w-screen-xl mx-auto mt-6 px-3">
      <div className="sm:flex justify-start     ">
        {/* main  */}
        <div className="sm:w-9/12 w-full  sm:mt-0 mt-5">
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
              {
                [1,2,3,34,53,563,6,343,245,62,2,5,4,2,3,32,6,3,3,].map((v,i)=>(
                  <div className="  w-full">
                  <img src="https://bestwebcreator.com/shopwise/demo/assets/images/blog_small_img7.jpg" alt="" />
                  <div className="p-3 shadow-lg">
                    <h2 className="font-semibold hover:text-rose-500 ">But I must explain to you how all this mistaken idea</h2>
                    <div className="flex justify-start items-center mt-5 gap-2 mb-5">
                      <div className="flex justify-center items-center gap-1">
                        <AiOutlineComment size={20} className="text-rose-500"/>
                        <span className="hover:text-rose-500">April 13,124</span>
                      </div>
                      <div className="flex justify-center items-center">
                        <AiOutlineComment size={20} className="text-rose-500"/>
                        <span className="hover:text-rose-500">10</span>
                      </div>
                    </div>
                    <p className="mt-2   leading-8 text-[18px] text-gray-600">
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text
                    </p>
                  </div>
                 </div>
                ))
              }
               </div>
               {/* // pagination  */}
               <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
        </div>
        {/* // sidebar  */}
        <div className="sm:w-4/12 w-full overflow-hidden ml-3">
          <div className="p-2 flex border justify-between ">
            <input
              type="text"
              placeholder="Search"
              className=" outline-none px-3 text-xl"
            />

            <button className="border-l-2 px-2 hover:text-gray-600 font-bold">
              <CiSearch size={30} />
            </button>
          </div>
          <div className="w-full border-b-2 mt-5 mb-4"></div>
          <div className="mt-8">
            <h2 className="text-[18px] font-semibold text-gray-700 ">
              Recent Posts
            </h2>
            {[1, 2, 3].map((v, i) => (
              <div key={i} className="flex justify-start items-center gap-x-3 mt-5">
                <img
                  src="https://bestwebcreator.com/shopwise/demo/assets/images/letest_post1.jpg"
                  alt=""
                />
                <div className="">
                  <h2 className=" font-semibold hover:text-rose-400">
                    Lorem ipsum dolor sit amet, consectetur
                  </h2>
                  <p className="text-sm text-gray-600">April 10,2043</p>
                </div>
              </div>
            ))}
            <div className="w-full border-b-2 mt-6 mb-4"></div>
            <div className="">
              <h2 className="text-[18px] font-semibold text-gray-700 mb-5">
                Archive
              </h2>
             {
                [1,2,4,5,6,6].map((v,i)=>( <div className="flex justify-between items-center mt-2">
                <div key={i} className=" group flex items-center justify-center  ">
                  <span className="group-hover:text-rose-500">
                    <IoIosArrowForward size={20} />
                  </span>
                  <p className=" text-[16px] font-medium text-gray-700 group-hover:text-rose-500">
                    June 2019
                  </p>
                </div>
                <p className="text-[16px] font-medium text-gray-700 group-hover:text-rose-500">(12)</p>
              </div>))
             }
            </div>
            <div className="w-full border-b-2 mt-6 mb-4"></div>
            {/* img  */}
            <div className=" relative   flex justify-center items-center group">
                <img src="https://bestwebcreator.com/shopwise/demo/assets/images/sidebar_banner_img.jpg" alt="" className=" bg-cover"/>
             <div className=" absolute  top-[50%] w-[40%] text-white">
                <h2 className="text-xl font-medium">NEW COLLECTION</h2>
                <p className="text-3xl font-semibold">SALE 30% OFF</p>
                <button className="py-2 border  px-3 hover:bg-white hover:text-black rounded font-extrabold duration-300">Shop now</button>
             </div>
            </div>
            <div className="w-full border-b-2 mt-10 mb-4"></div>
              {/* // tags  */}
              <div className="mt-10">
                <h2 className=" text-2xl font-bold">Tags</h2>
                <div className=" ">
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
        Badge
      </span>
      <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
        Badge
      </span>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
}
