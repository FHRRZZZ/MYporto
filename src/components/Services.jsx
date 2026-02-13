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
    <section id="services" className={`py-24 transition-colors ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className={`text-4xl mb-16 ${darkMode ? 'text-white' : 'text-secondary-dark'}`}>Layanan <span className="text-primary italic">Unggulan</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-[2.5rem] transition-all text-left group shadow-sm hover:shadow-xl ${darkMode ? 'bg-slate-900 border-slate-700 border' : 'bg-white border-slate-100 border'}`}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-secondary-dark'}`}>{service.title}</h3>
              <p className={darkMode ? 'text-slate-400' : 'text-secondary-light'}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
