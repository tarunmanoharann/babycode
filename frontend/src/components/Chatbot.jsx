import React, { useState } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you with your IELTS preparation today?", isBot: true }
  ]);
  const [inputText, setInputText] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    setMessages([...messages, { text: inputText, isBot: false }]);
    setInputText('');

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to help you with that! Our IELTS experts can provide more details.",
        "That's a great question about IELTS preparation. Would you like to schedule a free consultation?",
        "We have specific courses that can help you with that aspect of IELTS. Would you like more information?",
        "Many of our students have similar questions. Our success rate for that particular area is over 95%."
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Button */}
      <button 
        onClick={toggleChat}
        className={`${isOpen ? 'hidden' : 'flex'} bg-[#0947ba] text-white p-4 rounded-full shadow-lg hover:bg-[#063590] transition-all`}
      >
        <FaComments size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col" style={{ height: '400px' }}>
          {/* Chat Header */}
          <div className="bg-[#0947ba] text-white p-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <FaComments className="mr-2" />
              <h3 className="font-medium">IELTS Pro Assistant</h3>
            </div>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <FaTimes />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-3 ${msg.isBot ? 'text-left' : 'text-right'}`}
              >
                <div 
                  className={`inline-block p-3 rounded-lg ${
                    msg.isBot 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-[#0947ba] text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="border-t p-3 flex">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0947ba]"
            />
            <button 
              type="submit"
              className="bg-[#0947ba] text-white px-4 py-2 rounded-r-lg hover:bg-[#063590]"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;