import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const STATS = [
  { value: '3+', label: 'Years of Workking Experience' },
  { value: '2+', label: 'Work Experience' },
];

const PHOTO = 'https://instagram.fbpn2-1.fna.fbcdn.net/v/t51.82787-15/655205341_18096730301053052_2033629522655204751_n.jpg?stp=dst-jpg_e35_s480x480_tt6&_nc_cat=105&ig_cache_key=MzE4NjA5MDYyMDg2NzY5MTIxMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=jWHNEkkCVwEQ7kNvwEK6yXR&_nc_oc=Adqs9irzei4pfOsSJsUHHJ8Y9RFnID_wErJEQSU-jJ1Zkf-Ryh_v3AX72CqwNBMmJGI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbpn2-1.fna&_nc_gid=RU5e1p78f5Vo7OJuEH8LRg&_nc_ss=7a22e&oh=00_Af55-btM8kO6B1bic2i1AGL0SMadKzcKpkXOj580NaD8Mw&oe=6A1B2F48';

function StatCard({ value, label, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-2 border-t border-white/10 pt-6"
    >
      <span className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-none text-primary">{value}</span>
      <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{label}</span>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);

  return (
    <section id="about" className="relative bg-background py-[clamp(5rem,12vw,14rem)] px-6 md:px-12 lg:px-20 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-[0.5px] bg-white/10 origin-left"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="w-8 h-[1px] bg-primary" />
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary">About Me</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <div className="absolute -top-4 -left-4 w-full h-full border border-primary/20" />
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={PHOTO}
                  alt="Alex Rivera"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary px-4 py-3">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary-foreground">
                  Available for work
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <div ref={ref} className="flex flex-col gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tight text-foreground"
            >
              Not limited by experience, <br />
              <span className="italic text-primary">Driven by the ability to learn and adapt.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="text-muted-foreground leading-[1.8] text-lg"
            >
              I'm Nasa Balthazar ST Padan, an Information and Data Administration Officer based in Bulungan, Kalimantan Utara, 
              with nearly 2 years of professional experience in administration, data management, and digital communication. 
              I graduated in Information Systems from Atma Jaya University Yogyakarta and have worked on government administration, organizational coordination, and technology-driven projects. 
              I specialize in data reporting, content and website management, UI/UX design, and Unity development, with a strong focus on teamwork, adaptability, and delivering efficient digital solutions.
              
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="flex flex-wrap gap-3"
            >
              {['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'].map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[10px] tracking-[0.15em] uppercase border border-white/10 px-3 py-2 text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
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