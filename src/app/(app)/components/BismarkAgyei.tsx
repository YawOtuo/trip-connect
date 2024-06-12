import React from 'react';
import { FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'; // connecting the css file

function BismarkAgyei() {
    return (
        <div className='bg-[#250118]'>
            <div className='container'>
                <div className='row py-5 text-white'>
                    <div className="col-md-5 col-sm-12 mb-4"> 
                        <h4>About Us</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quam hic in dolor asperiores libero alias aliquid eligendi ipsum consectetur ex, vero voluptatibus omnis ea optio natus harum qui temporibus.</p>
                        <div className="flex-center-gap">
                            <FaPhoneAlt />
                            <span>+2335562335</span>
                        </div>
                        <div className="flex-center-gap">
                            <FaEnvelope />
                            <span>example@gmail.com</span>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-12 mb-4">
                        <h4>Useful Links</h4>
                        <p>My trips</p>
                        <p>Notifications</p>
                        <p>Login</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem</p>
                    </div>
                    <div className="col-md-3 col-sm-12 mb-4">
                        <h4>Further Information</h4>
                        <div>
                            <p>Terms and Conditions</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-12 mb-4">
                        <h4>Follow Us</h4>
                        <div className="icon-container">
                            <FaTwitter className="icon" />
                            <FaFacebook className="icon" />
                            <FaInstagram className="icon" />
                        </div>
                    </div>
                </div>
                <div className='text-center text-white pb-5'>
                    <div className="flex-center-gap left-content-center">
                        <span className="icon-copyright">&copy;</span>
                        <span>Copyright @ tripConnect</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BismarkAgyei;
