import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`theme-toggle ${isDark ? 'dark-active' : ''}`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className="toggle-thumb">
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  );
};

const Navbar = () => {
  const [hamOpen, setHamOpen] = useState(false);

  const items = [
    { label: "Skills",     id: "skills" },
    { label: "Projects",   id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact",    id: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border transition-colors duration-300">

      <div className="flex items-center justify-between md:justify-around px-6 md:px-16 h-14">

        <span className="font-mono text-accent font-semibold text-lg tracking-widest">
          iAmAbdul
        </span>

        
        <div className="hidden md:flex gap-6 items-center">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-muted text-sm font-semibold hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
          <ThemeToggle />

        
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setHamOpen(!hamOpen)}
            aria-label="Toggle menu"
            className="flex flex-col gap-1 p-1"
          >
            <span className={`h-0.5 w-6 bg-accent transition-transform duration-300 ${hamOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`h-0.5 w-6 bg-accent transition-opacity duration-300 ${hamOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-accent transition-transform duration-300 ${hamOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
      </div>
        </div>

      
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-t border-border bg-bg/95 backdrop-blur-md ${
          hamOpen ? "max-h-60 py-3" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setHamOpen(false)}
              className="text-left text-muted font-semibold hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

    </nav>
  );
};

export default Navbar;