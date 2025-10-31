'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import CustomCursor from '@/components/CustomCursor';
import PageLoader from '@/components/PageLoader';
import { ToastProvider } from '@/components/Toast';

export default function Home() {
  return (
    <ToastProvider>
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>

      <Footer />
    </ToastProvider>
  );
}
