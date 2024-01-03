import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";
import { AiFillAlert, AiFillAccountBook } from "react-icons/ai";
import { LuHelpingHand } from "react-icons/lu";

const AboutPage = () => {
  return (
    <div className="">
      <div className="sm:flex justify-center gap-4 items-center p-6">
        <img
          className="sm:w-7/12 w-full"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
        <div className="sm:w-6/12 mt-5 w-full  ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">
            Who We Are
          </h2>
          <p className="mt-4 leading-8 text-[16px] text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            consequuntur quibusdam enim expedita sed nesciunt incidunt accusamus
            adipisci officia libero laboriosam!
          </p>
          <p className="mt-4 leading-8 text-[16px] text-gray-600">
            Proin gravida nibh vel velit auctor aliquet. nec sagittis sem nibh
            id elit. Duis sed odio sit amet nibh vultate cursus a sit amet
            mauris. Duis sed odio sit amet nibh vultate cursus a sit amet
            mauris.
          </p>
        </div>
      </div>
      <div className="px-5 mt-7 bg-slate-100 pb-8">
        <div className="p-4 text-center">
          <h2 className="text-gray-600 font-medium text-2xl mt-14 ">
            Why Choose Us?
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>{" "}
          <p>sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        {/* // cart  */}
        <div className="  px-5 flex items-center justify-center">
          <div className="sm:flex justify-around items-center  gap-6 py-4 ">
            {[1, 2, 3].map((v, i) => (
              <div className="w-[300px] mt-4 h-auto p-10  flex flex-col justify-center items-center gap-y-3 bg-white rounded-md shadow">
                <div className="w-[60px] h-[60px] rounded-full bg-rose-500 text-white flex justify-center items-center ">
                  <AiFillAlert size={40} className="  " />
                </div>
                <h2 className="text-xl   tracking-tight text-gray-800 sm:text-2xl">
                  Creative Design
                </h2>
                <p className="text-center leading-[22px] text-[16px] text-gray-600">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Members */}
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
          <div className="sm:flex   justify-between items-center gap-6 ">
            {[1, 3, 5, 4].map((v, i) => (
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
                  John Muniz
                </h2>{" "}
                <p className="mt-2 text-gray-500">Project Engineer</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 p-10  bg-red-200 flex justify-center items-center">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="  ">
              <h2 className="text-gray-600 font-medium text-2xl mt-14 text-center">
                Why Choose Us?
              </h2>
              <p className="mt-4 leading-8 text-[16px] text-gray-600 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                consequuntur quibusdam enim expedita sed nesciunt incidunt{" "}
                <br />
                accusamus adipisci officia libero laboriosam! Proin gravida nibh
                vel <br /> velit auctor aliquet. nec sagittis sem nibh id elit.
                Duis sed odio sit amet nibh vultate{" "}
              </p>
              <div className="flex justify-center items-center gap-2 mt-5">
                <img
                  src="https://bestwebcreator.com/shopwise/demo/assets/images/user_img2.jpg"
                  alt=""
                />
                <div>
                  {" "}
                  <h2 className="text-xl font-bold text-gray-700">
                    John Muniz
                  </h2>
                  <p className="text-gray-500 text-sm">Project Engineer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  ">
              <h2 className="text-gray-600 font-medium text-2xl mt-14 text-center">
                Why Choose Us?
              </h2>
              <p className="mt-4 leading-8 text-[16px] text-gray-600 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                consequuntur quibusdam enim expedita sed nesciunt incidunt{" "}
                <br />
                accusamus adipisci officia libero laboriosam! Proin gravida nibh
                vel <br /> velit auctor aliquet. nec sagittis sem nibh id elit.
                Duis sed odio sit amet nibh vultate{" "}
              </p>
              <div className="flex justify-center items-center gap-2 mt-5">
                <img
                  src="https://bestwebcreator.com/shopwise/demo/assets/images/user_img2.jpg"
                  alt=""
                />
                <div>
                  {" "}
                  <h2 className="text-xl font-bold text-gray-700">
                    John Muniz
                  </h2>
                  <p className="text-gray-500 text-sm">Project Engineer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="  ">
              <h2 className="text-gray-600 font-medium text-2xl mt-14 text-center">
                Why Choose Us?
              </h2>
              <p className="mt-4 leading-8 text-[16px] text-gray-600 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                consequuntur quibusdam enim expedita sed nesciunt incidunt{" "}
                <br />
                accusamus adipisci officia libero laboriosam! Proin gravida nibh
                vel <br /> velit auctor aliquet. nec sagittis sem nibh id elit.
                Duis sed odio sit amet nibh vultate{" "}
              </p>
              <div className="flex justify-center items-center gap-2 mt-5">
                <img
                  src="https://bestwebcreator.com/shopwise/demo/assets/images/user_img2.jpg"
                  alt=""
                />
                <div>
                  {" "}
                  <h2 className="text-xl font-bold text-gray-700">
                    John Muniz
                  </h2>
                  <p className="text-gray-500 text-sm">Project Engineer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="  ">
              <h2 className="text-gray-600 font-medium text-2xl mt-14 text-center">
                Why Choose Us?
              </h2>
              <p className="mt-4 leading-8 text-[16px] text-gray-600 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                consequuntur quibusdam enim expedita sed nesciunt incidunt{" "}
                <br />
                accusamus adipisci officia libero laboriosam! Proin gravida nibh
                vel <br /> velit auctor aliquet. nec sagittis sem nibh id elit.
                Duis sed odio sit amet nibh vultate{" "}
              </p>
              <div className="flex justify-center items-center gap-2 mt-5">
                <img
                  src="https://bestwebcreator.com/shopwise/demo/assets/images/user_img2.jpg"
                  alt=""
                />
                <div>
                  {" "}
                  <h2 className="text-xl font-bold text-gray-700">
                    John Muniz
                  </h2>
                  <p className="text-gray-500 text-sm">Project Engineer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* delivary Condition  */}
      <div className="mt-10 mb-12">
        <div className="sm:flex justify-around items-center ">
          {
            [1,3,5].map((v,i)=>(
              <div className="p-4 sm:w-1/4 w-full  ">
            <span className="flex justify-center items-center">
              <LuHelpingHand
                size={40}
                className="w-[50px] bg-rose-500 text-white h-[50px] rounded-full p-2"
              />
            </span>
            <h2 className="text-center text-[18px] text-gray-800 mt-6">
              Free Delivery
            </h2>
            <p className="text-gray-600 text-center ">
              If you are going to use of Lorem, you need to be sure there
              anything
            </p>
          </div>
            ))
          }
        </div>
      </div>
      {/* subscrib  */}
      <div className="sm:flex justify-between items-center mt-10 p-5 bg-rose-600 text-center ">
        <h2 className="text-[23px] font-bold text-white">Subscribe Our Newsletter</h2>
         <div className="flex justify-center items-center">
          <input type="text" name="" id="" className="py-2 outline-none  px-3 text-gray-700 font-bold" />
          <button className="px-4 py-2 bg-black text-white font-bold hover:bg-white hover:text-black duration-300">Subcrib</button>
         </div>
      </div>
    </div>
  );
};

export default AboutPage;
