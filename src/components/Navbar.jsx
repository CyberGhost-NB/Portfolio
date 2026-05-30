import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'WORK', href: '#work' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

function NavLink({ label, href, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
    >
      {label}
      <span className="absolute -bottom-1 left-1/2 w-0 h-[0.5px] bg-primary group-hover:w-full group-hover:left-0 transition-all duration-500" />
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between">
      <Link to="/" className="font-serif text-lg md:text-xl text-foreground tracking-tight">
        PORTFOLIO
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <NavLink key={item.label} {...item} />
        ))}
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-foreground z-50"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background flex flex-col items-center justify-center gap-12 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}