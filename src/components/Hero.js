import React, { useState, useEffect } from "react";
import profileImage from "../pic/profil.jpg";



const Hero = ({ darkMode }) => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Marwan";
  const [showTitle, setShowTitle] = useState(false);

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

  return (
    <section
      id="home"
      className="pt-24 md:pt-32 px-4 min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-blue-500">{text}</span>
              <span className="animate-blink">|</span>
            </h1>

            {showTitle && (
              <h2 className="text-2xl md:text-3xl mb-6 animate-slideIn">
                Frontend Developer
              </h2>
            )}

            <p className="text-lg mb-8 opacity-80 animate-fadeIn">
              I build responsive and interactive web applications with modern
              technologies.
            </p>

            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-blue-500 text-white font-medium transition-transform hover:scale-110 hover:shadow-glow"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className={`px-6 py-3 rounded-lg border ${
                  darkMode ? "border-gray-600" : "border-gray-300"
                } font-medium transition-transform hover:scale-110`}
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-96 h-96 md:w-[40rem] md:h-[40rem] overflow-hidden shadow-2xl transition-transform animate-pop hover:scale-110 hover:animate-glow">
              <img
                src={profileImage}
                alt="Developer Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;