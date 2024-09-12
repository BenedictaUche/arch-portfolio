import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed px-4 sm:px-20 z-50 w-full h-20 items-center">
      <div className="max-w-7xl mx-auto sm:px-0 lg:px-0">
        <div className="flex justify-between h-16">
          {/* Logo or Name */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-lg text-gray-700">
              BENITA ONYEBUCHI
            </span>
          </div>

          {/* Links - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 text-sm hover:text-gray-900">
           HOME
            </Link>
            <Link href="/#about" className="text-gray-700 text-sm hover:text-gray-900">
              ABOUT
            </Link>
            <Link href="/#portfolio" className="text-gray-700 text-sm hover:text-gray-900">
              PORTFOLIO
            </Link>
            <Link href="/#clients" className="text-gray-700 text-sm hover:text-gray-900">
              CLIENTS
            </Link>
            <Link href="/#contact" className="text-gray-700 text-sm hover:text-gray-900">
              CONTACT
            </Link>
          </div>

          {/* Hamburger menu for mobile view */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for hamburger menu */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <Link href="/" className="block text-gray-700 hover:text-gray-900">
           HOME
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-gray-900">
              ABOUT
            </Link>
            <Link href="/portfolio" className="block text-gray-700 hover:text-gray-900">
              PORTFOLIO
            </Link>
            <Link href="/clients" className="block text-gray-700 hover:text-gray-900">
              CLIENTS
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-gray-900">
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
