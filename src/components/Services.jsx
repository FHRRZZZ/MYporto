import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Globe, Clock } from 'lucide-react';

const Services = ({ darkMode }) => {
  const services = [
    { title: 'Web Development', desc: 'Membangun aplikasi web berperforma tinggi menggunakan React & Next.js.', icon: <Rocket /> },
    { title: 'Backend Solutions', desc: 'Arsitektur server yang aman dan skalabel dengan Laravel & Express.', icon: <Shield /> },
    { title: 'Mobile Apps', desc: 'Pengembangan aplikasi mobile lintas platform menggunakan Flutter.', icon: <Globe /> },
    { title: 'Automation Bot', desc: 'Otomatisasi alur kerja Anda dengan bot WhatsApp & Integrasi API.', icon: <Clock /> },
  ];

  return (
    <section id="services" className={`py-24 transition-colors relative overflow-hidden ${darkMode ? 'bg-slate-900 border-t-4 border-comic-black' : 'bg-white border-t-4 border-comic-black'}`}>
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-16 inline-block bg-accent border-4 border-comic-black px-8 py-3 transform rotate-[-1deg] shadow-comic">
          <h2 className="text-5xl font-bangers text-white uppercase tracking-wider">LAYANAN UNGGULAN</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
              className="comic-card text-left group flex flex-col items-center md:items-start"
            >
              <div className="w-16 h-16 bg-primary border-3 border-comic-black flex items-center justify-center text-white mb-6 transform -rotate-6 shadow-comic-sm group-hover:rotate-0 transition-transform">
                {React.cloneElement(service.icon, { size: 32, strokeWidth: 3 })}
              </div>
              <h3 className="text-2xl font-bangers text-comic-black dark:text-white mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="font-comic font-bold text-comic-black dark:text-slate-300 text-lg">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
