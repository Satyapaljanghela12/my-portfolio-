"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal, Code2, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-foreground/80 leading-relaxed"
          >
            <p>
              I am a Full Stack Developer with strong experience building scalable and responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
            </p>
            <p>
              Skilled in designing modern user interfaces, developing secure REST APIs, and optimizing backend systems for high performance.
            </p>
            <p>
              Experienced in integrating AI automation workflows, implementing real-time communication systems, and deploying applications on modern cloud platforms. I am passionate about developing efficient software solutions that solve real-world problems.
            </p>
          </motion.div>

          {/* Visual / Sketch */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-96 rounded-2xl bg-white border border-gray-medium/50 overflow-hidden group flex items-center justify-center shadow-sm"
          >
            {/* Image representing a developer coding */}
            <Image 
              src="/avatar-sketch.png"
              alt="Developer sketching and coding"
              fill
              className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            
            {/* Floating Dots for some dynamic effect */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent/40"></div>
            <div className="absolute bottom-12 left-8 w-3 h-3 rounded-full bg-foreground/20"></div>
            <div className="absolute top-1/2 right-12 w-1.5 h-1.5 rounded-full bg-accent"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
