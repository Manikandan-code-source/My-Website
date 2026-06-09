"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPictureOpen, setIsPictureOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 glass dark:border-b dark:border-white/10 bg-white/70 dark:bg-dark-900/50 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
          <a href="#" className="flex items-center gap-3 group relative z-10">
            {/* Avatar Icon */}
            <button 
              onClick={(e) => { e.preventDefault(); setIsPictureOpen(true); }}
              className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden border border-black/10 dark:border-white/10"
            >
              <Image 
                src="/my pic.jpg" 
                alt="Manikandan Durairaj"
                width={40}
                height={40}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </button>
            
            {/* Full Name Typography */}
            <div className="flex flex-col justify-center">
              <span className="text-[17px] font-bold font-sans tracking-tight text-gray-900 dark:text-white leading-none group-hover:text-accent-cyan transition-colors duration-300">
                Manikandan
              </span>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-gray-500 dark:text-gray-400 mt-[3px] leading-none uppercase">
                Durairaj
              </span>
            </div>
          </a>
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8 items-center text-sm font-medium tracking-wide">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-accent-blue transition-colors">About</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-accent-blue transition-colors">Skills</a>
            <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-accent-blue transition-colors">Experience</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-accent-blue transition-colors">Projects</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-accent-blue transition-colors">Contact</a>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6 ml-auto">
            <div className="flex items-center space-x-3 md:space-x-4">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-accent-blue dark:hover:text-accent-blue transition-colors text-lg"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>
              )}
              <a href="https://www.linkedin.com/in/manikandan-durairaj-281b1b180/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-accent-blue transition-colors text-xl">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Manikandan-code-source" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-accent-purple transition-colors text-xl">
                <FaGithub />
              </a>
            </div>
            <button 
              onClick={() => setIsResumeOpen(true)}
              className="px-5 py-2 hidden sm:block bg-accent-blue/10 text-accent-cyan hover:bg-accent-blue hover:text-white border border-accent-blue/50 hover:border-accent-blue rounded-full text-sm font-semibold tracking-wide transition-all duration-300"
            >
              Resume
            </button>
            <button 
              className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-accent-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-dark-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-xl py-6 flex flex-col items-center gap-6 animate-in slide-in-from-top-2 duration-300">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-accent-blue transition-colors">About</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-accent-blue transition-colors">Skills</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-accent-blue transition-colors">Experience</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-accent-blue transition-colors">Projects</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-accent-blue transition-colors">Contact</a>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); setIsResumeOpen(true); }}
              className="mt-2 px-8 py-3 sm:hidden bg-accent-blue/10 text-accent-cyan border border-accent-blue/50 rounded-full font-semibold tracking-wide"
            >
              View Resume
            </button>
          </div>
        )}
      </nav>

      {/* Resume Modal Overlay */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 dark:bg-black/80 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-[#121212] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0a0a0a]">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-accent-blue animate-pulse"></span>
                <h3 className="text-gray-900 dark:text-white font-bold tracking-wide">Manikandan_Resume.pdf</h3>
              </div>
              <div className="flex items-center gap-4">
                <a href="/Manikandan_Resume.pdf" download className="text-sm text-accent-cyan hover:text-accent-blue transition-colors">
                  Download
                </a>
                <button 
                  onClick={() => setIsResumeOpen(false)} 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-red-500/10 dark:hover:bg-red-500/20 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
            
            {/* Modal Body (PDF Viewer) */}
            <div className="flex-1 w-full bg-gray-100 dark:bg-black">
              <iframe 
                src="/Manikandan_Resume.pdf#toolbar=0" 
                className="w-full h-full border-none" 
                title="Resume PDF Viewer"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Picture Viewer Modal Overlay */}
      {isPictureOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300 cursor-pointer"
          onClick={() => setIsPictureOpen(false)}
        >
          <button 
            onClick={() => setIsPictureOpen(false)} 
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <FaTimes size={24} />
          </button>
          
          <div 
            className="relative w-[90vw] max-w-[500px] aspect-square rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src="/my pic.jpg" 
              alt="Manikandan Durairaj Full Picture"
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
