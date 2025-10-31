'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/anahita-jpeg', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/anahita20/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/BhalmeAnahita', label: 'Twitter' },
  { icon: Mail, href: 'mailto:bhalmeanahita20@gmail.com', label: 'Email' },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[var(--color-dark-bg-base)] py-20 mt-32 overflow-hidden">
      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-dark-accent-primary)] to-transparent">
        <motion.div
          className="h-full w-20 bg-gradient-to-r from-[var(--color-dark-accent-primary)] to-[var(--color-dark-accent-secondary)] blur-sm"
          animate={{
            x: ['0%', '400%', '0%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--color-dark-accent-primary)] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--color-dark-accent-secondary)] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Full Width Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
        >
          {/* Left Section - Name & Title */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl lg:text-4xl font-bold text-gradient font-[family-name:var(--font-space-grotesk)] mb-3">
              Anahita Bhalme
            </h3>
            <p className="text-base text-[var(--color-dark-text-muted)] dark:text-[var(--color-dark-text-muted)] light:text-[var(--color-light-text-muted)] mb-2">
              Full-Stack Developer & CSE Student
            </p>
            <p className="text-sm text-[var(--color-dark-text-muted)] dark:text-[var(--color-dark-text-muted)] light:text-[var(--color-light-text-muted)] flex items-center justify-center lg:justify-start gap-2">
              <span>© 2025 All rights reserved.</span>
            </p>
          </div>

          {/* Center Section - Social Links */}
          <div className="flex-shrink-0">
            <p className="text-xs font-semibold text-[var(--color-dark-text-muted)] dark:text-[var(--color-dark-text-muted)] light:text-[var(--color-light-text-muted)] uppercase tracking-wider mb-6 text-center">
              Connect with me
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-14 h-14 rounded-xl bg-[var(--color-dark-bg-elevated)] dark:bg-[var(--color-dark-bg-elevated)] light:bg-[var(--color-light-bg-card)] flex items-center justify-center text-[var(--color-dark-text-body)] dark:text-[var(--color-dark-text-body)] light:text-[var(--color-light-text-body)] hover:text-[var(--color-dark-accent-primary)] dark:hover:text-[var(--color-dark-accent-primary)] light:hover:text-[var(--color-light-accent-primary)] hover:bg-[var(--color-dark-accent-primary)]/10 transition-all duration-300 shadow-md border border-[var(--color-dark-text-muted)]/10"
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Section - Built With */}
          <div className="flex-1 text-center lg:text-right">
            <p className="text-sm text-[var(--color-dark-text-muted)] dark:text-[var(--color-dark-text-muted)] light:text-[var(--color-light-text-muted)] mb-2">
              Built with Next.js & Tailwind CSS
            </p>
            <p className="text-sm text-[var(--color-dark-text-muted)] dark:text-[var(--color-dark-text-muted)] light:text-[var(--color-light-text-muted)] flex items-center justify-center lg:justify-end gap-2">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>
              <span>and lots of ☕</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[var(--color-dark-accent-primary)] to-[var(--color-dark-accent-secondary)] dark:from-[var(--color-dark-accent-primary)] dark:to-[var(--color-dark-accent-secondary)] light:from-[var(--color-light-accent-primary)] light:to-[var(--color-light-accent-secondary)] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all duration-300 z-50 group no-print"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.div>
        </motion.button>
      )}
    </footer>
  );
}
