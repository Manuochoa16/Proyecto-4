"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const { userData, setUserData, logout } = useAuth();

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
          <span className="text-lg font-bold hidden sm:block">TechPulse</span>
        </div>
        <div className="flex-1 flex items-center justify-center relative">
          <input
            type="text"
            className="bg-gray-700 bg-opacity-50 text-white rounded-full p-2 pl-10 w-3/4 md:w-1/2 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 sm:placeholder-gray-400 sm:pl-10 sm:w-3/4 md:w-1/2"
            placeholder=""
          />
          <span className="absolute left-4 text-white hidden sm:inline">
            <i className="fas fa-search"></i>
          </span>
          <span className="absolute left-4 text-white sm:hidden pl-4">
            <Image
              src="/lupa.png"
              alt="search icon"
              width={20}
              height={20}
              className="object-contain"
            />
          </span>
        </div>
        <div className="flex items-center">
          {userData?.token ? (
            <>
              <Link href="/dashboard">
                <Image
                  src="/7.png"
                  alt="User Logged In"
                  width={40}
                  height={40}
                  className="mr-2 object-contain"
                />
              </Link>
              <button onClick={logout} className="ml-4 whitespace-nowrap">
                Cerrar sesión
              </button>
            </>
          ) : (
            <Link href="/login">
              <Image
                src="/6.png"
                alt="User Not Logged In"
                width={40}
                height={40}
                className="mr-2 object-contain"
              />
            </Link>
          )}
        </div>
      </div>
      <ul className="flex space-x-4 justify-center mt-2">
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
    </nav>
  );
};

export default Navbar;
