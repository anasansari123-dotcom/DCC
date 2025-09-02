// src/components/Header.jsx
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-sm bg-white border-b-2 border-red-600">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image src="./logo.jpg" alt="" width={48} height={48} className="w-12 h-12 rounded-full" />
        <span className="text-xl font-bold text-gray-900">Digital Career Center</span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-8">
        <a
          href="/"
          className="text-gray-900 font-medium hover:text-red-600 transition-colors"
        >
          Home
        </a>

        {/* Dropdown */}
        <div className="relative group">
          <button className="text-gray-900 font-medium hover:text-red-600 transition-colors flex items-center">
            All Courses
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {/* Dropdown Menu with animation */}
          <div
            className="absolute opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
            transition-all duration-300 ease-out transform bg-white shadow-md rounded-md mt-2 w-40 
            border border-red-200 z-10"
          >
            <a
              href="/BronzeBundle"
              className="block px-4 py-2 text-[12px] text-gray-900 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              Bronze Bundle
            </a>
            <a
              href="/silver"
              className="block px-4 py-2 text-[12px] text-gray-900 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              Silver Package
            </a>
            <a
              href="/gold"
              className="block px-4 py-2 text-[12px] text-gray-900 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              Gold Package
            </a>
            <a
              href="/platinum"
              className="block px-4 py-2 text-[12px] text-gray-900 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              Platinum Package
            </a>
            <a
              href="/Diamond"
              className="block px-4 py-2 text-[12px] text-gray-900 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              Diamond Package
            </a>
            <a
              href="/dcc"
              className="block px-4 py-2 text-[12px] text-gray-900 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              DCC Startup Package
            </a>
          </div>
        </div>

        <a
          href="#"
          className="text-gray-900 font-medium hover:text-red-600 transition-colors"
        >
          My Courses
        </a>
      </nav>

      {/* Login/Signup Button */}
      <a
        href="#"
        className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-full transition-colors shadow-md hover:shadow-lg"
      >
        <a href="/login">Login </a>/ <a href="/signup">Signup</a>
      </a>
    </header>
  );
};

export default Header;
