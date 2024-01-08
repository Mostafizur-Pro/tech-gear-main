import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const WhyChooseUs = () => {
  return (
    <div>
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
    </div>
  );
};

export default WhyChooseUs;
