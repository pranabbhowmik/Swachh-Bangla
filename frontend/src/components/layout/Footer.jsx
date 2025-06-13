import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#10471d] text-white text-center py-6 pb-20 mt-10">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-yellow-300 transition-colors duration-300"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-yellow-300 transition-colors duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-yellow-300 transition-colors duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-yellow-300 transition-colors duration-300"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <p className="text-sm px-4">© 2025 Swachh Bangla. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
