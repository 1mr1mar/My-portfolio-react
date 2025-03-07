import React, { useState, useEffect } from "react";

const Navbar = ({ darkMode, toggleDarkMode, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      } 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 
      ${darkMode ? "bg-gray-800" : "bg-white"} 
      ${isScrolled ? "shadow-lg bg-opacity-90 backdrop-blur-md" : "shadow-md"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">
            <span className="text-blue-500">Mar</span>Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center justify-end w-full">
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`capitalize transition-colors hover:text-blue-500 ${
                  activeSection === item ? "text-blue-500" : ""
                }`}
              >
                {item}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="flex ml-6 p-2 rounded-full "
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div
              className={`py-4 px-2 space-y-3 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              {["home", "about", "projects", "skills", "contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`block capitalize py-2 px-4 transition-colors ${
                      activeSection === item ? "text-blue-500" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
              <button
                onClick={toggleDarkMode}
                className="block w-full text-left py-2 px-4"
              >
                {darkMode
                  ? "Switch to Light Mode 🌞"
                  : "Switch to Dark Mode 🌙"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
