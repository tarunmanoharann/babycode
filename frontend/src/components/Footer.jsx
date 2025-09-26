import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#3a6fd1]">IELTS Pro</h3>
            <p className="text-gray-400 mb-4">
              Helping students achieve their target IELTS scores with expert guidance and proven methods since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

     
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

   
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Courses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">IELTS General Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">IELTS Academic</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Speaking Intensive</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Writing Masterclass</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Band 7+ Preparation</a></li>
            </ul>
          </div>

     
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-[#3a6fd1]" />
                <span className="text-gray-400">123 Education Street, Academic City, Country</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-[#3a6fd1]" />
                <span className="text-gray-400">+1 234 567 8900</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-[#3a6fd1]" />
                <span className="text-gray-400">info@ieltspro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} IELTS Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;