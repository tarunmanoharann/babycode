import React from 'react';

const Universities = () => {
  // University logos - in a real app, these would be actual image files
  const universities = [
    { name: 'Delhi University', logo: 'DU' },
    { name: 'IIT Bombay', logo: 'IITB' },
    { name: 'IIM Ahmedabad', logo: 'IIMA' },
    { name: 'BITS Pilani', logo: 'BITS' },
    { name: 'Jadavpur University', logo: 'JU' },
    { name: 'University of Mumbai', logo: 'MU' },
    { name: 'Anna University', logo: 'AU' },
    { name: 'Manipal University', logo: 'MAHE' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted By Top Universities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our alumni have been accepted into prestigious universities worldwide. 
            We're proud to have helped thousands of students achieve their academic dreams.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {universities.map((uni, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                {/* In a real app, this would be an image tag */}
                <div className="text-4xl font-bold text-gray-800 border-2 border-gray-300 w-full h-full flex items-center justify-center">
                  {uni.logo}
                </div>
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