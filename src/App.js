import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  // Initialize darkMode from localStorage or default to false
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
  }, []);

  // Handle scroll for progress indicator and active section
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress for progress bar
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = document.documentElement.scrollTop;
      setScrollProgress((currentScroll / totalScroll) * 100);
      
      // Show/hide scroll to top button
      setShowScrollTop(currentScroll > 300);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark/light mode and save to localStorage
  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <LanguageProvider>
      <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${
        darkMode 
          ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white' 
          : 'bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50 text-gray-900'
      }`}>
        {/* Progress bar */}
        <div 
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 z-50"
          style={{ 
            width: `${scrollProgress}%`,
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
          }}
        ></div>
        
        <Navbar 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          activeSection={activeSection} 
        />
        
        <main className="transition-all duration-500 w-full">
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>
        
        <Footer darkMode={darkMode} />

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-blue-500/30 ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
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
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </LanguageProvider>
  );
};

export default App;