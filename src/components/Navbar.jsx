import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold font-sans tracking-tighter text-white">
          MD<span className="text-accent-cyan">.</span>
        </a>
        <div className="hidden md:flex space-x-8 items-center text-sm font-medium tracking-wide">
          <a href="#about" className="hover:text-accent-blue transition-colors">About</a>
          <a href="#skills" className="hover:text-accent-blue transition-colors">Skills</a>
          <a href="#experience" className="hover:text-accent-blue transition-colors">Experience</a>
          <a href="#projects" className="hover:text-accent-blue transition-colors">Projects</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/manikandandurairaj/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors text-xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Manikandan-code-source" target="_blank" rel="noopener noreferrer" className="hover:text-accent-purple transition-colors text-xl">
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
