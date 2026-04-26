import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Section from "./components/Section"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-bg text-primary transition-colors duration-300">
        <Navbar />
        <Hero />
        <Section id="skills"><Skills /></Section>
        <Section id="projects"><Projects /></Section>
        <Section id="experience"><Experience /></Section>
        <Section id="contact"><Contact /></Section>
      </div>
    </ThemeProvider>
  )
}

export default App