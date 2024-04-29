import React from 'react';
import { Logo } from '../../assets';

const navLinks = [
    { href: "#", label: "Find Work" },
    { href: "#", label: "Find Talent" },
    { href: "#", label: "Articles" },
    { href: "#", label: "About Us" },
    { href: "#", label: "Contact Us" }
];

function Header() {
    return (
        <header className='bg-black text-white py-4 px-8 mx-auto my-10 rounded-2xl shadow-lg w-[90%]'>
            <div className='container mx-auto flex justify-between items-center'>
                <img src={Logo} alt='logo' className='h-10' />
                <nav>
                    <ul className='flex items-center space-x-10'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className='hover:text-gray-300 transition-colors'>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='flex items-center space-x-4'>
                    <a href="#" className='px-4 py-2 rounded-md hover:text-gray-200 transition-colors'>Login</a>
                    <a href="#" className='ml-4 px-6 py-2 text-gray-900 bg-gray-50 border border-gray-100 rounded-full hover:bg-gray-200 transition-colors'>Join Now</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
