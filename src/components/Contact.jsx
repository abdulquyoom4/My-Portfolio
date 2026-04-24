const links = [
  { label: '📧 Email', href: 'mailto:abdulquyoom402@gmail.com' },
  { label: '⌥ GitHub', href: 'https://github.com/abdulquyoom4' },
  { label: '💼 LinkedIn', href: 'https://linkedin.com/in/abdulquyoom4' },
  { label: '📄 Resume', href: 'public/My Resume.pdf' },
]

const Contact = () => (
  <section id="contact" className="py-20 px-8 md:px-16 max-w-6xl mx-auto">
    <div className="relative bg-card border border-border rounded-2xl p-12 text-center overflow-hidden contact-line">
      <h2 className="text-4xl font-extrabold mb-3">Let's Build Something</h2>
      <p className="font-mono text-muted text-sm mb-8">
        Available for freelance projects, collaborations &amp; internships
      </p>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-3 ">
        {links.map((l, i) => (
          <a key={i} href={l.href} target="_blank" rel="noreferrer"
            className="font-mono text-sm text-primary bg-surface border border-border rounded-xl md:px-5 py-2.5 flex items-center justify-center gap-2 hover:border-accent hover:text-accent transition-all duration-200">
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Contact
