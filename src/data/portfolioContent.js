const PROFILE_PHOTO =
  'https://instagram.fbpn2-1.fna.fbcdn.net/v/t51.82787-15/655205341_18096730301053052_2033629522655204751_n.jpg?stp=dst-jpg_e35_s480x480_tt6&_nc_cat=105&ig_cache_key=MzE4NjA5MDYyMDg2NzY5MTIxMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=jWHNEkkCVwEQ7kNvwEK6yXR&_nc_oc=Adqs9irzei4pfOsSJsUHHJ8Y9RFnID_wErJEQSU-jJ1Zkf-Ryh_v3AX72CqwNBMmJGI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbpn2-1.fna&_nc_gid=RU5e1p78f5Vo7OJuEH8LRg&_nc_ss=7a22e&oh=00_Af55-btM8kO6B1bic2i1AGL0SMadKzcKpkXOj580NaD8Mw&oe=6A1B2F48';

export const fallbackPortfolioContent = {
  site: {
    brand: 'PORTFOLIO',
    copyright: 'All rights reserved',
  },
  navItems: [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ],
  hero: {
    name: 'Nasa Balthazar ST Padan',
    title: 'Information and Data Administrator Officer',
    tagline:
      'Driven by continuous learning and a strong willingness to adapt, I am passionate about building meaningful solutions through technology, communication, and collaboration. I believe growth comes from challenging limitations, improving through experience, and delivering work that creates real impact.',
    avatar: PROFILE_PHOTO,
    welcomePrefix: "Welcome - I'm",
    primaryCtaLabel: 'Hire Me',
    primaryCtaHref: '#contact',
    secondaryCtaLabel: 'View Portfolio',
    secondaryCtaHref: '#work',
    identityLabel: '- identity',
    initials: 'NB',
    scrollLabel: 'Scroll',
    stats: [
      { value: '5+', label: 'Years Exp.' },
      { value: '40+', label: 'Projects' },
      { value: '15+', label: 'Clients' },
    ],
  },
  about: {
    eyebrow: 'About Me',
    photo: PROFILE_PHOTO,
    photoAlt: 'Nasa Balthazar ST Padan',
    status: 'Available for work',
    headline: 'Not limited by experience,',
    highlight: 'Driven by the ability to learn and adapt.',
    bio:
      "I'm Nasa Balthazar ST Padan, an Information and Data Administration Officer based in Bulungan, Kalimantan Utara, with nearly 2 years of professional experience in administration, data management, and digital communication. I graduated in Information Systems from Atma Jaya University Yogyakarta and have worked on government administration, organizational coordination, and technology-driven projects. I specialize in data reporting, content and website management, UI/UX design, and Unity development, with a strong focus on teamwork, adaptability, and delivering efficient digital solutions.",
    skills: ['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    stats: [
      { value: '3+', label: 'Years of Workking Experience' },
      { value: '2+', label: 'Work Experience' },
    ],
  },
  portfolio: {
    eyebrow: 'Selected Work',
    title: 'The Evidence',
    highlight: 'Gallery.',
    viewProjectLabel: 'View Project',
    categories: ['All', 'Web App', 'Full Stack', 'Mobile', 'UI/UX'],
    projects: [
      {
        id: 1,
        title: 'Information and Data Administrator',
        description:
          'Managed administrative reporting, structured data processing, and digital documentation to support efficient organizational operations',
        category: '',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&fit=crop',
        year: '2024-2026',
      },
      {
        id: 2,
        title: 'Information Administrator and Content Management',
        description:
          'Created news articles, managed digital information, and delivered engaging content to improve public communication and company visibility.',
        category: '',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&fit=crop',
        year: '2024-2026',
      },
      {
        id: 3,
        title: 'Videographer & Media Documentation',
        description:
          'Produced and edited visual content for events and organizational activities, focusing on storytelling and audience engagement.',
        category: '',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&fit=crop',
        year: '2023-2026',
      },
      {
        id: 4,
        title: 'Organization Secretary',
        description:
          'Coordinated administrative activities, managed official documentation, and supported communication within the Felefet organization.',
        category: 'Organisation',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&fit=crop',
        year: '2023-2026',
      },
      {
        id: 5,
        title: 'Unity Engineer',
        description:
          'Built immersive interactive experiences in Unity through efficient development, system design, and user-focused implementation.',
        category: 'Web App',
        image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&fit=crop',
        year: '2022 -2023',
      },
      {
        id: 6,
        title: '3D Designer',
        description:
          'Crafted detailed 3D models and environments to enhance visual quality, creativity, and digital storytelling.',
        category: 'Full Stack',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&fit=crop',
        year: '2022-2023',
      },
    ],
  },
  skills: {
    eyebrow: 'Expertise',
    title: 'Skills &',
    highlight: 'Capabilities.',
    description: 'A full-stack toolkit honed across 5+ years of production-grade engineering.',
    categoryPrefix: 'Category',
    categories: [
      {
        id: 'frontend',
        label: 'Frontend',
        icon: 'code',
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
        id: 'backend',
        label: 'Backend',
        icon: 'server',
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
        id: 'tools',
        label: 'Tools & Infra',
        icon: 'wrench',
        skills: [
          { name: 'AWS', level: 82 },
          { name: 'Docker', level: 85 },
          { name: 'Git', level: 95 },
          { name: 'CI/CD', level: 80 },
          { name: 'Figma', level: 70 },
          { name: 'Linux', level: 78 },
        ],
      },
    ],
  },
  footer: {
    eyebrow: 'Get in touch',
    email: 'hello@archive.studio',
    socialLinks: [
      { label: 'Twitter', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'LinkedIn', href: '#' },
    ],
  },
};

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

export function mergePortfolioContent(base, override) {
  if (!isPlainObject(override)) {
    return base;
  }

  return Object.entries(override).reduce(
    (merged, [key, value]) => {
      if (Array.isArray(value)) {
        merged[key] = value.length > 0 ? value : base[key];
        return merged;
      }

      if (isPlainObject(value)) {
        merged[key] = mergePortfolioContent(base[key] || {}, value);
        return merged;
      }

      if (value !== undefined && value !== null && value !== '') {
        merged[key] = value;
      }

      return merged;
    },
    { ...base },
  );
}

export async function fetchPortfolioContent(apiUrl) {
  if (!apiUrl) {
    return fallbackPortfolioContent;
  }

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`Portfolio content request failed: ${response.status}`);
  }

  const remoteContent = await response.json();
  return mergePortfolioContent(fallbackPortfolioContent, remoteContent);
}
