import React from "react";
import profileImage from "../pic/profil.jpg";

const About = ({ darkMode }) => {
  return (
    <section id="about" className="py-16 px-4 overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto">
        <h2 
          className={`text-3xl font-bold mb-12 text-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
          data-aos="fade-up"
        >
          About Me
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
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                }`}
              >
                <img
                  src={profileImage}
                  alt="About Me"
                  className="w-full h-full object-cover animate-pop"  
                />
              </div>
              <div 
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-blue-500/20 filter blur-xl"
                data-aos="zoom-in"
                data-aos-delay="500"
              ></div>
              <div 
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-purple-500/20 filter blur-xl"
                data-aos="zoom-in"
                data-aos-delay="700"
              ></div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h3 
              className={`text-xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Frontend Developer & UI Designer
            </h3>
            <p
              className={`mb-4 text-lg ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              With 2+ years of experience building modern web applications, I
              specialize in creating responsive, accessible, and performant user
              interfaces.
            </p>
            <p
              className={`mb-6 text-lg ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              I'm passionate about clean code, user experience, and staying
              updated with the latest web technologies.
            </p>

            <div
              className={`grid md:grid-cols-2 grid-cols-1 mb-6 gap-4 ${
                darkMode ? "text-gray-300" : "text-gray-900"
              }`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="mb-2">
                <h4 className="font-semibold ">👤 Name:</h4>
                <p>Marwan Ganbour</p>
              </div>
              <div className="mb-2">
                <h4 className="font-semibold ">📧 Email:</h4>
                <p>
                  <a
                    href="mailto:ganbourmarwan9@gmail.com"
                    className="text-blue-500 hover:underline "
                  >
                    ganbourmarwan9@gmail.com
                  </a>
                </p>
              </div>
              <div className="mb-2">
                <h4 className="font-semibold">📍 Based in:</h4>
                <p>Ksar El Kebir, Morocco</p>
              </div>
              <div className="mb-2">
                <h4 className="font-semibold">💼 Freelance:</h4>
                <p className="text-green-500 font-semibold">Available ✅</p>
              </div>
            </div>
            
            <a
              href="https://www.youtube.com/watch?v=0VAAS9xnS5U&list=RD0VAAS9xnS5U&start_radio=1"
              className="group inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <span className="relative z-10">📄 Download Resume</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 