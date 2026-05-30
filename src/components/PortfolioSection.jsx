import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { usePortfolioContent } from '@/context/PortfolioContentContext';

function ProjectCard({ project, index, viewProjectLabel }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col bg-card border border-white/5 overflow-hidden hover:border-primary/30 transition-colors duration-500"
    >
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-background/30 group-hover:bg-transparent transition-all duration-500" />
        <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm px-2 py-1">
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground">{project.year}</span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-primary">{project.category}</span>
            <h3 className="font-serif text-xl text-foreground leading-tight">{project.title}</h3>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed flex-1">{project.description}</p>

        <a
          href={project.url || '#work'}
          className="group/btn flex items-center gap-2 self-start font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 border-b border-white/10 hover:border-primary pb-1"
        >
          {viewProjectLabel}
          <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const { content } = usePortfolioContent();
  const portfolio = content.portfolio;
  const [active, setActive] = useState(portfolio.categories[0] || 'All');

  useEffect(() => {
    if (!portfolio.categories.includes(active)) {
      setActive(portfolio.categories[0] || 'All');
    }
  }, [active, portfolio.categories]);

  const filtered =
    active === 'All' ? portfolio.projects : portfolio.projects.filter((project) => project.category === active);

  return (
    <section id="work" className="relative bg-background py-[clamp(5rem,12vw,14rem)] px-6 md:px-12 lg:px-20 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-[0.5px] bg-white/10 origin-left"
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-[1px] bg-primary" />
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary">{portfolio.eyebrow}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] text-foreground"
            >
              {portfolio.title}
              <br />
              <span className="italic text-primary">{portfolio.highlight}</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {portfolio.categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
                  active === category
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-white/10 text-muted-foreground hover:border-primary/50 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <div key={project.id || project.title} className="bg-background">
                <ProjectCard project={project} index={i} viewProjectLabel={portfolio.viewProjectLabel} />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-white/10 origin-right"
      />
    </section>
  );
}
