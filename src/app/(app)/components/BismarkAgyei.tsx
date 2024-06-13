import React from 'react';
import { FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './footer.css'; // connecting the css file

function BismarkAgyei() {
    return (
        <div className='bg-[#250118] py-10'>
            <div className='px-5 lg:px-10'>
                <div className='grid grid-cols-1 lg:grid-cols-5  gap-5 py-5 text-white'>
                    <div className="lg:col-span-2 flex flex-col gap-3 "> 
                        <h4 className='text-xl font-bold'>About Us</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quam hic in dolor asperiores libero alias aliquid eligendi ipsum consectetur ex, vero voluptatibus omnis ea optio natus harum qui temporibus.</p>
                        <div className="flex gap-2 items-center text-xs lg:text-sm">
                            <FaPhoneAlt />
                            <span>+2335562335</span>
                        </div>
                        <div className="flex gap-2 items-center text-xs  lg:text-sm">
                            <FaEnvelope />
                            <span>example@gmail.com</span>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-1 lg:gap-3">
                        <h4 className='text-xl font-bold'>Useful Links</h4>
                        <p>My trips</p>
                        <p>Notifications</p>
                        <p>Login</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem</p>
                    </div>
                    <div className="flex flex-col gap-3 ">
                        <h4 className='text-xl font-bold'>Further Information</h4>
                        <div>
                            <p>Terms and Conditions</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 ">
                        <h4 className='text-xl font-bold'>Follow Us</h4>
                        <div className="icon-container">
                            <FaTwitter className="icon" />
                            <FaFacebook className="icon" />
                            <FaInstagram className="icon" />
                        </div>
                    </div>
                </div>
                <div className='lg:text-center text-white pb-5'>
                    <div className="flex items-center gap-4 text-xs">
                        <span className="icon-copyright">&copy;</span>
                        <span>Copyright @ tripConnect</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BismarkAgyei;
