import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap as gs } from 'gsap';

const Hero = () => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gs.timeline();
    tl.from('.hero-avatar', {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.5)',
    })
    .from('.hero-text', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
    }, "-=0.5")
    .from('.hero-subtitle', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, "-=0.5")
    .from('.hero-btn', {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: 'back.out(1.7)'
    }, "-=0.3");

    // Add subtle floating animation to the avatar
    gs.to('.hero-avatar-img', {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }, { scope: container });

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-32 md:pt-20 relative" ref={container}>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="hero-avatar mb-8 flex justify-center">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan hero-avatar-img">
            <Image 
              src="/my pic.jpg" 
              alt="Manikandan Durairaj"
              width={192}
              height={192}
              className="w-full h-full object-cover rounded-full border-4 border-white dark:border-dark-900"
            />
            <div className="absolute inset-0 rounded-full bg-accent-blue/20 blur-xl -z-10 animate-pulse"></div>
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-4 overflow-hidden">
          <div className="hero-text inline-block">MANIKANDAN</div><br />
          <div className="hero-text inline-block text-gradient">DURAIRAJ</div>
        </h1>
        <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light mb-10 max-w-2xl mx-auto px-4 md:px-0">
          Full Stack Developer crafting scalable, high-performance web applications with React & Node.js.
        </p>
        <div className="hero-btn">
          <a href="#projects" className="px-8 py-4 bg-gray-900/5 hover:bg-gray-900/10 dark:bg-white/10 dark:hover:bg-white/20 border border-gray-900/10 dark:border-white/20 rounded-full transition-all text-gray-900 dark:text-white font-medium tracking-wide inline-flex items-center gap-2">
            View My Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;