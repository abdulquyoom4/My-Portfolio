const experiences = [
    {
    date: '2024 — PRESENT',
    role: 'MERN Stack Developer',
    company: 'Freelance / Self-Directed',
    desc: 'Building full-stack web applications. Deployed production-grade apps with React, Node.js, Express, MongoDB Atlas on Vercel & Railway.',
  },
  {
    date: '2023 — PRESENT',
    role: 'CS Student',
    company: 'University of Gujrat',
    desc: 'Studying Computer Science — algorithms, HCI, machine learning, mobile development, and compiler construction.',
  },
]

const Experience = () => (
  <section id="experience" className="py-20 px-8 md:px-16 max-w-6xl mx-auto">
    <p className="font-mono text-accent text-xs tracking-[3px] mb-3">BACKGROUND</p>
    <h2 className="text-4xl font-extrabold mb-12">Experience</h2>
    <div className="flex flex-col">
      {experiences.map((exp, i) => (
        <div key={i} className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-accent mt-1 shrink-0 ring-4 ring-accent/20" />
            {i < experiences.length - 1 && <div className="w-px bg-border flex-1 mt-2 min-h-[40px]" />}
          </div>
          <div className="pb-10 flex-1">
            <p className="font-mono text-[11px] text-muted tracking-widest mb-1">{exp.date}</p>
            <h3 className="text-base font-bold mb-1">{exp.role}</h3>
            <p className="text-sm text-accent2 mb-2">{exp.company}</p>
            <p className="text-sm text-muted leading-relaxed">{exp.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Experience
