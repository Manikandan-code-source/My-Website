import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Education from "./components/Education"

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      
      <footer className="py-8 text-center text-sm text-gray-500 border-t border-white/5">
        <p>Built with React, Tailwind CSS & GSAP</p>
        <p className="mt-1">© {new Date().getFullYear()} Manikandan Durairaj</p>
      </footer>
    </div>
  )
}

export default App
