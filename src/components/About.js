import React, { useState, useEffect } from "react";
import profileImage from "../pic/profil.jpg";
import { useLanguage } from "../contexts/LanguageContext";

const About = ({ darkMode }) => {
  const { t, isRTL } = useLanguage();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="about" className="py-16 px-4 overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto">
        <h2 
          className={`text-3xl font-bold mb-12 text-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
          data-aos="fade-up"
        >
          {t('about.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className="flex justify-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="relative">
              <div
                className={`w-72 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-110 ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <img
                  src={profileImage}
                  alt="About Me"
                  className="w-full h-full object-cover animate-pop"  
                />
              </div>
              <div 
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-indigo-500/20 filter blur-xl"
                data-aos="zoom-in"
                data-aos-delay="500"
              ></div>
              <div 
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-rose-500/20 filter blur-xl"
                data-aos="zoom-in"
                data-aos-delay="700"
              ></div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <h3 
              className={`text-xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {t('about.role')}
            </h3>

            <div 
              className={`mb-6 rounded-lg overflow-hidden relative ${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
              data-aos="fade-up"
              data-aos-delay="200"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className={`flex items-center px-4 py-2 ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className={`ml-4 text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  about.js
                </div>
              </div>
              <div className={`p-4 font-mono text-sm relative ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                <div className="mb-2 group">
                  <span className="text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300">const</span>{" "}
                  <span className="text-rose-400 transition-colors duration-300 group-hover:text-rose-300">developer</span> = {"{"}
                </div>
                <div className="ml-4 mb-2 group">
                  <span className="text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300">name</span>:{" "}
                  <span className="text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Marwan Ganbour"</span>,
                </div>
                <div className="ml-4 mb-2 group">
                  <span className="text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300">role</span>:{" "}
                  <span className="text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Full Stack Developer"</span>,
                </div>
                <div className="ml-4 mb-2 group">
                  <span className="text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300">skills</span>: [
                </div>
                <div className="ml-8 mb-2 group">
                  <span className="text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"React"</span>,
                  <span className="text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Node.js"</span>,
                  <span className="text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"JavaScript"</span>,
                </div>
                <div className="ml-4 mb-2">
                  ],
                </div>
                <div className="ml-4 mb-2 group">
                  <span className="text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300">location</span>:{" "}
                  <span className="text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Ksar El Kebir, Morocco"</span>,
                </div>
                <div className="ml-4 group">
                  <span className="text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300">available</span>:{" "}
                  <span className="text-green-400 transition-colors duration-300 group-hover:text-green-300">true</span>
                </div>
                <div>{"}"}</div>

                {/* Animated cursor */}
                {isHovering && (
                  <div 
                    className="absolute w-0.5 h-5 bg-indigo-500 animate-blink"
                    style={{
                      left: `${cursorPosition.x}px`,
                      top: `${cursorPosition.y}px`,
                      transform: 'translate(-50%, -50%)',
                      transition: 'all 0.1s ease-out'
                    }}
                  />
                )}

                {/* Glow effect */}
                <div 
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                    isHovering ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(99, 102, 241, 0.15) 0%, transparent 50%)`
                  }}
                />
              </div>
            </div>

            <div
              className={`grid md:grid-cols-2 grid-cols-1 mb-6 gap-4 ${
                darkMode ? "text-gray-300" : "text-gray-900"
              }`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="mb-2">
                <h4 className="font-semibold">{t('about.name')}:</h4>
                <p>Marwan Ganbour</p>
              </div>
              <div className="mb-2">
                <h4 className="font-semibold">{t('about.email')}:</h4>
                <p>
                  <a
                    href="mailto:ganbourmarwan9@gmail.com"
                    className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
                  >
                    ganbourmarwan9@gmail.com
                  </a>
                </p>
              </div>
              <div className="mb-2">
                <h4 className="font-semibold">{t('about.location')}:</h4>
                <p>Ksar El Kebir, Morocco</p>
              </div>
              <div className="mb-2">
                <h4 className="font-semibold">{t('about.freelance')}:</h4>
                <p className="text-emerald-500 font-semibold">{t('about.available')} ✅</p>
              </div>
            </div>
            
            <a
              href="https://drive.google.com/file/d/1oLsGplqRiFNprWCL7OCA1q7xZVc2qHxV/view?usp=drive_link"
              className="group inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-rose-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <span className="relative z-10">📄 {t('about.downloadResume')}</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 