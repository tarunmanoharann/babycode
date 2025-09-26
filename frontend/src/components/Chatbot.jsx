import React, { useState, useEffect, useRef } from 'react';
import { FaComments, FaTimes, FaPaperPlane, FaSmile, FaLightbulb } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! 👋 I'm your IELTS preparation assistant. How can I help you achieve your target score today?", isBot: true, timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  useEffect(() => {
    if (!hasAutoOpened) {
      const notificationTimer = setTimeout(() => {
        setShowNotification(true);
        
      
        setTimeout(() => {
          setShowNotification(false);
          setIsOpen(true);
          setHasAutoOpened(true);
          
        
          setTimeout(() => {
            setIsTyping(true);
            setTimeout(() => {
              setIsTyping(false);
              setMessages(prev => [...prev, { 
                text: "I noticed you're browsing our IELTS courses! 🎯 Do you have any questions about our programs or need help choosing the right course for your target score?", 
                isBot: true, 
                timestamp: new Date() 
              }]);
            }, 1500);
          }, 1000);
        }, 3000);
      }, 7000); // 7 seconds

      return () => clearTimeout(notificationTimer);
    }
  }, [hasAutoOpened]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
  };

  const quickReplies = [
    "Tell me about IELTS courses 📚",
    "What's your success rate? 📊",
    "Book a free demo 🎯",
    "Pricing information 💰"
  ];

  const botResponses = [
    {
      keywords: ['course', 'program', 'class'],
      response: "Great question! 📚 We offer comprehensive IELTS courses including Speaking, Writing, Reading, and Listening modules. Our courses are designed by certified trainers with proven track records. Would you like details about a specific module?"
    },
    {
      keywords: ['success', 'rate', 'result'],
      response: "Excellent question! 🎉 Our success rate is outstanding - 95% of our students achieve their target band scores within 3 months. We've helped over 10,000+ students succeed in IELTS!"
    },
    {
      keywords: ['demo', 'free', 'trial'],
      response: "Perfect! 🎯 I can help you book a FREE demo class right now. Our demo includes a mini assessment and personalized study plan. Would you prefer a Speaking or Writing demo session?"
    },
    {
      keywords: ['price', 'cost', 'fee', 'pricing'],
      response: "Great question! 💰 Our courses start from ₹4,999 for individual modules and ₹12,999 for complete IELTS preparation. We also offer flexible EMI options. Would you like a detailed pricing breakdown?"
    },
    {
      keywords: ['hello', 'hi', 'hey'],
      response: "Hello there! 😊 I'm excited to help you with your IELTS journey. What specific area would you like to focus on - Speaking, Writing, Reading, or Listening?"
    }
  ];

  const getSmartResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (let response of botResponses) {
      if (response.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return response.response;
      }
    }
    
  
    const defaultResponses = [
      "That's a fantastic question! 🤔 Our IELTS experts would love to help you with that. Would you like me to connect you with a counselor for detailed guidance?",
      "I understand your concern! 💡 Based on your query, I'd recommend speaking with our academic team who can provide personalized advice. Shall I schedule a callback?",
      "Interesting point! 🎓 Many of our successful students had similar questions. Our proven methodology has helped thousands achieve their target scores. Want to know more?",
      "Great thinking! 📈 Every student's journey is unique, and we customize our approach accordingly. Would you like to take our free skill assessment to get started?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

  
    const userMessage = { text: inputText, isBot: false, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');

    
    setIsTyping(true);

    
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = getSmartResponse(currentInput);
      setMessages(prev => [...prev, { text: botResponse, isBot: true, timestamp: new Date() }]);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickReply = (reply) => {
    const userMessage = { text: reply, isBot: false, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = getSmartResponse(reply);
      setMessages(prev => [...prev, { text: botResponse, isBot: true, timestamp: new Date() }]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {showNotification && !isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-lg p-4 mb-2 max-w-xs animate-bounce">
          <div className="flex items-center">
            <FaLightbulb className="text-yellow-500 mr-2" />
            <p className="text-sm text-gray-700">Need help with IELTS preparation? 🎯</p>
          </div>
          <div className="absolute bottom-0 right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
        </div>
      )}

      <button 
        onClick={toggleChat}
        className={`${isOpen ? 'hidden' : 'flex'} relative bg-[#0947ba] text-white p-4 rounded-full shadow-lg hover:bg-[#063590] transition-all transform hover:scale-110 duration-300`}
      >
        <FaComments size={24} />
        {showNotification && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
            !
          </span>
        )}
      </button>

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col transition-all duration-300 transform animate-fadeIn" style={{ height: '500px' }}>
     
          <div className="bg-gradient-to-r from-[#0947ba] to-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-2">
                <FaComments size={16} />
              </div>
              <div>
                <h3 className="font-medium">IELTS Pro Assistant</h3>
                <p className="text-xs opacity-75 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                  Online • Ready to help
                </p>
              </div>
            </div>
            <button onClick={toggleChat} className="text-white hover:text-gray-200 transition-colors">
              <FaTimes />
            </button>
          </div>

     
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-4 ${msg.isBot ? 'text-left' : 'text-right'} animate-fadeIn`}
              >
                <div 
                  className={`inline-block max-w-xs p-3 rounded-2xl transition-all duration-300 ${
                    msg.isBot 
                      ? 'bg-white text-gray-800 shadow-sm hover:shadow-md' 
                      : 'bg-[#0947ba] text-white shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
                <div className={`text-xs text-gray-400 mt-1 ${msg.isBot ? 'text-left' : 'text-right'}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
      
            {isTyping && (
              <div className="text-left mb-4 animate-fadeIn">
                <div className="inline-block bg-white text-gray-800 p-3 rounded-2xl shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-1">Assistant is typing...</div>
              </div>
            )}
            
            {messages.length <= 2 && !isTyping && (
              <div className="mb-4 animate-fadeIn">
                <p className="text-xs text-gray-500 mb-2">Quick options:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-all duration-200 transform hover:scale-105"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

    
          <div className="border-t p-3 flex bg-white rounded-b-lg">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0947ba] focus:border-transparent transition-all duration-200"
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="bg-[#0947ba] text-white px-4 py-2 rounded-r-lg hover:bg-[#063590] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Chatbot;