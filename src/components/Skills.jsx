import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Angular.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML5/CSS3"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, CloudFront)", "Docker", "Kubernetes", "Jenkins"]
  },
  {
    title: "Databases & Security",
    skills: ["MongoDB", "PostgreSQL", "SQL", "JWT/OAuth 2.0", "RBAC"]
  }
];

const Skills = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.skill-card');
    
    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power2.out'
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="skills" className="py-24 bg-dark-800/50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white"><span className="text-accent-purple">02.</span> Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-card glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
