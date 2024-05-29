import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 bg-opacity-75 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="techpulseLogo.png"
            alt="Techpulse Logo"
            className="h-10 w-10 mr-2"
          />
          <span className="text-lg font-bold">TechPulse</span>
        </div>
        <div className="flex items-center w-1/2 relative">
          <input
            type="text"
            className="bg-gray-700 bg-opacity-50 text-white rounded-full p-2 pl-10 w-full border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Search..."
          />
          <span className="absolute left-3 text-white">
            <i className="fas fa-search"></i>
          </span>
        </div>
        <ul className="flex space-x-4">
          <Link href="/">
            <li className="hover:text-red-400 cursor-pointer">Home</li>
          </Link>
          <Link href="/login">
            <li className="hover:text-red-400 cursor-pointer">Login</li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-red-400 cursor-pointer">Contáctenos</li>
          </Link>
          <Link href="/cart">
            <li className="hover:text-red-400 cursor-pointer">Carrito</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
