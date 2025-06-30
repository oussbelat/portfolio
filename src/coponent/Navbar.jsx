import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md fixed top-0 w-full z-50 filter grayscale">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold text-white tracking-wide"
          style={{ textShadow: '0 0 6px rgba(255,255,255,0.6)' }}
        >
          Oussama Belattar
        </Link>

        
        <ul className="hidden md:flex items-center space-x-8 text-lg">
          <li>
            <Link
              to="/"
              className="hover:text-white/80 transition duration-300"
              style={{ color: 'rgba(255,255,255,0.9)' }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="hover:text-white/80 transition duration-300"
              style={{ color: 'rgba(255,255,255,0.9)' }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Projects"
              className="hover:text-white/80 transition duration-300"
              style={{ color: 'rgba(255,255,255,0.9)' }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="hover:text-white/80 transition duration-300"
              style={{ color: 'rgba(255,255,255,0.9)' }}
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="/walou.txt"
              download
              className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-white/90 transition duration-300"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white hover:text-white/80 transition duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-6 pb-6 pt-2 border-t border-white/20">
          <ul className="space-y-5 text-lg">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block text-white/90 hover:text-white transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                onClick={() => setIsOpen(false)}
                className="block text-white/90 hover:text-white transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Projects"
                onClick={() => setIsOpen(false)}
                className="block text-white/90 hover:text-white transition duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                onClick={() => setIsOpen(false)}
                className="block text-white/90 hover:text-white transition duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="/walou.txt"
                download
                className="block bg-white text-black text-center font-semibold px-4 py-2 rounded-lg hover:bg-white/90 transition duration-300"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
