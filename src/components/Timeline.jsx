import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Rocket, Globe, GraduationCap } from 'lucide-react';

const Timeline = ({ darkMode }) => {
  const experiences = [
    { 
      year: "2024 - Sekarang", 
      title: "Senior Web & Mobile Developer", 
      company: "Freelance / Global Clients", 
      desc: "Memimpin pengembangan sistem enterprise berskala besar dengan fokus pada skalabilitas dan performa tinggi.",
      icon: <Briefcase />
    },
    { 
      year: "2022 - 2023", 
      title: "Fullstack Web Developer", 
      company: "Software House", 
      desc: "Membangun lebih dari 20+ aplikasi web menggunakan stack Laravel dan React untuk berbagai bidang industri.",
      icon: <Rocket />
    },
    { 
      year: "2020 - 2022", 
      title: "Junior Mobile Developer", 
      company: "Tech Startup", 
      desc: "Fokus pada pengembangan aplikasi lintas platform menggunakan Flutter dan integrasi API real-time.",
      icon: <Globe />
    },
    { 
      year: "2019", 
      title: "Education Excellence", 
      company: "Informatics Engineering", 
      desc: "Lulus dengan fokus pada Rekayasa Perangkat Lunak dan arsitektur database.",
      icon: <GraduationCap />
    },
  ];

  return (
    <section id="timeline" className={`py-24 transition-colors relative overflow-hidden ${darkMode ? 'bg-slate-900 border-y-4 border-comic-black' : 'bg-secondary border-y-4 border-comic-black'}`}>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <div className="bg-white border-4 border-comic-black px-10 py-4 transform skew-x-[-10deg] shadow-comic inline-block">
            <h2 className="text-5xl font-bangers text-comic-black uppercase tracking-widest">PERJALANAN KARIER</h2>
          </div>
        </div>
        
        <div className="relative">
          {/* Vertical Line - Comic Style */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-2 bg-comic-black md:-translate-x-1/2 border-r-2 border-white" />
          
          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex items-center gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1 ml-16 md:ml-0">
                  <div className={`comic-card p-6 ${idx % 2 === 0 ? 'md:mr-12 transform -rotate-1' : 'md:ml-12 transform rotate-1'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <span className="comic-badge bg-primary text-white text-xs">{exp.year}</span>
                    </div>
                    <h3 className="text-2xl font-bangers text-comic-black dark:text-white mb-1 uppercase tracking-tight">{exp.title}</h3>
                    <div className="font-comic font-bold text-secondary mb-4 uppercase text-sm tracking-tighter">{exp.company}</div>
                    <p className="font-comic font-bold text-comic-black dark:text-slate-300 leading-snug">{exp.desc}</p>
                  </div>
                </div>

                {/* Center Icon - Comic Badge */}
                <div className="absolute left-0 md:left-1/2 top-0 w-16 h-16 comic-card p-0 bg-primary flex items-center justify-center text-white z-20 md:-translate-x-1/2 rounded-none transform rotate-12 group-hover:rotate-0 transition-transform">
                  {React.cloneElement(exp.icon, { size: 32, strokeWidth: 3 })}
                </div>

                {/* Empty Space for layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
