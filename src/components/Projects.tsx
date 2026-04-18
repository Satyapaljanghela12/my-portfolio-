"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "VolConnect",
    description: "Built a volunteer coordination platform connecting 100+ volunteers with 20+ NGOs. Implemented authentication workflows, database logic, and real-time updates.",
    imageColor: "from-blue-500/20 to-indigo-500/20",
    tags: ["Next.js", "Supabase", "WebSocket.io"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Agri Tech Management System",
    description: "Developed a full stack agricultural management system improving crop planning efficiency by 25%. Automated farm management activities reducing manual effort by approximately 30%.",
    imageColor: "from-emerald-500/20 to-teal-500/20",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Voice Assistant Chatbot",
    description: "Developed a voice enabled chatbot using Web Speech API supporting multiple voice commands. Achieved ~95% speech recognition accuracy through optimized audio handling.",
    imageColor: "from-purple-500/20 to-pink-500/20",
    tags: ["HTML", "CSS", "JavaScript", "Web Speech API"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-background dark:bg-gray-soft/30 border border-gray-medium/50 rounded-2xl overflow-hidden hover:border-black/60 dark:hover:border-white/40 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Image Placeholder with Gradient */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.imageColor} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-background/10 backdrop-blur-[2px]"></div>
                
                {/* Abstract UI wires inside placeholder */}
                <div className="absolute inset-x-4 bottom-0 h-32 bg-background dark:bg-gray-medium rounded-t-lg shadow-sm transform translate-y-8 group-hover:translate-y-6 transition-transform duration-500 opacity-90">
                  <div className="flex px-3 py-2 border-b border-gray-medium/30 dark:border-gray-medium gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="h-2 w-3/4 bg-gray-medium/50 dark:bg-gray-soft rounded"></div>
                    <div className="h-2 w-1/2 bg-gray-medium/50 dark:bg-gray-soft rounded"></div>
                    <div className="h-2 w-5/6 bg-gray-medium/50 dark:bg-gray-soft rounded"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground/70 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 text-xs font-medium bg-gray-soft dark:bg-gray-medium text-foreground/80 rounded-md border border-gray-medium/40 dark:border-gray-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-medium/30">
                  <a 
                    href={project.github}
                    className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-black dark:hover:text-white hover:gap-2 transition-all duration-300"
                    aria-label={`View ${project.title} source code`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.38 6.52-1.6 6.52-7.01a4.8 4.8 0 0 0-1.3-3.32 4.09 4.09 0 0 0-.08-3.23s-1.09-.35-3.5 1.28a12.8 12.8 0 0 0-6.6 0c-2.4-1.63-3.5-1.28-3.5-1.28a4.09 4.09 0 0 0-.08 3.23 4.8 4.8 0 0 0-1.3 3.32c0 5.39 3.33 6.61 6.51 6.99A4.8 4.8 0 0 0 8 18v4"></path></svg>
                    <span>Source</span>
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-black dark:hover:text-white hover:gap-2 transition-all duration-300 ml-auto group/link"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <span>View Live</span>
                    <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
