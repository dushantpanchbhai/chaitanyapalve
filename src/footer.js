import React from 'react';

import './footer.css';
function Footer(props) {
    return (
        <footer className='footer p-3'>
            <div className='row row-cols-1 row-cols-sm-3 px-4 pb-4'>
                <div className='col pt-4'>
                    <div className='d-flex flex-column align-items-center'>
                        <h4 className=''>ANUBUTHI</h4>
                        <img src='./assets/anubhutilogo.webp' alt='ANUBUTHI' />
                    </div>
                </div>
                <div className='col pt-4'>
                    <div className='d-flex flex-column align-items-center'>
                        <h4>CONTACT</h4>
                        <p className='mt-3 m-0 contact'>anubuthi@gmail.com</p>
                        <p className='m-0 contact'>+919876543210</p>
                        <div><i className='fa-solid fa-house'></i>      25, ABC Road, Mumbai.</div>
                        <div><i className='fa-solid fa-clock'></i>      09:00 AM - 08:00 PM.</div>
                        <div className='d-flex mt-3 justify-content-around w-50'>
                            <div className='iconContainer logo1'>
                                <i className="fa-brands fa-google"></i>
                            </div>
                            <div className='iconContainer logo2'>
                                <i className="fa-brands fa-facebook-f"></i>
                            </div>
                            <div className='iconContainer logo3'>
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col pt-4'>
                    <div className='d-flex flex-column align-items-left'>
                        <h4>ABOUT US</h4>
                        <p className='about'>Anubhuti is trying to create an educational environment for under-privileged children by becoming the bridge between
                            schools and the community.</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}
export default Footer;