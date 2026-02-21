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
    <section id="skills" className={`py-32 transition-colors relative overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-comic-paper'}`}>
      <div className="max-w-full text-center relative z-10 px-4">
        <div className="mb-24 relative inline-block">
          <div className="absolute -inset-4 bg-primary border-4 border-comic-black transform skew-x-12 z-0"></div>
          <h2 className="text-5xl md:text-6xl font-bangers relative z-10 text-white px-8 py-2">
            TECH STACK & EXPERTISE
          </h2>
        </div>
        
        <div className="relative overflow-hidden py-12 group">
          <div className="flex">
            <motion.div animate={{ x: ["0%", "-33.33%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex gap-8 md:gap-12 px-6">
              {scrollingSkills.map((skill, idx) => (
                <motion.div key={`${skill.name}-${idx}`} animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.15 }} whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 12 } }} className="flex flex-col items-center group relative cursor-pointer flex-shrink-0">
                  <div className={`w-32 h-32 comic-card flex items-center justify-center transition-all duration-300 transform-gpu ${darkMode ? 'bg-slate-800 text-primary' : 'bg-white text-primary'}`}>
                    {React.cloneElement(skill.icon, { size: 48, strokeWidth: 3 })}
                  </div>
                  <div className="mt-4 bg-comic-black text-white px-3 py-1 font-bangers text-sm rounded-none border-2 border-white uppercase tracking-tighter">
                    {skill.name}
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
