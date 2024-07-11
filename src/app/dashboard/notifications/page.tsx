import React from 'react';
import { FaClock, FaRegStar } from 'react-icons/fa'; // Importing timer and star icons

function Page() {
    return (
        <div className="p-4">
            {/* Title of the page */}
            <h1 className="text-xl font-bold text-[#6B184E]">My Notifications</h1>
            
            {/* Container for the ovals */}
            <div className="flex space-x-4 mt-4">
                {/* First oval container */}
                <div className="relative group" style={{ width: '150px' }}>
                    {/* Oval with placeholder text "All" */}
                    <span className="block px-6 py-1 border-2 border-[#6B184E] text-black rounded-full cursor-pointer relative overflow-hidden w-full text-center">
                        {/* Background span for hover effect */}
                        <span className="absolute inset-0 bg-[#6B184E] transition-transform transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                        {/* Text inside the oval */}
                        <span className="relative z-10 group-hover:text-white">All</span>
                    </span>
                </div>
                
                {/* Second oval container */}
                <div className="relative group" style={{ width: '150px' }}>
                    {/* Oval with placeholder text "Unread" */}
                    <span className="block px-6 py-1 border-2 border-[#6B184E] text-black rounded-full cursor-pointer relative overflow-hidden w-full text-center">
                        {/* Background span for hover effect */}
                        <span className="absolute inset-0 bg-[#6B184E] transition-transform transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                        {/* Text inside the oval */}
                        <span className="relative z-10 group-hover:text-white">Unread</span>
                    </span>
                </div>
            </div>

            {/* Additional content under the ovals */}
            <div className="mt-8 flex items-center space-x-12 pl-6">
                <span className="text-[#6B184E] text-xl font-bold">tC</span>
                <div className="flex flex-col">
                    <p className="text-black font-bold">Welcome to Trip Connect</p>
                    <p className="text-black">Glad to have you</p>
                </div>
            </div>

            {/* First notification */}
            <div className="mt-8 flex items-center space-x-12 pl-6">
                <FaClock className="text-[#6B184E]" />
                <div className="flex flex-col">
                    <p className="text-black font-bold">Reminder: You have an upcoming trip with VIP on Tuesday</p>
                    <p className="text-black">Ready. Set</p>
                </div>
            </div>

            {/* Second notification */}
            <div className="mt-8 flex items-center space-x-12 pl-6">
                <FaRegStar className="text-[#6B184E]" />
                <div className="flex flex-col">
                    <p className="text-black font-bold">Rate your last trip to Kumasi with VIP</p>
                    <p className="text-black">Let's hear from you</p>
                </div>
            </div>

            {/* Third notification */}
            <div className="mt-8 flex items-center space-x-12 pl-6">
                <FaRegStar className="text-[#6B184E]" />
                <div className="flex flex-col">
                    <p className="text-black font-bold">Rate your driver: Kwame Daniels</p>
                    <p className="text-black">Help us get better</p>
                </div>
            </div>

            {/* Fourth notification */}
            <div className="mt-8 flex items-center space-x-12 pl-6">
                <FaClock className="text-[#6B184E]" />
                <div className="flex flex-col">
                    <p className="text-black font-bold">Reminder: You have an upcoming trip with VIP on Tuesday</p>
                    <p className="text-black">Ready. Set</p>
                </div>
            </div>
        </div>
    );
}

export default Page;