'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript,
  SiNodedotjs, SiPython, SiDjango, SiC, SiCplusplus,
  SiMongodb, SiPostgresql, SiMysql, SiFirebase,
  SiGit, SiGithub, SiFigma, SiAwsamplify, SiVercel
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

type SkillCategory = 'All' | 'Frontend' | 'Backend' | 'Database' | 'Tools';

interface Skill {
  name: string;
  icon: any;
  category: SkillCategory;
  color: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', icon: SiHtml5, category: 'Frontend', color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, category: 'Frontend', color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Frontend', color: '#F7DF1E' },
  { name: 'React', icon: SiReact, category: 'Frontend', color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend', color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Frontend', color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend', color: '#06B6D4' },
  
  // Backend
  { name: 'Node.js', icon: SiNodedotjs, category: 'Backend', color: '#339933' },
  { name: 'Python', icon: SiPython, category: 'Backend', color: '#3776AB' },
  { name: 'Django', icon: SiDjango, category: 'Backend', color: '#092E20' },
  { name: 'C', icon: SiC, category: 'Backend', color: '#A8B9CC' },
  { name: 'C++', icon: SiCplusplus, category: 'Backend', color: '#00599C' },
  
  // Database
  { name: 'MongoDB', icon: SiMongodb, category: 'Database', color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database', color: '#4169E1' },
  { name: 'MySQL', icon: SiMysql, category: 'Database', color: '#4479A1' },
  { name: 'Firebase', icon: SiFirebase, category: 'Database', color: '#FFCA28' },
  
  // Tools
  { name: 'Git', icon: SiGit, category: 'Tools', color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, category: 'Tools', color: '#181717' },
  { name: 'VS Code', icon: VscCode, category: 'Tools', color: '#007ACC' },
  { name: 'Figma', icon: SiFigma, category: 'Tools', color: '#F24E1E' },
  { name: 'Vercel', icon: SiVercel, category: 'Tools', color: '#000000' },
  { name: 'AWS', icon: SiAwsamplify, category: 'Tools', color: '#FF9900' },
];

const categories: SkillCategory[] = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All');

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-48 md:py-64 bg-[var(--color-dark-bg-base)] overflow-hidden mb-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-[var(--color-dark-accent-primary)] rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-[var(--color-dark-accent-secondary)] rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-dark-text-heading)] dark:text-[var(--color-dark-text-heading)] light:text-[var(--color-light-text-heading)] mb-4 font-[family-name:var(--font-space-grotesk)]">
            Skills & Technologies
          </h2>
          <p className="text-base md:text-lg text-[var(--color-dark-text-body)] dark:text-[var(--color-dark-text-body)] light:text-[var(--color-light-text-body)] max-w-2xl mx-auto">
            Technologies I've been working with
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '120px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[var(--color-dark-accent-primary)] to-[var(--color-dark-accent-secondary)] rounded-full mx-auto mt-4"
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'text-white'
                  : 'text-[var(--color-dark-text-body)] dark:text-[var(--color-dark-text-body)] light:text-[var(--color-light-text-body)] hover:text-[var(--color-dark-accent-primary)] dark:hover:text-[var(--color-dark-accent-primary)] light:hover:text-[var(--color-light-accent-primary)]'
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-accent-primary)] to-[var(--color-dark-accent-secondary)] rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                layout: { type: 'spring', stiffness: 300, damping: 30 }
              }}
              whileHover={{ 
                y: -10,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              className="group relative"
            >
              <div className="glassmorphism aspect-square rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 group-hover:bg-[var(--color-dark-bg-elevated)]/80 dark:group-hover:bg-[var(--color-dark-bg-elevated)]/80 light:group-hover:bg-[var(--color-light-bg-elevated)] cursor-pointer">
                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{
                    background: `radial-gradient(circle, ${skill.color}30 0%, transparent 70%)`,
                  }}
                />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  <skill.icon 
                    className="w-12 h-12 md:w-16 md:h-16 grayscale group-hover:grayscale-0 transition-all duration-300"
                    style={{ color: skill.color }}
                  />
                </motion.div>
                
                {/* Name */}
                <span className="text-xs md:text-sm font-medium text-[var(--color-dark-text-muted)] dark:text-[var(--color-dark-text-muted)] light:text-[var(--color-light-text-muted)] group-hover:text-[var(--color-dark-text-heading)] dark:group-hover:text-[var(--color-dark-text-heading)] light:group-hover:text-[var(--color-light-text-heading)] transition-colors duration-300 text-center relative z-10">
                  {skill.name}
                </span>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--color-dark-accent-primary)] dark:group-hover:border-[var(--color-dark-accent-primary)] light:group-hover:border-[var(--color-light-accent-primary)] transition-colors duration-300"
                  style={{
                    background: `linear-gradient(135deg, transparent, ${skill.color}20)`,
                    opacity: 0,
                  }}
                  whileHover={{ opacity: 1 }}
                />
              </div>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--color-dark-bg-elevated)] dark:bg-[var(--color-dark-bg-elevated)] light:bg-[var(--color-light-bg-elevated)] rounded-lg text-xs text-[var(--color-dark-text-body)] dark:text-[var(--color-dark-text-body)] light:text-[var(--color-light-text-body)] whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
              >
                {skill.category}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

