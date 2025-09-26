import React from 'react';
import { FaMicrophone, FaClipboardCheck, FaRobot, FaGlobe } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaMicrophone className="text-4xl text-[#0947ba]" />,
      title: "Speaking Practice",
      description: "Practice with native speakers and receive detailed feedback on pronunciation, fluency, and coherence."
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-[#0947ba]" />,
      title: "Mock Tests",
      description: "Take full-length practice tests under exam conditions and get comprehensive analysis of your performance."
    },
    {
      icon: <FaRobot className="text-4xl text-[#0947ba]" />,
      title: "AI Band Score Prediction",
      description: "Our AI technology analyzes your responses and predicts your band score with high accuracy."
    },
    {
      icon: <FaGlobe className="text-4xl text-[#0947ba]" />,
      title: "Global Recognition",
      description: "Our certificates and preparation methods are recognized by universities worldwide."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Choose IELTS Pro</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach to IELTS preparation ensures you develop the skills needed to achieve your target score.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;