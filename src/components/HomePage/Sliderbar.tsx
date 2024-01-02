import Image from "next/image";
import bannerImage01 from "../../assets/bannerImage01.jpg";
import bannerImage02 from "../../assets/bannerImage02.jpg";
import { HiArrowLongRight } from "react-icons/hi2";

const Sidebar = () => {
    return (
        <section className="container mx-auto px-6">
            <div className="grid grid-cols-7 items-center pt-44">
                <div className="col-span-3">
                    <h2 className="text-8xl uppercase font-semibold">
                        Flash Sale Big SAle
                    </h2>
                    <p className=" py-6 ps-2 pe-10 opacity-75 font-medium">
                        Discover the latest trends in fashion at our online
                        clothing store! Elevate your style with our curated
                        collection of chic and comfortable clothing. From
                        timeless classics to on-trend pieces, find the perfect
                        outfit for any occasion.
                    </p>
                    <button className=" rounded-full border-2 font-semibold px-6 py-3 ">
                        Shop Now{" "}
                        <HiArrowLongRight className=" inline text-2xl ms-2" />
                    </button>
                </div>
                <div className="flex gap-10 col-span-4">
                    <div className="relative">
                        <Image
                            className="rounded-t-full w-[45rem]"
                            src={bannerImage01}
                            alt="Banner Image"
                        ></Image>
                        <div className="w-[27rem] h-[27rem] border  border-black absolute -top-3 rounded-full -left-3"></div>
                    </div>

                    <div className="">
                        <Image
                            className="rounded-t-full w-[45rem]"
                            src={bannerImage02}
                            alt="Banner Image 02"
                        ></Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
