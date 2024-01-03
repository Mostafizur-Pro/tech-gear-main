import React, { useEffect, useState } from 'react';
import FaqGeneralQuestion from './FaqGeneralQuestion';
import { data } from './data'

const Faq = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("./faqGeneral.json")
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, [])
    return (
        <div>
            <div className="bg-base-200">
                <h1 className='text-center py-12 text-gray-700 font-medium text-4xl'>Frequently Asked Question</h1>
            </div>
            {/* Questions */}
            <div className='sm:grid grid-cols-2 gap-4 m-8'>
                {/* General Questions */}
                <div>
                {
                    data.map(item => (
                        <div className="join join-vertical w-full ">
                            <div>
                                <h1 className='text-center py-12 text-rose-500 font-medium text-3xl'>
                                    Genetal Question
                                </h1>
                            </div>
                            {
                                item.other.map(result => (<div className="collapse collapse-plus join-item border border-base-300 hover:text-rose-500">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium">
                                        {result.title}
                                    </div>
                                    <div className="collapse-content    whitespace-normal text-wrap	text-lg text-gray-500">
                                        <p>{result.description}</p>
                                    </div>

                                </div>))
                            }
                        </div>
                    ))
                }
                </div>
                
                {/* Other Question */}
                <div>
                {
                    data.map(item => (
                        <div className="join join-vertical w-full ">
                            <div>
                                <h1 className='text-center py-12 text-rose-500 font-medium text-3xl'>
                                    Other Question
                                </h1>
                            </div>
                            {
                                item.other.map(result => (<div className="collapse collapse-plus join-item border border-base-300 hover:text-rose-500">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium">
                                        {result.title}
                                    </div>
                                    <div className="collapse-content    whitespace-normal text-wrap	text-lg text-gray-500">
                                        <p>{result.description}</p>
                                    </div>

                                </div>))
                            }
                        </div>
                    ))
                }
                </div>
            </div>
            {/* Subscrive */}

            <div className="py-12 bg-rose-500 sm:grid grid-cols-2 gap-3 	items-center">
                <div>

                    <h1 className='text-center py-12 text-white font-medium text-4xl'>Subscribe Our Newsletter
                    </h1>
                </div>
                <div>

                    <div className='sm:flex justify-center items-center'>
                        <input type="text" placeholder="Enter Email Address" className="rounded-none	input  sm:input-lg w-full max-w-xs" />
                        <button type="submit" className='btn sm:btn-lg btn-neutral btn-wide -500 rounded-none	 text-white font-medium text-lg'>Subscribe</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Faq;