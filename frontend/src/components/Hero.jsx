import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#0947ba] to-[#3a6fd1] text-white">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Achieve Your Target IELTS Score with Confidence
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Join thousands of successful students who have improved their IELTS scores with our proven methods and expert instructors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-[#0947ba] hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-all shadow-lg hover:shadow-xl">
              Book Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#0947ba] px-8 py-3 rounded-md font-semibold transition-all">
              View Courses
            </button>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-10">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-[#0947ba] font-bold text-xl mb-4">Check Your Current Level</h3>
            <form>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0947ba]"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0947ba]"
                />
              </div>
              <div className="mb-4">
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0947ba]">
                  <option value="">Select Your Target Band</option>
                  <option value="6">Band 6</option>
                  <option value="6.5">Band 6.5</option>
                  <option value="7">Band 7</option>
                  <option value="7.5">Band 7.5</option>
                  <option value="8+">Band 8+</option>
                </select>
              </div>
              <button className="w-full bg-[#0947ba] text-white py-3 rounded-md font-semibold hover:bg-[#063590] transition-colors">
                Get Free Assessment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;