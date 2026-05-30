import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="px-6 md:px-12 py-[clamp(4rem,15vw,12rem)]">
        <p className="font-mono text-xs tracking-[0.2em] uppercase mb-8 opacity-60">
          Get in touch
        </p>

        <motion.a
          href="mailto:hello@archive.studio"
          whileHover={{ x: 12 }}
          transition={{ duration: 0.3 }}
          className="block font-serif text-[clamp(1.5rem,5vw,4.5rem)] leading-[1.1] hover:opacity-70 transition-opacity duration-300 break-all"
        >
          hello@archive.studio
        </motion.a>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-40">
          © {new Date().getFullYear()} — All rights reserved
        </span>
        <div className="flex gap-8">
          {['Twitter', 'GitHub', 'LinkedIn'].map((s) => (
            <a
              key={s}
              href="#"
              className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition-opacity"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}