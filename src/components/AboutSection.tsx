"use client";

import { motion } from "motion/react";
import { Award, Briefcase, GraduationCap, Heart, Lightbulb, Target, TrendingUp, Database, PieChart } from "lucide-react";

const stats = [
  { label: "Founded on", value: "2021" },
  { label: "Success Rate", value: "98%" },
  { label: "Data Points Analyzed", value: "10M+" },
  { label: "Happy Clients", value: "50+" },
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Precision",
    description: "In data, every decimal matters. I ensure absolute accuracy in every report.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    description: "Finding new ways to visualize complex dimensions and reveal hidden trends.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Passion",
    description: "I don't just crunch numbers; I tell stories that drive business growth.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-gray-50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Bio & Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-10">
              <span className="text-accent font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Personal Narrative</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-950 dark:text-white mb-8 leading-[0.9]">
                Decoding the <br />
                <span className="text-accent underline decoration-accent/30 underline-offset-8 italic">Invisible</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                <p>
                  As a results-driven Business Intelligence Analyst and Data Analyst, I specialize in transforming raw, complex datasets into clear, actionable insights. With expertise in Power BI (PL-300), SQL, and Microsoft Fabric, I architect solutions that drive strategic decisions.
                </p>
                <p className="text-gray-400 dark:text-gray-500 text-lg italic border-l-4 border-accent pl-6 py-2">
                  "Expert in data storytelling, ETL processes, and delivering high-impact BI ecosystems for organizations like the Ministry of Labour (Oman)."
                </p>
                <p className="text-base text-gray-500">
                  I've developed critical dashboards for BPO KSA Leading Company and acted as a Microsoft Gold Student Ambassador, mentoring global participants in cloud analytics and Power Platform development.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-gray-50 dark:bg-white/5 rounded-[2.5rem] border border-gray-100 dark:border-white/10">
                <h3 className="text-accent font-bold uppercase tracking-widest text-[10px] mb-6">Education</h3>
                <div className="space-y-4 text-sm font-medium text-gray-500">
                  <p className="text-gray-950 dark:text-white font-bold">Kafr El-Sheikh University</p>
                  <p>BBA, Business Administration (English Section)</p>
                  <div className="flex justify-between text-[10px] uppercase tracking-tighter opacity-70">
                    <span>Oct 2021 – Jul 2025</span>
                    <span>Grade: Good</span>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gray-50 dark:bg-white/5 rounded-[2.5rem] border border-gray-100 dark:border-white/10">
                <h3 className="text-accent font-bold uppercase tracking-widest text-[10px] mb-6">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {["Fabric (DP-600)", "Power BI (PL-300)", "Azure (AZ-104)", "Power Apps (PL-100)"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white dark:bg-white/10 border border-gray-100 dark:border-white/20 rounded-full text-[10px] uppercase font-black tracking-widest">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Experience & Values */}
          <div className="lg:sticky lg:top-32 space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              <div className="relative bg-white dark:bg-white/5 p-10 rounded-[2.5rem] border border-gray-100 dark:border-white/10 shadow-2xl backdrop-blur-3xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-950 dark:text-white tracking-tight">Main Focus</h3>
                    <p className="text-accent text-sm font-bold uppercase tracking-widest">Core Disciplines</p>
                  </div>
                </div>
                
                <div className="grid gap-6">
                   <div className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover/item:bg-accent group-hover/item:text-black transition-all">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">Predictive Sales Analytics</span>
                   </div>
                   <div className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover/item:bg-accent group-hover/item:text-black transition-all">
                        <Database className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">Warehouse Performance KPIs</span>
                   </div>
                   <div className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover/item:bg-accent group-hover/item:text-black transition-all">
                        <PieChart className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">Supply Chain Dashboarding</span>
                   </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-3 gap-4">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/50 dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/5 text-center group transition-all"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-accent mb-3 flex justify-center"
                  >
                    {value.icon}
                  </motion.div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {value.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Technical Infrastructure Skills Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-20 border-t border-gray-200 dark:border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-accent font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Ecosystem</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-950 dark:text-white leading-[0.9]">
                Technical <br />
                <span className="text-accent italic underline decoration-accent/30 underline-offset-8">Infrastructure</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Power BI", level: "PL-300 Certified", color: "text-amber-500", image: "/PowerBI.png" },
              { name: "Microsoft Fabric", level: "DP-600 Mastery", color: "text-blue-500", image: "/fabric.png" },
              { name: "SQL Server", level: "T-SQL Specialist", color: "text-blue-600", image: "/SQL.png" },
              { name: "Excel DAX", level: "Formula Architect", color: "text-emerald-600", image: "/Excel.png" },
              { name: "Figma", level: "Data Visualization", color: "text-purple-500", image: "/Figma.png" },
              { name: "Dynamics", level: "CRM Integration", color: "text-brand-500", image: "/DYN.png" },
              { name: "Python", level: "Pandas & Numpy", color: "text-green-600" },
              { name: "Power Query", level: "ETL Processes", color: "text-orange-500" },
            ].map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  mass: 0.5,
                  delay: idx * 0.1
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/10 group relative transition-all overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-4">
                  {skill.image ? (
                    <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-white/5 rounded-xl p-1 shadow-sm">
                      <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-xl text-accent font-black text-xl">
                      {skill.name[0]}
                    </div>
                  )}
                </div>
                <div className={`text-xl font-black mb-1 group-hover:text-accent transition-colors ${skill.color}`}>
                  {skill.name}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  {skill.level}
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
