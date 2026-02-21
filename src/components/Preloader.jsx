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
      className="fixed inset-0 z-[9999] bg-primary flex items-center justify-center flex-col"
    >
      <div className="comic-card bg-white p-12 transform -rotate-3 scale-125">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.1, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="text-6xl font-bangers text-comic-black tracking-widest text-center"
        >
          MIQDAD <span className="text-secondary">FH</span>
        </motion.div>
        
        <div className="mt-8 w-48 h-4 bg-white border-3 border-comic-black relative overflow-hidden">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "0%" }}
            transition={{ duration: 2.5, ease: "linear" }}
            className="absolute inset-0 bg-primary border-r-3 border-comic-black"
          />
        </div>
        
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="mt-4 text-comic-black text-center font-bangers text-lg tracking-widest"
        >
          LOADING...
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
