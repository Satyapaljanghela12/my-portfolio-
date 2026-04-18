"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Play, FileText, Code } from "lucide-react";

export default function Content() {
  return (
    <section id="content" className="relative py-32 bg-background overflow-hidden">
      {/* Creative Background Pattern: Faint dotted grid that fades at the edges */}
      <div 
        className="absolute inset-0 pointer-events-none dark:opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.06) 2px, transparent 2px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)',
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text & Cards area */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-6xl md:text-8xl font-black text-foreground tracking-tighter mb-4">
                Content<span className="text-gray-medium/40">.</span>
              </h2>
              <p className="text-xl text-foreground/70 mb-12 max-w-lg leading-relaxed font-medium">
                I regularly share technical deep-dives, open-source projects, and insights on building scalable web architecture.
              </p>
            </motion.div>

            {/* Creative Bento Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 hide-scrollbar">
              <motion.a 
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -8, scale: 1.03, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)" }}
                className="group p-8 rounded-[2rem] bg-gray-soft dark:bg-gray-soft/50 border border-gray-medium/30 hover:border-black/40 dark:hover:border-white/40 flex flex-col justify-between aspect-square relative overflow-hidden transition-colors duration-300"
              >
                <div className="p-4 bg-background dark:bg-gray-medium rounded-full w-fit shadow-sm">
                  <FileText size={28} className="text-foreground" />
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold tracking-tight mb-2 text-foreground">Technical Articles</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">Deep dives into React, Next.js, and scaling backend systems for the modern web.</p>
                </div>
                <div className="absolute top-8 right-8 w-10 h-10 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-sm">
                  <ArrowUpRight size={20} className="text-foreground" />
                </div>
              </motion.a>

              <div className="flex flex-col gap-5">
                <motion.a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ x: 8, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)" }}
                  className="group p-8 rounded-[2rem] bg-foreground hover:bg-black dark:hover:bg-white dark:hover:text-black text-background flex-1 flex flex-col justify-center relative overflow-hidden shadow-lg transition-colors duration-300"
                >
                  <Code size={24} className="mb-4 opacity-70" />
                  <h3 className="text-2xl font-bold tracking-tight mb-2">Open Source</h3>
                  <p className="text-background/70 text-sm">Explore my latest GitHub repositories and contributions.</p>
                  <ArrowUpRight size={24} className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <motion.a 
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ x: 8, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)" }}
                  className="group p-8 rounded-[2rem] bg-background dark:bg-gray-medium border border-gray-medium/50 hover:border-black/40 dark:hover:border-white/40 flex-1 flex flex-col justify-center relative shadow-sm transition-colors duration-300"
                >
                  <Play size={24} className="mb-4 text-foreground/70" />
                  <h3 className="text-2xl font-bold text-foreground tracking-tight mb-2">Tech Talks</h3>
                  <p className="text-foreground/60 text-sm">Video tutorials and workflow automation strategies.</p>
                  <ArrowUpRight size={24} className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-foreground" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right Silhouette/Sketch Area */}
          <motion.div 
            className="flex-1 w-full relative h-[600px] hidden xl:block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Creative Image Container */}
            <div className="absolute inset-4 bg-gradient-to-br from-gray-soft/80 dark:from-gray-soft/30 to-transparent border border-gray-medium/20 rounded-[3rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-lg flex items-center justify-center">
              <Image 
                src="/content-sketch.png"
                alt="Developer Sketch"
                fill
                className="object-contain p-10"
              />
            </div>
            
            {/* Decorative Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-background dark:bg-gray-medium border border-gray-medium/30 rounded-full flex items-center justify-center shadow-lg"
            >
              <div className="w-3 h-3 bg-foreground rounded-full"></div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
