import { useEffect, useState } from 'react'

const words = ['MERN','Full']

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const speed = isDeleting ? 75 : 150

    const timeout = setTimeout(() => {
      setDisplayText(currentWord.substring(0, charIndex))
      if (!isDeleting && charIndex < currentWord.length) {
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 900)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex])


  return (
    <section className="relative hero-glow md:min-h-screen flex items-start overflow-hidden">
      <div className="max-w-4xl px-8 md:px-16 py-20">

        
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse2" />
          <span className="font-mono text-green-400 text-xs tracking-wide">Open to opportunities</span>
        </div>

        
        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-4 max-w-2xl">
          I'm{' '}
          <span className="text-accent">Abdul Quyoom</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold mb-6 max-w-xl">
          <span className="text-green-400">{displayText}</span>
          <span className="animate-pulse text-accent2">|</span>
          <span className="text-primary/70">Stack Developer</span>
        </h2>

        <p className="text-muted text-base md:text-lg leading-relaxed mb-10 max-w-lg">
          CS student at UOG · Building scalable web apps from Pakistan.
          Passionate about clean code and real products.
        </p>

        <div className="flex flex-wrap gap-4">
         <a href="#projects" className="bg-accent text-black font-bold font-mono text-sm px-6 py-3 rounded-lg hover:bg-sky-300 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer">
            View Projects
          </a>
          <a href="#contact" className="bg-transparent text-primary font-mono text-sm px-6 py-3 rounded-lg border border-border hover:border-accent hover:text-accent transition-all duration-200 cursor-pointer">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
