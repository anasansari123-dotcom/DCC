'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "Welcome to Digital Career Center",
    subtitle: "Transform Your Career with Expert-Led Courses",
    description: "Master essential skills and advance your professional journey with our comprehensive course bundles.",
    image: "/images/slide1.jpg"
  },
  {
    id: 2,
    title: "Professional Development Made Easy",
    subtitle: "Learn at Your Own Pace",
    description: "Access high-quality content designed by industry experts to help you succeed in today's competitive market.",
    image: "/images/slide2.jpg"
  },
  {
    id: 3,
    title: "Join Thousands of Successful Learners",
    subtitle: "Start Your Journey Today",
    description: "Be part of a community that's already transforming their careers and achieving their professional goals.",
    image: "/images/slide3.jpg"
  }
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [currentInstructor, setCurrentInstructor] = useState(0);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  const packages = [
    {
      title: "Bronze Bundle",
      courses: "4 Courses",
      hours: "21 Hours",
      enrollments: "140K+ Enrollments",
      price: "₹1,899",
      oldPrice: "₹3,499",
      features: [
        "Live Q&A Support",
        "140K+ Students Enrolled",
        "DCC Certificate",
      ],
      image: "/images/bronze.png",
    },
    {
      title: "Silver Package",
      courses: "14 Courses",
      hours: "52 Hours",
      enrollments: "90K+ Enrollments",
      price: "₹3,499",
      oldPrice: "₹5,999",
      features: [
        "Live Q&A Support",
        "90K+ Students Enrolled",
        "DCC Certificate",
      ],
      image: "/images/silver.png",
    },
  ];

  const instructors = [
    { name: "Shivaank Garg", role: "Instructor", img: "/images/ins1.jpg" },
    { name: "Vinit Aggarwal", role: "Instructor", img: "/images/ins2.jpg" },
    { name: "Rajeev Mathur", role: "Instructor", img: "/images/ins3.jpg" },
    { name: "Aditi Sharma", role: "Instructor", img: "/images/ins4.jpg" },
    { name: "Priya Patel", role: "Instructor", img: "/images/ins5.jpg" },
    { name: "Rahul Singh", role: "Instructor", img: "/images/ins6.jpg" },
  ];

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const nextInstructor = useCallback(() => {
    setCurrentInstructor(prev => (prev + 1) % instructors.length);
  }, [instructors.length]);

  const prevInstructor = useCallback(() => {
    setCurrentInstructor(prev => (prev - 1 + instructors.length) % instructors.length);
  }, [instructors.length]);

  // Auto-play for instructor slider
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextInstructor();
    }, 4000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [nextInstructor]);

  return (
    <div className="w-full">
      {/* Slider Section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-full h-full bg-gradient-to-r from-gray-900 to-red-800 flex items-center">
              <div className="max-w-4xl mx-auto px-6 text-white">
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <h2 className="text-2xl mb-4 text-red-300">{slide.subtitle}</h2>
                <p className="text-lg text-gray-200 mb-8">{slide.description}</p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
        >
          <FaChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? 'bg-red-500' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Digital Career Center
              <div className="w-32 h-2 bg-red-600 mx-auto mt-2"></div>
            </h2>
          </div>

          {/* 3 Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* card 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience</p>
            </div>

            {/* card 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Flexible Learning</h3>
              <p className="text-gray-600">Study at your own pace with 24/7 access to courses</p>
            </div>

            {/* card 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Certification</h3>
              <p className="text-gray-600">Earn recognized certificates to boost your career</p>
            </div>
          </div>

          {/* Packages Section */}
          <section className="py-16 bg-yellow-50">
            <h2 className="text-3xl font-bold text-center mb-6">
              Our Exclusive Packages
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              With our exclusive packages, now you can be assured to acquire the best
              knowledge and expertise from our team of experts. We believe you can
              empower the world with industry-leading courses.
            </p>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border"
                >
                  {/* Image */}
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center h-52">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      width={160}
                      height={160}
                      className="w-40 h-40 object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{pkg.title}</h3>

                    <div className="flex items-center gap-6 text-gray-700 text-sm mb-4">
                      <span>📘 {pkg.courses}</span>
                      <span>⏳ {pkg.hours}</span>
                      <span>👥 {pkg.enrollments}</span>
                    </div>

                    <ul className="space-y-2 mb-4 text-gray-600">
                      {pkg.features.map((feature, i) => (
                        <li key={i}>✅ {feature}</li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">
                          {pkg.price}
                        </span>
                        <span className="line-through text-gray-500 ml-2">
                          {pkg.oldPrice}
                        </span>
                      </div>
                      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg shadow">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      
      {/* How LeadsGuru Works Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 relative inline-block">
          How Digital Career Center Works
          <span className="block w-24 h-1 bg-yellow-400 mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2965/2965278.png"
              alt="Educate"
              width={128}
              height={128}
              className="w-32 h-32 mb-6"
            />
            <h3 className="text-xl font-semibold mb-2">Educate</h3>
            <p className="text-gray-600">
              From the best of the best trainers
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
              alt="Innovate"
              width={128}
              height={128}
              className="w-32 h-32 mb-6"
            />
            <h3 className="text-xl font-semibold mb-2">Innovate</h3>
            <p className="text-gray-600">
              Attain sought-after knowledge for your professional growth
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Dominate"
              width={128}
              height={128}
              className="w-32 h-32 mb-6"
            />
            <h3 className="text-xl font-semibold mb-2">Dominate</h3>
            <p className="text-gray-600">
              Make an impact with the help of best training programs
            </p>
          </div>
        </div>
      </section>

      {/* Why LeadsGuru Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-purple-100 to-purple-200">
        <h2 className="text-3xl font-bold text-center mb-12 relative inline-block">
          Why Digital Career Center
          <span className="block w-24 h-1 bg-yellow-400 mx-auto mt-2"></span>
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Points */}
          <div className="space-y-6">
            <div className="flex items-start bg-white shadow-md rounded-lg p-4">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1828/1828961.png"
                alt="Trends"
                width={40}
                height={40}
                className="w-10 h-10 mr-4"
              />
              <p className="text-gray-700">
                Keep oneself up to date with the most recent market trends because of the fierce rivalry.
              </p>
            </div>

            <div className="flex items-start bg-white shadow-md rounded-lg p-4">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Certification"
                width={40}
                height={40}
                className="w-10 h-10 mr-4"
              />
              <p className="text-gray-700">
                With Digital Career Center certification now you can boost your CV to kick start your professional career.
              </p>
            </div>

            <div className="flex items-start bg-white shadow-md rounded-lg p-4">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="Commission"
                width={40}
                height={40}
                className="w-10 h-10 mr-4"
              />
              <p className="text-gray-700">
                Join us and earn a decent amount of commission for your professional journey.
              </p>
            </div>

            <div className="flex items-start bg-white shadow-md rounded-lg p-4">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Partner Program"
                width={40}
                height={40}
                className="w-10 h-10 mr-4"
              />
              <p className="text-gray-700">
                With Digital Career Center exclusive partner program, new trainers can start their journey and build their strong position in the market.
              </p>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="flex justify-center">
            <Image
              src="https://cdni.iconscout.com/illustration/premium/thumb/confused-girl-illustration-download-in-svg-png-gif-file-formats--question-female-woman-people-pack-illustrations-4228788.png"
              alt="Confused girl"
              width={320}
              height={320}
              className="w-80 h-auto"
            />
          </div>
        </div>
      </section>

      {/* Instructors Section with Looping Card Slider */}
      <section className="py-16 px-6 bg-yellow-50 text-center">
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          Our Instructors
          <span className="block w-24 h-1 bg-yellow-400 mx-auto mt-2"></span>
        </h2>

        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentInstructor * 100}%)` }}
          >
            {instructors.map((ins, idx) => (
              <div
                key={idx}
                className="min-w-full md:min-w-[50%] flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105">
                  <Image
                    src={ins.img}
                    alt={ins.name}
                    width={160}
                    height={160}
                    className="rounded-full w-40 h-40 object-cover mb-4"
                  />
                  <h3 className="font-bold text-xl">{ins.name}</h3>
                  <p className="text-gray-600">{ins.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevInstructor} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button 
            onClick={nextInstructor} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {instructors.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentInstructor(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentInstructor ? 'bg-yellow-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Alumni Section */}
      <section className="py-16 px-6 text-center bg-purple-50">
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          Hear from Our Alumni
          <span className="block w-24 h-1 bg-yellow-400 mx-auto mt-2"></span>
        </h2>

        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/images/alumni.jpg"
            alt="Alumni"
            width={128}
            height={128}
            className="rounded-full w-32 h-32 object-cover"
          />
          <div className="text-left">
            <p className="italic text-gray-700">
              &ldquo;Digital Career Center completely transformed my life and helped me become the
              person I am today. I learned how to start my career and grow with
              the right guidance.&rdquo;
            </p>
            <h4 className="mt-4 font-bold text-lg">Aanu Shaco</h4>
          </div>
        </div>
      </section>

      {/* Media Presence Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          Our Media Presence
          <span className="block w-24 h-1 bg-yellow-400 mx-auto mt-2"></span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            "mid-day",
            "Outlook",
            "Business Standard",
            "The India Saga",
            "ANI",
            "ThePrint",
            "Instamojo",
            "LatestLY",
          ].map((logo, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 text-center font-semibold"
            >
              {logo}
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer Section */}
      <footer className="bg-red-600 text-center py-6 mt-12">
        <p className="text-sm text-black max-w-3xl mx-auto">
          Disclaimer: LeadsGuru is an independent training provider. All content
          and materials are for educational purposes only and do not guarantee
          job placement or career advancement.
        </p>
      </footer>
    </div>
  );
}