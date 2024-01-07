import Image from "next/image";
import gemsImage from "@/assets/collection/glow.jpg";
import shoeImage from "@/assets/collection/shoe.jpg";
import womanImage from "@/assets/collection/woman.jpg";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

// Import Open Sans font
import { Bodoni_Moda } from "next/font/google";
// Configure font object
const bodoniModa = Bodoni_Moda({
    subsets: ["latin"],
    display: "swap",
});

const Collection = () => {
    return (
        <section className="container mx-auto px-6 text-center py-16">
            <div className="grid md:grid-cols-3 gap-6 ">
                <div className="">
                    <div className="">
                        <Image src={gemsImage} alt="Gems Image"></Image>
                    </div>
                    <div className="pt-4">
                        <h3
                            className={`uppercase lg:text-3xl text-xl ${bodoniModa.className}`}
                        >
                            Forever Gems
                        </h3>
                        <p className="lg:text-base text-sm pb-4 pt-0.5">
                            investment pieces to cherish and wear for years to
                            come
                        </p>
                        <Link href={"/"} className="text-xs font-medium">
                            SHOP FINE JEWELRY{" "}
                            <IoMdArrowDropright className="inline ms-3" />
                        </Link>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <Image src={shoeImage} alt="Gems Image"></Image>
                    </div>
                    <div className="pt-4">
                        <h3
                            className={`uppercase lg:text-3xl text-xl  ${bodoniModa.className}`}
                        >
                            METALLIC SEASON
                        </h3>
                        <p className="lg:text-base text-sm pb-4 pt-0.5">
                            ifestive flats to make your outfits shine
                        </p>
                        <Link className="text-xs font-medium" href={"/"}>
                            SHOP NOW{" "}
                            <IoMdArrowDropright className="inline ms-3" />
                        </Link>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <Image src={womanImage} alt="Gems Image"></Image>
                    </div>
                    <div className="pt-4">
                        <h3
                            className={`uppercase  lg:text-3xl text-xl  ${bodoniModa.className}`}
                        >
                            THE BESTSELLERS
                        </h3>
                        <p className="lg:text-base text-sm pb-4 pt-0.5">
                            what's currently hot this season
                        </p>
                        <Link className="text-xs font-medium" href={"/"}>
                            SHOP BESTSELLERS{" "}
                            <IoMdArrowDropright className="inline ms-3" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collection;
