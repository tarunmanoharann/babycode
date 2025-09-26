import React, { useEffect, useRef } from 'react';
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
    },
    {
      icon: <FaMicrophone className="text-4xl text-[#0947ba]" />,
      title: "Writing Evaluation",
      description: "Get detailed feedback on your writing tasks with suggestions for improvement and error correction."
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-[#0947ba]" />,
      title: "Reading Strategies",
      description: "Learn effective strategies to tackle different question types in the reading section."
    }
  ];

  const sectionRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply the effect on desktop screens
      if (window.innerWidth < 768) return;
      
      if (!sectionRef.current || !leftSideRef.current || !rightSideRef.current) return;
      
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate how far we've scrolled into the section
      const scrollProgress = (viewportHeight - sectionTop) / (sectionHeight + viewportHeight);
      
      // Clamp the value between 0 and 1
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      
      // Apply the sticky effect to the left side
      leftSideRef.current.style.position = 'sticky';
      leftSideRef.current.style.top = '100px';
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Choose IELTS Pro</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach to IELTS preparation ensures you develop the skills needed to achieve your target score.
          </p>
        </div>
        
        {/* Mobile view - regular grid */}
        <div className="md:hidden grid grid-cols-1 gap-8">
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
        
        {/* Desktop view - scrolling effect */}
        <div className="hidden md:flex">
          {/* Left side - static content */}
          <div ref={leftSideRef} className="w-1/2 pr-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#0947ba] mb-4">Comprehensive IELTS Preparation</h3>
              <p className="text-gray-700 mb-6">
                Our platform offers everything you need to excel in your IELTS exam. With expert guidance, 
                personalized feedback, and cutting-edge technology, we ensure you're fully prepared for success.
              </p>
              <div className="bg-[#0947ba] text-white p-4 rounded-lg">
                <p className="font-medium">Our students achieve:</p>
                <ul className="mt-2 list-disc pl-5">
                  <li>Average score improvement of 1.5 bands</li>
                  <li>95% success rate for university admissions</li>
                  <li>Confidence in all four test sections</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right side - scrolling content */}
          <div ref={rightSideRef} className="w-1/2 space-y-6 pl-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-start"
              >
                <div className="mr-4 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;