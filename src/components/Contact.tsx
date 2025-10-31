'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from './Toast';

const socialLinks = [
  { 
    icon: Github, 
    href: 'https://github.com/anahita-jpeg', 
    label: 'GitHub',
    color: '#181717'
  },
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/anahita20/', 
    label: 'LinkedIn',
    color: '#0A66C2'
  },
  { 
    icon: Twitter, 
    href: 'https://x.com/BhalmeAnahita', 
    label: 'Twitter',
    color: '#1DA1F2'
  },
  { 
    icon: Mail, 
    href: 'mailto:bhalmeanahita20@gmail.com', 
    label: 'Email',
    color: '#EA4335'
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { showToast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('bhalmeanahita20@gmail.com');
    setCopiedEmail(true);
    showToast('success', 'Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 md:py-48 bg-[var(--color-dark-bg-card)] dark:bg-[var(--color-dark-bg-card)] light:bg-[var(--color-light-bg-card)] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-dark-accent-primary)] rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-dark-accent-secondary)] rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
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
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-dark-text-heading)] dark:text-[var(--color-dark-text-heading)] light:text-[var(--color-light-text-heading)] mb-4 font-[family-name:var(--font-space-grotesk)]">
            Let's Connect
          </h2>
          <p className="text-base md:text-lg text-[var(--color-dark-text-body)] dark:text-[var(--color-dark-text-body)] light:text-[var(--color-light-text-body)] max-w-2xl mx-auto">
            Have a project in mind? Let's build something amazing together
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '120px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[var(--color-dark-accent-primary)] to-[var(--color-dark-accent-secondary)] rounded-full mx-auto mt-4"
          />
        </motion.div>

        {/* Full Width Contact Card */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glassmorphism p-12 md:p-16 lg:p-20 rounded-3xl"
          >
            {/* Top Section - Profile & Heading */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
              {/* Left - Profile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3, type: 'spring' }}
                className="flex items-center gap-6"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-dark-accent-primary)] to-[var(--color-dark-accent-secondary)] flex items-center justify-center text-5xl shadow-2xl">
                  👋
                </div>
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-dark-text-heading)] dark:text-[var(--color-dark-text-heading)] light:text-[var(--color-light-text-heading)] mb-2">
                    Let's build something together!
                  </h3>
                  <p className="text-sm text-[var(--color-dark-text-muted)] dark:text-[var(--color-dark-text-muted)] light:text-[var(--color-light-text-muted)]">
                    Open to collaboration and new opportunities
                  </p>
                </div>
              </motion.div>

              {/* Right - Availability Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-green-500 rounded-full"
                />
                <p className="text-sm font-medium text-green-500">
                  Available for freelance work
                </p>
              </motion.div>
            </div>

            {/* Middle Section - Contact Info Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            >
              {/* Email */}
              <button
                onClick={copyEmail}
                className="flex items-center gap-5 p-6 rounded-2xl hover:bg-[var(--color-dark-bg-elevated)]/50 dark:hover:bg-[var(--color-dark-bg-elevated)]/50 light:hover:bg-[var(--color-light-bg-elevated)] transition-all duration-300 group border border-[var(--color-dark-text-muted)]/10"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--color-dark-accent-primary)]/10 dark:bg-[var(--color-dark-accent-primary)]/10 light:bg-[var(--color-light-accent-primary)]/10 flex items-center justify-center group-hover:bg-[var(--color-dark-accent-primary)]/20 transition-colors flex-shrink-0">
                  <Mail className="w-7 h-7 text-[var(--color-dark-accent-primary)] dark:text-[var(--color-dark-accent-primary)] light:text-[var(--color-light-accent-primary)]" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-xs text-[var(--color-dark-text-muted)] dark:text-[var(--color-dark-text-muted)] light:text-[var(--color-light-text-muted)] mb-1">
                    Email
                  </p>
                  <p className="text-base font-medium text-[var(--color-dark-text-body)] dark:text-[var(--color-dark-text-body)] light:text-[var(--color-light-text-body)]">
                    bhalmeanahita20@gmail.com
                  </p>
                  <p className="text-xs text-[var(--color-dark-accent-primary)] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedEmail ? '✓ Copied!' : 'Click to copy'}
                  </p>
                </div>
              </button>

              {/* Location */}
              <div className="flex items-center gap-5 p-6 rounded-2xl border border-[var(--color-dark-text-muted)]/10">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-dark-accent-primary)]/10 dark:bg-[var(--color-dark-accent-primary)]/10 light:bg-[var(--color-light-accent-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-[var(--color-dark-accent-primary)] dark:text-[var(--color-dark-accent-primary)] light:text-[var(--color-light-accent-primary)]" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-[var(--color-dark-text-muted)] dark:text-[var(--color-dark-text-muted)] light:text-[var(--color-light-text-muted)] mb-1">
                    Location
                  </p>
                  <p className="text-base font-medium text-[var(--color-dark-text-body)] dark:text-[var(--color-dark-text-body)] light:text-[var(--color-light-text-body)]">
                    Hyderabad, India
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Section - Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center mb-8">
                <p className="text-sm font-semibold text-[var(--color-dark-text-muted)] dark:text-[var(--color-dark-text-muted)] light:text-[var(--color-light-text-muted)] uppercase tracking-wider">
                  Connect with me
                </p>
              </div>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1, type: 'spring', stiffness: 200 }}
                    whileHover={{ y: -8, scale: 1.15 }}
                    className="group relative"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-[var(--color-dark-bg-elevated)] dark:bg-[var(--color-dark-bg-elevated)] light:bg-[var(--color-light-bg-elevated)] flex flex-col items-center justify-center text-[var(--color-dark-text-body)] dark:text-[var(--color-dark-text-body)] light:text-[var(--color-light-text-body)] hover:text-[var(--color-dark-accent-primary)] dark:hover:text-[var(--color-dark-accent-primary)] light:hover:text-[var(--color-light-accent-primary)] hover:bg-[var(--color-dark-accent-primary)]/10 transition-all duration-300 shadow-lg hover:shadow-2xl border border-[var(--color-dark-text-muted)]/10">
                      <social.icon className="w-8 h-8 mb-1" />
                      <span className="text-xs font-medium">{social.label}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
