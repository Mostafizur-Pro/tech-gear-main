import { useState } from "react";
import productImage01 from "@/assets/newArrival/1.jpg";
import productSecondImage01 from "@/assets/newArrival/1_2.jpg";
import productImage02 from "@/assets/newArrival/2.jpg";
import productSecondImage02 from "@/assets/newArrival/2_2.jpg";
import productImage03 from "@/assets/newArrival/3.jpg";
import productSecondImage03 from "@/assets/newArrival/3_2.jpg";
import productImage04 from "@/assets/newArrival/4.jpg";
import productSecondImage04 from "@/assets/newArrival/4_2.jpg";
import productImage05 from "@/assets/newArrival/5.jpg";
import productSecondImage05 from "@/assets/newArrival/5_2.jpg";
import productImage06 from "@/assets/newArrival/6.jpg";
import productSecondImage06 from "@/assets/newArrival/6_2.jpg";
import Image from "next/image";

const NewArrival: React.FC = () => {
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
        <section className="container mx-auto px-6 py-16">
            <h2 className="py-6 text-3xl font-semibold">New Arrival</h2>
            <div className="grid grid-cols-4 gap-4">
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
                        <h3 className="text-xl font-semibold mt-2">
                            {product.name}
                        </h3>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="text-green-500 font-semibold mt-2">
                            ${product.price}
                        </p>
                        {/* Add more details or buttons as needed */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewArrival;
