import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Contact = ({ darkMode }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className={`py-16 px-4 ${
        darkMode ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <div className="w-full max-w-screen-xl mx-auto">
        <h2 
          className={`text-3xl font-bold mb-12 text-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
          data-aos="fade-up"
        >
          {t('contact.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              {t('contact.contactInfo')}
            </h3>
            <p 
              className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t('contact.subtitle')}
            </p>

            <div 
              className="space-y-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-blue-500">📍</div>
                <div>
                  <h4 className={`font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {t('contact.location')}
                  </h4>
                  <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                    Ksar El Kebir, Morocco
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-blue-500">📧</div>
                <div>
                  <h4 className={`font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {t('contact.email')}
                  </h4>
                  <a 
                    href="mailto:ganbourmarwan9@gmail.com"
                    className="text-blue-500 hover:underline"
                  >
                    ganbourmarwan9@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-blue-500">📱</div>
                <div>
                  <h4 className={`font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {t('contact.phone')}
                  </h4>
                  <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                    +212 696517130
                  </p>
                </div>
              </div>
            </div>

            <div 
              className="mt-8"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h4 className={`font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                {t('contact.followMe')}
              </h4>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/1mr1mar" 
                  className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center transition-transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className='bx bxl-github'></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/ganbour-marwan-352944352/" 
                  className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center transition-transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className='bx bxl-linkedin-square'></i>
                </a>
                <a 
                  href="https://www.facebook.com/share/1BF4U1cV5y/" 
                  className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center transition-transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className='bx bxl-facebook-square'></i>
                </a>
                <a 
                  href="https://www.reddit.com/" 
                  className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center transition-transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className='bx bxl-reddit'></i>
                </a>
              </div>
            </div>
          </div>

          <div 
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <form onSubmit={handleSubmit} className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className={`block mb-2 font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block mb-2 font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className={`block mb-2 font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {t('contact.subject')}
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                  placeholder={t('contact.subjectPlaceholder')}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className={`block mb-2 font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4" 
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                  placeholder={t('contact.messagePlaceholder')}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 relative overflow-hidden disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('contact.sending')}
                  </span>
                ) : (
                  <span className="relative z-10">{t('contact.sendMessage')}</span>
                )}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>

              {submitSuccess && (
                <div 
                  className="mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500"
                  data-aos="fade-up"
                >
                  {t('contact.successMessage')}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;