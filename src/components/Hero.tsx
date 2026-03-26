"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Creative Background Pattern: Faint dotted grid that fades at the edges */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 2px, transparent 2px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        


        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Satyapal Janghela
        </motion.h1>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-lg md:text-2xl font-semibold text-foreground/80 mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="hover:text-foreground transition-colors cursor-default">Full Stack Developer</span>
          <motion.span 
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-medium/60 text-sm hidden md:inline"
          >
            ●
          </motion.span>
          <span className="hover:text-foreground transition-colors cursor-default block w-full md:w-auto mt-1 md:mt-0">Scalable Web Apps</span>
          <motion.span 
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="text-gray-medium/60 text-sm hidden md:inline"
          >
            ●
          </motion.span>
          <span className="hover:text-foreground transition-colors cursor-default block w-full md:w-auto mt-1 md:mt-0">AI Automation</span>
        </motion.div>

        <motion.p 
          className="max-w-2xl text-lg text-foreground/60 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          I craft fast, scalable, and responsive functional experiences with modern web technologies. Bridging the gap between engineering and elegant design.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 hidden sm:flex"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-foreground/80 transition-all duration-300 w-full sm:w-auto"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-gray-medium text-foreground font-medium rounded-full hover:border-foreground transition-all duration-300 w-full sm:w-auto"
          >
            My Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}
