"use client";

import { motion } from "motion/react";
import { BarChart3, Database, FileText, Github, Instagram, Linkedin, Mail, PieChart } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";
import MagneticWrapper from "../components/MagneticWrapper";

import meImage from "../../public/me.png";
import sqlImage from "../../public/SQL.png";
import excelImage from "../../public/Excel.png";
import figmaImage from "../../public/Figma.png";
import dynImage from "../../public/DYN.png";
import pbiImage from "../../public/PowerBI.png";
import fabricImage from "../../public/fabric.png";

const Typewriter = ({ roles }: { roles: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, roles]);

  const roleColors = [
    "text-blue-500 dark:text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]", // BI Analyst
    "text-emerald-500 dark:text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]", // Data Analyst
    "text-purple-500 dark:text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"  // Business Analyst
  ];

  return (
    <span className="font-mono text-gray-900 dark:text-white font-medium text-[1.1em] tracking-tight">
      <span className="text-accent mr-2">&gt;</span>
      [<span className={`border-r-4 border-current pr-1 animate-pulse mx-1 transition-colors duration-300 ${roleColors[index % roleColors.length]}`}>{roles[index].substring(0, subIndex)}</span>]
    </span>
  );
};

export default function Home() {
  const roles = ["BI Analyst", "Data Analyst", "Business Analyst"];

  return (
    <div className="relative">
      {/* Hero Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[100vh] overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.02, 0.08, 0.02],
            x: [0, -20, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-accent/10 blur-[100px] rounded-full"
        />
      </div>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-32 md:pt-48 pb-20 md:pb-32">
        {/* Statistics Bar */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 0.8 }}
           className="relative overflow-hidden w-full grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-24 py-8 md:py-12 px-6 md:px-8 bg-white/50 dark:bg-white/5 backdrop-blur-xl rounded-3xl md:rounded-[2.5rem] border border-gray-100 dark:border-white/10"
        >
           {/* Animated Background */}
           <motion.div 
             animate={{ x: ['-100%', '100%'] }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             className="absolute inset-0 -left-full -right-full z-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.03)_50%,transparent_100%)] dark:bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] pointer-events-none"
           />
           {[
             { label: "Dashboards Built", value: "50+" },
             { label: "Data Accuracy", value: "100%" },
             { label: "Coaching Sessions", value: "100+" },
             { label: "Global Projects", value: "12+" },
           ].map((stat, i) => (
             <div key={i} className="text-center relative z-10">
               <div className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-950 dark:text-white tracking-tighter mb-1">
                 {stat.value}
               </div>
               <div className="text-[8px] sm:text-[10px] uppercase font-bold tracking-widest text-accent">
                 {stat.label}
               </div>
               {i < 3 && (
                 <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-gray-200 dark:bg-white/10" />
               )}
             </div>
           ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col gap-2 mb-6"
            >
              <span className="text-accent font-bold tracking-[0.2em] text-sm uppercase">👋 I'am</span>
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-gray-950 dark:text-white mb-4 leading-none flex flex-col italic overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: 100 },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                >
                  Ahmed
                </motion.span>
                <motion.span 
                  variants={{
                    hidden: { y: 100 },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }
                  }}
                  className="text-accent -mt-2"
                >
                  El-Feel
                </motion.span>
              </h1>
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                className="h-12 flex items-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-gray-400 dark:text-gray-500 flex items-center gap-3">
                  <Typewriter roles={roles} />
                </div>
              </motion.div>
            </motion.div>

            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-12"
            >
              Transforming <span className="text-accent">Complex Data</span> into clear, actionable insights.
            </motion.h2>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticWrapper>
                <a 
                  href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=ahmed-shefoo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative overflow-hidden px-8 py-4 bg-accent text-white dark:text-black rounded-2xl font-bold text-base hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/20 transition-all active:scale-95 flex items-center gap-3 group block"
                >
                  <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-[200%] group-hover:animate-[shimmer_1.5s_infinite]" />
                  <Linkedin className="w-5 h-5" />
                  Follow me on LinkedIn
                </a>
              </MagneticWrapper>
              
              <MagneticWrapper>
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-white/10 rounded-2xl font-bold text-base hover:border-accent/50 hover:bg-gray-200 dark:hover:bg-white/10 transition-all active:scale-95 flex items-center gap-3 block"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  Contact Me
                </Link>
              </MagneticWrapper>
            </motion.div>


            {/* Social Integration */}
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              className="mt-16 flex items-center gap-6"
            >
               <div className="h-px w-12 bg-gray-200 dark:bg-white/10" />
               <div className="flex gap-4">
                 <motion.a 
                  whileHover={{ y: -3, color: "var(--color-accent)" }}
                  href="https://www.linkedin.com/in/ahmed-shefoo" target="_blank" rel="noopener noreferrer"
                >
                   <Linkedin className="w-5 h-5 text-gray-400 cursor-pointer transition-colors" />
                 </motion.a>
                 <motion.a 
                  whileHover={{ y: -3, color: "var(--color-accent)" }}
                  href="https://github.com/ahmedshefo" target="_blank" rel="noopener noreferrer"
                >
                   <Github className="w-5 h-5 text-gray-400 cursor-pointer transition-colors" />
                 </motion.a>
                 <motion.a 
                  whileHover={{ y: -3, color: "var(--color-accent)" }}
                  href="https://instagram.com/elfeel_analyst" target="_blank" rel="noopener noreferrer"
                >
                   <Instagram className="w-5 h-5 text-gray-400 cursor-pointer transition-colors" />
                 </motion.a>
               </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Photo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-4/5 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden group">
              <img 
                src={meImage} 
                alt="Ahmed El-Feel" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  console.error("Image failed to load:", meImage);
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-white/10 hidden">
                <BarChart3 className="w-32 h-32 opacity-20" />
              </div>
              <div className="absolute top-8 right-8 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-8 left-8 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Floating Items with actual images */}
            <motion.div 
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-20 -left-16 p-2 bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 z-20 flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-white dark:bg-white/5 rounded-lg flex items-center justify-center overflow-hidden p-1.5 shadow-sm">
                <img src={sqlImage} alt="SQL Server" className="w-full h-full object-contain" />
              </div>
              <span className="text-[10px] font-black tracking-widest uppercase text-gray-500 dark:text-white/60 pr-2">SQL Server</span>
            </motion.div>

            <motion.div 
              animate={{ y: [20, 0, 20], x: [-10, 0, -10] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute top-40 -left-12 p-2 bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 z-20 flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-white dark:bg-white/5 rounded-lg flex items-center justify-center overflow-hidden p-1.5 shadow-sm">
                <img src={excelImage} alt="Excel" className="w-full h-full object-contain" />
              </div>
              <span className="text-[10px] font-black tracking-widest uppercase text-gray-500 dark:text-white/60 pr-2">Excel</span>
            </motion.div>

            <motion.div 
              animate={{ y: [-15, 15, -15], x: [5, -5, 5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 left-10 p-2 bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 z-20 flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-white dark:bg-white/5 rounded-lg flex items-center justify-center overflow-hidden p-1.5 shadow-sm">
                <img src={figmaImage} alt="Figma" className="w-full h-full object-contain" />
              </div>
              <span className="text-[10px] font-black tracking-widest uppercase text-gray-500 dark:text-white/60 pr-2">Figma</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0], x: [0, 15, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-32 -right-12 p-2 bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 z-40 flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-white dark:bg-white/5 rounded-lg flex items-center justify-center overflow-hidden p-1.5 shadow-sm">
                <img src={dynImage} alt="Dynamics" className="w-full h-full object-contain" />
              </div>
              <span className="text-[10px] font-black tracking-widest uppercase text-gray-500 dark:text-white/60 pr-2">Dynamics</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-10 -right-10 p-2 bg-white/60 dark:bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 z-30"
            >
              <div className="w-12 h-12 bg-white dark:bg-white/5 rounded-lg flex items-center justify-center overflow-hidden p-1.5 shadow-sm">
                <img src={pbiImage} alt="Power BI" className="w-full h-full object-contain" />
              </div>
              <div className="pr-2">
                <p className="text-[10px] font-black uppercase text-accent mb-0.5">Primary Tool</p>
                <p className="text-xs font-black dark:text-white">Power BI</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-1/2 -right-16 p-2 bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 z-20 flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-white dark:bg-white/5 rounded-lg flex items-center justify-center overflow-hidden p-1.5 shadow-sm">
                <img src={fabricImage} alt="Microsoft Fabric" className="w-full h-full object-contain" />
              </div>
              <span className="text-[10px] font-black tracking-widest uppercase text-gray-500 dark:text-white/60 pr-2">Fabric</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -right-6 p-4 bg-white/60 dark:bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-3 z-30"
            >
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent text-sm font-bold">
                 +40
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-white/60">Projects Completed</div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Sections */}
      <AboutSection />
      <ExperienceSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
