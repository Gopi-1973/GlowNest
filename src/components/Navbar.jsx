import { Link } from "react-router-dom";
import logo from '../assets/logo/logo.jpg'
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <nav className="bg-pink-400 text-white py-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-4">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full object-contain"/>
        <h1 className="text-3xl font-serif font-bold hover:text-blue-400">Glow Nest</h1>
        </div>
        {/* Dekstop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
        </ul>
        {/* Mobile Menu */}
        <button className="md:hidden flex flex-col space-y-1" onClick={() => setIsOpen(!isOpen)}>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span> 
        </button>
      </div>
      {/* Mobile Menu Items */}
      {isOpen && (
        <ul className="md:hidden bg-pink-400 text-white px-4 py-2 space-y-2">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
