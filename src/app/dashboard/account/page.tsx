import React from 'react'
import { BsFillHouseFill, BsStarFill, BsTelephone } from "react-icons/bs"
import { FiMail } from "react-icons/fi"
function Page() {
    return (
        <div>
            <div className='bg-gradient-to-tr from-red-900 to-green-700 h-[100px] w-full md:h-[160px] relative rounded-[20px]'>
                <div><img src="/Backgr.jpg" className="w-full h-full rounded-[20px] object-cover absolute mix-blend-overlay" /></div>
            </div>

            <img src="/myimage.jpeg" className="border-pink-900 border-[3px] top-[-40px] right-[-30px] md:top-[-70px] md:right-[-60px] w-[80px] h-[80px] rounded-[100px] md:w-[140px] md:h-[140px] md:rounded-[70px] object-cover relative" />
            <div className='flex gap-1 z-0 text-[12px] left-[120px] top-[-95px] md:top-[-160px] md:left-[205px] md:text-[18px] relative text-yellow-400'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />

            </div>
            <div className='space-y-12 md:grid md:grid-cols-2 gap-[100px]'>

                <div className="text-center space-y-3">
                    <div className='text-pink-800 font-bold'>Personal Information</div>
                    <div className='grid grid-cols-2 px-[70px] md:px-10 lg:px-20'><div className='font-light'>Username</div> <div className='font-bold'>Kelvin MT </div></div>
                    <div className='grid grid-cols-2 px-[100px] md:px-20 lg:px-40'><div className=''><BsTelephone /></div> <div className='font-bold'>+233545506310</div></div>
                    <div className='grid grid-cols-2 px-[100px] md:px-20 lg:px-40'><div className=''><FiMail /></div> <div>yankson24@gmail.com</div></div>
                    <div className='grid grid-cols-2 px-[100px] md:px-20 lg:px-40'><div className=''><BsFillHouseFill /></div> <div>Accra</div></div>
                    <div className='grid grid-cols-2 px-[40px] md:px-10 lg:px-20'><div className='font-light'>Address</div> <div className='font-bold'>Kelvin MT</div></div>
                </div>

                <div className="text-center space-y-4">
                    <div className='text-pink-800 font-bold'>Trips Information</div>
                    <div className='grid grid-cols-2 px-[80px] md:px-0'><div className='font-light'>Number of Trips</div> <div className='font-bold'>4</div></div>
                    <div className='grid grid-cols-2 px-[75px] md:px-0'><div className='font-light'>Total amount spent</div> <div className='font-bold'>4000</div></div>
                    <div className='grid grid-cols-2 px-[60px] md:px-0'><div className='font-light'>Last Trip Date:</div> <div className='font-bold'>3rd September</div></div>
                </div>

                <div className="text-center space-y-4">
                    <div className='text-pink-800 font-bold'>Account Details</div>
                    <div className='grid grid-cols-2 px-[15%] md:px-0'><div className='font-light'>Date Registered</div> <div className='font-bold'>June 22, 22</div></div>
                    <div className='grid grid-cols-2 px-[60px] md:px-0'><div className='font-light'>Total amount spent</div> <div className='font-bold'>4000</div></div>
                    <div className='grid grid-cols-2 px-[60px] md:px-0 md:text-center'><div className='font-light'>Last Trip Date:</div> <div className='font-bold'>3rd September</div></div>
                </div>
            </div>

            <div className='flex px-[100px] md:px-[400px] text-pink-800 font-bold py-8'>Reset Password</div>
        </div>
    );
}

export default Page;
