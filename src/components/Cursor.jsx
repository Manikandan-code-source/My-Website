import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Create quickTo functions for smooth, performant following
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    const onMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onMouseHover = () => {
      gsap.to(cursor, { scale: 1.5, backgroundColor: "rgba(59, 130, 246, 0.2)", border: "1px solid rgba(59, 130, 246, 0.5)", duration: 0.2 });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: "transparent", border: "2px solid rgba(255, 255, 255, 0.5)", duration: 0.2 });
    };

    window.addEventListener("mousemove", onMouseMove);
    
    // Add hover effect to all links and buttons
    const hoverElements = document.querySelectorAll('a, button');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseHover);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseHover);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-white/50 pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
    ></div>
  );
};

export default Cursor;
