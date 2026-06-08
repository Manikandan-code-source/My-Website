import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.about-text', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: "play reverse play reverse"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
    
    gsap.from('.about-highlight', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: "play reverse play reverse"
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.5)',
    });
    gsap.utils.toArray('.counter').forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      gsap.to(counter, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: "restart reverse restart reverse"
        },
        innerText: target,
        duration: 2.5,
        snap: { innerText: 1 },
        ease: 'power3.out',
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white"><span className="text-accent-blue">01.</span> About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="about-text text-gray-300 text-lg leading-relaxed space-y-6">
            <p>
              I am a results-driven Full Stack Developer with 3+ years of experience designing, developing, and deploying scalable web applications for US-based clients and enterprise platforms.
            </p>
            <p>
              Proficient in <span className="text-white font-medium">React.js, Node.js, Angular.js, MongoDB, PostgreSQL, and AWS</span> cloud infrastructure. I thrive in Agile environments, delivering end-to-end projects from system design to production deployment.
            </p>
            <p>
              My focus is on leading cross-functional teams, mentoring junior developers, building secure RESTful APIs, and crafting intuitive, high-performance user interfaces.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="about-highlight glass p-6 rounded-2xl flex flex-col justify-center items-center text-center">
              <div className="text-4xl font-bold text-accent-cyan mb-2 flex items-center justify-center">
                <span className="counter" data-target="3">0</span>+
              </div>
              <span className="text-sm text-gray-400">Years Experience</span>
            </div>
            <div className="about-highlight glass p-6 rounded-2xl flex flex-col justify-center items-center text-center">
              <div className="text-4xl font-bold text-accent-purple mb-2 flex items-center justify-center">
                <span className="counter" data-target="4">0</span>+
              </div>
              <span className="text-sm text-gray-400">Enterprise Apps</span>
            </div>
            <div className="about-highlight glass p-6 rounded-2xl flex flex-col justify-center items-center text-center col-span-2">
              <div className="text-3xl font-bold text-accent-blue mb-2 flex items-center justify-center">
                <span className="counter" data-target="100">0</span>%
              </div>
              <span className="text-sm text-gray-400">Commitment to scalable, secure code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;