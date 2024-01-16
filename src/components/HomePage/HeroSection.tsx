import Image from "next/image";
import productImage01 from "@/assets/techProduct/t3.jpg";
import productImage02 from "@/assets/products/115.jpg";
import productImage03 from "@/assets/techProduct/t1.jpg";
import productImage04 from "@/assets/products/140.jpg";
import productImage05 from "@/assets/products/141.jpg";
import productImage06 from "@/assets/products/19.jpg";
import productImage07 from "@/assets/products/21.jpg";
import { HiArrowLongRight } from "react-icons/hi2";

// Import Open Sans font
import { Bodoni_Moda } from "next/font/google";
import Marquee from "react-fast-marquee";
// Configure font object
const bodoniModa = Bodoni_Moda({
    subsets: ["latin"],
    display: "swap",
});

const HeroSection = () => {
    const products = [
        {
            id: 1,
            name: "Casual Shirt",
            description: "Comfortable and stylish casual shirt for men",
            price: 29.99,
            image: productImage01,
            category: "Men's Fashion",
        },
        {
            id: 2,
            name: "Summer Dress",
            description: "Light and breezy summer dress for women",
            price: 39.99,
            image: productImage02,
            category: "Women's Fashion",
        },
        {
            id: 3,
            name: "Unisex Hoodie",
            description: "Warm and cozy unisex hoodie for all occasions",
            price: 49.99,
            image: productImage03,
            category: "Unisex",
        },
        {
            id: 4,
            name: "Playful T-shirt",
            description: "Fun and playful t-shirt for kids",
            price: 19.99,
            image: productImage04,
            category: "Kid's Fashion",
        },
        {
            id: 5,
            name: "Formal Suit",
            description: "Classic and elegant formal suit for men",
            price: 149.99,
            image: productImage05,
            category: "Men's Fashion",
        },
        {
            id: 6,
            name: "Activewear Set",
            description: "Stylish and comfortable activewear set for women",
            price: 59.99,
            image: productImage06,
            category: "Women's Fashion",
        },
        {
            id: 7,
            name: "Unisex Hoodie",
            description: "Warm and cozy unisex hoodie for all occasions",
            price: 49.99,
            image: productImage07,
            category: "Unisex",
        },
    ];

    return (
        <section className="border-b ">
            <div className="container mx-auto px-6 text-center py-16">
                <div className="grid ">
                    <div className="col-span-4 md:mt-16 mt-6 xl:pb-6">
                        <h2
                            className={`xl:text-8xl lg:text-6xl md:text-5xl text-4xl uppercase font-semibold ${bodoniModa.className}`}
                        >
                            Flash Sale Big SAle
                        </h2>
                        <p className="md:w-10/12 mx-auto py-6 md:ps-2 md:pe-10 opacity-75 font-medium">
                            Discover the latest trends in fashion at our online
                            clothing store! Elevate your style with our curated
                            collection of chic and comfortable clothing. From
                            timeless classics to on-trend pieces, find the
                            perfect outfit for any occasion.
                        </p>
                        <button className=" rounded-full border-2 font-semibold px-6 py-3 ">
                            Shop Now{" "}
                            <HiArrowLongRight className=" inline text-2xl ms-2" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="">
                <Marquee>
                    {products.map((product) => (
                        <div className="ps-0.5 " key={product.id}>
                            <Image
                                className="lg:h-96 h-48 lg:w-80 w-44 object-cover"
                                src={product.image}
                                alt="Product Image"
                            ></Image>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default HeroSection;
