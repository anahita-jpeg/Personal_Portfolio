'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

type ProjectCategory = 'All' | 'Web Apps' | 'Mobile' | 'AI/ML' | 'Full-Stack';

interface Project {
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack online store with payment integration, real-time inventory management, and admin dashboard.',
    image: '/projects/ecommerce.jpg',
    category: 'Full-Stack',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    title: 'AI Chatbot',
    description: 'Intelligent chatbot using natural language processing for customer support automation.',
    image: '/projects/chatbot.jpg',
    category: 'AI/ML',
    tags: ['Python', 'TensorFlow', 'Flask', 'React'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task manager with real-time updates, team collaboration, and progress tracking.',
    image: '/projects/taskapp.jpg',
    category: 'Web Apps',
    tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Mobile Fitness Tracker',
    description: 'Track workouts, nutrition, and health metrics on the go with beautiful visualizations.',
    image: '/projects/fitness.jpg',
    category: 'Mobile',
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with real-time data visualization.',
    image: '/projects/dashboard.jpg',
    category: 'Web Apps',
    tags: ['React', 'D3.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com',
  },
  {
    title: 'Weather Forecast App',
    description: 'Beautiful weather app with 7-day forecast, maps, and personalized weather alerts.',
    image: '/projects/weather.jpg',
    category: 'Web Apps',
    tags: ['Next.js', 'TypeScript', 'OpenWeather API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

const categories: ProjectCategory[] = ['All', 'Web Apps', 'Mobile', 'AI/ML', 'Full-Stack'];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-48 md:py-64 bg-[var(--color-dark-bg-card)] overflow-hidden mb-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-dark-text-heading)] mb-6 font-[family-name:var(--font-space-grotesk)]">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-dark-text-body)] max-w-2xl mx-auto mb-6">
            Things I've built and proud of
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '120px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[var(--color-dark-accent-primary)] to-[var(--color-dark-accent-secondary)] rounded-full mx-auto"
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
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
                  layoutId="activeProjectCategory"
                  className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-accent-primary)] to-[var(--color-dark-accent-secondary)] rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                layout: { type: 'spring', stiffness: 300, damping: 30 }
              }}
              whileHover={{ y: -15 }}
              className="group relative"
            >
              <div className="glassmorphism rounded-2xl overflow-hidden h-full transition-all duration-300 group-hover:shadow-2xl">
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-[var(--color-dark-bg-card)]/90 dark:bg-[var(--color-dark-bg-card)]/90 light:bg-[var(--color-light-bg-card)]/90 backdrop-blur-sm rounded-full text-xs font-medium text-[var(--color-dark-accent-primary)] dark:text-[var(--color-dark-accent-primary)] light:text-[var(--color-light-accent-primary)] border border-[var(--color-dark-accent-primary)]/30">
                  {project.category}
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-[var(--color-dark-accent-tertiary)] to-[var(--color-dark-accent-secondary)] rounded-full text-xs font-bold text-white">
                    ⭐ Featured
                  </div>
                )}

                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[var(--color-dark-accent-primary)]/20 to-[var(--color-dark-accent-secondary)]/20">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    🚀
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-bg-card)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-bg-card)] via-[var(--color-dark-bg-card)]/80 to-transparent flex items-end justify-center pb-8 gap-4"
                  >
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1, scale: 1.1 }}
                        transition={{ delay: 0.1 }}
                        className="w-12 h-12 rounded-full bg-[var(--color-dark-accent-primary)] dark:bg-[var(--color-dark-accent-primary)] light:bg-[var(--color-light-accent-primary)] flex items-center justify-center text-white hover:shadow-lg"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1, scale: 1.1 }}
                        transition={{ delay: 0.2 }}
                        className="w-12 h-12 rounded-full bg-[var(--color-dark-bg-elevated)] dark:bg-[var(--color-dark-bg-elevated)] light:bg-[var(--color-light-bg-elevated)] flex items-center justify-center text-[var(--color-dark-text-heading)] dark:text-[var(--color-dark-text-heading)] light:text-[var(--color-light-text-heading)] hover:shadow-lg"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-dark-text-heading)] dark:text-[var(--color-dark-text-heading)] light:text-[var(--color-light-text-heading)] mb-3 group-hover:text-[var(--color-dark-accent-primary)] dark:group-hover:text-[var(--color-dark-accent-primary)] light:group-hover:text-[var(--color-light-accent-primary)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-[var(--color-dark-text-body)] dark:text-[var(--color-dark-text-body)] light:text-[var(--color-light-text-body)] mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.15 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-[var(--color-dark-accent-primary)]/10 dark:bg-[var(--color-dark-accent-primary)]/10 light:bg-[var(--color-light-accent-primary)]/10 text-[var(--color-dark-accent-primary)] dark:text-[var(--color-dark-accent-primary)] light:text-[var(--color-light-accent-primary)] text-xs font-medium rounded-full border border-[var(--color-dark-accent-primary)]/20 cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--color-dark-accent-primary)] dark:group-hover:border-[var(--color-dark-accent-primary)] light:group-hover:border-[var(--color-light-accent-primary)] transition-colors duration-300 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

