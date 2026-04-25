"use client";

import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ChevronRight, ExternalLink, Github } from "lucide-react";
import { projects } from "../constants";
import { useEffect } from "react";
import { GridBackground } from "../components/SectionBackgrounds";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-accent hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-accent transition-colors mb-12 group font-bold uppercase tracking-widest text-xs"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Main Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="text-accent font-bold tracking-[0.4em] text-xs uppercase mb-4 block">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-950 dark:text-white leading-[0.9] mb-8">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                {project.longDescription}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-12">
              {project.tech.map((t) => (
                <span key={t} className="px-6 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs font-bold uppercase tracking-widest">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a 
                href={project.link}
                className="w-full sm:w-auto px-10 py-5 bg-accent text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:shadow-xl hover:shadow-accent/20 transition-all flex items-center justify-center gap-3"
              >
                Live Demo <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="#"
                className="w-full sm:w-auto px-10 py-5 border border-gray-200 dark:border-white/10 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-gray-100 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                Repo <Github className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Project Image Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video bg-gray-100 dark:bg-white/5 rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-gray-100 dark:border-white/10 shadow-2xl">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            
            {/* Context Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-white dark:bg-white/5 p-6 sm:p-8 rounded-3xl border border-gray-100 dark:border-white/10">
                <h3 className="text-accent font-bold uppercase tracking-widest text-[10px] mb-4">Challenges</h3>
                <ul className="space-y-3">
                  {project.challenges.map((c) => (
                    <li key={c} className="flex gap-2 text-sm text-gray-500 dark:text-gray-400 font-medium leading-tight">
                      <ChevronRight className="w-4 h-4 text-accent shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white dark:bg-white/5 p-6 sm:p-8 rounded-3xl border border-gray-100 dark:border-white/10">
                <h3 className="text-accent font-bold uppercase tracking-widest text-[10px] mb-4">Solutions</h3>
                <ul className="space-y-3">
                  {project.solutions.map((s) => (
                    <li key={s} className="flex gap-2 text-sm text-gray-500 dark:text-gray-400 font-medium leading-tight">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Projects */}
        <div className="mt-24 sm:mt-40 pt-16 sm:pt-20 border-t border-gray-200 dark:border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
            <div>
              <span className="text-accent font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Next Step</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-gray-950 dark:text-white">
                Related <span className="text-accent italic underline decoration-accent/30 underline-offset-4">Work</span>
              </h2>
            </div>
            <Link to="/portfolio" className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-accent transition-colors">
              View All
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.id !== project.id).slice(0, 3).map((p) => (
              <Link 
                key={p.id} 
                to={`/project/${p.id}`}
                className="group block bg-white dark:bg-white/5 rounded-[2.5rem] border border-gray-100 dark:border-white/10 p-8 hover:shadow-2xl transition-all"
              >
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-gray-100 dark:border-white/5">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-xl font-black text-gray-950 dark:text-white tracking-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium line-clamp-2">
                  {p.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
