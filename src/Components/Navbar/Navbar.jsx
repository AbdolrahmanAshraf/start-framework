import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-5">
        <Link to="/" className="text-3xl font-extrabold text-teal-400 hover:text-teal-500 transition-all duration-300">
          Start Framework
        </Link>

        {/* Mobile menu button */}
        <button
          className="text-white lg:hidden p-2 text-3xl"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Desktop menu */}
        <ul
          className={`lg:flex lg:space-x-6 space-y-4 lg:space-y-0 transition-all duration-300 ease-in-out 
            ${isMenuOpen ? "block" : "hidden"} lg:block`}
        >
          <li>
            <NavLink
              to="about"
              className="text-lg font-medium text-white hover:text-teal-400 transition-all duration-300"
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="portfolio"
              className="text-lg font-medium text-white hover:text-teal-400 transition-all duration-300"
              onClick={closeMenu}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className="text-lg font-medium text-white hover:text-teal-400 transition-all duration-300"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden p-5 bg-gray-800 shadow-lg">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="about"
                className="text-lg font-medium text-white hover:text-teal-400 transition-all duration-300"
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="portfolio"
                className="text-lg font-medium text-white hover:text-teal-400 transition-all duration-300"
                onClick={closeMenu}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className="text-lg font-medium text-white hover:text-teal-400 transition-all duration-300"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
