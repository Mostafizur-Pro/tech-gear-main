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
        <section className="container mx-auto px-6 border">
            <div className=" grid grid-cols-6 justify-between items-center gap-32">
                <div className="col-span-4 p-10">
                    <h2
                        className={`text-6xl font-bold ${bodoniModa.className}`}
                    >
                        Subscribe our newsletter for latest offers
                    </h2>
                    <form className="py-6">
                        <input
                            type="text"
                            placeholder="Your Name *"
                            className="border py-3 px-3"
                        />
                        <input
                            type="text"
                            placeholder="Your Name *"
                            className="border py-3 px-3"
                        />
                        <button
                            className=" border py-3 px-6 font-semibold bg-[#FD8B8D] border-[#FD8B8D]"
                            type="submit"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
                <div className="col-span-2  ">
                    <Image src={bagImage} alt="Bag Image"></Image>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
