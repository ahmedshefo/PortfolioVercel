"use client";

import { Github, Instagram, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-gray-100 dark:border-white/5 bg-white dark:bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-0">
               <span className="text-2xl font-black tracking-tighter text-accent">A</span>
               <span className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white">S</span>
            </div>
            <p className="text-gray-500 text-sm font-medium">
              © {new Date().getFullYear()} Ahmed El-Feel. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/ahmed-shefoo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/ahmedshefo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/elfeel_analyst" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:a.shefoo3333@gmail.com" className="w-10 h-10 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-white/5 text-center">
           <p className="text-[10px] text-gray-400 uppercase tracking-[0.5em] font-medium">
             Designed for Data Experts • Powered by Insights
           </p>
        </div>
      </div>
    </footer>
  );
}
