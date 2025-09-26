import { useState } from 'react';
import { FaBars, FaTimes, FaGlobe, FaChevronDown } from 'react-icons/fa';
import logo from '../assets/icon.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLangMenu = () => {
    setIsLangOpen(!isLangOpen);
  };

  const languages = [
    { code: 'US', name: 'English', flag: '🇺🇸' },
    { code: 'ES', name: 'Español', flag: '🇪🇸' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'IN', name: 'हिंदी', flag: '🇮🇳' }
  ];

  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img 
            src={logo} 
            alt="IELTS Pro Logo" 
            className="h-12 w-12 object-contain"
          />
          <span className="text-2xl font-bold text-[#0947ba]">IELTS +</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors duration-200">Home</a>
          <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors duration-200">Courses</a>
          <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors duration-200">Resources</a>
          <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors duration-200">About Us</a>
          <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors duration-200">Contact</a>
        </div>

        {/* Right Side - Language Selector and CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={toggleLangMenu}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-[#0947ba] transition-colors duration-200"
            >
              <FaGlobe className="text-gray-600" />
              <span className="text-sm font-medium">{selectedLang.code}</span>
              <FaChevronDown className={`text-gray-400 text-xs transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang);
                      setIsLangOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-3"
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <div>
                      <div className="font-medium text-gray-800">{lang.name}</div>
                      <div className="text-xs text-gray-500">{lang.code}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="bg-[#0947ba] hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
            Book Free Demo
          </button>
        </div>

        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg border-t border-gray-100">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors duration-200 py-2">Home</a>
            <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors duration-200 py-2">Courses</a>
            <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors duration-200 py-2">Resources</a>
            <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors duration-200 py-2">About Us</a>
            <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors duration-200 py-2">Contact</a>
            
            
            <div className="pt-2 border-t border-gray-200">
              <button 
                onClick={toggleLangMenu}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-gray-200 hover:border-[#0947ba] transition-colors duration-200"
              >
                <div className="flex items-center space-x-2">
                  <FaGlobe className="text-gray-600" />
                  <span className="text-sm font-medium">{selectedLang.flag} {selectedLang.name}</span>
                </div>
                <FaChevronDown className={`text-gray-400 text-xs transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangOpen && (
                <div className="mt-2 bg-gray-50 rounded-lg py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang);
                        setIsLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-3"
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <div>
                        <div className="font-medium text-gray-800">{lang.name}</div>
                        <div className="text-xs text-gray-500">{lang.code}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button className="bg-[#0947ba] hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 w-full mt-4">
              Book Free Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;