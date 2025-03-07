import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 px-4 text-center ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} made by Marwan ganbour. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;