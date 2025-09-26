import React from 'react';
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'

const Universities = () => {
  const universities = [
    { name: 'Delhi University', logo: logo1 },
    { name: 'IIT Bombay', logo: logo2 },
    { name: 'IIM Ahmedabad', logo: logo3 },
    { name: 'BITS Pilani', logo: logo4 },
    { name: 'Delhi University', logo: logo1 },
    { name: 'IIT Bombay', logo: logo2 },
   
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted By Top Universities Students</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our alumni have been accepted into prestigious universities worldwide. 
            We're proud to have helped thousands of students achieve their academic dreams.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {universities.map((uni, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="w-32 h-32 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={uni.logo} 
                  alt={`${uni.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-[#0947ba] font-medium">
            Join thousands of successful students who achieved their target IELTS scores
          </p>
        </div>
      </div>
    </section>
  );
};

export default Universities;