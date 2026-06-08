import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Konnectly CRM",
    subtitle: "AI-Powered CRM & Business Communication Platform",
    tech: ["React.js", "Node.js", "MongoDB", "AWS"],
    features: [
      "Built a full-featured CRM for customer management and bulk WhatsApp/email messaging.",
      "Integrated AI employee system for customer service, reducing manual effort by 50%.",
      "Implemented advanced audience segmentation for precise, targeted outreach campaigns.",
      "Designed automated workflows for follow-ups and invoice generation.",
      "Scaled the cloud infrastructure to successfully support 100+ business users at launch."
    ],
    color: "from-blue-600/20 to-transparent"
  },
  {
    title: "KSB India Audit",
    subtitle: "Enterprise Quality Management System",
    tech: ["React.js", "Express.js", "MongoDB", "AWS"],
    features: [
      "Delivered an enterprise audit platform with highly configurable dynamic checklists.",
      "Reduced audit reporting time by 40% by digitizing paper-based processes.",
      "Designed master configuration modules enabling zero-code customisation for admins.",
      "Built a secure Role-Based Access Control (RBAC) system with 5+ permission levels.",
      "Ensured complete regulatory compliance and real-time traceability across all modules."
    ],
    color: "from-cyan-600/20 to-transparent"
  },
  {
    title: "Landry's Club",
    subtitle: "Loyalty Platform (USA)",
    tech: ["Angular.js", "AWS", "OAuth 2.0"],
    features: [
      "Spearheaded the integration of 5+ third-party APIs for loyalty points and reward redemptions.",
      "Achieved zero security incidents post-launch with robust data encryption protocols.",
      "Designed intuitive UI/UX flows, significantly streamlining member navigation.",
      "Reduced average task completion time across key loyalty journeys.",
      "Collaborated extensively with QA teams to ensure a highly stable and performant production release."
    ],
    color: "from-purple-600/20 to-transparent"
  }
];

const Projects = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-row');
    
    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: "play reverse play reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="projects" className="py-32 bg-dark-900" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-24">
          <span className="text-accent-cyan block text-2xl font-normal tracking-widest uppercase mb-4">Selected Work</span>
          Featured Projects
        </h2>
        
        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => (
            <div key={idx} className="project-row group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-white/10 pt-12 hover:border-white/30 transition-colors duration-500">
              
              <div className="lg:col-span-5 relative z-10">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4 group-hover:-translate-y-2 transition-transform duration-500">{project.title}</h3>
                <p className="text-xl text-gray-400 mb-6">{project.subtitle}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 h-64 lg:h-96 rounded-3xl overflow-hidden relative border border-white/10 bg-dark-800 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10 px-10">
                  <ul className="space-y-4">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-lg md:text-xl text-white/80 font-medium leading-relaxed">
                        &mdash; {feature}
                      </li>
                    ))}
                  </ul>
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