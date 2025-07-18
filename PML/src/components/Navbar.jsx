// components/Navbar.jsx
import { useState } from 'react';
import LOGO_URL from "../assets/images/logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center animation-slide-in">
            <img
              src={LOGO_URL}
              alt="PML Professional Services"
              className="h-12"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-primary font-medium hover:text-accent transition">Home</a>
            <a href="#about" className="text-gray-600 font-medium hover:text-primary transition">About Us</a>
            <a href="#services" className="text-gray-600 font-medium hover:text-primary transition">Services</a>
            <a href="#contact" className="text-gray-600 font-medium hover:text-primary transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-primary focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden py-4" id="mobile-menu">
            <a href="#home" className="block py-2 text-primary font-medium">Home</a>
            <a href="#about" className="block py-2 text-gray-600 font-medium">About Us</a>
            <a href="#services" className="block py-2 text-gray-600 font-medium">Services</a>
            <a href="#contact" className="block py-2 text-gray-600 font-medium">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
