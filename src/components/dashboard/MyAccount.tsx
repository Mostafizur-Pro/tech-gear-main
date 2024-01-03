import React from 'react';

const MyAccount = () => {
    return (
        <div className='bg-gray-50'>
        <div className='p-8 sm:grid grid-cols-4 gap-4 bg-gray-50 '>
            <div className="col-span-1 bg-white m-3 ">
                <ul className="">
                    <li className="active px-[15px] py-[10px] bg-rose-500 font-medium text-[18px] text-white"><a href="#">Login/Register</a></li>
                    <li className='px-[15px] py-[10px] font-medium text-gray-500 text-[16px] '><a href="#">Password Recovery</a></li>
                    <li className='px-[15px] py-[10px] font-medium text-gray-500 text-[16px]'><a href="#">My Account</a></li>
                    <li className='px-[15px] py-[10px] font-medium text-gray-500 text-[16px]'><a href="#">Address Book</a></li>
                    <li className='px-[15px] py-[10px] font-medium text-gray-500 text-[16px]'><a href="#">Wishlist</a></li>
                    <li className='px-[15px] py-[10px] font-medium text-gray-500 text-[16px]'><a href="#">Returns</a></li>
                    <li className='px-[15px] py-[10px] font-medium text-gray-500 text-[16px]'><a href="#">Newsletter</a></li>
                    <li className='px-[15px] py-[10px] font-medium text-gray-500 text-[16px]'><a href="/dashboard/add-blogs">Add Blogs</a></li>
                </ul>
            </div>
            <div className="col-span-3 bg-white m-3">
                <div className="py-2">
                    <div className="well bg-white m-8 ">
                        <h6 className="text-xl text-gray-600 text-uppercase ">My Account</h6>
                        <ul className='text-rose-500 font-[14px] font-medium ms-2 mt-4'>
                            <li><a href="#">Edit your account informations</a></li>
                            <li><a href="#">Change your password</a></li>
                            <li><a href="#">Modify your address book</a></li>
                            <li><a href="#">Modify your wishlist</a></li>
                        </ul>

                        <hr className='my-8' />

                        <h6 className="text-xl text-gray-600 text-uppercase">My Orders</h6>
                        <ul className='text-rose-500 font-[14px] font-medium ms-2 mt-4'>
                            <li><a href="#">Order History</a></li>
                            <li><a href="#">Downloads</a></li>
                            <li><a href="#">Reward Points</a></li>
                            <li><a href="#">Returns Requests</a></li>
                            <li><a href="#">Transactions</a></li>
                            <li><a href="#">Reviews</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MyAccount;