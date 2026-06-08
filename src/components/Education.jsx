import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaGraduationCap, FaCertificate, FaEnvelope, FaPhone } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.edu-item', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out'
    });
  }, { scope: sectionRef });

  return (
    <section id="education" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white"><span className="text-accent-purple">05.</span> Education & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="edu-item glass p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue text-2xl">
                <FaGraduationCap />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="border-l-2 border-white/10 pl-6 relative">
              <div className="absolute w-3 h-3 bg-accent-blue rounded-full -left-[7px] top-2"></div>
              <h4 className="text-xl font-semibold text-white">B.E – Computer Science and Engineering</h4>
              <p className="text-gray-400 mt-1 mb-2">Karpagam College of Engineering, Coimbatore, India</p>
              <p className="text-accent-cyan font-mono text-sm mb-4">2017 – 2021</p>
              <p className="text-sm text-gray-300"><span className="font-semibold text-white">CGPA:</span> 7.1</p>
            </div>
          </div>
          
          <div className="edu-item glass p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent-purple/20 flex items-center justify-center text-accent-purple text-2xl">
                <FaCertificate />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-2 border-white/10 pl-6 relative">
                <div className="absolute w-3 h-3 bg-accent-purple rounded-full -left-[7px] top-2"></div>
                <h4 className="text-lg font-semibold text-white">The Full Stack Web Development Bootcamp</h4>
                <p className="text-gray-400 mt-1">Udemy | Jan – Jul 2024</p>
              </div>
              
              <div className="border-l-2 border-white/10 pl-6 relative">
                <div className="absolute w-3 h-3 bg-accent-purple rounded-full -left-[7px] top-2"></div>
                <h4 className="text-lg font-semibold text-white">Java Programming for Complete Beginners</h4>
                <p className="text-gray-400 mt-1">Udemy | Mar – Jul 2023</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="edu-item text-center max-w-2xl mx-auto border-t border-white/10 pt-16">
          <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-8">
            I'm currently seeking a Full Stack Developer role in a product-based or service-based company. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="mailto:haridurai1234@gmail.com" className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all">
              <FaEnvelope className="text-accent-cyan" />
              haridurai1234@gmail.com
            </a>
            <a href="tel:+916374453187" className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all">
              <FaPhone className="text-accent-blue" />
              (+91) 6374453187
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
