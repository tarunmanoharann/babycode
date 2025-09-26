import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Arjun Patel",
      score: "Band 8.0",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "IELTS Pro helped me secure admission to the University of Melbourne. Their personalized feedback on writing tasks was invaluable. I improved from Band 6.5 to 8.0 in just 2 months!",
      stars: 5,
      university: "University of Melbourne"
    },
    {
      name: "Ananya Reddy",
      score: "Band 7.5",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "The speaking practice sessions with native speakers boosted my confidence tremendously. I cleared my visa interview in the first attempt. The mock tests were very similar to the actual exam!",
      stars: 5,
      university: "University of Toronto"
    },
    {
      name: "Vikram Malhotra",
      score: "Band 7.0",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      text: "The AI-powered feedback system helped me identify my weak areas quickly. I got admission to my dream university with scholarship. Great experience overall!",
      stars: 5,
      university: "University of Sydney"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students who achieved their target IELTS scores with our guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-[#0947ba] font-medium">{testimonial.score}</p>
                  <p className="text-gray-500 text-sm">Alumni of {testimonial.university}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="btn-primary">Read More Success Stories</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;