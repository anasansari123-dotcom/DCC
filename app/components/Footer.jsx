import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // for Twitter (X) icon
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
                   <img src="./logo.jpg" alt=""  className="w-16 h-16 rounded-full" />

            Digital Career Center
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Get ahead in your career with Digital Career Center, the one-stop solution for your educational needs. 
            Connect with top industry professionals and fuel your passion for success. 
            Join now and prepare for the real-world opportunities you've always desired.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-xl">
            <a href="#" className="hover:text-red-400 transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-400 transition-colors"><FaXTwitter /></a>
            <a href="#" className="hover:text-red-400 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-red-400 transition-colors"><FaYoutube /></a>
            <a href="#" className="hover:text-red-400 transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-red-400 transition-colors"><FaTelegramPlane /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 border-b border-red-500 inline-block">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-300 transition-colors">FAQ's</a></li>
            <li><a href="#" className="hover:text-red-300 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-red-300 transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-red-300 transition-colors">End User Agreement</a></li>
            <li className="text-gray-400">Disclaimer</li>
            <li><a href="#" className="hover:text-red-300 transition-colors">Membership</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-4 border-b border-red-500 inline-block">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-300 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-red-300 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-red-300 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-red-300 transition-colors">Refund Policy</a></li>
            <li><a href="#" className="hover:text-red-300 transition-colors">Sitemap</a></li>
          </ul>
        </div>

        {/* Courses Package */}
        <div>
          <h3 className="font-semibold text-lg mb-4 border-b border-red-500 inline-block">Courses Package</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-300 transition-colors">Bronze Bundle</a></li>
            <li><a href="#" className="hover:text-red-300 transition-colors">Silver Package</a></li>
            <li><a href="#" className="hover:text-red-300 transition-colors">Gold Package</a></li>
            <li><a href="#" className="hover:text-red-300 transition-colors">Platinum Package</a></li>
            <li><a href="#" className="hover:text-red-300 transition-colors">Diamond Package</a></li>
            <li><a href="#" className="hover:text-red-300 transition-colors">Digital Career Center Startup Package</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-red-500 mt-10 pt-6 text-center text-sm">
        © 2025 DevSphere Solutions . All Rights Reserved.
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-3">
        {/* Instagram Button */}
        <a 
          href="https://instagram.com/your_instagram_handle" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
        >
          <FaInstagram className="text-white text-2xl" />
        </a>
        
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-105"
        >
          <FaWhatsapp className="text-white text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
