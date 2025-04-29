import React, { useState, useEffect } from "react";
import profileImage from "../pic/profil.jpg";

const Hero = ({ darkMode }) => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Marwan";
  const [showTitle, setShowTitle] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowTitle(true), 500);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Handle mouse move for parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <section
      id="home"
      className={`pt-24 md:pt-32 px-4 min-h-screen flex flex-col justify-center relative overflow-hidden ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50'
      }`}
      onMouseMove={handleMouseMove}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2 transition-transform duration-300"
          style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
        ></div>
      </div>

      <div className="container mx-auto relative z-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div 
            className="order-2 md:order-1 animate-fadeIn"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-blue-500">{text}</span>
              <span className="animate-blink">|</span>
            </h1>

            {showTitle && (
              <h2 
                className="text-2xl md:text-3xl mb-6 animate-slideIn bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Frontend Developer
              </h2>
            )}

            <p 
              className="text-lg mb-8 opacity-80 animate-fadeIn"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              I build responsive and interactive web applications with modern
              technologies.
            </p>

            <div 
              className="flex space-x-4"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <a
                href="#contact"
                className="group px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 relative overflow-hidden"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                {isHovering && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                )}
              </a>
              <a
                href="#projects"
                className={`group px-6 py-3 rounded-lg border ${
                  darkMode 
                    ? "border-gray-600 hover:border-blue-500" 
                    : "border-gray-300 hover:border-blue-500"
                } font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          <div 
            className="flex justify-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div 
              className="w-96 h-96 md:w-[40rem] md:h-[40rem] overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/30 relative group"
              style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={profileImage}
                alt="Developer Profile"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {isHovering && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
                    <p className="text-white font-medium">Frontend Developer</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;