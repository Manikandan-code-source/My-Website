import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.bento-item', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: "play reverse play reverse"
      },
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: sectionRef });

  return (
    <section id="skills" className="py-32 bg-gray-100 dark:bg-dark-800 transition-colors duration-300" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 dark:text-white mb-16">
          <span className="text-accent-purple block text-2xl font-normal tracking-widest uppercase mb-4">Toolkit</span>
          Technical Arsenal
        </h2>
        
        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Box 1: Large Core Frontend */}
          <div className="bento-item md:col-span-2 md:row-span-1 bg-gradient-to-br from-white/60 to-white/0 dark:from-white/5 dark:to-white/0 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 z-10">Frontend Excellence</h3>
            <div className="flex flex-wrap gap-3 z-10">
              {['React.js', 'Next.js', 'Angular.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'GSAP'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-white/50 dark:bg-dark-900/50 backdrop-blur-md rounded-full text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5">{skill}</span>
              ))}
            </div>
          </div>

          {/* Box 2: Databases */}
          <div className="bento-item md:col-span-1 md:row-span-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.2),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="text-accent-cyan text-4xl mb-auto">⛁</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 z-10">Databases</h3>
            <p className="text-gray-600 dark:text-gray-400 z-10">MongoDB, PostgreSQL, SQL</p>
          </div>

          {/* Box 3: Cloud & DevOps */}
          <div className="bento-item md:col-span-1 md:row-span-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="text-accent-purple text-4xl mb-auto">☁</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 z-10">Cloud & DevOps</h3>
            <p className="text-gray-600 dark:text-gray-400 z-10">AWS, Docker, Jenkins, Kubernetes</p>
          </div>

          {/* Box 4: Backend & Security */}
          <div className="bento-item md:col-span-2 md:row-span-1 bg-white dark:bg-dark-900 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 z-10">Backend & Security</h3>
            <div className="flex flex-wrap gap-3 z-10">
              {['Node.js', 'Express.js', 'GraphQL', 'REST APIs', 'JWT', 'OAuth 2.0', 'RBAC'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-full text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10">{skill}</span>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
