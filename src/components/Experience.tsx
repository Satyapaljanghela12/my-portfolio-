"use client";

import { motion } from "framer-motion";
import { Briefcase, Trophy, GraduationCap } from "lucide-react";

const EXPERIENCES = [
  {
    id: 1,
    type: "work",
    title: "Full Stack Developer",
    organization: "Bluestock.in",
    date: "April 2025 – June 2025",
    description: "Developed full stack application features using React.js and Node.js improving responsiveness and user interaction. Built secure REST APIs for authentication and backend data operations. Optimized MongoDB and SQL queries improving database efficiency and reducing API latency by 30%.",
    icon: <Briefcase size={20} className="text-white" />
  },
  {
    id: 2,
    type: "achievement",
    title: "3rd Position Winner",
    organization: "Fibohack 1.0",
    date: "2025",
    description: "Secured 3rd Position among multiple competing engineering teams. Solved 300+ algorithmic problems across coding platforms including LeetCode and CodeChef.",
    icon: <Trophy size={20} className="text-white" />
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-soft">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div 
          className="mb-16 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto md:mx-0 relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-10 top-0 bottom-0 w-px bg-gray-medium/80"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-20 md:pl-28 pr-4"
              >
                {/* Timeline Dot/Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="absolute left-[1.1rem] md:left-[1.6rem] top-0 w-12 h-12 rounded-full bg-foreground flex items-center justify-center shadow-md shadow-gray-medium/50 z-10 border-4 border-gray-soft"
                >
                  {exp.icon}
                </motion.div>

                {/* Content Card */}
                <div className="bg-background rounded-2xl p-6 md:p-8 border border-gray-medium/50 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-foreground/80 transition-colors">
                      {exp.title}
                    </h3>
                    <span className="text-sm font-medium text-background bg-foreground px-3 py-1 rounded-full w-fit">
                      {exp.date}
                    </span>
                  </div>
                  
                  <h4 className="text-md font-medium text-foreground/70 mb-4">
                    {exp.organization}
                  </h4>
                  
                  <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
