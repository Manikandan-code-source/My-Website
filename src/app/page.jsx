"use client";

import React, { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
import Cursor from "../components/Cursor"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Contact from "../components/ContactSection"
import Education from "../components/Education"
import Background from "../components/Background"

function Page() {
  
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      syncTouch: true,
      touchMultiplier: 2,
      infinite: false,
    });

    // Synchronize Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP's ticker to drive Lenis's requestAnimationFrame
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP's lag smoothing to prevent conflicts with Lenis
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-dark-900 dark:text-gray-200 transition-colors duration-300">
      <Background />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Education />
      </main>
    </div>
  )
}

export default Page
