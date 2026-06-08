import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaGraduationCap, FaEnvelope } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.footer-massive-text', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: "play reverse play reverse"
      },
      y: '100%',
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out'
    });
  }, { scope: sectionRef });

  return (
    <section id="education" className="pt-32 pb-12 bg-accent-blue text-dark-900 rounded-t-[3rem] md:rounded-t-[5rem] relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-50 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 border-b border-dark-900/10 pb-20">
          <div>
            <h3 className="text-3xl font-black mb-8 flex items-center gap-4">
              <FaGraduationCap className="text-4xl" /> Education
            </h3>
            <div className="space-y-6 text-dark-900/80 font-medium text-lg">
              <div>
                <p className="font-bold text-dark-900 text-xl">B.E – Computer Science and Engineering</p>
                <p>Karpagam College of Engineering</p>
                <p>2017 – 2021 | CGPA: 7.1</p>
              </div>
              <div>
                <p className="font-bold text-dark-900 text-xl">Full Stack Web Development Bootcamp</p>
                <p>Udemy | 2024</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end justify-center">
            <p className="text-xl font-medium text-dark-900/80 mb-6 max-w-sm md:text-right">
              Currently seeking a Full Stack Developer role. Let's build something extraordinary together.
            </p>
            <a href="mailto:haridurai1234@gmail.com" className="group flex items-center gap-4 px-8 py-4 bg-dark-900 text-white rounded-full text-lg font-bold hover:bg-dark-800 transition-colors">
              <FaEnvelope /> haridurai1234@gmail.com
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>
        </div>
        
        {/* Massive Typography Footer */}
        <div className="mt-20 overflow-hidden relative flex items-center justify-center w-full">
          <h2 className="footer-massive-text text-[11vw] sm:text-[10vw] font-black tracking-tighter leading-none text-dark-900 whitespace-nowrap opacity-90 text-center w-full">
            LET'S CONNECT
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Education;
