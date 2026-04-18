"use client";

import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-gray-medium/50 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-bold tracking-tighter inline-block mb-2">
            S<span className="text-accent">J</span>.
          </a>
          <p className="text-sm text-foreground/60">
            Building scalable web applications.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-black dark:hover:text-white hover:scale-125 hover:-rotate-6 transition-all duration-300"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.38 6.52-1.6 6.52-7.01a4.8 4.8 0 0 0-1.3-3.32 4.09 4.09 0 0 0-.08-3.23s-1.09-.35-3.5 1.28a12.8 12.8 0 0 0-6.6 0c-2.4-1.63-3.5-1.28-3.5-1.28a4.09 4.09 0 0 0-.08 3.23 4.8 4.8 0 0 0-1.3 3.32c0 5.39 3.33 6.61 6.51 6.99A4.8 4.8 0 0 0 8 18v4"></path></svg>
          </a>
          <a
            href="https://linkedin.com/in/satyapal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-black dark:hover:text-white hover:scale-125 hover:rotate-6 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a
            href="mailto:satyapaljanghela@gmail.com"
            className="text-foreground/70 hover:text-black dark:hover:text-white hover:scale-125 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="text-sm text-foreground/60">
          &copy; {currentYear} Satyapal Janghela. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
