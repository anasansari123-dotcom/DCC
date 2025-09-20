'use client';

import { FaGraduationCap, FaUsers, FaAward, FaGlobe, FaLightbulb, FaRocket, FaHeart, FaShieldAlt, FaTrophy, FaHandshake } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
    
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Digital Career Center
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto">
              Empowering individuals with digital skills for a brighter future. 
              We're committed to providing quality education and career guidance.
            </p>
            <div className="w-32 h-2 bg-white mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <FaRocket className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To democratize digital education by providing accessible, high-quality training programs 
                that equip individuals with practical skills needed to thrive in the digital economy. 
                We believe everyone deserves the opportunity to build a successful career in technology.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <FaLightbulb className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To become India's leading digital education platform, creating a skilled workforce 
                that drives innovation and economic growth. We envision a future where every individual 
                has the digital literacy to succeed in an increasingly connected world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Founded with a Purpose</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Digital Career Center was founded in 2020 with a simple yet powerful vision: to bridge 
                the digital skills gap in India. Our founders, experienced professionals from the tech 
                industry, recognized the growing need for practical, job-ready digital skills.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Starting as a small training center in Muzaffarnagar, we've grown to serve thousands 
                of students across India through both online and offline programs. Our success is 
                measured not just by the number of students we train, but by the careers we help launch.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we're proud to be one of the most trusted names in digital education, with 
                a track record of helping students secure jobs, start businesses, and advance their 
                careers in the digital space.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-red-50 rounded-xl">
                <div className="text-4xl font-bold text-red-600 mb-2">500K+</div>
                <div className="text-gray-700">Students Trained</div>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-xl">
                <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
                <div className="text-gray-700">Expert Instructors</div>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-xl">
                <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
                <div className="text-gray-700">Success Rate</div>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-xl">
                <div className="text-4xl font-bold text-red-600 mb-2">4+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Digital Career Center
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaGraduationCap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Excellence in Education</h3>
              <p className="text-gray-700">
                We maintain the highest standards in our curriculum and teaching methods, 
                ensuring every student receives quality education.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Student-Centric Approach</h3>
              <p className="text-gray-700">
                Our students are at the heart of everything we do. We tailor our programs 
                to meet their unique needs and career goals.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaAward className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Industry Relevance</h3>
              <p className="text-gray-700">
                We stay updated with industry trends and ensure our courses reflect 
                real-world requirements and current technologies.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaGlobe className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Accessibility</h3>
              <p className="text-gray-700">
                We believe quality education should be accessible to everyone, 
                regardless of their background or location.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Passion for Learning</h3>
              <p className="text-gray-700">
                We foster a culture of continuous learning and growth, 
                encouraging both students and staff to pursue excellence.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Integrity</h3>
              <p className="text-gray-700">
                We conduct our business with honesty, transparency, and ethical practices, 
                building trust with our students and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Digital Career Center?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us the preferred choice for digital education
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaTrophy className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Proven Track Record</h3>
                <p className="text-gray-700">
                  With over 500,000 students trained and a 95% success rate, we have a proven 
                  track record of helping students achieve their career goals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaUsers className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Instructors</h3>
                <p className="text-gray-700">
                  Learn from industry experts with years of real-world experience who are 
                  passionate about sharing their knowledge.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaHandshake className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Career Support</h3>
                <p className="text-gray-700">
                  We provide comprehensive career support including resume building, 
                  interview preparation, and job placement assistance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaGlobe className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Flexible Learning</h3>
                <p className="text-gray-700">
                  Choose from online, offline, or hybrid learning options that fit your 
                  schedule and learning preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Digital Journey?</h2>
          <p className="text-xl text-red-100 mb-8">
            Join thousands of successful students who have transformed their careers with our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </a>
            <a
              href="/contact"
              className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-400 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

   
    </div>
  );
}
