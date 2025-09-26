import React from 'react';
import { FaApple, FaGooglePlay, FaQrcode } from 'react-icons/fa';

const MobileApp = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get IELTS Pro on Your Phone</h2>
            <p className="text-gray-600 mb-6">
              Practice anywhere, anytime with our mobile app. Get instant feedback, track your progress, 
              and access all our resources on the go.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#" className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <FaApple className="mr-2 text-xl" />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
              
              <a href="#" className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <FaGooglePlay className="mr-2 text-xl" />
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>
            
            <div className="text-gray-600">
              <p className="font-medium">App features:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Practice speaking with AI tutors</li>
                <li>Take mock tests offline</li>
                <li>Get instant writing feedback</li>
                <li>Track your progress with detailed analytics</li>
              </ul>
            </div>
          </div>
          
          {/* Right Content - QR Code */}
          <div className="md:w-1/3 bg-white p-8 rounded-lg shadow-md text-center">
            <div className="border-4 border-[#0947ba] inline-block p-4 rounded-lg mb-4">
              {/* In a real app, this would be an actual QR code image */}
              <FaQrcode size={180} className="text-[#0947ba]" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Scan to Download</h3>
            <p className="text-gray-600">
              Point your camera at the QR code to download our app directly to your device
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;