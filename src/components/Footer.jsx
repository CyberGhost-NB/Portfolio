import { motion } from 'framer-motion';
import { usePortfolioContent } from '@/context/PortfolioContentContext';

export default function Footer() {
  const { content } = usePortfolioContent();
  const footer = content.footer;

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="px-6 md:px-12 py-[clamp(4rem,15vw,12rem)]">
        <p className="font-mono text-xs tracking-[0.2em] uppercase mb-8 opacity-60">
          {footer.eyebrow}
        </p>

        <motion.a
          href={`mailto:${footer.email}`}
          whileHover={{ x: 12 }}
          transition={{ duration: 0.3 }}
          className="block font-serif text-[clamp(1.5rem,5vw,4.5rem)] leading-[1.1] hover:opacity-70 transition-opacity duration-300 break-all"
        >
          {footer.email}
        </motion.a>
      </div>

      <div className="border-t border-primary-foreground/10 px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-40">
          (c) {new Date().getFullYear()} - {content.site.copyright}
        </span>
        <div className="flex gap-8">
          {footer.socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition-opacity"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
