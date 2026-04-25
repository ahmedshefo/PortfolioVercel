"use client";

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../constants";

import { GridBackground } from "./SectionBackgrounds";

export default function PortfolioSection() {
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative h-auto aspect-[4/5] sm:h-[450px] rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0">
                <img 
                   src={project.image} 
                   alt={project.title}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-900/60 to-transparent opacity-80" />
              </div>

              <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-accent/20 backdrop-blur-md rounded-xl flex items-center justify-center text-accent">
                    {project.icon}
                  </div>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-white/80 border border-white/10">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 sm:mb-3 tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 max-w-sm line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 sm:mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 sm:px-3 py-1 bg-accent/10 border border-accent/20 rounded-lg text-[8px] sm:text-[10px] font-black text-accent uppercase tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 transform translate-y-10 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500">
                  <Link 
                    to={`/project/${project.id}`}
                    className="flex items-center gap-2 bg-white text-gray-950 px-4 sm:px-6 py-2 rounded-full font-bold text-[10px] sm:text-xs hover:bg-accent transition-colors"
                  >
                    View Project <ExternalLink className="w-3 h-3" />
                  </Link>
                  <a 
                    href="#"
                    className="w-8 sm:w-10 h-8 sm:h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-3 sm:w-4 h-3 sm:h-4" />
                  </a>
                </div>
              </div>

              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-12 h-12 bg-accent rounded-full blur-2xl opacity-40 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>


        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-center"
        >
          <button className="px-10 py-5 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-black hover:border-accent transition-all">
            See All Repository
          </button>
        </motion.div>
      </div>
    </section>
  );
}
