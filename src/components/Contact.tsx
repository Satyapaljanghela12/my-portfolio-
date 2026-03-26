"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Loader2 } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
          <p className="mt-6 text-foreground/60 max-w-2xl mx-auto">
            Have a project in mind or want to discuss scalable systems? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            className="md:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-soft rounded-full text-accent">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-1">Email</h4>
                <a href="mailto:satyapaljanghela@gmail.com" className="text-foreground/70 hover:text-accent transition-colors">
                  satyapaljanghela@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-soft rounded-full text-accent">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-1">Location</h4>
                <p className="text-foreground/70">
                  Remote / Worldwide
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="md:col-span-3 bg-background border border-gray-medium/50 rounded-2xl p-8 shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-gray-soft border border-gray-medium/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-foreground transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-gray-soft border border-gray-medium/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-foreground transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-soft border border-gray-medium/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-foreground transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background font-medium py-3.5 px-6 rounded-lg hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
