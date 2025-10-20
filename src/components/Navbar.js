import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = ({ darkMode, toggleDarkMode, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.experience'), href: "#experience" },
    { name: t('nav.skills'), href: "#skills" },
    { name: t('nav.projects'), href: "#projects" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  const handleLanguageChange = (e) => {
    toggleLanguage(e.target.value);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? darkMode
            ? "bg-gray-900/70 backdrop-blur-xl shadow-lg border-b border-gray-800"
            : "bg-white/70 backdrop-blur-xl shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
      style={{backdropFilter: 'blur(16px)'}}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl md:text-3xl font-extrabold tracking-widest flex items-center gap-2 select-none">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">MG</span>
            <span className="hidden sm:inline text-black dark:text-gray-200 font-serif">Portfolio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-base font-semibold transition-colors duration-200 pb-1 ${
                  activeSection === link.href.substring(1)
                    ? darkMode
                      ? "text-blue-400"
                      : "text-blue-600"
                    : darkMode
                    ? "text-gray-300 hover:text-blue-200"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md animate-fadeIn"></span>
                )}
              </a>
            ))}
            {/* Language Switcher */}
            <select
              value={language}
              onChange={handleLanguageChange}
              className={`px-2 py-1 rounded-md text-sm font-medium transition-colors border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode
                  ? "bg-gray-800 text-gray-300 border-gray-700"
                  : "bg-white text-gray-900 border-gray-300"
              }`}
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="ar">عربي</option>
            </select>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition shadow ${
                darkMode
                  ? "bg-gray-700 text-blue-300 hover:bg-blue-900/30"
                  : "bg-gray-100 text-gray-900 hover:bg-blue-100"
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
            {/* Language Switcher Mobile */}
            <select
              value={language}
              onChange={handleLanguageChange}
              className={`px-2 py-1 rounded-md text-xs font-medium transition-colors border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode
                  ? "bg-gray-800 text-gray-300 border-gray-700"
                  : "bg-white text-gray-900 border-gray-300"
              }`}
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="ar">عربي</option>
            </select>

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition shadow ${
                darkMode
                  ? "bg-gray-700 text-blue-300 hover:bg-blue-900/30"
                  : "bg-gray-100 text-gray-900 hover:bg-blue-100"
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
                  ? "text-gray-300 hover:text-blue-200"
                  : "text-gray-600 hover:text-blue-600"
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
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 right-0 w-full md:hidden transition-all duration-300 ease-in-out z-40 ${
            isMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          } ${darkMode ? "bg-gray-800/90 backdrop-blur-xl shadow-lg border-b border-gray-700" : "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200"}`}
          style={{backdropFilter: 'blur(16px)'}}
        >
          <div className="py-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-md text-base font-medium transition-colors relative ${
                  activeSection === link.href.substring(1)
                    ? darkMode
                      ? "bg-gray-700 text-blue-400"
                      : "bg-gray-100 text-blue-600"
                    : darkMode
                    ? "text-gray-300 hover:bg-gray-700 hover:text-blue-200"
                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md animate-fadeIn"></span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
