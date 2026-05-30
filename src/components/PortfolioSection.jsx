import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/**
 * @typedef {Object} Project
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} category
 * @property {string} image
 * @property {string} year
 */

/** @type {Project[]} */
const PROJECTS = [
  {
    id: 1,
    title: 'Information and Data Administrator',
    description: 'Managed administrative reporting, structured data processing, and digital documentation to support efficient organizational operations',
    category: '',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&fit=crop',
    year: '2024-2026',
  },
  {
    id: 2,
    title: 'Information Administrator and Content Management',
    description: 'Created news articles, managed digital information, and delivered engaging content to improve public communication and company visibility.',
    category: '',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&fit=crop',
    year: '2024-2026',
  },
  {
    id: 3,
    title: 'Videographer & Media Documentation',
    description: 'Produced and edited visual content for events and organizational activities, focusing on storytelling and audience engagement.',
    category: '',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&fit=crop',
    year: '2023-2026',
  },
  {
    id: 4,
    title: 'Organization Secretary',
    description: 'Coordinated administrative activities, managed official documentation, and supported communication within the Felefet organization.',
    category: 'Organisation',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&fit=crop',
    year: '2023-2026',
  },
  {
    id: 5,
    title: 'Unity Engineer',
    description: 'Built immersive interactive experiences in Unity through efficient development, system design, and user-focused implementation.',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&fit=crop',
    year: '2022 -2023',
  },
  {
    id: 6,
    title: '3D Designer',
    description: 'Crafted detailed 3D models and environments to enhance visual quality, creativity, and digital storytelling.',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&fit=crop',
    year: '2022-2023',
  },
];

const CATEGORIES = ['All', 'Web App', 'Full Stack', 'Mobile', 'UI/UX'];

/**
 * @param {{ project: Project, index: number }} props
 */
function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col bg-card border border-white/5 overflow-hidden hover:border-primary/30 transition-colors duration-500"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-background/30 group-hover:bg-transparent transition-all duration-500" />
        {/* Year badge */}
        <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm px-2 py-1">
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground">{project.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-primary">{project.category}</span>
            <h3 className="font-serif text-xl text-foreground leading-tight">{project.title}</h3>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed flex-1">{project.description}</p>

        <button className="group/btn flex items-center gap-2 self-start font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 border-b border-white/10 hover:border-primary pb-1">
          View Project
          <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

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
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-[1px] bg-primary" />
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary">Selected Work</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] text-foreground"
            >
              The Evidence<br />
              <span className="italic text-primary">Gallery.</span>
            </motion.h2>
          </div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
                  active === cat
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-white/10 text-muted-foreground hover:border-primary/50 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <div key={project.id} className="bg-background">
                <ProjectCard project={project} index={i} />
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
