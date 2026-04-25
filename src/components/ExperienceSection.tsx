"use client";

import { motion } from "motion/react";
import { Briefcase, Calendar, CheckCircle2, ChevronRight } from "lucide-react";
import { experiences } from "../constants";

import { FlowBackground } from "./SectionBackgrounds";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-white dark:bg-transparent">
      <FlowBackground />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
          <div>
            <span className="text-accent font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Professional Timeline</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-gray-950 dark:text-white leading-[0.9]">
              Work <br />
              <span className="text-accent italic underline decoration-accent/30 underline-offset-8">History</span>
            </h2>
          </div>
          <p className="max-w-md text-gray-500 dark:text-gray-400 text-sm sm:text-lg font-medium leading-relaxed">
            A track record of delivering high-impact BI solutions across logistics, finance, and retail sectors.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group "
            >
              <div className="absolute top-0 left-0 w-0.5 md:w-1 h-full bg-gray-100 dark:bg-white/5 group-hover:bg-accent transition-colors" />
              
              <div className="pl-6 md:pl-12 grid lg:grid-cols-[1fr,2fr] gap-8 md:gap-12 items-start">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-accent mb-2">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">{exp.period}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-950 dark:text-white tracking-tighter">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">
                    <Briefcase className="w-2.5 h-2.5 md:w-3 md:h-3 text-accent" />
                    {exp.company}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-white/5 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-gray-100 dark:border-white/10 group-hover:shadow-2xl group-hover:shadow-accent/5 transition-all">
                  <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 font-medium mb-6 md:mb-8 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex gap-3 text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent shrink-0 mt-0.5" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connector line for the timeline feel */}
              {index !== experiences.length - 1 && (
                <div className="absolute top-[100%] left-0 w-px h-12 bg-linear-to-b from-accent to-transparent ml-[0.5px]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
