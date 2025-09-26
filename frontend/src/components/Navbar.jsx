import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-[#0947ba]">IELTS Pro</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors">Home</a>
          <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors">Courses</a>
          <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors">Resources</a>
          <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors">About Us</a>
          <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors">Contact</a>
        </div>

        <div className="hidden md:block">
          <button className="btn-primary">Free Assessment</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors">Courses</a>
            <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors">Resources</a>
            <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors">About Us</a>
            <a href="#" className="text-gray-800 hover:text-[#0947ba] font-medium transition-colors">Contact</a>
            <button className="btn-primary w-full">Free Assessment</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;