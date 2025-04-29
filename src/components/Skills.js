import React from "react";
import "boxicons/css/boxicons.min.css";

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: "bx bxl-html5" },
        { name: "CSS3", icon: "bx bxl-css3" },
        { name: "JavaScript", icon: "bx bxl-javascript" },
        { name: "React.js", icon: "bx bxl-react" },
        { name: "Tailwind CSS", icon: "bx bxl-tailwind-css" },
        { name: "Bootstrap", icon: "bx bxl-bootstrap" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "bx bxl-nodejs" },
        { name: "Express.js", icon: "bx bx-server" },
        { name: "RESTful APIs", icon: "bx bx-api" },
        { name: "Authentication", icon: "bx bx-lock-alt" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: "bx bxl-mongodb" },
        { name: "MySQL", icon: "bx bx-data" },
        { name: "Database Design", icon: "bx bx-database" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: "bx bxl-java" },
        { name: "C", icon: "bx bx-code" },
        { name: "C++", icon: "bx bx-code" },
        { name: "C#", icon: "bx bx-code" },
        { name: "JEE", icon: "bx bx-code" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: "bx bxl-git" },
        { name: "GitHub", icon: "bx bxl-github" },
        { name: "Postman", icon: "bx bx-globe" },
      ],
    },
    {
      title: "Software",
      skills: [
        { name: "VS Code", icon: "bx bx-code-alt" },
        { name: "Figma", icon: "bx bx-palette" },
        { name: "Cursor", icon: "bx bx-code-block" },
        { name: "Visual Studio", icon: "bx bx-code" },
        { name: "Eclipse", icon: "bx bx-code-curly" },
        { name: "NetBeans", icon: "bx bx-code" },
      ],
    }
  ];

  return (
    <section
      id="skills"
      className={`py-20 px-4 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto">
        <h2 
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
          data-aos="fade-up"
        >
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                darkMode 
                  ? "bg-gray-800 hover:bg-gray-700" 
                  : "bg-white hover:bg-gray-50"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className={`text-xl font-semibold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`p-4 rounded-lg flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 ${
                      darkMode 
                        ? "bg-gray-700 hover:bg-gray-600" 
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100 + skillIndex * 50}
                  >
                    <i className={`${skill.icon} text-3xl mb-2 text-blue-500`}></i>
                    <span className={`text-sm font-medium text-center ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
