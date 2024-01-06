import Image from "next/image";
import bannerImage01 from "../../assets/bannerImage01.jpg";
import bannerImage02 from "../../assets/bannerImage02.jpg";
import { HiArrowLongRight } from "react-icons/hi2";

// Import Open Sans font
import { Bodoni_Moda } from "next/font/google";
// Configure font object
const bodoniModa = Bodoni_Moda({
    subsets: ["latin"],
    display: "swap",
});

const Sidebar = () => {
    return (
        <section className="border-b">
            <div className="container mx-auto px-6 ">
                <div className="grid md:grid-cols-7 items-end lg:pt-44 md:pt-20 pt-16">
                    <div className="col-span-3 ">
                        <h2
                            className={`xl:text-8xl lg:text-6xl text-5xl uppercase font-semibold ${bodoniModa.className}`}
                        >
                            Flash Sale Big SAle
                        </h2>
                        <p className=" py-6 md:ps-2 md:pe-10 opacity-75 font-medium">
                            Discover the latest trends in fashion at our online
                            clothing store! Elevate your style with our curated
                            collection of chic and comfortable clothing. From
                            timeless classics to on-trend pieces, find the
                            perfect outfit for any occasion.
                        </p>
                        <button className=" rounded-full border-2 font-semibold px-6 py-3 xl:mb-44 lg:mb-24 mb:10">
                            Shop Now{" "}
                            <HiArrowLongRight className=" inline text-2xl ms-2" />
                        </button>
                    </div>
                    <div className="flex gap-10 col-span-4 pt-6 mb-0">
                        <div className="relative">
                            <Image
                                className="rounded-t-full w-[45rem]"
                                src={bannerImage01}
                                alt="Banner Image"
                            ></Image>
                            <div className="2xl:w-[27rem] 2xl:h-[27rem] xl:w-[24rem] xl:h-[24rem] border  border-black absolute  rounded-full 2xl:-bottom-0 xl:-bottom-10 right-0  left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
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
            </div>
        </section>
    );
};

export default Sidebar;
