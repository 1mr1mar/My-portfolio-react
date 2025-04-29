import React, { useState } from "react";
import projectimg1 from'../pic/project1.png';
import projectimg2 from'../pic/project2.jpg';
import projectimg3 from'../pic/project3.png';

const Projects = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A full-featured online store with shopping cart and payment integration.",
      tags: ["Html", "CSS", "java-script"],
      image: projectimg1,
      dimo: "https://chipper-clafoutis-944b48.netlify.app/",
      code: "https://github.com/1mr1mar/e-commers-Html-css-js",
      category: "web"
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description: "A productivity app for organizing tasks and tracking progress.",
      tags: ["React", "Css", "Java script"],
      image: projectimg2,
      dimo: "https://github.com/1mr1mar/E-commers-website-React",
      code: "https://github.com/1mr1mar/E-commers-website-React",
      category: "web"
    },
    {
      id: 3,
      title: "My Portfolio",
      description: "Anything you might want to know about me you'll finde here",
      tags: ["React", "talwind Css", "Node.js"],
      image: projectimg3,
      dimo: "https://marwan-ganbour.netlify.app/",
      code: "https://github.com/1mr1mar/portfolio",
      category: "web"
    }
  ];

  const filters = [
    { name: "All", value: "all" },
    { name: "Web", value: "web" },
    { name: "App", value: "app" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      id="projects" 
      className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto">
        <h2 
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          data-aos="fade-up"
        >
          My Projects
        </h2>
        
        <div 
          className="flex justify-center mb-12 space-x-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-blue-500 text-white"
                  : darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-700 hover:bg-gray-100"
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
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 ${
                    hoveredProject === index ? "opacity-100" : ""
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-2 py-1 text-xs rounded-full ${
                        darkMode 
                          ? "bg-gray-700 text-gray-300" 
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={project.dimo}
                    className={`px-4 py-2 rounded-lg ${
                      darkMode 
                        ? "bg-blue-500 hover:bg-blue-600" 
                        : "bg-blue-500 hover:bg-blue-600"
                    } text-white font-medium transition-all duration-300 hover:scale-105`}
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.code} 
                    className={`px-4 py-2 rounded-lg text-sm border ${
                      darkMode ? 'border-gray-600 hover:border-blue-500' : 'border-gray-300 hover:border-blue-500'
                    } font-medium transition-all duration-300 hover:scale-105`}
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <a 
            href="https://github.com/1mr1mar" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <i className="bx bxl-github text-2xl mr-2"></i>
            <span>View More Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;