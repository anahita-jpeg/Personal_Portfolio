'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Twitter, Mail, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/anahita-jpeg', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/anahita20/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/BhalmeAnahita', label: 'Twitter' },
  { icon: Mail, href: 'mailto:bhalmeanahita20@gmail.com', label: 'Email' },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--color-dark-bg-base)] to-[var(--color-dark-bg-card)] dark:from-[var(--color-dark-bg-base)] dark:to-[var(--color-dark-bg-card)] light:from-[var(--color-light-bg-base)] light:to-[var(--color-light-bg-card)]"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      {/* Radial Gradient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-dark-accent-primary)] dark:bg-[var(--color-dark-accent-primary)] light:bg-[var(--color-light-accent-primary)] rounded-full blur-[120px] opacity-10" />

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[var(--color-dark-accent-primary)]/20 to-[var(--color-dark-accent-secondary)]/20 rounded-full blur-xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-br from-[var(--color-dark-accent-secondary)]/20 to-[var(--color-dark-accent-tertiary)]/20 rounded-full blur-xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-[var(--color-dark-accent-tertiary)]/20 to-[var(--color-dark-accent-primary)]/20 rotate-45 blur-xl"
        animate={{
          y: [0, -20, 0],
          rotate: [45, 90, 45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[var(--color-dark-accent-primary)] dark:text-[var(--color-dark-accent-primary)] light:text-[var(--color-light-accent-primary)] text-sm sm:text-base font-medium mb-4"
            >
              Hi, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient font-[family-name:var(--font-space-grotesk)]"
              style={{
                textShadow: '0 0 40px rgba(0, 217, 255, 0.3)',
              }}
            >
              Anahita Bhalme
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--color-dark-text-heading)] dark:text-[var(--color-dark-text-heading)] light:text-[var(--color-light-text-heading)] mb-6 h-10 font-[family-name:var(--font-space-grotesk)]"
            >
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'CSE Student',
                  2000,
                  'Problem Solver',
                  2000,
                  'Tech Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-base sm:text-lg text-[var(--color-dark-text-body)] dark:text-[var(--color-dark-text-body)] light:text-[var(--color-light-text-body)] max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              Passionate about creating beautiful, functional, and user-centered digital experiences.
              Transforming ideas into elegant solutions with modern web technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-8 py-4 bg-gradient-to-r from-[var(--color-dark-accent-primary)] to-[var(--color-dark-accent-secondary)] dark:from-[var(--color-dark-accent-primary)] dark:to-[var(--color-dark-accent-secondary)] light:from-[var(--color-light-accent-primary)] light:to-[var(--color-light-accent-secondary)] text-white font-semibold rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all duration-300"
              >
                View Projects
              </motion.button>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[var(--color-dark-accent-primary)] dark:border-[var(--color-dark-accent-primary)] light:border-[var(--color-light-accent-primary)] text-[var(--color-dark-accent-primary)] dark:text-[var(--color-dark-accent-primary)] light:text-[var(--color-light-accent-primary)] font-semibold rounded-lg hover:bg-[var(--color-dark-accent-primary)]/10 transition-all duration-300"
              >
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links - Desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="hidden lg:flex items-center gap-6"
            >
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-[var(--color-dark-bg-elevated)] dark:bg-[var(--color-dark-bg-elevated)] light:bg-[var(--color-light-bg-elevated)] flex items-center justify-center text-[var(--color-dark-text-body)] dark:text-[var(--color-dark-text-body)] light:text-[var(--color-light-text-body)] hover:text-[var(--color-dark-accent-primary)] dark:hover:text-[var(--color-dark-accent-primary)] light:hover:text-[var(--color-light-accent-primary)] transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-[var(--color-dark-accent-primary)] to-transparent" />
            </motion.div>
          </div>

          {/* Right Visual - Hidden on Mobile */}
          <div className="hidden lg:block lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="relative"
            >
              {/* Placeholder for illustration or 3D element */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark-accent-primary)]/30 to-[var(--color-dark-accent-secondary)]/30 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-[var(--color-dark-accent-primary)] to-transparent rounded-full opacity-50"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-[var(--color-dark-accent-secondary)] to-transparent rounded-full opacity-50"
                  animate={{
                    y: [0, 20, 0],
                    x: [0, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Social Links - Mobile (Bottom) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="lg:hidden absolute bottom-8 left-0 right-0 flex justify-center gap-4"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 + index * 0.1 }}
            whileHover={{ y: -5, scale: 1.1 }}
            className="w-10 h-10 rounded-full bg-[var(--color-dark-bg-elevated)] flex items-center justify-center text-[var(--color-dark-text-body)] hover:text-[var(--color-dark-accent-primary)] transition-colors duration-300"
            aria-label={social.label}
          >
            <social.icon className="w-4 h-4" />
          </motion.a>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-dark-text-muted)] hover:text-[var(--color-dark-accent-primary)] transition-colors duration-300 hidden lg:block"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}

