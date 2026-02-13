import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe } from 'lucide-react';

const Skills = ({ darkMode }) => {
  const skills = [
    { name: 'React', icon: <Code2 /> },
    { name: 'Express', icon: <Cpu /> },
    { name: 'Next.js', icon: <Globe /> },
    { name: 'Laravel', icon: <Code2 /> },
    { name: 'MySQL', icon: <Cpu /> },
    { name: 'Tailwind', icon: <Globe /> },
    { name: 'Flutter', icon: <Code2 /> },
    { name: 'TypeScript', icon: <Cpu /> },
  ];
  const scrollingSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className={`py-32 transition-colors relative overflow-hidden ${darkMode ? 'bg-slate-900 border-t border-slate-800' : 'bg-white'}`}>
      <div className={`absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none ${darkMode ? 'invert' : ''}`}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="max-w-full text-center relative z-10 px-4">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight ${darkMode ? 'text-white' : 'text-secondary-dark'}`}>Tech Stack & <span className="text-primary italic">Expertise</span></h2>
        <p className={`mb-24 max-w-xl mx-auto text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-secondary-light'}`}>Pilihan teknologi utama saya yang bergerak dalam harmoni digital.</p>
        <div className="relative overflow-hidden py-24 group">
          <div className={`absolute top-0 left-0 w-40 h-full z-20 pointer-events-none ${darkMode ? 'bg-gradient-to-r from-slate-900 to-transparent' : 'bg-gradient-to-r from-white to-transparent'}`} />
          <div className={`absolute top-0 right-0 w-40 h-full z-20 pointer-events-none ${darkMode ? 'bg-gradient-to-l from-slate-900 to-transparent' : 'bg-gradient-to-l from-white to-transparent'}`} />
          <div className="flex">
            <motion.div animate={{ x: ["0%", "-33.33%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex gap-8 md:gap-12 px-6">
              {scrollingSkills.map((skill, idx) => (
                <motion.div key={`${skill.name}-${idx}`} animate={{ y: [0, -40, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.15 }} whileHover={{ scale: 1.25, y: -60, transition: { type: "spring", stiffness: 400, damping: 12 } }} className="flex flex-col items-center group relative cursor-pointer flex-shrink-0">
                  <div className={`w-24 h-24 md:w-32 md:h-32 rounded-[3.5rem] shadow-xl flex items-center justify-center transition-all duration-300 transform-gpu ${darkMode ? 'bg-slate-800 text-primary border-slate-700' : 'bg-white text-primary border-slate-100 border'}`}>
                    {React.cloneElement(skill.icon, { size: 48 })}
                  </div>
                  <div className="absolute -top-16 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-3 group-hover:translate-y-0">
                    <div className="bg-secondary-dark text-white text-[10px] font-bold py-2 px-4 rounded-xl whitespace-nowrap shadow-xl uppercase tracking-widest relative">
                      {skill.name}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary-dark rotate-45" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
