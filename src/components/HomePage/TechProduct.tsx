import { useState } from "react";
import productImage01 from "@/assets/techProduct/t1.jpg";
import productSecondImage01 from "@/assets/techProduct/t1_2.webp";
import productImage02 from "@/assets/techProduct/t2_2.jpg";
import productSecondImage02 from "@/assets/techProduct/t2.jpg";
import productImage03 from "@/assets/techProduct/t3.jpg";
import productSecondImage03 from "@/assets/techProduct/t3_2.jpg";
import productImage04 from "@/assets/techProduct/t4.jpg";
import productSecondImage04 from "@/assets/techProduct/t4_2.jpg";
import Image from "next/image";

// Import Open Sans font
import { Bodoni_Moda } from "next/font/google";
// Configure font object
const bodoniModa = Bodoni_Moda({
    subsets: ["latin"],
    display: "swap",
});
const TechProduct: React.FC = () => {
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

    const products = [
        {
            id: 1,
            name: "Casual Shirt",
            price: 39.99,
            image: productImage01,
            secondImage: productSecondImage01,
            description: "Comfortable and stylish shirt for casual occasions.",
        },
        {
            id: 2,
            name: "Denim Jeans",
            price: 49.99,
            image: productImage02,
            secondImage: productSecondImage02,
            description: "Classic denim jeans for a trendy and timeless look.",
        },
        {
            id: 3,
            name: "Hooded Sweatshirt",
            price: 29.99,
            image: productImage03,
            secondImage: productSecondImage03,
            description: "Warm and cozy hooded sweatshirt for chilly days.",
        },
        {
            id: 4,
            name: "Floral Dress",
            price: 59.99,
            image: productImage04,
            secondImage: productSecondImage04,
            description: "Elegant floral dress for special occasions.",
        },
    ];
    return (
        <section className="container mx-auto lg:px-6 px-3 my-16">
            <div className="md:flex justify-between items-center">
                <h2
                    className={`uppercase lg:text-3xl text-xl ${bodoniModa.className} py-6`}
                >
                    Tech Products
                </h2>
                <div className="w-40 h-0.5 bg-black border"></div>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        onMouseOver={() => setHoveredProduct(product.id)}
                        onMouseOut={() => setHoveredProduct(null)}
                    >
                        <Image
                            src={
                                hoveredProduct === product.id
                                    ? product.secondImage
                                    : product.image
                            }
                            alt={product.name}
                            className="w-full h-96 object-cover"
                        />
                        <div className="flex justify-between items-center py-1">
                            <h3
                                className={`uppercase text-xl ${bodoniModa.className}`}
                            >
                                {product.name}
                            </h3>
                            <p
                                className={`uppercase text-xl text-green-600 ${bodoniModa.className}`}
                            >
                                ${product.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechProduct;
