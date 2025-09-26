import React, { useEffect, useRef, useState } from 'react';
import { FaCheck, FaTimes, FaStar, FaApple, FaGooglePlay, FaQrcode, FaTrophy, FaQuoteLeft, FaMobile, FaDownload } from 'react-icons/fa';

// Comparison Component
const Comparison = () => {
  const [visibleRows, setVisibleRows] = useState([]);
  const rowsRef = useRef([]);
  const sectionRef = useRef(null);

  const features = [
    { name: 'AI-Powered Band Score Prediction', ieltsProHas: true, othersHave: false, highlight: true },
    { name: '24/7 Expert Support', ieltsProHas: true, othersHave: false, highlight: true },
    { name: 'University Application Guidance', ieltsProHas: true, othersHave: true, highlight: false },
    { name: 'Live Speaking Practice with Experts', ieltsProHas: true, othersHave: false, highlight:false },
    { name: 'Free Assessment & Trial', ieltsProHas: true, othersHave: true, highlight: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || rowsRef.current.length === 0) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.8) {
        rowsRef.current.forEach((row, index) => {
          if (row) {
            const rowRect = row.getBoundingClientRect();
            if (rowRect.top < windowHeight * 0.9) {
              setVisibleRows(prev => {
                if (!prev.includes(index)) {
                  return [...prev, index].sort((a, b) => a - b);
                }
                return prev;
              });
            }
          }
        });
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Why Choose 
            <span className="bg-gradient-to-r from-[#0947ba] to-[#3a6fd1] bg-clip-text text-transparent"> IELTS Pro?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the clear differences that make IELTS Pro the #1 choice for serious IELTS candidates worldwide.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-3 mb-2">
            <div className="p-6 font-bold text-gray-700 text-lg">Features</div>
            <div className="p-6 text-center">
              <div className="bg-gradient-to-r from-[#0947ba] to-[#3a6fd1] text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-lg">
                IELTS Pro
              </div>
            </div>
            <div className="p-6 text-center">
              <div className="bg-gray-200 text-gray-600 px-6 py-3 rounded-2xl font-bold text-lg">
                Other Platforms
              </div>
            </div>
          </div>

          {/* Feature Rows */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={el => rowsRef.current[index] = el}
                className={`grid grid-cols-3 border-b border-gray-100 last:border-b-0 transition-all duration-700 ${
                  feature.highlight ? 'bg-gradient-to-r from-green-50 to-blue-50' : 'bg-white'
                } ${
                  visibleRows.includes(index) 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ 
                  transitionDelay: visibleRows.includes(index) ? `${index * 100}ms` : '0ms'
                }}
              >
                <div className="p-6 flex items-center">
                  <span className="font-medium text-gray-800">{feature.name}</span>
                  {feature.highlight && (
                    <div className="ml-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      EXCLUSIVE
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex justify-center items-center">
                  {feature.ieltsProHas ? (
                    <div className="bg-green-100 p-3 rounded-full">
                      <FaCheck className="text-green-600 text-xl" />
                    </div>
                  ) : (
                    <div className="bg-red-100 p-3 rounded-full">
                      <FaTimes className="text-red-500 text-xl" />
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex justify-center items-center">
                  {feature.othersHave ? (
                    <div className="bg-green-100 p-3 rounded-full">
                      <FaCheck className="text-green-600 text-xl" />
                    </div>
                  ) : (
                    <div className="bg-red-100 p-3 rounded-full">
                      <FaTimes className="text-red-500 text-xl" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      name: "Arjun Patel",
      score: "Band 8.0",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "IELTS Pro's AI-powered feedback system was a game-changer! I improved from 6.5 to 8.0 in just 2 months. Their personalized study plan kept me motivated throughout my journey.",
      stars: 5,
      university: "University of Melbourne",
      flag: "🇦🇺"
    },
    {
      name: "Ananya Reddy",
      score: "Band 7.5",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "The live speaking sessions with native speakers boosted my confidence tremendously. I cleared my visa interview in the first attempt and got into my dream program!",
      stars: 5,
      university: "University of Toronto",
      flag: "🇨🇦"
    },
    {
      name: "Vikram Malhotra",
      score: "Band 7.0",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      text: "The comprehensive mock tests were exactly like the real exam. Plus, the university application guidance helped me secure a scholarship worth $15,000!",
      stars: 5,
      university: "University of Sydney",
      flag: "🇦🇺"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || cardsRef.current.length === 0) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.8) {
        cardsRef.current.forEach((card, index) => {
          if (card) {
            const cardRect = card.getBoundingClientRect();
            if (cardRect.top < windowHeight * 0.8) {
              setVisibleCards(prev => {
                if (!prev.includes(index)) {
                  return [...prev, index].sort((a, b) => a - b);
                }
                return prev;
              });
            }
          }
        });
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
            <span className="text-yellow-700 font-semibold text-sm">5,000+ Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Real Students,
            <span className="bg-gradient-to-r from-[#0947ba] to-[#3a6fd1] bg-clip-text text-transparent"> Real Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful students who achieved their dream IELTS scores and got admitted to top universities worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ 
                transitionDelay: visibleCards.includes(index) ? `${index * 200}ms` : '0ms'
              }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-[#0947ba] to-[#3a6fd1] p-3 rounded-full">
                  <FaQuoteLeft className="text-white text-lg" />
                </div>
              </div>

              {/* Header */}
              <div className="flex items-center mb-6 mt-4">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 p-1 rounded-full">
                    <FaCheck className="text-white text-xs" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="bg-gradient-to-r from-[#0947ba] to-[#3a6fd1] bg-clip-text text-transparent font-bold text-lg">
                      {testimonial.score}
                    </span>

                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* University Info */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{testimonial.flag}</span>
                  <span className="text-sm font-medium text-gray-700">
                    {testimonial.university}
                  </span>
                </div>
                <div className="bg-blue-50 px-3 py-1 rounded-full">
                  <span className="text-[#0947ba] text-xs font-semibold">ADMITTED</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-[#0947ba] to-[#3a6fd1] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

// Mobile App Component
const MobileApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.8) {
        setIsVisible(true);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-[#0947ba] to-[#3a6fd1] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                <FaMobile className="text-white" />
                <span className="text-white font-semibold text-sm">Mobile Learning</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Practice IELTS
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Anywhere, Anytime
                </span>
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Download our award-winning mobile app and access all IELTS Pro features on the go. 
                Practice speaking with AI, take mock tests, and track your progress seamlessly.
              </p>
              
              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#" className="group flex items-center justify-center bg-black hover:bg-gray-800 px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg">
                  <FaApple className="mr-3 text-2xl" />
                  <div>
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </a>
                
                <a href="#" className="group flex items-center justify-center bg-black hover:bg-gray-800 px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg">
                  <FaGooglePlay className="mr-3 text-2xl" />
                  <div>
                    <div className="text-xs opacity-80">GET IT ON</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </a>
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🎯", title: "AI-Powered Practice", desc: "Smart feedback system" },
                  { icon: "📱", title: "Offline Access", desc: "Learn without internet" },
                  { icon: "📊", title: "Progress Tracking", desc: "Detailed analytics" },
                  { icon: "🎧", title: "Audio Lessons", desc: "Learn while commuting" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white">{feature.title}</h4>
                      <p className="text-sm text-blue-100">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Content - App Preview */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="relative">
                {/* Phone Mockup */}
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-4">
                      <FaMobile className="text-[#0947ba] text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Download Our App</h3>
                    <p className="text-blue-100">Scan QR code or click download buttons</p>
                  </div>

                  {/* QR Code */}
                  <div className="bg-white p-6 rounded-2xl mb-6 flex items-center justify-center">
                    <FaQrcode size={120} className="text-[#0947ba]" />
                  </div>

                  {/* App Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">4.9★</div>
                      <div className="text-xs text-blue-100">App Store Rating</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">50K+</div>
                      <div className="text-xs text-blue-100">Downloads</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">95%</div>
                      <div className="text-xs text-blue-100">Success Rate</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                  Free Download!
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 rounded-full shadow-lg">
                  <FaDownload className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export all components
const AnimatedSections = () => {
  return (
    <>
      <Comparison />
      <Testimonials />
      <MobileApp />
    </>
  );
};

export default AnimatedSections;