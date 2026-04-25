"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, PieChart, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../constants";

import { GridBackground } from "./SectionBackgrounds";

export default function PortfolioSection() {
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-accent font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Selected Works</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-950 dark:text-white leading-none">
              Case <span className="text-accent italic">Studies</span>
            </h2>
          </div>
          <p className="max-w-md text-gray-500 dark:text-gray-400 text-lg font-medium">
            Exploring the intersection of complex data structures and strategic visual communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative h-auto aspect-square rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-white/10 shadow-3xl bg-white dark:bg-gray-900 transition-all duration-500 hover:shadow-accent/10"
            >
              {/* Background with parallax effect */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.img 
                   src={project.image} 
                   alt={project.title}
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/20 to-transparent opacity-95" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-12 h-12 bg-accent/20 backdrop-blur-2xl rounded-2xl flex items-center justify-center text-accent border border-accent/20 shadow-xl"
                  >
                    {project.icon}
                  </motion.div>
                  <span className="px-4 py-1.5 bg-white/10 backdrop-blur-2xl rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white border border-white/10 shadow-lg">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="font-black text-white text-3xl sm:text-4xl mb-4 tracking-tighter leading-tight group-hover:text-accent transition-colors duration-500">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 font-medium text-sm sm:text-base mb-8 line-clamp-2 leading-relaxed transition-all duration-500 group-hover:text-white max-w-md">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/10 rounded-xl text-[9px] font-black text-gray-300 hover:text-accent uppercase tracking-[0.1em] transition-all cursor-default">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black text-gray-400 uppercase tracking-[0.1em]">
                      +{project.tech.length - 3} More
                    </span>
                  )}
                </div>

                <div className="flex gap-4 transform lg:translate-y-6 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-700 delay-100">
                  <Link 
                    to={`/project/${project.id}`}
                    className="flex items-center justify-center gap-3 bg-white text-gray-950 px-6 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-accent transition-all hover:scale-105 active:scale-95 shadow-2xl"
                  >
                    Details <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                  <a 
                    href="https://github.com/ahmedshefo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-10 group-hover:translate-y-0 pointer-events-none">
                   <div className="bg-accent/10 backdrop-blur-3xl p-4 rounded-3xl border border-accent/20">
                      <PieChart className="w-8 h-8 text-accent animate-pulse" />
                   </div>
                </div>

                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                   <div className="w-40 h-40 bg-accent rounded-full blur-[100px] opacity-20 animate-pulse" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>


        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-center"
        >
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-3 px-10 py-5 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-black hover:border-accent transition-all shadow-xl active:scale-95"
          >
            {showAll ? (
              <>
                Collapse Projects <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
              </>
            ) : (
              <>
                View All Case Studies <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
