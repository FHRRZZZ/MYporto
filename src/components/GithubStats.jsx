import React from 'react';
import { motion } from 'framer-motion';
import { Github, Activity } from 'lucide-react';

const GithubStats = ({ darkMode }) => (
  <section className={`py-24 transition-colors relative overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="comic-card bg-primary p-8 md:p-16 relative overflow-hidden transform -rotate-1">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:10px_10px] opacity-10 pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="text-left max-w-lg">
            <div className="comic-badge bg-comic-black text-white mb-6 inline-flex items-center gap-2">
              <Github size={20} />
              GITHUB ACTIVITY
            </div>
            <h2 className="text-5xl md:text-6xl font-bangers text-white mb-6 leading-none uppercase tracking-tight">OPEN SOURCE DOMINATION</h2>
            <p className="text-xl font-comic font-bold text-white mb-8 leading-snug">
              Saya aktif berkontribusi dalam berbagai proyek open source dan menjaga kualitas kode melalui repository yang terstruktur dengan baik.
            </p>
            <div className="flex space-x-8">
              <div className="text-center bg-white border-2 border-comic-black p-3 transform rotate-3 shadow-comic-sm">
                <div className="text-4xl font-bangers text-comic-black">500+</div>
                <div className="text-[10px] font-bangers text-secondary uppercase tracking-widest">CONTRIBUTIONS</div>
              </div>
              <div className="text-center bg-white border-2 border-comic-black p-3 transform -rotate-2 shadow-comic-sm">
                <div className="text-4xl font-bangers text-comic-black">40+</div>
                <div className="text-[10px] font-bangers text-secondary uppercase tracking-widest">REPOS</div>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="comic-card bg-white p-10 transform rotate-6"
            >
              <div className="flex flex-col items-center">
                <div className="bg-primary border-3 border-comic-black p-6 text-white mb-6 transform -rotate-12 shadow-comic-sm">
                  <Activity size={48} />
                </div>
                <div className="text-sm font-bangers text-comic-black uppercase tracking-widest mb-2">SYSTEM STATUS</div>
                <div className="text-green-600 font-bangers text-xl flex items-center uppercase">
                  <span className="w-3 h-3 bg-green-500 border-2 border-comic-black animate-pulse mr-2" />
                  ONLINE
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GithubStats;
