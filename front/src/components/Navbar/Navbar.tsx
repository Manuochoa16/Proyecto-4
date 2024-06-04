"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { userSession } from "@/types";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [userData, setUserData] = useState<userSession>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      setUserData(JSON.parse(userData!));
    }
  }, [pathname]);

  return (
    <nav className="bg-gray-800 bg-opacity-75 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/techpulseLogo.png"
              alt="Techpulse Logo"
              width={40}
              height={40}
              className="mr-2"
            />
          </Link>
          <span className="text-lg font-bold">TechPulse</span>
        </div>
        <div className="flex items-center w-1/2 relative">
          <input
            type="text"
            className="bg-gray-700 bg-opacity-50 text-white rounded-full p-2 pl-10 w-full border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Search..."
          />

          {userData?.token ? (
            <div>
              <Link href="/dashboard">
                <p>Bienvenido {userData?.userData?.name}</p>
              </Link>
            </div>
          ) : (
            <div>
              <Link href="/login">
                <p>Sign In</p>
              </Link>
            </div>
          )}

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
