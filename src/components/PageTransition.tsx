import { motion, AnimatePresence } from "motion/react";
import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function PageTransition({ children }: { children: React.ReactNode; key?: string }) {
  return (
    <div className="relative">
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
      
      {/* Exit Wipe Phases (Slide IN from Bottom-Left) */}
      <motion.div
        className="fixed inset-[-150%] bg-accent z-[100] pointer-events-none"
        initial={{ x: "-300%", y: "300%", rotate: -20, skewX: -10 }}
        animate={{ x: "-300%", y: "300%", rotate: -20, skewX: -10 }}
        exit={{ x: "0%", y: "0%", rotate: -20, skewX: -10 }}
        transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="fixed inset-[-150%] bg-white dark:bg-black z-[99] pointer-events-none"
        initial={{ x: "-300%", y: "300%", rotate: -20, skewX: -10 }}
        animate={{ x: "-300%", y: "300%", rotate: -20, skewX: -10 }}
        exit={{ x: "0%", y: "0%", rotate: -20, skewX: -10 }}
        transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
      />

      {/* Entry Wipe Phases (Slide OUT to Top-Right) */}
      <motion.div
        className="fixed inset-[-150%] bg-accent z-[100] pointer-events-none"
        initial={{ x: "0%", y: "0%", rotate: -20, skewX: -10 }}
        animate={{ x: "300%", y: "-300%", rotate: -20, skewX: -10 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
      />
      <motion.div
        className="fixed inset-[-150%] bg-white dark:bg-black z-[99] pointer-events-none"
        initial={{ x: "0%", y: "0%", rotate: -20, skewX: -10 }}
        animate={{ x: "300%", y: "-300%", rotate: -20, skewX: -10 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
      />

      {/* Lottie Loading Animation */}
      <motion.div
        className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="w-48 h-48">
          <DotLottieReact
            src="https://lottie.host/211a30b2-d24d-4d33-97f3-7a2c88ba5d54/FeLBrxPchv.lottie"
            loop
            autoplay
          />
        </div>
      </motion.div>
      
      {/* Entry Lottie Animation (hiding it) */}
      <motion.div
        className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="w-48 h-48">
          <DotLottieReact
            src="https://lottie.host/211a30b2-d24d-4d33-97f3-7a2c88ba5d54/FeLBrxPchv.lottie"
            loop
            autoplay
          />
        </div>
      </motion.div>
    </div>
  );
}
