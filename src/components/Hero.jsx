import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Code2, Globe } from 'lucide-react';

const Hero = ({ darkMode }) => (
  <section id="home" className={`min-h-screen flex items-center pt-20 relative overflow-hidden transition-colors ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Halo, Saya Miqdad Fh</span>
        <h1 className={`text-5xl md:text-7xl mb-6 leading-tight ${darkMode ? 'text-white' : 'text-secondary-dark'}`}>
          Web & <span className="text-primary italic">Mobile Developer</span>
        </h1>
        <p className={`text-xl mb-8 max-w-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-secondary-light'}`}>
          Saya spesialis dalam membangun sistem web dan aplikasi modern menggunakan teknologi terkini untuk solusi digital Anda.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#projects" className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-all flex items-center justify-center shadow-lg shadow-primary/20">
            Lihat Proyek <ChevronRight className="ml-2" size={20} />
          </a>
          <button className={`px-8 py-4 rounded-full font-semibold border-2 transition-all flex items-center justify-center ${darkMode ? 'border-primary text-primary hover:bg-primary/10' : 'border-secondary-dark text-secondary-dark hover:bg-secondary-dark hover:text-white'}`}>
            Unduh CV <Download className="ml-2" size={20} />
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center items-center"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-3xl opacity-60 ${darkMode ? 'bg-primary/10' : 'bg-blue-50/50'}`} />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`absolute top-0 right-0 w-32 h-32 border-4 border-dashed rounded-full ${darkMode ? 'border-primary/20' : 'border-primary/20'}`}
          />
        </div>

        <div className="relative z-10 w-full max-w-[450px]">
          <div className="relative aspect-square group">
            <div className="absolute inset-0 border-2 border-primary/30 rounded-[3rem] translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
            <div className={`absolute inset-0 rounded-[3rem] -translate-x-4 -translate-y-4 group-hover:-translate-x-6 group-hover:-translate-y-6 transition-transform duration-500 ${darkMode ? 'bg-white opacity-5' : 'bg-secondary-dark opacity-5'}`} />
            
            <div className={`relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
               <img 
                src="../src/assets/profile.png" 
                alt="Foto Profil" 
                className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`absolute -left-6 top-1/4 p-4 rounded-2xl shadow-xl z-20 border ${darkMode ? 'bg-slate-800/80 border-slate-700 backdrop-blur-md' : 'bg-white/80 border-white/40 backdrop-blur-md'}`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Code2 size={20} />
                </div>
                <div>
                  <div className={`text-[10px] items-center font-bold uppercase tracking-widest ${darkMode ? 'text-slate-400' : 'text-secondary-light'}`}>Expertise</div>
                  <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-secondary-dark'}`}>Web & Mobile</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className={`absolute -right-6 bottom-1/4 p-4 rounded-2xl shadow-xl z-20 border ${darkMode ? 'bg-slate-800/80 border-slate-700 backdrop-blur-md' : 'bg-white/80 border-white/40 backdrop-blur-md'}`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                  <Globe size={20} />
                </div>
                <div>
                  <div className={`text-[10px] items-center font-bold uppercase tracking-widest ${darkMode ? 'text-slate-400' : 'text-secondary-light'}`}>Focus</div>
                  <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-secondary-dark'}`}>Fullstack</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
