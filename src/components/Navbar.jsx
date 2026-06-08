import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 glass">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
          <a href="#" className="flex items-center gap-3 group relative z-10">
            {/* Monogram Icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue via-accent-cyan to-accent-purple flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] group-hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="font-black text-white tracking-tighter text-lg z-10">MD</span>
            </div>
            
            {/* Full Name Typography */}
            <div className="flex flex-col justify-center">
              <span className="text-[17px] font-bold font-sans tracking-tight text-white leading-none group-hover:text-accent-cyan transition-colors duration-300">
                Manikandan
              </span>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-gray-400 mt-[3px] leading-none uppercase">
                Durairaj
              </span>
            </div>
          </a>
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8 items-center text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-accent-blue transition-colors">About</a>
            <a href="#skills" className="hover:text-accent-blue transition-colors">Skills</a>
            <a href="#experience" className="hover:text-accent-blue transition-colors">Experience</a>
            <a href="#projects" className="hover:text-accent-blue transition-colors">Projects</a>
            <a href="#contact" className="hover:text-accent-blue transition-colors">Contact</a>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6 ml-auto">
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/manikandan-durairaj-281b1b180/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors text-xl">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Manikandan-code-source" target="_blank" rel="noopener noreferrer" className="hover:text-accent-purple transition-colors text-xl">
                <FaGithub />
              </a>
            </div>
            <button 
              onClick={() => setIsResumeOpen(true)}
              className="px-5 py-2 hidden sm:block bg-accent-blue/10 text-accent-cyan hover:bg-accent-blue hover:text-white border border-accent-blue/50 hover:border-accent-blue rounded-full text-sm font-semibold tracking-wide transition-all duration-300"
            >
              Resume
            </button>
          </div>
        </div>
      </nav>

      {/* Resume Modal Overlay */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl h-[90vh] bg-[#121212] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-[#0a0a0a]">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-accent-blue animate-pulse"></span>
                <h3 className="text-white font-bold tracking-wide">Manikandan_Resume.pdf</h3>
              </div>
              <div className="flex items-center gap-4">
                <a href="/Manikandan_Resume.pdf" download className="text-sm text-accent-cyan hover:text-white transition-colors">
                  Download
                </a>
                <button 
                  onClick={() => setIsResumeOpen(false)} 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
            
            {/* Modal Body (PDF Viewer) */}
            <div className="flex-1 w-full bg-black">
              <iframe 
                src="/Manikandan_Resume.pdf#toolbar=0" 
                className="w-full h-full border-none" 
                title="Resume PDF Viewer"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
