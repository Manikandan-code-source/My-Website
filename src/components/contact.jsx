import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  useGSAP(() => {
    gsap.from('.contact-element', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: "play reverse play reverse"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: sectionRef });

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Sending your message...");

    const formData = new FormData(event.target);
    formData.append("access_key", "95066fbf-ea01-4772-9fd4-90c82db9a003");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Message sent successfully! I'll get back to you soon.");
        event.target.reset();
        setTimeout(() => {
          setStatus("idle");
          setResult("");
        }, 5000);
      } else {
        setStatus("error");
        setResult(data.message || "Failed to send message.");
      }
    } catch (error) {
      setStatus("error");
      setResult("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white contact-element">
          <span className="text-accent-blue">05.</span> Get In Touch
        </h2>
        
        <div className="max-w-3xl mx-auto glass p-8 md:p-12 rounded-3xl border border-gray-800 contact-element relative overflow-hidden">
          {/* Subtle gradient background for the form */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

          <form onSubmit={onSubmit} className="relative z-10 flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 font-medium ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="John Doe"
                  className="w-full bg-dark-900/50 border border-gray-700 focus:border-accent-blue rounded-xl px-4 py-3 text-white outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 font-medium ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="john@example.com"
                  className="w-full bg-dark-900/50 border border-gray-700 focus:border-accent-blue rounded-xl px-4 py-3 text-white outline-none transition-colors"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 font-medium ml-1">Message</label>
              <textarea 
                name="message" 
                required 
                rows="5"
                placeholder="How can I help you?"
                className="w-full bg-dark-900/50 border border-gray-700 focus:border-accent-blue rounded-xl px-4 py-3 text-white outline-none transition-colors resize-none"
              ></textarea>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <p className={`text-sm ${status === 'error' ? 'text-red-400' : status === 'success' ? 'text-green-400' : 'text-accent-cyan'}`}>
                {result}
              </p>
              
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="px-8 py-3 bg-accent-blue hover:bg-accent-blue/80 text-white rounded-full font-semibold tracking-wide transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;