import bagImage from "../../assets/newsletterBag.jpg";
import Image from "next/image";

// Import Open Sans font
import { Bodoni_Moda } from "next/font/google";
import Marquee from "react-fast-marquee";
// Configure font object
const bodoniModa = Bodoni_Moda({
    subsets: ["latin"],
    display: "swap",
});

const Newsletter = () => {
    return (
        <section className="container mx-auto px-6 border my-16 py-6">
            <div className=" grid md:grid-cols-6 md:justify-between justify-center items-center 2xl:gap-32 xl:gap-28 lg:gap-16">
                <div className="col-span-4 md:p-10 p-4">
                    <h2
                        className={`xl:text-6xl lg:text-4xl text-3xl font-bold ${bodoniModa.className}`}
                    >
                        Subscribe our newsletter for latest offers
                    </h2>
                    <form className="py-6">
                        <input
                            type="text"
                            placeholder="Your Name *"
                            className="border py-3 px-3 lg:w-auto w-full"
                        />
                        <input
                            type="email"
                            placeholder="Your Email *"
                            className="border py-3 px-3 lg:w-auto w-full"
                        />
                        <button
                            className="lg:inline block lg:w-auto w-full border py-3 px-6 font-semibold bg-[#FD8B8D] border-[#FD8B8D]"
                            type="submit"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
                <div className="md:col-span-2  md:block hidden">
                    <Image src={bagImage} alt="Bag Image"></Image>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
