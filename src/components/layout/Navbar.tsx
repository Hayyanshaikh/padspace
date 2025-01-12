import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-200">
            MyApp
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link to="/notes" className="hover:text-gray-300 transition">
            Notes
          </Link>
          <Link to="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/notes"
            className="block px-4 py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Notes
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
