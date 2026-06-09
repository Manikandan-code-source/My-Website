import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap as gs } from 'gsap';

const Hero = () => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gs.timeline();
    
    // Animate the main dramatic text
    tl.from('.cinematic-text span', {
      y: 120,
      opacity: 0,
      duration: 1.5,
      stagger: 0.15,
      ease: 'power4.out',
      clipPath: 'inset(100% 0% 0% 0%)'
    })
    .from('.cinematic-badge', {
      y: 20,
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.5)'
    }, "-=1")
    .from('.hero-subtitle', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, "-=0.6")
    .from('.hero-btn', {
      scale: 0.9,
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, "-=0.8");

  }, { scope: container });

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-32 md:pt-20 relative overflow-x-clip bg-gray-50 dark:bg-dark-900 transition-colors duration-300" ref={container}>
      
      {/* Aurora Ambient Background (Dark Mode Only) */}
      <div className="absolute inset-0 z-0 hidden dark:flex items-center justify-center pointer-events-none opacity-70">
        <div className="absolute w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-accent-blue/40 mix-blend-screen blur-[80px] md:blur-[120px] animate-aurora-1"></div>
        <div className="absolute w-[70vw] h-[70vw] md:w-[35vw] md:h-[35vw] rounded-full bg-accent-purple/40 mix-blend-screen blur-[80px] md:blur-[120px] animate-aurora-2 translate-x-1/4"></div>
        <div className="absolute w-[65vw] h-[65vw] md:w-[30vw] md:h-[30vw] rounded-full bg-accent-cyan/40 mix-blend-screen blur-[80px] md:blur-[120px] animate-aurora-3 -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Massive Typography */}
        <h1 className="cinematic-text flex flex-col text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] font-black tracking-tighter leading-[0.9] mb-6 uppercase drop-shadow-sm dark:drop-shadow-2xl">
          <span style={{ clipPath: 'inset(0 0 0 0)' }} className="text-gray-900 dark:text-white">Manikandan</span>
          <span style={{ clipPath: 'inset(0 0 0 0)' }} className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan">Durairaj</span>
        </h1>
        
        {/* Experience Badge */}
        <div className="cinematic-badge mb-10 px-6 py-2.5 rounded-full border border-gray-200 dark:border-accent-blue/30 bg-white/50 dark:bg-accent-blue/10 text-accent-blue dark:text-accent-cyan font-semibold tracking-wide flex items-center gap-3 backdrop-blur-md shadow-md dark:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue dark:bg-accent-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-blue dark:bg-accent-cyan"></span>
          </span>
          3+ Years Experienced
        </div>
        
        <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light mb-12 max-w-2xl mx-auto px-4 md:px-0">
          Full Stack Developer crafting scalable, high-performance web applications with React & Node.js.
        </p>
        
        <div className="hero-btn">
          <a href="#projects" className="px-10 py-5 bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 border border-black/10 dark:border-white/20 backdrop-blur-md rounded-full transition-all text-gray-900 dark:text-white font-medium tracking-wide inline-flex items-center gap-3 shadow-lg dark:shadow-[0_0_30px_rgba(255,255,255,0.05)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            View My Work
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;