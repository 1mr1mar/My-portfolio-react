import React from 'react';



const Contact = ({ darkMode }) => {
  return (
    <section 
      id="contact" 
      className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="mb-6">Feel free to reach out for collaborations or just a friendly hello!</p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-blue-500">📍</div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p>ksar el kebir , Morocco</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-blue-500">📧</div>
                <div>
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
                  <h4 className="font-bold">Phone</h4>
                  <p>+212 696517130</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold mb-3">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/1mr1mar" className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center transition-transform hover:scale-110"><i class='bx bxl-github'></i></a>
                <a href="https://www.linkedin.com/in/ganbour-marwan-352944352/" className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center transition-transform hover:scale-110"><i class='bx bxl-linkedin-square'></i></a>
                <a href="https://www.facebook.com/share/1BF4U1cV5y/" className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center transition-transform hover:scale-110"><i class='bx bxl-facebook-square'></i></a>
                <a href="https://www.reddit.com/" className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center transition-transform hover:scale-110"><i class='bx bxl-reddit' ></i></a>
              </div>
            </div>
          </div>
          
          <div>
            <form className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your Email"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Subject"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 rounded-lg bg-blue-500 text-white font-medium transition-transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;