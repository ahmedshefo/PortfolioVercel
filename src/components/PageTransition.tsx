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
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
