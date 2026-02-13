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
    <section id="timeline" className={`py-24 transition-colors relative ${darkMode ? 'bg-slate-900 border-t border-slate-800' : 'bg-white border-t border-slate-100'}`}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className={`text-4xl mb-20 text-center ${darkMode ? 'text-white' : 'text-secondary-dark'}`}>Perjalanan <span className="text-primary italic">Karier</span></h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex items-center gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1 ml-16 md:ml-0">
                  <div className={`p-8 rounded-[2.5rem] shadow-sm border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'} ${idx % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                    <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">{exp.year}</span>
                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-secondary-dark'}`}>{exp.title}</h3>
                    <div className="text-primary-light font-medium mb-4 text-sm">{exp.company}</div>
                    <p className={darkMode ? 'text-slate-400' : 'text-secondary-light'}>{exp.desc}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-0 md:left-1/2 top-0 w-16 h-16 rounded-full bg-primary shadow-[0_0_20px_rgba(29,78,216,0.3)] flex items-center justify-center text-white z-10 md:-translate-x-1/2">
                  {exp.icon}
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
