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
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white contact-element">
          <span className="text-accent-blue">05.</span> Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto bg-white dark:bg-dark-800/50 dark:backdrop-blur-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_-12px_rgba(255,255,255,0.02)] p-8 md:p-14 rounded-[2.5rem] border border-gray-200 dark:border-white/10 contact-element relative overflow-hidden group">
          {/* Subtle gradient background for the form */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-blue/10 dark:bg-accent-blue/20 rounded-full blur-3xl pointer-events-none group-hover:bg-accent-blue/20 dark:group-hover:bg-accent-blue/30 transition-colors duration-700"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-cyan/10 dark:bg-accent-cyan/20 rounded-full blur-3xl pointer-events-none group-hover:bg-accent-cyan/20 dark:group-hover:bg-accent-cyan/30 transition-colors duration-700"></div>

          <form onSubmit={onSubmit} className="relative z-10 flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-300 mb-2 pl-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:border-accent-blue focus:bg-white dark:focus:bg-dark-900 rounded-2xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none transition-all duration-300 shadow-inner dark:shadow-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-300 mb-2 pl-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:border-accent-blue focus:bg-white dark:focus:bg-dark-900 rounded-2xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none transition-all duration-300 shadow-inner dark:shadow-none"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-300 mb-2 pl-1">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="How can I help you?"
                className="w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:border-accent-blue focus:bg-white dark:focus:bg-dark-900 rounded-2xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none transition-all duration-300 shadow-inner dark:shadow-none resize-none"
              ></textarea>
            </div>

            <div className="flex items-center justify-between mt-4">
              <p className={`text-sm ${status === 'error' ? 'text-red-400' : status === 'success' ? 'text-green-400' : 'text-accent-cyan'}`}>
                {result}
              </p>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-10 py-4 bg-gradient-to-r from-accent-blue to-accent-cyan text-white rounded-full font-bold tracking-wide shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center gap-3"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </>
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