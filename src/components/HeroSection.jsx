import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const DEVELOPER = {
  name: 'Nasa Balthazar ST Padan',
  title: 'Information and Data Administrator Officer',
  tagline: 'Driven by continuous learning and a strong willingness to adapt, I am passionate about building meaningful solutions through technology, communication, and collaboration. I believe growth comes from challenging limitations, improving through experience, and delivering work that creates real impact.',
  avatar: 'https://instagram.fbpn2-1.fna.fbcdn.net/v/t51.82787-15/655205341_18096730301053052_2033629522655204751_n.jpg?stp=dst-jpg_e35_s480x480_tt6&_nc_cat=105&ig_cache_key=MzE4NjA5MDYyMDg2NzY5MTIxMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=jWHNEkkCVwEQ7kNvwEK6yXR&_nc_oc=Adqs9irzei4pfOsSJsUHHJ8Y9RFnID_wErJEQSU-jJ1Zkf-Ryh_v3AX72CqwNBMmJGI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbpn2-1.fna&_nc_gid=RU5e1p78f5Vo7OJuEH8LRg&_nc_ss=7a22e&oh=00_Af55-btM8kO6B1bic2i1AGL0SMadKzcKpkXOj580NaD8Mw&oe=6A1B2F48',
};

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Slow drifting grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#FAFAFA" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating accent blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(189,255,0,0.06) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(189,255,0,0.04) 0%, transparent 70%)' }}
      />

      {/* Kinetic horizontal rules */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="absolute top-[18%] left-0 right-0 h-[0.5px] bg-white/10 origin-left"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
        className="absolute bottom-[18%] left-0 right-0 h-[0.5px] bg-white/10 origin-right"
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <AnimatedBackground />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left — Text */}
            <div className="flex flex-col gap-8">
              {/* Welcome label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-[1px] bg-primary" />
                <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary">
                  Welcome — I'm {DEVELOPER.name.split(' ')[0]}
                </span>
              </motion.div>

              {/* Main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-[clamp(2.8rem,7vw,6rem)] leading-[0.92] tracking-tight text-foreground"
              >
                {DEVELOPER.name.split(' ')[0]}{' '}
                <span className="italic text-primary">{DEVELOPER.name.split(' ')[1]}</span>
              </motion.h1>

              {/* Title badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-flex items-center gap-2 self-start"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {DEVELOPER.title}
                </span>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="font-sans text-lg text-muted-foreground leading-relaxed max-w-xl"
                style={{ fontSize: '1.125rem', lineHeight: '1.6' }}
              >
                {DEVELOPER.tagline}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-mono text-xs tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300"
                >
                  <Mail size={14} />
                  Hire Me
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 4 }}
                  />
                </a>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 border border-white/20 text-foreground px-8 py-4 font-mono text-xs tracking-[0.15em] uppercase hover:border-primary hover:text-primary transition-all duration-300"
                >
                  View Portfolio
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Meta stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex items-center gap-8 pt-4 border-t border-white/5"
              >
                {[['5+', 'Years Exp.'], ['40+', 'Projects'], ['15+', 'Clients']].map(([num, label]) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span className="font-serif text-2xl text-foreground">{num}</span>
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Accent border frame */}
                <motion.div
                  animate={{ rotate: [0, 1, 0, -1, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -inset-3 border border-primary/20"
                />
                <motion.div
                  animate={{ rotate: [0, -1, 0, 1, 0] }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className="absolute -inset-6 border border-primary/10"
                />

                {/* Photo */}
                <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] overflow-hidden">
                  <img
                    src={DEVELOPER.avatar}
                    alt={DEVELOPER.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>

                {/* Name tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary/80">— identity</p>
                    <p className="font-serif text-xl text-foreground">{DEVELOPER.name}</p>
                  </div>
                  <div className="w-8 h-8 bg-primary flex items-center justify-center">
                    <span className="font-mono text-[10px] text-primary-foreground font-bold">AR</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-[1px] h-6 bg-muted-foreground/30"
        />
      </motion.div>
    </section>
  );
}