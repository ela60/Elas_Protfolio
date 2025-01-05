import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleHireMeClick = () => {
    alert("Thank you for considering hiring me!");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
       {/* Left: Name */}
       <div className="text-2xl font-bold">
          <Link
            to="/"
            className="flex items-center space-x-2"
          >
            <span className="text-teal-500">
              Ambia
            </span>
            <span className="text-white animate-slideInOut">Ela</span>
          
          {/* Animated "Developer" */}
          <span className="text-teal-500 hidden md:block animate-slideInOut delay-500">Developer</span>
          </Link>
        </div>


        {/* Middle: Menu Links */}
        <div className="hidden md:flex space-x-6">
          {["/", "/about", "/services", "/projects", "/blog", "/contact"].map(
            (path, index) => (
              <Link
                key={index}
                to={path}
                className={`hover:text-teal-400 ${
                  isActive(path) ? "text-teal-400 font-semibold" : ""
                }`}
              >
                {path === "/"
                  ? "Home"
                  : path.charAt(1).toUpperCase() + path.slice(2)}
              </Link>
            )
          )}
        </div>

        {/* Hire Me Button */}
        <Link
          to="/contact"
          onClick={handleHireMeClick}
          className="bg-teal-500 hover:bg-teal-600 text-white md:px-1 md:text-[13px] lg:text-[15px] md:mr-1 md:py-2 lg:px-4 lg:py-2 py-2 px-2 rounded-md font-medium"
        >
          Hire Me
        </Link>

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
          {["/", "/about", "/services", "/projects", "/blog", "/contact"].map(
            (path, index) => (
              <Link
                key={index}
                to={path}
                className={`hover:text-teal-400 ${
                  isActive(path) ? "text-teal-400 font-semibold" : ""
                }`}
              >
                {path === "/"
                  ? "Home"
                  : path.charAt(1).toUpperCase() + path.slice(2)}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
