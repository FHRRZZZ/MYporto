import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ finishLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => finishLoading(), 2500);
    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-secondary-dark flex items-center justify-center flex-col"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="text-4xl font-bold tracking-tighter text-primary mb-8"
      >
        MIQDAD <span className="text-white">FH</span>
      </motion.div>
      <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute top-0 w-full h-full bg-primary shadow-[0_0_15px_rgba(29,78,216,0.8)]"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-4 text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em]"
      >
        Initializing Digital Universe
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
