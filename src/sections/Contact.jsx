import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, Github, Linkedin, Copy, Check } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/10 rounded-full blur-[80px] md:blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed px-4">
            I’m currently open to new opportunities. If you’d like to discuss a role, collaboration, or explore how we can work together, feel free to get in touch.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-accent/30 transition-all relative overflow-hidden group shadow-2xl"
        >
          <div className="text-left space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-10 border-b border-white/5 pb-4 md:pb-6 text-center md:text-left">Contact Information</h3>
            
            {/* Email Field */}
            <div className="flex items-start md:items-center gap-4 md:gap-6 group/item">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0 group-hover/item:bg-accent group-hover/item:text-bg transition-all duration-300">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/40 text-[10px] font-mono uppercase tracking-[0.2em] mb-1">Email</p>
                <div className="flex items-center justify-between gap-2 overflow-hidden">
                  <a href={`mailto:${personalInfo.email}`} className="text-sm md:text-lg font-medium hover:text-accent transition-colors break-all md:break-words">
                    {personalInfo.email}
                  </a>
                  <button 
                    onClick={() => copyToClipboard(personalInfo.email)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all shrink-0 relative"
                    title="Copy to clipboard"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div
                          key="check"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                        >
                          <Check size={16} className="text-green-500" />
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-neutral-800 text-white px-2 py-1 rounded whitespace-nowrap">Copied!</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                        >
                          <Copy size={16} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            </div>

            {/* Phone Field */}
            <div className="flex items-center gap-4 md:gap-6 group/item">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0 group-hover/item:bg-accent group-hover/item:text-bg transition-all duration-300">
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/40 text-[10px] font-mono uppercase tracking-[0.2em] mb-1">Phone</p>
                <a href={`tel:${personalInfo.phone}`} className="text-base md:text-lg font-medium hover:text-accent transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 md:pt-8 mt-6 md:mt-10 border-t border-white/5 flex items-center gap-4 md:gap-6 justify-center md:justify-start">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-300">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 md:hidden">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
