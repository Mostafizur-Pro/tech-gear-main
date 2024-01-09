import redTShirt from "@/assets/red-t-shirt.jpg";
import blackTShirt from "@/assets/black-t-shirt.jpeg";
import whiteTShirt from "@/assets/white-t-shirt.jpg";
import { TiDelete } from "react-icons/ti";
import { FaMinus, FaPlus } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const ShoppingCartList = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            image: blackTShirt,
            productName: "Black t-shirt",
            color: "black",
            size: "M",
            SKU: "SKU001",
            quantity: 2,
            price: 19.99,
        },
        {
            id: 2,
            image: redTShirt,
            productName: "Red t-shirt",
            color: "red",
            size: "S",
            SKU: "SKU002",
            quantity: 1,
            price: 29.99,
        },
        {
            id: 3,
            image: whiteTShirt,
            productName: "White t-shirt",
            color: "white",
            size: "L",
            SKU: "SKU003",
            quantity: 3,
            price: 14.99,
        },
    ]);

    const minusQuantity = (id: Number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };
    const plusQuantity = (id: Number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };
    const removeFromCart = (id: Number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <section className=" container mx-auto lg:px-6 px-3 py-16">
            <h2 className="uppercase font-medium">Your Shopping Cart</h2>
            <div className="py-10 ">
                <div className=" md:grid hidden  grid-cols-12 items-center justify-between gap-6 font-semibold uppercase pb-3 border-[#DD748F] border-b">
                    <div className="col-span-4 flex xl:gap-10 lg:gap-5 gap-2">
                        <div className="">
                            <p className=" w-16 object-cover rounded-md"></p>
                        </div>
                        <div className="">
                            <h4 className="">Description</h4>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="">SKU</h4>
                    </div>
                    <div className="lg:col-span-2  col-span-3">
                        <h4 className="">Quantity</h4>
                    </div>
                    <div className="col-span-2">
                        <h4 className="">Unit Price</h4>
                    </div>
                    <div className="col-span-2 flex justify-between items-center">
                        <div className="col-span-">
                            <h4 className="">Total</h4>
                        </div>
                        <div className="me-6"></div>
                    </div>
                </div>
                <div className="">
                    {cartItems.map((item) => (
                        <div className="pt-6 border-b">
                            <div className="md:grid grid-cols-12 items-center justify-between gap-6 pb-6 space-y-2">
                                <div className="col-span-4 flex xl:gap-10 lg:gap-5 md:gap-2 gap-5">
                                    <div className="">
                                        <Image
                                            className="h-16 w-16 object-cover rounded-md"
                                            src={item.image}
                                            alt="product image"
                                        ></Image>
                                    </div>
                                    <div className="">
                                        <h4 className="uppercase text-lg">
                                            {item.productName}
                                        </h4>
                                        <div className="lg:flex gap-3 text-gray-400 italic">
                                            <p className="">
                                                Color: {item.color},
                                            </p>
                                            <p className="">
                                                Size: {item.size}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <h4 className="uppercase">
                                        <span className="uppercase font-semibold md:hidden inline">
                                            SKU:{" "}
                                        </span>
                                        {item.SKU}
                                    </h4>
                                </div>
                                <div className="lg:col-span-2  col-span-3 xl:me-6 me-3">
                                    <div className="border flex items-center justify-between">
                                        <button
                                            onClick={() =>
                                                plusQuantity(item.id)
                                            }
                                            className=" p-3"
                                        >
                                            <FaPlus />
                                        </button>
                                        <h4 className="border-x w-full text-center font-semibold">
                                            {item.quantity}
                                        </h4>
                                        <button
                                            onClick={() =>
                                                minusQuantity(item.id)
                                            }
                                            className="  p-3"
                                        >
                                            <FaMinus />
                                        </button>
                                    </div>
                                </div>
                                <div className="col-span-2 text-[#DD748F]">
                                    <h4 className="uppercase">
                                        <span className="uppercase font-semibold md:hidden inline">
                                            Unit Price:{" "}
                                        </span>{" "}
                                        ${item.price}
                                    </h4>
                                </div>

                                <div className="col-span-2 flex justify-between items-center text-[#DD748F]">
                                    <div className="col-span-">
                                        <h4 className="uppercase">
                                            <span className="uppercase font-semibold md:hidden inline">
                                                Total:{" "}
                                            </span>{" "}
                                            ${item.price}
                                        </h4>
                                    </div>
                                    <div className="me-6">
                                        <button
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                            className=""
                                        >
                                            <TiDelete className="inline mb-0.5 text-xl" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShoppingCartList;
