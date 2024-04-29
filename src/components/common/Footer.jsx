import React from 'react';
import { ArrowDownIcon, Logo } from '../../assets';

function Footer() {
    return (
        <footer className='flex flex-col w-full'>
            <div className='bg-[#525AA0] border w-[1300px] mx-auto h-[481px] flex flex-col p-6 items-center justify-center space-y-6' style={{ transform: 'skewY(-3deg)' }}>
                <h3 className='text-3xl md:text-6xl w-full md:w-[650px] text-center text-white'>Need a Job done, and done well? Get Started</h3>
                <img src={ArrowDownIcon} alt="arrowDown" className='w-16 h-16' />
            </div>
            <div className='px-6 py-12'>
                <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0'>
                    <div className='space-y-3'>
                        <img src={Logo} alt="Logo" className='h-10' />
                        <p className='text-gray-400 font-semibold w-[350px] text-[14px]'>
                            We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.
                        </p>
                        <div className='flex flex-col space-y-3'>
                            <span className='text-gray-400'>Link and Redirect</span>
                            <div className='flex space-x-3'>
                                <button className='bg-gray-800 text-white py-4 px-12 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50'>Hire now</button>
                                <button className='bg-gray-800 text-white py-4 px-12 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50'>Apply now</button>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <h1 className='text-white text-5xl w-[730px]'>Connecting the right people to the right businesses.</h1>
                        <div className='grid grid-cols-4 gap-8 text-gray-400'>
                            <div>
                                <h4 className='text-xl text-white mb-2'>Platform</h4>
                                <ul className='space-y-1'>
                                    <li className='hover:text-white transition-colors'>Find Work</li>
                                    <li className='hover:text-white transition-colors'>Find Talent</li>
                                    <li className='hover:text-white transition-colors'>Articles</li>
                                    <li className='hover:text-white transition-colors'>About Us</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='text-xl text-white mb-2'>Categories</h4>
                                <ul className='space-y-1'>
                                    <li className='hover:text-white transition-colors'>Data Science</li>
                                    <li className='hover:text-white transition-colors'>IT & Networking</li>
                                    <li className='hover:text-white transition-colors'>Web & Mobile</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='text-xl text-white mb-2'>Help</h4>
                                <ul className='space-y-1'>
                                    <li className='hover:text-white transition-colors'>Contact Us</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='text-xl text-white mb-2'>GET IN TOUCH</h4>
                                <ul className='space-y-1'>
                                    <li className='hover:text-white transition-colors'>Instagram</li>
                                    <li className='hover:text-white transition-colors'>LinkedIn</li>
                                    <li className='hover:text-white transition-colors'>Twitter</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex justify-between'>
                <span className='text-white'>All rights reserved by Zwiit</span>
                <ul className='flex flex-row text-gray-400 space-x-4'>
                    <li className='underline'>Privacy policy</li>
                    <li className='underline'>Terms and Condition</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;