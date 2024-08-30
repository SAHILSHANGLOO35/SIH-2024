import React from "react";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md fixed w-full top-0 left-0 flex justify-between items-center drop-shadow-xl">
      {/* Project Name */}
      <div className="text-white text-2xl font-bold">
        HAWKEYE
      </div>

      {/* Right Side - Notification Icon and Links */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <div className="relative">
          <FaBell className="text-white text-2xl cursor-pointer" />
          {/* Notification Badge (if needed) */}
          <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full"></span>
        </div>

        {/* About and Contact Links */}
        <a href="#about" className="text-white text-lg hover:text-gray-400 transition duration-300">
          About
        </a>
        <a href="#contact" className="text-white text-lg hover:text-gray-400 transition duration-300">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
