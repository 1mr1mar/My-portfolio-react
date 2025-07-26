import React, { useState } from "react";
import projectimg1 from "../pic/project1.png";
import projectimg2 from "../pic/project2.jpg";
import projectimg3 from "../pic/project3.png";
import restaurantProjectImg from "../pic/project4.png";
import projectimg5 from "../pic/project5.png";
import projectimg6 from "../pic/project6.png";
import projectimg7 from "../pic/project7.png";
import projectimg8 from "../pic/project8.png";
import projectimg9 from "../pic/project9.png";
import projectimg10 from "../pic/proejct10.png";
import { useLanguage } from "../contexts/LanguageContext";

const Projects = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const { t, isRTL } = useLanguage();

  // Projects data
  const projects = [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      tags: ["Html", "CSS", "java-script"],
      image: projectimg1,
      dimo: "https://chipper-clafoutis-944b48.netlify.app/",
      code: "https://github.com/1mr1mar/e-commers-Html-css-js",
      category: "web",
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      tags: ["React", "Css", "Java script"],
      image: projectimg2,
      dimo: "https://github.com/1mr1mar/E-commers-website-React",
      code: "https://github.com/1mr1mar/E-commers-website-React",
      category: "web",
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      tags: ["React", "talwind Css", "Node.js"],
      image: projectimg3,
      dimo: "https://marwan-ganbour.netlify.app/",
      code: "https://github.com/1mr1mar/portfolio",
      category: "web",
    },
    {
      id: 4,
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      tags: ["React", "Tailwind CSS", "Node.js", "Express", "MySQL"],
      image: restaurantProjectImg,
      dimo: "https://pfe-2025-delta.vercel.app/",
      code: "https://github.com/1mr1mar",
      category: "web",
    },
    {
      id: 5,
      title: t('projects.project5.title'),
      description: t('projects.project5.description'),
      tags: ["php", "Tailwind CSS", "MySQL"],
      image: projectimg5,
      dimo: "https://github.com/1mr1mar",
      code: "https://github.com/1mr1mar",
      category: "web",
    },
    {
      id: 6,
      title: t('projects.project6.title'),
      description: t('projects.project6.description'),
      tags: ["React", "Tailwind CSS", "NestJS"],
      image: projectimg6,
      dimo: "https://xo-game-zeta.vercel.app/",
      code: "https://github.com/1mr1mar/XO---game",
      category: "web",
    },
    {
      id: 7,
      title: t('projects.project7.title'),
      description: t('projects.project7.description'),
      tags: ["React", "Tailwind CSS", "JavaScript" , "Supabase"],
      image: projectimg7,
      dimo: "https://velaflam.vercel.app/",
      code: "https://github.com/1mr1mar",
      category: "web",
    },
    {
      id: 8,
      title: t('projects.project8.title'),
      description: t('projects.project8.description'),
      tags: ["React", "Tailwind CSS", "Node.js" , "mongodb"],
      image: projectimg8,
      dimo: "https://marobillio-2.vercel.app/",
      code: "https://github.com/1mr1mar",
      category: "web",
    },
    {
      id: 9,
      title: t('projects.project9.title'),
      description: t('projects.project9.description'),
      tags: ["React", "Tailwind CSS", "PostgreSQL" , "Supabase"],
      image: projectimg9,
      dimo: "https://v0-football-task-management-kappa.vercel.app/",
      code: "https://github.com/1mr1mar",
      category: "web",
    },
    {
      id: 10,
      title: t('projects.project10.title'),
      description: t('projects.project10.description'),
      tags: ["React", "Tailwind CSS","nestJs", "MongoDB"],
      image: projectimg10,
      dimo: "https://pcs-store.vercel.app/en",
      code: "https://github.com/1mr1mar",
      category: "web",
    }
  ];

  const filters = [
    { name: t('projects.filters.all'), value: "all" },
    { name: t('projects.filters.web'), value: "web" },
    { name: t('projects.filters.app'), value: "app" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className={`py-20 px-4 relative overflow-hidden ${
        darkMode 
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" 
          : "bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50"
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="w-full max-w-screen-xl mx-auto relative z-10">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-12 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
          data-aos="fade-up"
        >
          {t('projects.title')}
        </h2>

        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.value
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30"
                  : darkMode
                  ? "bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 border border-gray-700"
                  : "bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-gray-100/50 border border-gray-200"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group rounded-2xl overflow-hidden transition-all duration-500 ${
                darkMode 
                  ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50" 
                  : "bg-white/50 backdrop-blur-sm border border-gray-200/50"
              } hover:shadow-2xl hover:shadow-blue-500/20`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-500 ${
                    hoveredProject === index ? "opacity-100" : ""
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    <h3 className="text-white text-2xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1.5 text-sm rounded-full transition-all duration-300 ${
                        darkMode
                          ? "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
                          : "bg-gray-100/50 text-gray-700 hover:bg-gray-200/50"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.dimo}
                    className="group flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 relative overflow-hidden"
                  >
                    <span className="relative z-10">{t('projects.viewDemo')}</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </a>
                  <a
                    href={project.code}
                    className={`group flex-1 px-6 py-3 rounded-xl border font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden ${
                      darkMode
                        ? "border-gray-700 hover:border-blue-500"
                        : "border-gray-200 hover:border-blue-500"
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <i className="bx bxl-github text-xl"></i>
                      {t('projects.viewCode')}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <a
            href="https://github.com/1mr1mar"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 relative overflow-hidden"
          >
            <i className="bx bxl-github text-2xl mr-3 relative z-10"></i>
            <span className="relative z-10">{t('projects.viewMore')}</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
