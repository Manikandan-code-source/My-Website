import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Frontend Engineering",
    desc: "Crafting pixel-perfect, responsive, and accessible user interfaces using React, Next.js, and modern CSS frameworks like Tailwind. I focus on creating buttery smooth experiences with tools like GSAP and Lenis."
  },
  {
    id: "02",
    title: "Backend Architecture",
    desc: "Designing and developing robust, scalable RESTful APIs and GraphQL endpoints using Node.js and Express. Ensuring secure data flow, JWT authentication, and seamless database integration with MongoDB and PostgreSQL."
  },
  {
    id: "03",
    title: "Cloud & DevOps",
    desc: "Deploying and managing infrastructure on AWS (EC2, S3, CloudFront). Setting up CI/CD pipelines, Dockerizing applications, and orchestrating with Kubernetes for high availability and zero-downtime deployments."
  }
];

const Services = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.service-card');
    
    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: "play reverse play reverse"
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power3.out'
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="services" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            <span className="text-accent-blue block text-2xl font-normal tracking-widest uppercase mb-4">What I Do</span>
            My Expertise
          </h2>
          <p className="max-w-md text-gray-400 text-lg">
            Delivering end-to-end solutions from conceptual design to scalable cloud deployments.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] p-10 md:p-12 transition-colors duration-500 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/5 group-hover:text-accent-cyan/10 transition-colors duration-500">
                {service.id}
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 relative z-10">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">
                {service.desc}
              </p>
              
              {/* Magnetic arrow button style */}
              <div className="mt-12 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-dark-900 group-hover:scale-110 transition-all duration-300 relative z-10">
                <svg className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
