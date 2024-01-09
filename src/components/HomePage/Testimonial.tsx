"use client";

import React, { useState, useEffect } from "react";
import { IoMdQuote } from "react-icons/io";

// Import Open Sans font
import { Bodoni_Moda } from "next/font/google";

// Configure font object
const bodoniModa = Bodoni_Moda({
    subsets: ["latin"],
    display: "swap",
});

type Testimonial = {
    id: number;
    name: string;
    avatar: string;
    content: string;
};

const Testimonials: React.FC = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch("testimonials.json");
                const data = await response.json();
                setTestimonials(data);
            } catch (error) {
                console.error("Error fetching testimonials:", error);
            }
        };

        fetchTestimonials();
    }, []);

    console.log(testimonials);

    return (
        <section className="">
            <div className="container mx-auto md:px-6 px-3">
                <div>
                    <div className=" text-center">
                        <h2 className="text-lg font-semibold pb-3 md:block hidden">
                            Testimonials
                        </h2>
                        <h3
                            className={`${bodoniModa.className} lg:text-6xl text-4xl font-semibold`}
                        >
                            What Our Customer Say
                        </h3>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 my-16">
                        {testimonials.map((testimonial) => (
                            <div className="border p-10" key={testimonial.id}>
                                <div className="flex gap-3 items-start ">
                                    <div className="">
                                        <IoMdQuote className="w-10 h-10 opacity-25" />
                                    </div>

                                    <p className="opacity-85 text-sm">
                                        {testimonial.content}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 mt-6">
                                    <img
                                        className="w-10 h-10 object-cover rounded-full"
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                    />
                                    <p className="font-semibold ">
                                        {testimonial.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
