import React, { useState, useEffect } from "react";

const Navbar = ({ darkMode, toggleDarkMode, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? darkMode
            ? "bg-gray-900/90 backdrop-blur-md"
            : "bg-white/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-screen-xl mx-auto relative flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <div className="text-lg sm:text-xl md:text-2xl font-bold">
          <span className="text-blue-500">Mar</span>Portfolio
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? darkMode
                    ? "text-blue-400"
                    : "text-blue-600"
                  : darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition ${
              darkMode
                ? "bg-gray-700 text-yellow-300"
                : "bg-gray-100 text-gray-900"
            }`}
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <i className="bx bx-sun text-xl"></i>
            ) : (
              <i className="bx bx-moon text-xl"></i>
            )}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition ${
              darkMode
                ? "bg-gray-700 text-yellow-300"
                : "bg-gray-100 text-gray-900"
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <i className="bx bx-sun text-lg"></i>
            ) : (
              <i className="bx bx-moon text-lg"></i>
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-md transition ${
              darkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <i className="bx bx-x text-2xl"></i>
            ) : (
              <i className="bx bx-menu text-2xl"></i>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 right-0 w-full md:hidden transition-all duration-300 ease-in-out z-40 ${
            isMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          } ${darkMode ? "bg-gray-800" : "bg-white"}`}
        >
          <div className="py-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? darkMode
                      ? "bg-gray-700 text-blue-400"
                      : "bg-gray-100 text-blue-600"
                    : darkMode
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
