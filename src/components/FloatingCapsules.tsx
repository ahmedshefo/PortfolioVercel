"use client";

import { motion } from "motion/react";
import { useRef } from "react";

type Capsule = {
  name: string;
  color: string;
};

const capsules: Capsule[] = [
  { name: "Data Strategy", color: "bg-accent" },
  { name: "ETL & Integration", color: "bg-blue-400" },
  { name: "Business Insights", color: "bg-accent/80" },
  { name: "KPI Tracking", color: "bg-green-400" },
  { name: "Data Visualization", color: "bg-accent" },
  { name: "Dashboard Design", color: "bg-pink-300" },
  { name: "Reporting Automation", color: "bg-blue-300" },
  { name: "Power BI Solutions", color: "bg-green-300" },
  { name: "Data Modeling", color: "bg-pink-200" }
];

export default function FloatingCapsules() {
  const constraintsRef = useRef(null);

  return (
    <div ref={constraintsRef} className="relative w-full h-[400px] md:h-full min-h-[300px] md:min-h-[400px] overflow-hidden rounded-[2rem]">
      {capsules.map((item, index) => {
        // Distribute items more evenly but with randomness conditioned on screen size
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const columns = isMobile ? 2 : 3;
        const spacing = isMobile ? 120 : 100;
        
        const initialX = 10 + (index % columns) * spacing + Math.random() * 30;
        const initialY = 10 + Math.floor(index / columns) * 60 + Math.random() * 30;
        
        return (
          <motion.div
            key={index}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.6}
            dragMomentum={true}
            initial={{ x: initialX, y: initialY }}
            whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.95, cursor: "grabbing" }}
            className={`absolute px-6 py-3 rounded-full cursor-grab active:cursor-grabbing ${item.color} text-black font-bold shadow-lg border border-white/20 whitespace-nowrap select-none flex items-center justify-center`}
          >
            {item.name}
          </motion.div>
        );
      })}
      
      {/* Decorative center guide */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
         <div className="w-1/2 h-1/2 border-2 border-dashed border-black dark:border-white rounded-full" />
      </div>
    </div>
  );
}
