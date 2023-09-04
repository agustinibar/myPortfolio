import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importa los íconos de react-icons/fa

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Ibar Agustin. All rights reserved.
        </p>
        <p className="text-sm">
          Contact: agustinibarperrotta@gmail.com
        </p>
        <div className="flex justify-center mt-4">
        
          <a href="https://www.linkedin.com/in/agustin-ibar-59b123215/" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-300 hover:text-white">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/agustinibar" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-300 hover:text-white">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
