import React from 'react';
import { FaMicrophone, FaClipboardCheck, FaRobot, FaGlobe, FaPen, FaBook } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaMicrophone className="text-4xl text-[#0947ba]" />,
      title: "AI-Powered Speaking Practice",
      description: "Practice with native speakers and receive real-time feedback on pronunciation, fluency, and coherence using advanced AI technology.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-[#0947ba]" />,
      title: "Comprehensive Mock Tests",
      description: "Take full-length practice tests under real exam conditions and get detailed performance analysis with improvement suggestions.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: <FaRobot className="text-4xl text-[#0947ba]" />,
      title: "Smart Band Score Prediction",
      description: "Our advanced AI analyzes your responses and predicts your exact band score with 95% accuracy, helping you track progress.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <FaGlobe className="text-4xl text-[#0947ba]" />,
      title: "Global University Recognition",
      description: "Our certificates and preparation methods are recognized by top universities and institutions worldwide.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: <FaPen className="text-4xl text-[#0947ba]" />,
      title: "Expert Writing Evaluation",
      description: "Get detailed feedback on Task 1 & 2 with personalized suggestions, grammar corrections, and vocabulary enhancement tips.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: <FaBook className="text-4xl text-[#0947ba]" />,
      title: "Advanced Reading Strategies",
      description: "Master proven techniques to tackle all question types efficiently, improving speed and accuracy in the reading section.",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Features That Make
            <span className="bg-gradient-to-r from-[#0947ba] to-[#3a6fd1] bg-clip-text text-transparent"> Difference</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our innovative approach, cutting-edge technology, and expert guidance 
            transform your IELTS preparation journey into a success story.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform"
            >
            
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
              
             
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#0947ba]/10 to-[#3a6fd1]/10 rounded-2xl ">
                  {feature.icon}
                </div>
              </div>

           
              <div className="relative">
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-[#0947ba] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

 
              </div>

       
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0947ba]/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

 
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-left">
              <h4 className="font-bold text-gray-800 mb-1">Ready to experience the difference?</h4>
              <p className="text-gray-600 text-sm">Join 15,000+ successful IELTS students</p>
            </div>
            <button className="bg-gradient-to-r from-[#0947ba] to-[#3a6fd1] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
