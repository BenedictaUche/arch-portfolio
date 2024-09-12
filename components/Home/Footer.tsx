import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 sm:py-8 text-center fixed bottom-0 left-0 w-full z-50">
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 sm:space-x-6 mb-4">
        <Link href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <Facebook size={20} className="text-gray-700 hover:text-gray-900" />
        </Link>
        <Link href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <Twitter size={20} className="text-gray-700 hover:text-gray-900" />
        </Link>
        <Link href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <Instagram size={20} className="text-gray-700 hover:text-gray-900" />
        </Link>
      </div>

      {/* Copyright Text */}
      <p className="text-[#9c968d] text-xs sm:text-sm font-serif italic font-extralight">
        © 2025 by Benita Onyebuchi. Powered and secured by{' '}
        <Link
          href="https://wix.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-900"
        >
          techwriterb
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
