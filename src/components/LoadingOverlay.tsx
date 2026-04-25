import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "motion/react";

export default function LoadingOverlay() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-white dark:bg-[#0a0a0a] flex items-center justify-center p-6"
    >
      <div className="max-w-md w-full text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-8"
        >
          <DotLottieReact
            src="https://lottie.host/211a30b2-d24d-4d33-97f3-7a2c88ba5d54/FeLBrxPchv.lottie"
            loop
            autoplay
          />
        </motion.div>
        
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.5 }}
        >
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter text-gray-950 dark:text-white uppercase">
             Ahmed <span className="text-accent">El-Feel</span>
           </h2>
           <p className="text-gray-400 dark:text-gray-500 text-[10px] sm:text-sm font-medium tracking-widest mt-2 uppercase">
             Loading Experience...
           </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
