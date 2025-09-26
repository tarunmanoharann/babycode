import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      score: "Band 8.0",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      text: "IELTS Pro helped me achieve my dream score. The personalized feedback on my writing tasks was invaluable. I improved from Band 6.5 to 8.0 in just 2 months!",
      stars: 5
    },
    {
      name: "Michael Chen",
      score: "Band 7.5",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      text: "The speaking practice sessions with native speakers boosted my confidence tremendously. The mock tests were very similar to the actual exam. Highly recommended!",
      stars: 5
    },
    {
      name: "Priya Sharma",
      score: "Band 7.0",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "The AI-powered feedback system helped me identify my weak areas quickly. The instructors were always available to answer my questions. Great experience overall!",
      stars: 4
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