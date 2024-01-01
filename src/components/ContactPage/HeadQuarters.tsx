import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  AiFillAccountBook,
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillAmazonSquare,
} from "react-icons/ai";


const HeadQuarters = () => {
  return (
    <div className="w-full">
      {/* contact page  */}
      <div className="gap-3 justify-center items-center  sm:flex  ">
        <div className="  sm:w-9/12  sm:p-4 p-3 w-full ">
          {/* Top heading pragraph and underlin  */}
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">
              <span className=" text-rose-500">GIVE US</span> A LINE
            </h2>
            <p className="mt-2   leading-8 text-[16px] text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo
            </p>
            <div className="mt-4 mb-6 w-[116px] h-[2px] bg-gray-800"></div>
          </div>
          {/* // form  */}
          <div className=" ">
            <form>
              {/* name , email and phone  */}
              <div className=" justify-between items-start sm:flex ">
                {/* for name  */}
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-500"
                  >
                    NAME *
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-sm border-0 px-3.5 py-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-rose focus:ring-rose-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* for name  */}
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-500"
                  >
                    EMAIL *
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-sm border-0 px-3.5 py-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-rose focus:ring-rose-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>{" "}
                {/* for name  */}
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-500"
                  >
                    PHONE
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="number"
                      id="number"
                      autoComplete="given-number"
                      className="block w-full rounded-sm border-0 px-3.5 py-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-rose focus:ring-rose-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block mt-5 text-sm font-semibold leading-6 text-gray-500"
                >
                  SUBJECT *
                </label>
                {/* subject  */}
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-sm border-0 px-3.5 py-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-rose focus:ring-rose-500 sm:text-sm sm:leading-6"
                  />
                </div>
                {/* textare  */}
                <label
                  htmlFor="first-name"
                  className="block mt-5 text-md font-semibold leading-6 text-gray-500 uppercase mb-5"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows={10}
                  className="block w-full rounded-sm border-0 px-3.5 py-2 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-rose focus:ring-rose-500 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-[200px] rounded-md bg-rose-500 px-3.5 py-2.5 text-center   font-semibold text-white shadow-sm hover:bg-rose-300 focus-visible:outline focus-visible:outline-2 uppercase text-lg focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="  sm:w-3/12  ml-3  pl-2">
          {/* heading  */}
          <h2 className="text-3xl font-bold inline-block tracking-tight text-gray-500 mb-7 w-full sm:text-start text-center ">
            <span className=" text-rose-500">HEADQ </span>UARTERS
          </h2>
          {/* pragraph 1  */}
          <div>
            <h3 className="text-rose-500 font-medium">Minovate Inc.</h3>
            <p className=" leading-1 text-[14px] text-gray-600">
              Vajnorska 127, Lorem Tower Bratislava, SK
            </p>
          </div>
          {/* pragraph 1  */}
          <div className="mt-5">
            <h3 className="text-rose-500 font-medium">Phone:</h3>
            <div className="leading-1 text-[14px] text-gray-600 flex  justify-start items-center gap-x-2">
              <samp className="font-bold text-[17px]">CEO:</samp>
              <p> +421 02 66 55 12</p>
            </div>
            <div className="leading-1 text-[14px] text-gray-600 flex  justify-start items-center gap-x-2">
              <samp className="font-bold text-[17px]">Support</samp>
              <p className="text-sm"> +421 02 66 55 12</p>
            </div>
          </div>
          {/* pragraph 1  */}
          <div className="mt-5">
            <h3 className="text-gray-500 font-medium">Email::</h3>
            <div className="leading-1 text-[14px] text-gray-600 flex  justify-start items-center gap-x-2">
              <samp className="font-bold text-sm">CEO:</samp>
              <p className="text-rose-500 "> ici.kamarel@tattek.sk2</p>
            </div>
            <div className="leading-1 text-[14px] text-gray-600 flex  justify-start items-center gap-x-2">
              <samp className="font-bold text-sm">Support</samp>
              <p className="text-rose-500 "> ici.kamarel@tattek.sk2</p>
            </div>
          </div>
          {/* icons  */}
          <div className="mt-10 flex justify-around items-center">
            <button className="hover:text-rose-500  ">
              <AiFillAccountBook size={40} />
            </button>
            <button className="hover:text-rose-500  ">
              <AiFillAccountBook size={40} />
            </button>{" "}
            <button className="hover:text-rose-500  ">
              <AiFillAccountBook size={40} />
            </button>{" "}
            <button className="hover:text-rose-500  ">
              <AiFillAccountBook size={40} />
            </button>{" "}
            <button className="hover:text-rose-500  ">
              <AiFillAccountBook size={40} />
            </button>
          </div>
          <h2 className="text-3xl font-bold mt-10 inline-block tracking-tight text-gray-500 mb-7 sm:text-4xl">
            <span className=" text-rose-500 ">HEADQ </span>UARTERS
          </h2>
          <div className="mt-10 font-medium text-gray-600">
            <p className="text-gray-500">
              <span className="font-bold text-[16px]">Monday - Friday:</span>{" "}
              9:00 - 17:00
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-[16px]">Monday - Friday:</span>{" "}
              9:00 - 17:00
            </p>
            <p className="text-gray-500">
              <span className="font-bold text-[16px]">Monday - Friday:</span>{" "}
              9:00 - 17:00
            </p>
          </div>
        </div>
      </div>
      {/* //slide bar   */}
    
      {/* carusale   */}
     
    </div>
  );
};

export default HeadQuarters;
