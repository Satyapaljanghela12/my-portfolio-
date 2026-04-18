"use client";

import { motion } from "framer-motion";
import { Globe, Server, Bot } from "lucide-react";

const SERVICES = [
  {
    id: 1,
    title: "Full Stack Development",
    description: "End-to-end web application development using the MERN stack and Next.js, focusing on responsive design and seamless user experiences.",
    icon: <Globe size={32} className="text-accent" />
  },
  {
    id: 2,
    title: "API Design & Integration",
    description: "Designing and integrating secure, high-performance REST APIs and real-time WebSocket communication systems.",
    icon: <Server size={32} className="text-accent" />
  },
  {
    id: 3,
    title: "AI Automation Workflows",
    description: "Building intelligent systems that integrate NLP and voice interfaces to streamling tasks and enhance application interactivity.",
    icon: <Bot size={32} className="text-accent" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
            Services
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
          <p className="mt-6 text-foreground/60 max-w-2xl mx-auto">
            Leveraging modern web technologies and AI integrations to build scalable software solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-soft dark:bg-gray-soft/50 rounded-2xl p-8 border border-gray-medium/50 hover:border-black/60 dark:hover:border-white/40 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="mb-6 p-4 bg-background dark:bg-gray-medium rounded-full w-fit shadow-sm group-hover:-translate-y-2 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
