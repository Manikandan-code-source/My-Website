import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Background = () => {
  const orbsRef = useRef(null);

  useEffect(() => {
    const orbs = orbsRef.current.children;
    
    // Animate each orb with different randomized trajectories
    Array.from(orbs).forEach((orb, i) => {
      gsap.to(orb, {
        x: "random(-20vw, 20vw)",
        y: "random(-20vh, 20vh)",
        duration: "random(10, 20)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: "random(0, -10)"
      });
      
      // Separate animation for scaling to make it feel more organic
      gsap.to(orb, {
        scale: "random(0.8, 1.2)",
        duration: "random(8, 15)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });
  }, []);

  return (
    <>
      {/* 1. Base Dark Grid */}
      <div 
        className="fixed inset-0 z-[-2] pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff05 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff05 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      ></div>

      {/* 2. Dynamic Glowing Orbs */}
      <div ref={orbsRef} className="fixed inset-0 z-[-3] pointer-events-none overflow-hidden">
        {/* Blue Orb */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-accent-blue/20 rounded-full blur-[100px] mix-blend-screen"></div>
        
        {/* Purple Orb */}
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-accent-purple/20 rounded-full blur-[100px] mix-blend-screen"></div>
        
        {/* Cyan Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-accent-cyan/20 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      {/* 3. Cinematic Film Grain Overlay */}
      {/* This sits completely on top of everything but ignores pointer events */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.04] mix-blend-difference">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </>
  );
};

export default Background;
