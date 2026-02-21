import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Code2, Globe } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Hero = ({ darkMode }) => (
  <section id="home" className={`min-h-screen flex items-center pt-28 pb-12 relative overflow-hidden transition-colors ${darkMode ? 'bg-slate-900' : 'bg-comic-paper'}`}>
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, rotate: -2 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.5 }}
        className="comic-card relative"
      >
        <div className="absolute -top-6 -left-4 comic-badge bg-secondary text-white transform rotate-[-10deg] text-xl px-4 py-2">
          HALO!
        </div>
        
        <h1 className="text-6xl md:text-8xl mb-6 leading-none text-comic-black dark:text-white">
          I'M <span className="text-primary inline-block transform hover:scale-110 transition-transform">MIQDAD</span>
        </h1>
        
        <div className="flex items-center gap-4 mb-8 text-comic-black dark:text-white">
          <div className="h-1 flex-1 bg-comic-black dark:bg-white"></div>
          <span className="font-bangers text-2xl text-secondary">WEB & MOBILE DEVELOPER</span>
          <div className="h-1 flex-1 bg-comic-black dark:bg-white"></div>
        </div>

        <p className="text-xl mb-8 leading-relaxed font-comic font-bold text-comic-black dark:text-slate-300">
          Saya spesialis dalam membangun sistem web dan aplikasi modern menggunakan teknologi terkini untuk solusi digital Anda.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#projects" className="comic-button bg-primary flex items-center justify-center">
            Lihat Proyek <ChevronRight className="ml-2" size={20} />
          </a>
          <button className="comic-button bg-white text-comic-black flex items-center justify-center">
            Unduh CV <Download className="ml-2" size={20} />
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50, rotate: 2 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.6 }}
        className="relative group"
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full border-4 border-comic-black flex items-center justify-center animate-bounce z-20 transform rotate-12">
           <span className="font-bangers text-white text-3xl">ZAP!</span>
        </div>

        <div className="comic-card p-2 bg-comic-black transform rotate-2">
          <div className="bg-white border-2 border-comic-black overflow-hidden aspect-square relative">
            <img 
              src={profileImg} 
              alt="Foto Profil" 
              className="w-full h-full object-cover filter contrast-125 grayscale-[20%] group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px] opacity-20 pointer-events-none"></div>
          </div>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute -bottom-6 -left-6 comic-badge bg-primary text-xl px-6 py-3 transform rotate-[-5deg] z-20"
        >
          EXPERTISE: FULLSTACK
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
