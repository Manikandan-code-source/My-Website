import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Konnectly",
    subtitle: "AI-Powered CRM & Business Communication Platform",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS"],
    features: [
      "Built a full-featured CRM for customer management and bulk messaging.",
      "Integrated AI employee system for customer service, reducing manual effort by 50%.",
      "Implemented audience segmentation for targeted outreach."
    ]
  },
  {
    title: "KSB India",
    subtitle: "IMS-QMS Audit Management Module",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS"],
    features: [
      "Delivered an enterprise audit platform with configurable checklists.",
      "Reduced audit reporting time by 40% with a fully digital system.",
      "Built zero-code customisation for admin users and 5+ level RBAC."
    ]
  },
  {
    title: "Landry's Select Club",
    subtitle: "Loyalty Platform (USA)",
    tech: ["Angular.js", "AWS", "OAuth 2.0"],
    features: [
      "Spearheaded integration of 5+ third-party APIs for loyalty points.",
      "Designed intuitive UI/UX flows streamlining member navigation.",
      "Achieved zero security incidents post-launch with robust data encryption."
    ]
  },
  {
    title: "Cotton Foundation",
    subtitle: "Web Platform (USA)",
    tech: ["React.js", "Angular.js", "PostgreSQL", "Firebase"],
    features: [
      "Built features for a large-scale agricultural web platform.",
      "Delivered performance optimisations reducing page load time by 25%.",
      "Integrated Firebase for real-time data sync and notifications."
    ]
  }
];

const Projects = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-card');
    
    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        y: 100,
        opacity: 0,
        rotationX: -15,
        transformPerspective: 1000,
        duration: 0.8,
        ease: 'power3.out'
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="projects" className="py-24 bg-dark-800/50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white"><span className="text-accent-blue">04.</span> Key Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card glass p-8 rounded-3xl group hover:bg-white/10 transition-all duration-500">
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-medium mb-6 border-b border-white/10 pb-4">{project.subtitle}</p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-accent-blue shrink-0 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono text-accent-purple bg-accent-purple/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;