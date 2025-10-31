'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--color-dark-bg-base)]/80 dark:bg-[var(--color-dark-bg-base)]/80 light:bg-[var(--color-light-bg-base)]/90 backdrop-blur-md shadow-lg border-b border-[var(--color-dark-accent-primary)]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] cursor-pointer"
            >
              <span className="text-gradient">Anahita Bhalme</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative text-base font-medium transition-colors duration-300 group px-1 ${
                    activeSection === link.href.substring(1)
                      ? 'text-[var(--color-dark-accent-primary)] dark:text-[var(--color-dark-accent-primary)] light:text-[var(--color-light-accent-primary)]'
                      : 'text-[var(--color-dark-text-body)] dark:text-[var(--color-dark-text-body)] light:text-[var(--color-light-text-body)] hover:text-[var(--color-dark-accent-primary)] dark:hover:text-[var(--color-dark-accent-primary)] light:hover:text-[var(--color-light-accent-primary)]'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-dark-accent-primary)] to-[var(--color-dark-accent-secondary)] transition-all duration-300 group-hover:w-full" />
                  {activeSection === link.href.substring(1) && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-dark-accent-primary)] to-[var(--color-dark-accent-secondary)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <ThemeToggle />
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-full bg-[var(--color-dark-bg-card)] dark:bg-[var(--color-dark-bg-card)] light:bg-[var(--color-light-bg-card)] flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-[var(--color-dark-bg-card)] dark:bg-[var(--color-dark-bg-card)] light:bg-[var(--color-light-bg-card)] z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full p-8">
                <div className="flex-1 flex flex-col justify-center space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                      onClick={() => scrollToSection(link.href)}
                      className={`text-left text-2xl font-semibold transition-colors duration-300 ${
                        activeSection === link.href.substring(1)
                          ? 'text-[var(--color-dark-accent-primary)] dark:text-[var(--color-dark-accent-primary)] light:text-[var(--color-light-accent-primary)]'
                          : 'text-[var(--color-dark-text-body)] dark:text-[var(--color-dark-text-body)] light:text-[var(--color-light-text-body)]'
                      }`}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

