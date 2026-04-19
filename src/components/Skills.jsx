const skills = [
  { icon: '🍃', name: 'MongoDB', tag: 'Database' },
  { icon: '🚂', name: 'Express.js', tag: 'Backend' },
  { icon: '⚛️', name: 'React.js', tag: 'Frontend' },
  { icon: '🟢', name: 'Node.js', tag: 'Backend' },
  { icon: '🎨', name: 'Tailwind CSS', tag: 'Styling' },
  { icon: '🔐', name: 'JWT & Auth', tag: 'Security' },
  { icon: '⚡', name: 'Vite', tag: 'Tooling' },
  { icon: '🐙', name: 'Git & GitHub', tag: 'DevOps' },
]

const SkillCard = ({ icon, name, tag }) => (
  <div className="flex-shrink-0 w-44 h-52 bg-card border border-border rounded-2xl flex flex-col items-center justify-center gap-2 mx-3 hover:border-accent hover:scale-105 transition-all duration-300 cursor-default">
    <span className="text-4xl">{icon}</span>
    <p className="text-md font-semibold text-primary text-center px-2">{name}</p>
    <span className="font-mono text-[11px] text-accent bg-accent/10 px-2 py-0.5 rounded-full">{tag}</span>
  </div>
)

const Skills = () => (
  <section id="skills" className="py-20 overflow-hidden">
    <div className="max-w-6xl mx-auto px-8 md:px-16 mb-12">
      <p className="font-mono text-accent text-xs tracking-[3px] mb-3">EXPERTISE</p>
      <h2 className="text-4xl font-extrabold">Tech Stack</h2>
    </div>

    <div className="relative w-full overflow-hidden">

      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #080c14, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #080c14, transparent)' }} />

      <div className="slider-track py-4">
        {[...skills, ...skills].map((skill, i) => (
          <SkillCard key={i} {...skill} />
        ))}
      </div>
    </div>
  </section>
)

export default Skills
