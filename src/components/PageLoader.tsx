'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--color-dark-bg-base)] dark:bg-[var(--color-dark-bg-base)] light:bg-[var(--color-light-bg-base)]"
        >
          <div className="text-center">
            {/* Animated Logo/Spinner */}
            <motion.div
              className="relative w-20 h-20 mx-auto mb-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute inset-0 rounded-full border-4 border-[var(--color-dark-accent-primary)]/20" />
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[var(--color-dark-accent-primary)] border-r-[var(--color-dark-accent-secondary)]" />
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-[var(--color-dark-bg-card)] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--color-dark-accent-primary)] to-[var(--color-dark-accent-secondary)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Percentage */}
            <motion.p
              className="mt-4 text-[var(--color-dark-text-muted)] font-mono text-sm"
              key={progress}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {progress}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

