import React from 'react';

const Sidebar = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='sm:grid bg-rose-200 grid-cols-2'>
                        <div className=' '>

                            <div className='px-8 py-4'>
                                <div className='ps-12 pt-12 flex items-center justify-center'>
                                    <div className=' '>
                                        <h1 className='text-gray-700 text-xl font-medium'>50% off in all products</h1>
                                        <h1 className='text-gray-700 text-3xl font-bold'>Summer Sale</h1>
                                        <button className="btn btn-active btn-md bg-rose-400 text-white my-4 text-xm font-bold">Buy Now</button>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='flex items-center justify-center '>
                            <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-[75%]   h-full rounded-lg " />
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-rose-400 text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-rose-400 text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='sm:grid bg-rose-200 grid-cols-2'>
                        <div className=' '>

                            <div className='px-8 py-4'>
                                <div className='ps-12 pt-12 flex items-center justify-center'>
                                    <div className=' '>
                                        <h1 className='text-gray-700 text-xl font-medium'>50% off in all products</h1>
                                        <h1 className='text-gray-700 text-3xl font-bold'>Summer Sale</h1>
                                        <button className="btn btn-active btn-md bg-rose-400 text-white my-4 text-xm font-bold">Buy Now</button>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='flex items-center justify-center '>
                            <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-[75%]   h-full rounded-lg " />
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-rose-400 text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-rose-400 text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='sm:grid bg-rose-200 grid-cols-2'>
                        <div className=' '>

                            <div className='px-8 py-4'>
                                <div className='ps-12 pt-12 flex items-center justify-center'>
                                    <div className=' '>
                                        <h1 className='text-gray-700 text-xl font-medium'>50% off in all products</h1>
                                        <h1 className='text-gray-700 text-3xl font-bold'>Summer Sale</h1>
                                        <button className="btn btn-active btn-md bg-rose-400 text-white my-4 text-xm font-bold">Buy Now</button>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='flex items-center justify-center '>
                            <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-[75%]   h-full rounded-lg " />
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-rose-400 text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-rose-400 text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className='sm:grid bg-rose-200 grid-cols-2'>
                        <div className=' '>

                            <div className='px-8 py-4'>
                                <div className='ps-12 pt-12 flex items-center justify-center'>
                                    <div className=' '>
                                        <h1 className='text-gray-700 text-xl font-medium'>50% off in all products</h1>
                                        <h1 className='text-gray-700 text-3xl font-bold'>Summer Sale</h1>
                                        <button className="btn btn-active btn-md bg-rose-400 text-white my-4 text-xm font-bold">Buy Now</button>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='flex items-center justify-center '>
                            <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-[75%]   h-full rounded-lg " />
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-rose-400 text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-rose-400 text-white">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;