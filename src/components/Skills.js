import React from "react";
import "boxicons/css/boxicons.min.css";
import { useLanguage } from "../contexts/LanguageContext";

const Skills = ({ darkMode }) => {
  const { t, isRTL } = useLanguage();
  
  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: [
        { name: "HTML5", icon: "bx bxl-html5" },
        { name: "CSS3", icon: "bx bxl-css3" },
        { name: "JavaScript", icon: "bx bxl-javascript" },
        { name: "React.js", icon: "bx bxl-react" },
        { name: "Next.js", icon: "bx bxl-react" },
        { name: "Tailwind CSS", icon: "bx bxl-tailwind-css" },
        { name: "Bootstrap", icon: "bx bxl-bootstrap" },
      ],
    },
    {
      title: t('skills.backend'),
      skills: [
        { name: "Node.js", icon: "bx bxl-nodejs" },
        { name: "Express.js", icon: "bx bx-server" },
        { name: "NestJS", icon: "bx bx-cube" },
        { name: "PHP", icon: "bx bxl-php" },
        { name: "RESTful APIs", icon: "bx bx-api" },
        { name: "JWT", icon: "bx bx-key" },
        { name: "Authentication", icon: "bx bx-lock-alt" },
      ],
    },
    {
      title: t('skills.database'),
      skills: [
        { name: "MongoDB", icon: "bx bxl-mongodb" },
        { name: "MySQL", icon: "bx bx-data" },
        { name: "PostgreSQL", icon: "bx bx-data" },
        { name: "Supabase", icon: "bx bx-cloud" },
        { name: "Firebase", icon: "bx bxl-firebase" },
        { name: "Database Design", icon: "bx bx-database" },
      ],
    },
    {
      title: t('skills.programming'),
      skills: [
        { name: "Java", icon: "bx bxl-java" },
        { name: "C", icon: "bx bx-code" },
        { name: "C++", icon: "bx bx-code" },
        { name: "C#", icon: "bx bx-code" },
        { name: "JEE", icon: "bx bx-code" },
      ],
    },
    {
      title: t('skills.tools'),
      skills: [
        { name: "Git", icon: "bx bxl-git" },
        { name: "GitHub", icon: "bx bxl-github" },
        { name: "Postman", icon: "bx bx-globe" },
      ],
    },
    {
      title: t('skills.software'),
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
      className={`py-20 px-4 relative overflow-hidden ${
        darkMode 
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50"
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="w-full max-w-screen-xl mx-auto relative z-10">
        <h2 
          className={`text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500`}
          data-aos="fade-up"
        >
          {t('skills.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 ${
                darkMode 
                  ? "bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-blue-500/20" 
                  : "bg-white/50 border border-gray-200/50 hover:bg-white/70 hover:shadow-2xl hover:shadow-blue-500/20"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className={`text-xl font-semibold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`group/skill p-4 rounded-xl flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 ${
                      darkMode 
                        ? "bg-gray-700/50 hover:bg-gray-700/70" 
                        : "bg-gray-100/50 hover:bg-gray-100/70"
                    }`}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100 + skillIndex * 50}
                  >
                    <div className="relative">
                      <i className={`${skill.icon} text-3xl mb-2 text-blue-500 group-hover/skill:text-purple-500 transition-colors duration-300`}></i>
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover/skill:opacity-20 blur transition-opacity duration-300"></div>
                    </div>
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
