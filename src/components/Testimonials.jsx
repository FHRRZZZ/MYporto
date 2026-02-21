import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = ({ darkMode }) => {
  const testimonials = [
    { name: "Andi Wijaya", role: "CEO TechX", text: "Kerja sama dengan Miqdad sangat luar biasa. Sistem yang dibangun sangat stabil dan mudah dikelola." },
    { name: "Siti Rahma", role: "Owner E-Course", text: "Platform e-learning yang dibuat melebihi ekspetasi saya. UI/UX nya sangat modern dan user-friendly." },
    { name: "Budi Santoso", role: "Manager HRD", text: "Sistem absensi scan sangat membantu efisiensi perusahaan kami. Profesional dan responsif." },
  ];

  return (
    <section className={`py-24 transition-colors relative overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-primary'}`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="bg-white border-4 border-comic-black px-8 py-4 transform -rotate-2 shadow-comic">
            <h2 className="text-5xl font-bangers text-comic-black">APA KATA MEREKA?</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="comic-card min-h-[250px] flex flex-col justify-between relative z-10">
                <p className="text-lg font-comic font-bold leading-relaxed mb-8 text-comic-black dark:text-slate-300">"{t.text}"</p>
                <div>
                  <div className="h-1 w-12 bg-primary mb-4"></div>
                  <div className="font-bangers text-2xl text-comic-black dark:text-white uppercase tracking-tight">{t.name}</div>
                  <div className="text-secondary text-sm font-bangers uppercase">{t.role}</div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-10 w-8 h-8 bg-white dark:bg-slate-800 border-r-4 border-b-4 border-comic-black dark:border-white transform rotate-45 z-0"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
