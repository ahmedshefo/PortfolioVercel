"use client";

import { motion } from "motion/react";
import { BarChart3, Layout, Zap } from "lucide-react";
import InteractiveGame from "./InteractiveGame";

const services = [
  {
    title: "Data Analysis & Insights",
    description: "Transform raw data into meaningful business decisions through advanced statistical methods.",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    title: "Dashboard Development",
    description: "Build interactive, real-time dashboards using Power BI and Excel for high-level visibility.",
    icon: <Layout className="w-6 h-6" />,
    color: "bg-accent",
  },
  {
    title: "Business Optimization",
    description: "Identify trends and improve overall performance using data-driven process improvements.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-purple-500",
  },
];

import { OrbBackground } from "./SectionBackgrounds";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <OrbBackground />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Services Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12 text-center lg:text-left">
              <span className="text-accent font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-3 block">Expertise</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-gray-900 dark:text-white mb-4">
                Services I Offer
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-md mx-auto lg:mx-0">
                Turning complex data into actionable insights for your business growth.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-white dark:bg-white/5 p-6 sm:p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
                    <div className={`p-4 rounded-2xl ${service.color === 'bg-accent' ? 'bg-accent/20 text-accent' : 'bg-blue-500/10 text-blue-500'} group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2">{service.title}</h3>
                      <p className="text-xs md:text-sm lg:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Interactive Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[650px] flex items-center justify-center"
          >
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle,_rgba(190,242,100,0.15)_0%,_transparent_70%)] pointer-events-none" />
            
            <div className="relative w-full h-[500px] md:h-[600px] bg-white/5 dark:bg-black/40 backdrop-blur-3xl rounded-[3rem] border border-gray-100 dark:border-white/10 p-4 shadow-2xl overflow-hidden">
               <InteractiveGame />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
