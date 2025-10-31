'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if it's a touch device
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();

    if (isTouchDevice) return;

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
        setCursorVariant('link');
      } else if (target.tagName === 'IMG' || target.closest('img')) {
        setCursorVariant('image');
      }
    };

    const handleMouseLeave = () => {
      setCursorVariant('default');
    };

    window.addEventListener('mousemove', mouseMove);
    document.querySelectorAll('a, button, img').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.body.style.cursor = 'auto';
      document.querySelectorAll('a, button, img').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 40,
      height: 40,
      backgroundColor: 'transparent',
      border: '2px solid var(--color-dark-accent-primary)',
    },
    link: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      width: 60,
      height: 60,
      backgroundColor: 'rgba(0, 217, 255, 0.1)',
      border: '2px solid var(--color-dark-accent-primary)',
    },
    image: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      width: 50,
      height: 50,
      backgroundColor: 'rgba(183, 148, 246, 0.1)',
      border: '2px solid var(--color-dark-accent-secondary)',
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: 'tween',
          duration: 0.15,
          ease: 'easeOut',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[var(--color-dark-accent-primary)] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: 'tween',
          duration: 0.05,
          ease: 'linear',
        }}
      />
    </>
  );
}

