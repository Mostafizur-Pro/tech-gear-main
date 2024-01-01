
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FaFacebookF } from "react-icons/fa6";
import {
    FaInstagram,
    FaMinus,
    FaPinterest,
    FaPlus,
    FaTwitter,
} from "react-icons/fa";

const ProductDetailsDescription = () => {
    return (
        <div>
             <div className="grid grid-cols-7">
                            <div className="col-span-3">
                                <Swiper
                                    spaceBetween={10}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    <SwiperSlide>
                                        <img
                                            className="h-[32rem] w-full object-cover"
                                            src="https://im.uniqlo.com/global-cms/spa/res02e261446946bdac6265a2dccfbd4350fr.jpg"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            className="h-[32rem] w-full object-cover"
                                            src="https://cms.brnstc.de/product_images/680x930_retina/cpro/media/images/product/23/8/100149234813000_2_1692600358791.jpg"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            className="h-[32rem]  w-full object-cover"
                                            src="https://www.vbcpontedera.com/wp-content/uploads/2023/01/lanvin-t-shirt-avec-poche-noir-t-shirts-polos-homme_1-1.jpg"
                                        />
                                    </SwiperSlide>
                                </Swiper>
                                <div className="pt-2">
                                    <Swiper
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <img
                                                className="h-32 w-full object-cover"
                                                src="https://im.uniqlo.com/global-cms/spa/res02e261446946bdac6265a2dccfbd4350fr.jpg"
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img
                                                className="h-32 w-full object-cover"
                                                src="https://cms.brnstc.de/product_images/680x930_retina/cpro/media/images/product/23/8/100149234813000_2_1692600358791.jpg"
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img
                                                className="h-32 w-full object-cover"
                                                src="https://www.vbcpontedera.com/wp-content/uploads/2023/01/lanvin-t-shirt-avec-poche-noir-t-shirts-polos-homme_1-1.jpg"
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img
                                                className="h-32 w-full object-cover"
                                                src="https://im.uniqlo.com/global-cms/spa/res02e261446946bdac6265a2dccfbd4350fr.jpg"
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="col-span-4">
                                <div className="p-10 space-y-3">
                                    <h2 className="text-3xl font-semibold">
                                        BLACK T-SHIRT
                                    </h2>
                                    <hr />
                                    <div className="flex justify-between items-center py-2">
                                        <p className="text-3xl space-x-2">
                                            <span>$12.99</span>
                                            <del className="text-2xl text-gray-400">
                                                $18.69
                                            </del>
                                        </p>
                                        <p className="">
                                            Availability:{" "}
                                            <span className="text-green-400">
                                                In Stock
                                            </span>
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="pt-2 opacity-70">
                                        <p className="">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </p>
                                        <div className=" ps-10 py-6">
                                            <ul className="list-disc">
                                                <li>
                                                    Lorem ipsum dolor sit amet
                                                </li>
                                                <li>
                                                    Consectetur adipiscing elit
                                                </li>
                                                <li>Sed do eiusmod tempor</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex items-center gap-6 py-2 uppercase">
                                        <div className="">
                                            <label htmlFor="size">Size:</label>
                                            <select
                                                className="py-2 px-4 border-2 ms-3"
                                                name="size"
                                                id="size"
                                            >
                                                <option value="m">M</option>
                                                <option value="m">L</option>
                                                <option value="m">XL</option>
                                            </select>
                                        </div>
                                        <div className="">
                                            <label htmlFor="color">
                                                Color:
                                            </label>
                                            <select
                                                className="py-2 px-4 border-2 ms-3"
                                                name="color"
                                                id="color"
                                            >
                                                <option value="m">Black</option>
                                                <option value="m">Blue</option>
                                                <option value="m">White</option>
                                            </select>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between items-center pt-2">
                                        <div className="border-2 flex items-center justify-between">
                                            <button
                                                onClick={plusQuantity}
                                                className=" p-3 hover:bg-[#E47282]"
                                            >
                                                <FaPlus />
                                            </button>
                                            <h4 className="border-x w-full text-center font-semibold px-6">
                                                {item}
                                            </h4>
                                            <button
                                                onClick={minusQuantity}
                                                className=" hover:bg-[#E47282]  p-3"
                                            >
                                                <FaMinus />
                                            </button>
                                        </div>
                                        <button className="px-6 py-2 border-2">
                                            Add to cart
                                        </button>
                                    </div>
                                    <div className="py-6">
                                        <div className="flex justify-between items-center border-2 p-3">
                                            <div className="rating rating-sm">
                                                <input
                                                    type="radio"
                                                    name="rating-5"
                                                    className="mask mask-star-2 bg-orange-400"
                                                />
                                                <input
                                                    type="radio"
                                                    name="rating-5"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    checked
                                                />
                                                <input
                                                    type="radio"
                                                    name="rating-5"
                                                    className="mask mask-star-2 bg-orange-400"
                                                />
                                                <input
                                                    type="radio"
                                                    name="rating-5"
                                                    className="mask mask-star-2 bg-orange-400"
                                                />
                                                <input
                                                    type="radio"
                                                    name="rating-5"
                                                    className="mask mask-star-2 bg-orange-400"
                                                />
                                            </div>
                                            <div className="">
                                                <p className="">
                                                    8 Reviews /{" "}
                                                    <span className="text-blue-500">
                                                        <Link
                                                            href={"add-review"}
                                                        >
                                                            Write Review
                                                        </Link>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="border-b-2 border-x-2 p-3 opacity-80">
                                            <p>
                                                SKU:{" "}
                                                <span className="text-gray-500 italic ps-2">
                                                    SK0631661126
                                                </span>
                                            </p>{" "}
                                            <p>
                                                Category:{" "}
                                                <span className="text-gray-500 italic ps-2">
                                                    {" "}
                                                    Men, T-Shirts{" "}
                                                </span>
                                            </p>
                                            <p>
                                                Tags:{" "}
                                                <span className="text-gray-500 italic ps-2">
                                                    {" "}
                                                    men, t-shirts, black, slim{" "}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="uppercase font-semibold">
                                            Share On{" "}
                                        </p>
                                        <div className="flex gap-2 text-xl">
                                            <span>
                                                <FaFacebookF />
                                            </span>
                                            <span>
                                                <FaInstagram />
                                            </span>
                                            <span>
                                                <FaPinterest />
                                            </span>
                                            <span>
                                                <FaTwitter />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default ProductDetailsDescription;