import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Full Stack Developer Lead",
    company: "Dvilite",
    period: "Apr 2026 – Jun 2026",
    duration: "3 mos",
    location: "Bangalore, India",
    achievements: [
      "Led a cross-functional React.js and Node.js team of 4 developers, delivering Konnectly platform 2 weeks ahead of schedule.",
      "Mentored 3 junior developers through structured pair programming, reducing team bug rate by 35%.",
      "Owned end-to-end delivery of Konnectly CRM through AWS deployment, cutting manual business operations effort by 50%."
    ]
  },
  {
    role: "Junior Software Developer",
    company: "Angler Technologies Private Limited",
    period: "Jan 2025 – Feb 2026",
    duration: "1 yr 2 mos",
    location: "Coimbatore, India",
    achievements: [
      "Developed a full-featured IMS-QMS Audit module for KSB India Private Limited, reducing manual audit effort by 40%.",
      "Built an RBAC user management system with 5+ permission levels for full compliance.",
      "Deployed and maintained production infrastructure on AWS, achieving 99.9% uptime over 13 months."
    ]
  },
  {
    role: "Junior Software Developer",
    company: "Toverto Solutions Private Limited",
    period: "Jul 2023 – Sep 2024",
    duration: "1 yr 3 mos",
    location: "Coimbatore, India",
    achievements: [
      "Delivered full-stack features for 2 US-based clients (Cotton Foundation & Landry's Select Club) using React.js and Angular.js.",
      "Integrated 5+ third-party APIs for loyalty programs, reducing integration development time by 25%.",
      "Implemented OAuth 2.0 and data encryption, achieving zero security incidents post-launch."
    ]
  },
  {
    role: "Web Developer Intern",
    company: "DotWorld Technologies",
    period: "Mar 2023 – Jun 2023",
    duration: "4 mos",
    location: "Coimbatore, India",
    achievements: [
      "Built and maintained responsive web interfaces using HTML5, CSS3, and JavaScript.",
      "Resolved 20+ bugs through systematic debugging and cross-browser testing."
    ]
  }
];

const Experience = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Draw the timeline line downwards on scroll
    gsap.fromTo('.draw-line', 
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      }
    );

    const nodes = gsap.utils.toArray('.timeline-node');
    
    nodes.forEach((node) => {
      // Pop up the experience cards when the line reaches them
      gsap.from(node, {
        scrollTrigger: {
          trigger: node,
          start: 'top center', // Triggers exactly when the line reaches this node
          toggleActions: "play reverse play reverse"
        },
        scale: 0.8,
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.5)'
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="experience" className="py-24 relative" ref={sectionRef}>
      <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_50%)] -z-10 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white"><span className="text-accent-cyan">03.</span> Experience</h2>
        
        <div className="timeline-container max-w-4xl mx-auto space-y-12 relative py-4">
          
          {/* Faded Background Line */}
          <div className="absolute top-0 bottom-0 left-5 md:left-1/2 -translate-x-[1px] w-1 bg-white/5 z-0 rounded-full"></div>
          
          {/* Drawing Animated Line */}
          <div className="draw-line absolute top-0 bottom-0 left-5 md:left-1/2 -translate-x-[1px] w-1 bg-gradient-to-b from-accent-blue via-accent-cyan to-accent-purple origin-top z-0 rounded-full"></div>

          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-node relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active z-10">
              
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-dark-900 bg-accent-blue shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl hover:border-accent-blue/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="flex flex-col items-start sm:items-end gap-1 mt-2 sm:mt-0">
                    <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full whitespace-nowrap">{exp.period}</span>
                    <span className="text-xs text-gray-400 font-medium tracking-wide pr-1">{exp.duration}</span>
                  </div>
                </div>
                <div className="text-lg text-gray-300 font-medium mb-1">{exp.company}</div>
                <div className="text-sm text-gray-500 mb-4">{exp.location}</div>
                
                <ul className="space-y-2 text-sm text-gray-400">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex gap-2">
                      <span className="text-accent-blue mt-1">▹</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;