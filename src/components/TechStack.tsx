"use client";

import { motion } from "framer-motion";

const TECHNOLOGIES = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "HTML5/CSS3", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "REST APIs", category: "Web Dev" },
  { name: "WebSocket.io", category: "Web Dev" },
  { name: "Cloud Deploy", category: "Vercel, Netlify, AWS" },
  { name: "AI Automation", category: "Additional" },
];

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="skills" className="py-24 bg-gray-soft dark:bg-gray-soft/30">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
          <p className="mt-6 text-foreground/60 max-w-2xl mx-auto">
            My primary toolkit for building scalable, high-performance web applications.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {TECHNOLOGIES.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 10px 20px -8px rgba(0, 0, 0, 0.1)"
              }}
              className="flex items-center gap-3 px-6 py-4 bg-background dark:bg-gray-medium border border-gray-medium/50 rounded-2xl cursor-default transition-colors hover:border-black/50 dark:hover:border-white/50"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-foreground">{tech.name}</span>
                <span className="text-xs text-foreground/50 font-medium tracking-wide uppercase">{tech.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
