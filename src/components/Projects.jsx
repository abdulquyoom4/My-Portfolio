const projects = [
  {
    id: 1,
    tag: 'MERN · FULL STACK',
    name: 'E-Commerce Platform',
    desc: 'Full-stack e-commerce platform for a sweets shop. Secure auth, product management, and order processing.',
    techs: ['React', 'Node.js', 'MongoDB', 'Tailwind v4'],
    github: 'https://github.com/abdulquyoom4/E-Commerce-Store-MERN',
    demo: 'https://Sanabalsweets.vercel.app',
  },
  {
    id: 2,
    tag: 'MERN',
    name: 'Password Manager',
    desc: 'Secure password manager with user authentication, encrypted storage, and a user-friendly interface.',
    techs: ['React', 'Node.js', 'MongoDB', 'Tailwind v4'],
    github: 'https://github.com/abdulquyoom4',
    demo: '',
  },
]


const ProjectCard = ({ project }) => {
  return (
    <article
      className="group relative bg-card border border-border rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_10px_40px_rgba(0,255,200,0.08)]"
    >
  
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />


      <div className="p-6 flex-1 relative">
        <span className="font-mono text-[10px] text-accent2 bg-accent2/10 border border-accent2/20 rounded-full px-3 py-1 inline-block mb-4">
          {project.tag}
        </span>

        <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
          {project.name}
        </h3>

        <p className="text-sm text-muted leading-relaxed">
          {project.desc}
        </p>
      </div>

    
      <div className="p-4 border-t border-border flex flex-wrap gap-2 items-center">
        {project.techs.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] bg-surface border border-border rounded-md px-2 py-1 text-muted hover:border-accent/40 transition"
          >
            {t}
          </span>
        ))}

        </div>


        <div className="p-4 border-t border-border flex flex-wrap gap-6 justify-center items-end">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`GitHub link for ${project.name}`}
            className="font-mono text-xs px-3 py-1.5 rounded-md border border-accent/40 text-accent hover:bg-accent hover:text-black transition"
          >
            GitHub Link
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`Live demo for ${project.name}`}
              className="font-mono text-xs px-3 py-1.5 rounded-md bg-accent text-black hover:opacity-80 transition"
            >
              Live Demo
            </a>
          )}
        </div>
    </article>
  )
}

const Projects = () => (
  <section id="projects" className="py-24 px-8 md:px-16 max-w-7xl mx-auto">

    <p className="font-mono text-accent text-xs tracking-[3px] mb-3">
      WORK
    </p>

    <h2 className="text-4xl md:text-5xl font-extrabold mb-14">
      Featured Projects
    </h2>

    <p className="md:hidden text-center text-md text-muted font-mono mb-5">
  ← swipe to see more →
</p>

<div
  className="
    flex md:grid md:grid-cols-2 md:gap-10
    gap-5
    overflow-x-auto md:overflow-visible
    snap-x snap-mandatory
    scroll-smooth
    w-[85%]
    m-auto
    md:w-full
  "
>
      {projects.map((project) => (
       <div className="min-w-full md:min-w-0 snap-center flex justify-center">
  <ProjectCard key={project.id} project={project} />
</div>
      ))}
    </div>

  </section>
)

export default Projects