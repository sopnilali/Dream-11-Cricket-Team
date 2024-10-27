import React, { useState } from 'react';

import Logo from '../../assets/logo.png'

const Header = ({ userMoney }) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className=" text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <img className='md:max-w-16 max-w-10 avatar' src={Logo} alt="" />
        </div>
        
        {/* Hamburger menu button for mobile view */}
        <button
          className="text-black md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Navbar links, visible on larger screens */}
        <nav className="hidden md:flex  space-x-6 p-2 ">
          <a href="/" className="hover:text-orange-500 p-2">Home</a>
          <a href="#" className="hover:text-orange-500 p-2">Fixture</a>
          <a href="#" className="hover:text-orange-500 p-2">Teams</a>
          <a href="#" className="hover:text-orange-500 p-2">Schedules</a>
          <span className="font-bold border p-2 rounded-md flex gap-2  "> {userMoney} Coins<img className='max-w-6 object-cover' src="https://i.ibb.co/4Jk8Yk8/coin-page.png" alt="" /></span>
        </nav>
      </div>

      {/* Mobile menu, visible when isMobileMenuOpen is true */}
      {isMobileMenuOpen  && (
        <nav className='md:hidden transition-all duration-800 mt-2'  >
          <a href="/" className="block py-2 px-4 hover:text-orange-500">Home</a>
          <a href="#" className="block py-2 px-4 hover:text-orange-500">Fixture</a>
          <a href="#" className="block py-2 px-4 hover:text-orange-500">Teams</a>
          <a href="#" className="block py-2 px-4 hover:text-orange-500">Schedules</a>
          <span className="inline-flex p-2 font-bold rounded-md border items-center gap-1">{userMoney} Coins <img className='max-w-6 object-cover' src="https://i.ibb.co/4Jk8Yk8/coin-page.png" alt="" /></span>
        </nav>
      )}
    </div>
    </div>
  );
};

export default Header;