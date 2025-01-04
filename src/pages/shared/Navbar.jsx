import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHireMeClick = () => {
    alert("Thank you for considering hiring me!");
  };

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Name */}
        <div className="text-2xl font-bold">
  <Link to="/" className="flex items-center space-x-2 hover:text-teal-600 transition-all duration-300">
    <span className="text-teal-500">Ambia</span>
    <span className="text-white">Ela</span>
  </Link>
</div>


        {/* Middle: Menu Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-teal-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-teal-400">
            About
          </Link>
          <Link to="/services" className="hover:text-teal-400">
            Services
          </Link>
          <Link to="/projects" className="hover:text-teal-400">
            Projects
          </Link>
          <Link to="/blog" className="hover:text-teal-400">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-teal-400">
            Contact
          </Link>
        </div>

        
        <button
          onClick={handleHireMeClick}
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium"
        >
           <Link
          to="/contact"
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium"
        >
          Hire Me
        </Link>
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-gray-400 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-gray-800 ${menuOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col space-y-4 px-6 py-4">
          <Link to="/" className="hover:text-teal-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-teal-400">
            About
          </Link>
          <Link to="/services" className="hover:text-teal-400">
            Services
          </Link>
          <Link to="/projects" className="hover:text-teal-400">
            Projects
          </Link>
          <Link to="/blog" className="hover:text-teal-400">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-teal-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
