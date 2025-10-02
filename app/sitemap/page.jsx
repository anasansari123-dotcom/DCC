import React from 'react';

export default function SitemapPage() {
  const pages = [
    {
      category: "Main Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about" },
        { name: "Contact Us", url: "/contact" },
        { name: "Blog", url: "/blog" },
        { name: "FAQ", url: "/faq" },
      ]
    },
    {
      category: "Course Packages",
      links: [
        { name: "Digital Starter Package (DSP)", url: "/BronzeBundle" },
        { name: "Advance Basic Computer (ABC)", url: "/silver" },
        { name: "Search Engine Optimization (SEO)", url: "/gold" },
        { name: "Hindi Typing (HT)", url: "/platinum" },
        { name: "Youtube Ads (YA)", url: "/Diamond" },
        { name: "Google Ads (GA)", url: "/dcc" },
      ]
    },
    {
      category: "Student Resources",
      links: [
        { name: "Student ID Card", url: "/id-card" },
        { name: "Certificate", url: "/certificate" },
        { name: "Login", url: "/login" },
        { name: "Sign Up", url: "/signup" },
      ]
    },
    {
      category: "CRM Dashboard",
      links: [
        { name: "CRM Dashboard", url: "/crm" },
        { name: "Account Settings", url: "/crm/account-settings" },
        { name: "Data Store", url: "/crm/data-store" },
        { name: "Add Lead", url: "/crm/lead-add" },
        { name: "Payment Center", url: "/crm/payment-center" },
        { name: "Referral Program", url: "/crm/referral-program" },
        { name: "Support", url: "/crm/support" },
        { name: "Training Videos", url: "/crm/training-videos" },
      ]
    },
    {
      category: "Legal & Policies",
      links: [
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms & Conditions", url: "/terms-and-conditions" },
        { name: "Refund Policy", url: "/refund-policy" },
        { name: "Cookie Policy", url: "/cookie-policy" },
        { name: "Disclaimer", url: "/disclaimer" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sitemap
          </h1>
          <div className="w-24 sm:w-32 h-1 sm:h-2 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Find all pages and sections of our website organized by category. 
            Navigate easily to any part of Digital Career Center.
          </p>
        </div>

        {/* Sitemap Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {pages.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 border-b-2 border-red-600 pb-2">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className="text-gray-700 hover:text-red-600 transition-colors duration-300 flex items-center group"
                      >
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:bg-red-600 transition-colors"></span>
                        <span className="text-sm sm:text-base">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
              Need Help Finding Something?
            </h3>
            <p className="text-gray-700 text-center mb-6">
              If you can't find what you're looking for, feel free to contact us for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 text-center"
              >
                Contact Us
              </a>
              <a
                href="/faq"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-center"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>

        {/* SEO Information */}
        <div className="mt-8 sm:mt-12 bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
            About This Sitemap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-gray-700">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Last Updated:</h4>
              <p>{new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Total Pages:</h4>
              <p>{pages.reduce((total, section) => total + section.links.length, 0)} pages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
