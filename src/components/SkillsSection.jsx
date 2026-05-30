import { motion } from 'framer-motion';
import { Code2, Server, Wrench } from 'lucide-react';

const CATEGORIES = [
  {
    label: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 80 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    label: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Redis', level: 78 },
      { name: 'REST APIs', level: 95 },
      { name: 'Python', level: 72 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    label: 'Tools & Infra',
    icon: Wrench,
    skills: [
      { name: 'AWS', level: 82 },
      { name: 'Docker', level: 85 },
      { name: 'Git', level: 95 },
      { name: 'CI/CD', level: 80 },
      { name: 'Figma', level: 70 },
      { name: 'Linux', level: 78 },
    ],
  },
];

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="flex flex-col gap-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-foreground/80">{name}</span>
        <span className="font-mono text-[10px] text-muted-foreground">{level}%</span>
      </div>
      <div className="h-[2px] w-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-primary"
        />
      </div>
    </motion.div>
  );
}

function CategoryCard({ category, index }) {
  const Icon = category.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-8 border border-white/5 p-8 hover:border-primary/20 transition-colors duration-500"
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 border border-primary/30 flex items-center justify-center">
          <Icon size={16} className="text-primary" />
        </div>
        <div>
          <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground mb-0.5">Category 0{index + 1}</p>
          <h3 className="font-serif text-xl text-foreground">{category.label}</h3>
        </div>
      </div>

      {/* Skill bars */}
      <div className="flex flex-col gap-5">
        {category.skills.map((skill, i) => (
          <SkillBar key={skill.name} {...skill} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative bg-background py-[clamp(5rem,12vw,14rem)] px-6 md:px-12 lg:px-20 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-[0.5px] bg-white/10 origin-left"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-[1px] bg-primary" />
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary">Expertise</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] text-foreground"
            >
              Skills &amp;<br />
              <span className="italic text-primary">Capabilities.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-sm font-mono tracking-wide max-w-xs md:text-right leading-relaxed"
          >
            A full-stack toolkit honed across 5+ years of production-grade engineering.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {CATEGORIES.map((cat, i) => (
            <div key={cat.label} className="bg-background">
              <CategoryCard category={cat} index={i} />
            </div>
          ))}
        </div>
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