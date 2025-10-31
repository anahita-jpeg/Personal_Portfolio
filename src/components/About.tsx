'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Code2, Briefcase, Layers, Coffee } from 'lucide-react';

const stats = [
  { icon: Code2, value: 3, label: 'Years Coding', suffix: '+' },
  { icon: Briefcase, value: 20, label: 'Projects Built', suffix: '+' },
  { icon: Layers, value: 15, label: 'Technologies', suffix: '+' },
  { icon: Coffee, value: 999, label: 'Cups of Coffee', suffix: '+' },
];

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-48 md:py-64 bg-[var(--color-dark-bg-card)] overflow-hidden mb-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/dots.svg')] bg-repeat" />
      </div>

      {/* Floating Particles */}
      <motion.div
        className="absolute top-20 right-20 w-2 h-2 bg-[var(--color-dark-accent-primary)] rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-32 left-32 w-3 h-3 bg-[var(--color-dark-accent-secondary)] rounded-full"
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-md mx-auto">
              {/* Rotating Gradient Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--color-dark-accent-primary)] via-[var(--color-dark-accent-secondary)] to-[var(--color-dark-accent-tertiary)] opacity-75 blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Radial Gradient Background */}
              <div className="absolute inset-0 bg-gradient-radial from-[var(--color-dark-accent-primary)]/20 to-transparent rounded-2xl blur-2xl" />

              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative rounded-2xl overflow-hidden border-4 border-[var(--color-dark-bg-card)] dark:border-[var(--color-dark-bg-card)] light:border-[var(--color-light-bg-card)]"
              >
                <div className="aspect-square bg-gradient-to-br from-[var(--color-dark-accent-primary)]/20 to-[var(--color-dark-accent-secondary)]/20 flex items-center justify-center">
                  {/* Placeholder - Replace with actual image */}
                  <div className="w-full h-full bg-[var(--color-dark-bg-elevated)] flex items-center justify-center text-[var(--color-dark-text-muted)]">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </motion.div>

              {/* Available Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg flex items-center gap-2"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-white rounded-full"
                />
                Available for Work
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="lg:col-span-7">
            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-dark-text-heading)] dark:text-[var(--color-dark-text-heading)] light:text-[var(--color-light-text-heading)] mb-4 font-[family-name:var(--font-space-grotesk)]">
                About Me
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '120px' } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-[var(--color-dark-accent-primary)] to-[var(--color-dark-accent-secondary)] rounded-full"
              />
            </motion.div>

            {/* Paragraphs */}
            <div className="space-y-4 mb-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base md:text-lg text-[var(--color-dark-text-body)] dark:text-[var(--color-dark-text-body)] light:text-[var(--color-light-text-body)] leading-relaxed"
              >
                I'm a passionate Computer Science student and Full-Stack Developer with a love for creating 
                innovative digital solutions. My journey in tech started with curiosity and has evolved into 
                a deep commitment to crafting exceptional user experiences.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base md:text-lg text-[var(--color-dark-text-body)] dark:text-[var(--color-dark-text-body)] light:text-[var(--color-light-text-body)] leading-relaxed"
              >
                I specialize in building modern web applications using cutting-edge technologies like React, 
                Next.js, and TypeScript. I'm particularly passionate about clean code, intuitive design, and 
                solving complex problems with elegant solutions.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base md:text-lg text-[var(--color-dark-text-body)] dark:text-[var(--color-dark-text-body)] light:text-[var(--color-light-text-body)] leading-relaxed"
              >
                Currently, I'm focused on expanding my knowledge in AI/ML integration and cloud technologies, 
                while building projects that make a real difference. When I'm not coding, you'll find me 
                exploring new technologies, contributing to open source, or enjoying a good cup of coffee.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glassmorphism p-6 rounded-xl group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-[var(--color-dark-accent-primary)]/20 to-[var(--color-dark-accent-secondary)]/20 rounded-lg group-hover:from-[var(--color-dark-accent-primary)]/30 group-hover:to-[var(--color-dark-accent-secondary)]/30 transition-all duration-300">
                      <stat.icon className="w-6 h-6 text-[var(--color-dark-accent-primary)] dark:text-[var(--color-dark-accent-primary)] light:text-[var(--color-light-accent-primary)]" />
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-[var(--color-dark-accent-primary)] dark:text-[var(--color-dark-accent-primary)] light:text-[var(--color-light-accent-primary)] mb-1">
                        <Counter end={stat.value} />
                        {stat.suffix}
                      </div>
                      <div className="text-sm text-[var(--color-dark-text-muted)] dark:text-[var(--color-dark-text-muted)] light:text-[var(--color-light-text-muted)]">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

