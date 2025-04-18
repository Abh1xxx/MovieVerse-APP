import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center mt-10 border-t border-gray-800">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} <span className="text-cyan-400">MovieVerse</span>. All rights reserved.
      </p>
      <p className="mt-2 text-xs tracking-wide">Crafted with ❤️ for Movie Enthusiasts</p>
    </footer>
  );
};

export default Footer;
