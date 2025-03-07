
import React, { useEffect, useRef } from "react";
import "boxicons/css/boxicons.min.css";

const Skills = ({ darkMode }) => {
  const skills = [
    { name: "React", icon: "bx bxl-react bx-spin" },
    { name: "JavaScript", icon: "bx bxl-javascript bx-tada bx-rotate-90" },
    { name: "HTML/CSS", icon: "bx bxl-html5 bx-burst " },
    { name: "Node.js", icon: "bx bxl-nodejs" },
    { name: "TypeScript", icon: "bx bxl-typescript" },
    { name: "UI/UX Design", icon: "bx bx-paint" },
    { name: "JAVA", icon: "bx bxl-java" },
    { name: "C, C++", icon: "bx bx-code" },
    { name: "C#", icon: "bx bxl-c-plus-plus" },
  ];

  const experiences = [
    {
      title: "Advanced Frontend Developer",
      duration: "2023 - Present",
      place: "Freelance",
      icon: "bx bx-briefcase",
    },
    {
      title: "UI Developer",
      duration: "2023 - Present",
      place: "Freelance",
      icon: "bx bx-briefcase",
    },
  ];

  const education = [
    {
      title: "Bachelor's in Computer Science",
      duration: "2023 - 2025",
      place: "MIAGE Ksar El Kebir",
      icon: "bx bxs-graduation",
    },
  ];

  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-visible");
          } else {
            entry.target.classList.remove("slide-in-visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    
    const refs = skillRefs.current;

    refs.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      refs.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
              className={`p-4 rounded-lg shadow-md flex flex-col items-center justify-center gap-2 transform transition-transform hover:scale-105 duration-300 ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              } slide-in`}
            >
              <i className={`${skill.icon} text-9xl text-blue-500`}></i>
              <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
            </div>
          ))}
        </div>

        <h2 className="text-5xl font-bold mb-12 text-center">Education & Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...education, ...experiences].map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform hover:scale-105 duration-300 ${
    darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
  }`}
            >
              <i className={`${item.icon} text-5xl text-blue-500 mb-2`}></i>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm opacity-75">{item.duration}</p>
              <p className="mt-1 font-medium">{item.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
