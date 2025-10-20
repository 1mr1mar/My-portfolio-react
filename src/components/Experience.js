import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import { useLanguage } from "../contexts/LanguageContext";
import cosumar from "../pic/cosumar.png";
import willowcy from "../pic/willowcy.png";
import opm from "../pic/opm.jpeg";

const Experience = ({ darkMode }) => {
  const { t, isRTL } = useLanguage();
  const [selectedCard, setSelectedCard] = useState(null);

  const experiences = [
    {
      id: 1,
      year: "2024",
      company: t('experience.cosumar.company'),
      position: t('experience.cosumar.position'),
      duration: t('experience.cosumar.duration'),
      description: t('experience.cosumar.description'),
      image: cosumar,
      details: {
        responsibilities: t('experience.cosumar.responsibilities.items'),
        technologies: ["Windows Server", "Active Directory", "Linux", "Network Troubleshooting", "Hardware Repair", "Microsoft Office", "ITIL"],
        achievements: t('experience.cosumar.achievements.items')
      },
      location: t('experience.cosumar.location'),
      type: t('experience.cosumar.type')
    },
    {
      id: 2,
      year: "2025",
      company: t('experience.willowcy.company'),
      position: t('experience.willowcy.position'),
      duration: t('experience.willowcy.duration'),
      description: t('experience.willowcy.description'),
      image: willowcy,
      details: {
        responsibilities: t('experience.willowcy.responsibilities.items'),
        technologies: ["React.js", "Next.js", "Node.js", "Express.js", "PostgreSQL", "TypeScript", "Docker", "AWS"],
        achievements: t('experience.willowcy.achievements.items')
      },
      location: t('experience.willowcy.location'),
      type: t('experience.willowcy.type')
    },
    {
      id: 3,
      year: "2025",
      company: t('experience.opm.company'),
      position: t('experience.opm.position'),
      duration: t('experience.opm.duration'),
      description: t('experience.opm.description'),
      image: opm,
      details: {
        responsibilities: t('experience.opm.responsibilities.items'),
        technologies: ["Postfix", "Dovecot", "SpamAssassin", "ClamAV", "MySQL", "Linux", "Apache", "SSL/TLS", "DKIM", "SPF", "DMARC"],
        achievements: t('experience.opm.achievements.items')
      },
      location: t('experience.opm.location'),
      type: t('experience.opm.type')
    }
  ];

  return (
    <section
      id="experience"
      className={`py-24 px-4 relative overflow-hidden ${
        darkMode 
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50"
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
      </div>

      <div className="w-full max-w-screen-7xl mx-auto relative z-10 px-4 lg:px-8 xl:px-12">
        <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
          <h2 
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500`}
          >
            {t('experience.title')}
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Main Container with Centered Timeline */}
        <div className="relative">
          {/* Timeline Line - Center of Screen */}
          <div className={`absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 ${
            darkMode ? "bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500" : "bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"
          }`}></div>

          {/* Experience Cards */}
          <div className="space-y-8 lg:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 200}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 w-6 h-6 rounded-full z-10 transform -translate-x-1/2 transition-all duration-300 ${
                  selectedCard === exp.id 
                    ? "bg-gradient-to-r from-purple-500 to-purple-600 border-4 border-white scale-125 shadow-lg shadow-purple-500/50" 
                    : darkMode 
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 border-4 border-gray-800 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50" 
                      : "bg-gradient-to-r from-blue-500 to-blue-600 border-4 border-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                }`}>
                  <div className={`absolute inset-0 rounded-full ${
                    selectedCard === exp.id 
                      ? "bg-gradient-to-r from-purple-400 to-purple-500 opacity-50 animate-pulse" 
                      : "bg-gradient-to-r from-blue-400 to-blue-500 opacity-30"
                  }`}></div>
                </div>

                {/* Experience Card */}
                <div className={`w-full lg:w-5/12 xl:w-2/5 relative group transition-all duration-300 ${
                  selectedCard === exp.id ? "lg:scale-105" : "lg:hover:scale-105"
                } ${index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"} mb-4 lg:mb-0`}>
                  <div 
                    className={`relative overflow-hidden rounded-3xl backdrop-blur-sm cursor-pointer transition-all duration-500 group/card ${
                      selectedCard === exp.id
                        ? darkMode 
                          ? "bg-gray-700/80 border-2 border-purple-500 shadow-2xl shadow-purple-500/40 scale-105" 
                          : "bg-white/80 border-2 border-purple-500 shadow-2xl shadow-purple-500/40 scale-105"
                        : darkMode 
                          ? "bg-gray-800/60 border border-gray-700/60 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 hover:border-blue-500/50" 
                          : "bg-white/60 border border-gray-200/60 hover:bg-white/80 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 hover:border-blue-500/50"
                    }`}
                    onClick={() => setSelectedCard(selectedCard === exp.id ? null : exp.id)}
                  >
                    {/* Company Image */}
                    <div className="relative h-32 sm:h-40 overflow-hidden">
                      <img 
                        src={exp.image} 
                        alt={exp.company}
                        className="w-full h-full object-contain bg-white p-3 sm:p-4 transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Year Badge */}
                      <div className={`absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                        darkMode ? "bg-blue-500/90 text-white" : "bg-white/90 text-blue-600"
                      }`}>
                        {exp.year}
                      </div>

                      {/* Selection Indicator */}
                      {selectedCard === exp.id && (
                        <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                          <i className="bx bx-check-circle text-purple-500 text-lg sm:text-xl bg-white rounded-full"></i>
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-4 sm:p-6">
                      <h3 className={`text-lg sm:text-xl font-bold mb-2 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}>
                        {exp.company}
                      </h3>

                      <h4 className={`text-base sm:text-lg font-semibold mb-2 ${
                        darkMode ? "text-blue-400" : "text-blue-600"
                      }`}>
                        {exp.position}
                      </h4>

                      <p className={`text-sm mb-3 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}>
                        {exp.duration}
                      </p>

                      <p className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}>
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Detailed Info Panel - Shows on the opposite side on desktop, below on mobile */}
                {selectedCard === exp.id && (
                  <div 
                    className={`w-full lg:w-5/12 xl:w-2/5 ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"} mt-4 lg:mt-0`}
                    data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  >
                    <div className={`p-4 sm:p-6 rounded-3xl backdrop-blur-sm transition-all duration-500 shadow-xl ${
                      darkMode 
                        ? "bg-gray-800/70 border border-gray-600/50 shadow-gray-900/50" 
                        : "bg-white/70 border border-gray-300/50 shadow-gray-200/50"
                    }`}>
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-3 mb-3">
                          <img 
                            src={exp.image} 
                            alt={exp.company}
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain bg-white rounded-lg p-1 sm:p-2"
                          />
                          <div>
                            <h3 className={`text-base sm:text-lg font-bold ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}>
                              {exp.company}
                            </h3>
                            <h4 className={`text-sm sm:text-base font-semibold ${
                              darkMode ? "text-blue-400" : "text-blue-600"
                            }`}>
                              {exp.position}
                            </h4>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs">
                          <div className={`flex items-center ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }`}>
                            <i className="bx bx-calendar mr-1"></i>
                            {exp.duration}
                          </div>
                          <div className={`flex items-center ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }`}>
                            <i className="bx bx-map mr-1"></i>
                            {exp.location}
                          </div>
                          <div className={`flex items-center ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }`}>
                            <i className="bx bx-briefcase mr-1"></i>
                            {exp.type}
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-4">
                        <h5 className={`font-semibold mb-2 text-sm ${
                          darkMode ? "text-blue-400" : "text-blue-600"
                        }`}>
                          {t(`experience.${exp.company.toLowerCase()}.responsibilities.title`)}
                        </h5>
                        <ul className={`space-y-1 text-xs ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}>
                          {exp.details.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <i className="bx bx-check-circle text-green-500 mr-2 mt-0.5 flex-shrink-0 text-xs"></i>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h5 className={`font-semibold mb-2 text-sm ${
                          darkMode ? "text-blue-400" : "text-blue-600"
                        }`}>
                          {t('experience.technologies')}
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {exp.details.technologies.map((tech, idx) => (
                            <span key={idx} className={`px-2 py-1 rounded-full text-xs ${
                              darkMode ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-600"
                            }`}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h5 className={`font-semibold mb-2 text-sm ${
                          darkMode ? "text-blue-400" : "text-blue-600"
                        }`}>
                          {t(`experience.${exp.company.toLowerCase()}.achievements.title`)}
                        </h5>
                        <ul className={`space-y-1 text-xs ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}>
                          {exp.details.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <i className="bx bx-trophy text-yellow-500 mr-2 mt-0.5 flex-shrink-0 text-xs"></i>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
