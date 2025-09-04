// src/components/Header.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-sm bg-white border-b-2 border-red-600 relative">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src="/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
        <span className="text-lg md:text-xl font-bold text-gray-900">
          Digital Career Center
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
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
          {/* Dropdown Menu */}
          <div
            className="absolute opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
            transition-all duration-300 ease-out transform bg-white shadow-md rounded-md mt-2 w-40 
            border border-red-200 z-10"
          >
            {[
              { name: "Bronze Bundle", href: "/BronzeBundle" },
              { name: "Silver Package", href: "/silver" },
              { name: "Gold Package", href: "/gold" },
              { name: "Platinum Package", href: "/platinum" },
              { name: "Diamond Package", href: "/Diamond" },
              { name: "DCC Startup Package", href: "/dcc" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="block px-4 py-2 text-[12px] text-gray-900 hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <a
          href="#"
          className="text-gray-900 font-medium hover:text-red-600 transition-colors"
        >
          My Courses
        </a>
      </nav>

      {/* Login/Signup (Desktop) */}
      <div className="hidden md:flex bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-full transition-colors shadow-md hover:shadow-lg space-x-2">
        <a href="/login" className="hover:underline">
          Login
        </a>
        <span>/</span>
        <a href="/signup" className="hover:underline">
          Signup
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col space-y-1.5"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="w-6 h-0.5 bg-gray-800"></span>
        <span className="w-6 h-0.5 bg-gray-800"></span>
        <span className="w-6 h-0.5 bg-gray-800"></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 md:hidden z-20">
          <nav className="flex flex-col p-4 space-y-3">
            <a href="/" className="text-gray-900 hover:text-red-600">
              Home
            </a>
            <div className="flex flex-col space-y-1">
              <span className="font-medium text-gray-900">All Courses</span>
              <div className="pl-4 flex flex-col space-y-1">
                <a href="/BronzeBundle" className="text-sm text-gray-700 hover:text-red-600">
                  Bronze Bundle
                </a>
                <a href="/silver" className="text-sm text-gray-700 hover:text-red-600">
                  Silver Package
                </a>
                <a href="/gold" className="text-sm text-gray-700 hover:text-red-600">
                  Gold Package
                </a>
                <a href="/platinum" className="text-sm text-gray-700 hover:text-red-600">
                  Platinum Package
                </a>
                <a href="/Diamond" className="text-sm text-gray-700 hover:text-red-600">
                  Diamond Package
                </a>
                <a href="/dcc" className="text-sm text-gray-700 hover:text-red-600">
                  DCC Startup Package
                </a>
              </div>
            </div>
            <a href="#" className="text-gray-900 hover:text-red-600">
              My Courses
            </a>

            {/* Login/Signup (Mobile) */}
            <div className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-full shadow-md text-center">
              <a href="/login" className="hover:underline">
                Login
              </a>{" "}
              /{" "}
              <a href="/signup" className="hover:underline">
                Signup
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
