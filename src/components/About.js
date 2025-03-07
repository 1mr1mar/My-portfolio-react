import React from "react";
import profileImage from "../pic/profil.jpg";

const About = ({ darkMode }) => {
  return (
    <section id="about overflow-hidden" className="py-16 px-4">
      <div className="container mx-auto">
        <h2
          className={`text-3xl font-bold mb-12 text-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
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
            </div>
          </div>

          <div>
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
            >
              With 2+ years of experience building modern web applications, I
              specialize in creating responsive, accessible, and performant user
              interfaces.
            </p>
            <p
              className={`mb-6 text-lg ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm passionate about clean code, user experience, and staying
              updated with the latest web technologies.
            </p>

            <div
              className={`grid md:grid-cols-2 grid-cols-1 mb-6 gap-4${
                darkMode ? "text-gray-300" : "text-gray-900"
              }`}
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
              className="inline-block px-6 py-3 rounded-lg bg-blue-500 text-white font-medium transition-transform hover:scale-110 hover:shadow-lg"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 