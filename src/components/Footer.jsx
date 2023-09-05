import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center sm:flex place-content-around">
        <div>
        <h3>Contact</h3>
        <br />
        <hr/>
        <br />
        <p className="text-sm">
          Email: agustinibarperrotta@gmail.com
        </p>
        <br />
        <p className="text-sm">
          Phone: +54 3487-522074
        </p>
        <br />
        <p className="text-sm">
          Location: Zarate, Buenos Aires - Argentina
        </p>
        </div>
        <div className="flex justify-center mt-4 items-center">
        
          <a href="https://www.linkedin.com/in/agustin-ibar-59b123215/" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-300 hover:text-white">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/agustinibar" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-300 hover:text-white">
            <FaGithub size={30} />
          </a>
        </div>
        <div className='flex items-center'>
        <p className="text-sm">
          © {new Date().getFullYear()} Ibar Agustin. All rights reserved.
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
