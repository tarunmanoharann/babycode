import React, { useState, useEffect } from 'react';
import { FaStar, FaPlay, FaUsers, FaTrophy, FaGraduationCap } from 'react-icons/fa';

const Hero = () => {
  const [currentScore, setCurrentScore] = useState(6.5);

  // Animated counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScore(prev => {
        const scores = [6.5, 7.0, 7.5, 8.0, 8.5];
        const currentIndex = scores.indexOf(prev);
        return scores[(currentIndex + 1) % scores.length];
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: FaUsers, value: "15K+", label: "Students Trained" },
    { icon: FaTrophy, value: "95%", label: "Success Rate" },
    { icon: FaGraduationCap, value: "8.5", label: "Average Band Score" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#0947ba] via-[#1e5cbf] to-[#3a6fd1] text-white overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-300 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4" />
                ))}
              </div>
              <span className="text-sm font-medium">Rated #1 IELTS Institute</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Master IELTS,
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Unlock Dreams
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-lg">
                Transform your English proficiency with AI-powered learning, expert mentorship, and proven strategies that guarantee results.
              </p>
            </div>



            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group cursor-pointer bg-white text-[#0947ba] hover:bg-gray-50 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Start Free Trial
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              
              <button className="group flex cursor-pointer items-center justify-center gap-3 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-sm">
                <FaPlay className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Success Stories
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-3 group-hover:bg-white/20 transition-colors">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Interactive Card */}
          <div className="lg:pl-8">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-3xl p-8 shadow-xl  duration-300">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#0947ba] to-[#3a6fd1] rounded-2xl mb-4">
                    <FaGraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Discover Your IELTS Potential
                  </h3>
                  <p className="text-gray-600">
                    Get personalized insights and a roadmap to your target band score
                  </p>
                </div>

                {/* Interactive Elements */}
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-2 border-transparent hover:border-[#0947ba] cursor-pointer transition-all">
                      <div className="text-2xl font-bold text-[#0947ba]">7 Days</div>
                      <div className="text-sm text-gray-600">Free Access</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-transparent hover:border-green-500 cursor-pointer transition-all">
                      <div className="text-2xl font-bold text-green-600">1-on-1</div>
                      <div className="text-sm text-gray-600">Expert Session</div>
                    </div>
                  </div>

                  {/* Progress Indicators */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Reading</span>
                      <span className="text-sm text-gray-500">Advanced</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#0947ba] to-[#3a6fd1] h-3 rounded-full w-4/5 transition-all duration-1000"></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Speaking</span>
                      <span className="text-sm text-gray-500">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-orange-400 to-yellow-500 h-3 rounded-full w-3/5 transition-all duration-1000"></div>
                    </div>
                  </div>

                  <button className="w-full cursor-pointer bg-gradient-to-r from-[#0947ba] to-[#3a6fd1] text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    Book Your Free Demo Class
                  </button>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                Limited Spots!
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;