'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

interface EducationItem {
  title: string;
  organization: string;
  location: string;
  date: string;
  current?: boolean;
  gpa: string;
  logo?: string;
}

const educationData: EducationItem[] = [
  {
    title: 'Bachelor of Technology in Computer Science Engineering',
    organization: 'University Name',
    location: 'Hyderabad, India',
    date: '2021 - 2025 (Expected)',
    current: true,
    gpa: '9.7/10.0',
    logo: '🎓',
  },
  {
    title: 'Intermediate (11th & 12th Grade)',
    organization: 'Sri Chaitanya Educational Institutions',
    location: 'Hyderabad, India',
    date: '2019 - 2021',
    gpa: '92%',
    logo: '📚',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-48 md:py-64 bg-[var(--color-dark-bg-base)] overflow-hidden mb-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-[var(--color-dark-accent-primary)] rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-dark-text-heading)] mb-6 font-[family-name:var(--font-space-grotesk)]">
            Education
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-dark-text-body)] max-w-2xl mx-auto mb-6">
            My academic journey and achievements
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '120px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[var(--color-dark-accent-primary)] to-[var(--color-dark-accent-secondary)] rounded-full mx-auto"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-dark-accent-primary)] via-[var(--color-dark-accent-secondary)] to-[var(--color-dark-accent-primary)] transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-16 lg:space-y-20">
            {educationData.map((item, index) => (
              <motion.div
                key={item.title + index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } flex-col lg:gap-12`}
              >
                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="w-full lg:w-[calc(50%-3rem)] glassmorphism p-8 md:p-10 rounded-2xl group border border-[var(--color-dark-text-muted)]/10 hover:border-[var(--color-dark-accent-primary)]/30 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-6 mb-6">
                    <div className="flex items-start gap-5 flex-1">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-dark-accent-primary)]/20 to-[var(--color-dark-accent-secondary)]/20 flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {item.logo}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--color-dark-text-heading)] mb-3 group-hover:text-[var(--color-dark-accent-primary)] transition-colors duration-300 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-base md:text-lg font-semibold text-[var(--color-dark-text-body)] mb-4">
                          {item.organization}
                        </p>
                      </div>
                    </div>

                    {/* GPA Badge */}
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 3 }}
                      className="flex-shrink-0"
                    >
                      <div className="bg-gradient-to-br from-[var(--color-dark-accent-primary)]/20 to-[var(--color-dark-accent-secondary)]/20 border-2 border-[var(--color-dark-accent-primary)]/30 rounded-xl p-4 text-center min-w-[120px]">
                        <Award className="w-6 h-6 text-[var(--color-dark-accent-primary)] mx-auto mb-2" />
                        <p className="text-xs text-[var(--color-dark-text-muted)] mb-1 uppercase tracking-wider">
                          {item.current ? 'CGPA' : 'Score'}
                        </p>
                        <p className="text-2xl font-bold text-[var(--color-dark-accent-primary)]">
                          {item.gpa}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-5 text-sm text-[var(--color-dark-text-muted)]">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[var(--color-dark-accent-primary)]" />
                      {item.date}
                      {item.current && (
                        <span className="ml-2 px-3 py-0.5 bg-green-500 text-white rounded-full text-xs font-bold">
                          PRESENT
                        </span>
                      )}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[var(--color-dark-accent-primary)]" />
                      {item.location}
                    </span>
                  </div>

                  {/* Hover Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(0, 217, 255, 0.05) 0%, transparent 70%)',
                    }}
                  />
                </motion.div>

                {/* Center Dot (Desktop) */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.2, type: 'spring' }}
                  className="hidden lg:block absolute left-1/2 transform -translate-x-1/2"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-5 h-5 rounded-full bg-gradient-to-r from-[var(--color-dark-accent-primary)] to-[var(--color-dark-accent-secondary)] shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--color-dark-accent-primary)] to-[var(--color-dark-accent-secondary)] blur-md opacity-50" />
                </motion.div>

                {/* Mobile Timeline Line and Dot */}
                <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-dark-accent-primary)] to-[var(--color-dark-accent-secondary)]" />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="lg:hidden absolute left-6 top-10 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[var(--color-dark-accent-primary)] to-[var(--color-dark-accent-secondary)]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
