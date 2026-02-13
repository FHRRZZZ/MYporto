import React from 'react';
import { motion } from 'framer-motion';
import { Github, Activity } from 'lucide-react';

const GithubStats = ({ darkMode }) => (
  <section className={`py-24 transition-colors ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className={`p-8 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="text-left max-w-lg">
            <div className="flex items-center space-x-3 text-primary mb-4 font-bold tracking-widest uppercase text-sm">
              <Github size={20} />
              <span>Github Activity</span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-secondary-dark'}`}>Open Source <span className="text-primary italic">Involvement</span></h2>
            <p className={`text-lg mb-8 ${darkMode ? 'text-slate-400' : 'text-secondary-light'}`}>
              Saya aktif berkontribusi dalam berbagai proyek open source dan menjaga kualitas kode melalui repository yang terstruktur dengan baik.
            </p>
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className={`text-[10px] font-bold uppercase tracking-widest ${darkMode ? 'text-slate-500' : 'text-secondary-light'}`}>Contributions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">40+</div>
                <div className={`text-[10px] font-bold uppercase tracking-widest ${darkMode ? 'text-slate-500' : 'text-secondary-light'}`}>Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className={`text-[10px] font-bold uppercase tracking-widest ${darkMode ? 'text-slate-500' : 'text-secondary-light'}`}>Stars</div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className={`p-10 rounded-[3rem] shadow-inner border transition-all ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'}`}
            >
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-6 rounded-full text-primary mb-6">
                  <Activity size={48} />
                </div>
                <div className={`text-sm font-bold uppercase tracking-[0.2em] mb-2 ${darkMode ? 'text-slate-400' : 'text-secondary-light'}`}>Current Status</div>
                <div className="text-green-500 font-bold flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
                  Active Programming
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
