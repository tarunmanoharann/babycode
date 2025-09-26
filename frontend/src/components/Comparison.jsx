import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Comparison = () => {
  const features = [
    { name: 'AI-Powered Band Score Prediction', ieltsProHas: true, othersHave: false },
    { name: 'Personalized Study Plan', ieltsProHas: true, othersHave: true },
    { name: 'Mock Tests with Detailed Feedback', ieltsProHas: true, othersHave: true },
    { name: 'Live Speaking Practice with Experts', ieltsProHas: true, othersHave: false },
    { name: 'University Application Guidance', ieltsProHas: true, othersHave: false },
    { name: 'Free Assessment', ieltsProHas: true, othersHave: false },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose IELTS Pro?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how we compare to other IELTS preparation platforms and why thousands of students choose us for their exam success.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-gray-100 font-semibold text-gray-700">
            <div className="p-4 border-b border-r">Features</div>
            <div className="p-4 border-b border-r text-center bg-[#0947ba] text-white">IELTS Pro</div>
            <div className="p-4 border-b text-center">Other Platforms</div>
          </div>

          {/* Table Body */}
          {features.map((feature, index) => (
            <div key={index} className="grid grid-cols-3 border-b last:border-b-0">
              <div className="p-4 border-r">{feature.name}</div>
              <div className="p-4 border-r flex justify-center items-center">
                {feature.ieltsProHas ? (
                  <FaCheck className="text-green-500 text-xl" />
                ) : (
                  <FaTimes className="text-red-500 text-xl" />
                )}
              </div>
              <div className="p-4 flex justify-center items-center">
                {feature.othersHave ? (
                  <FaCheck className="text-green-500 text-xl" />
                ) : (
                  <FaTimes className="text-red-500 text-xl" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="bg-[#0947ba] text-white px-6 py-3 rounded-md font-medium hover:bg-[#063590] transition-colors">
            Start Your Free Assessment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Comparison;