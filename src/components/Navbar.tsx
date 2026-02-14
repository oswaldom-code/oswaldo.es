import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-slate-200 dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl">
            terminal
          </span>
          <span className="font-mono font-bold text-lg tracking-tight">
            dev.backend
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a className="hover:text-primary transition-colors" href="/#about">
            Sobre mí
          </a>
          <a className="hover:text-primary transition-colors" href="/#tech">
            Stack
          </a>
          <a
            className="hover:text-primary transition-colors"
            href="/projects"
          >
            Proyectos
          </a>
          <a
            className="hover:text-primary transition-colors"
            href="/#experience"
          >
            Experiencia
          </a>
          <a className="hover:text-primary transition-colors" href="/blog">
            Blog
          </a>
          <a
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-all"
            href="/#contact"
          >
            Contacto
          </a>
        </nav>

        <button
          className="md:hidden text-slate-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav
          className="md:hidden border-t border-border-dark bg-card-dark px-4 pb-4 pt-2 flex flex-col gap-1"
          onClick={() => setMenuOpen(false)}
        >
          <a className="block py-3 px-3 rounded-lg hover:bg-primary/10 text-sm" href="/#about">Sobre mí</a>
          <a className="block py-3 px-3 rounded-lg hover:bg-primary/10 text-sm" href="/#tech">Stack</a>
          <a className="block py-3 px-3 rounded-lg hover:bg-primary/10 text-sm" href="/projects">Proyectos</a>
          <a className="block py-3 px-3 rounded-lg hover:bg-primary/10 text-sm" href="/#experience">Experiencia</a>
          <a className="block py-3 px-3 rounded-lg hover:bg-primary/10 text-sm" href="/blog">Blog</a>
          <a className="block py-3 px-3 rounded-lg bg-primary text-white text-sm text-center mt-1" href="/#contact">Contacto</a>
        </nav>
      )}
    </header>
  );
};
