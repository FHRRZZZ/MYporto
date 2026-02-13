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
    <section className={`py-24 transition-colors ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <Quote className="text-primary opacity-20 mb-6" size={60} />
          <h2 className={`text-4xl ${darkMode ? 'text-white' : 'text-secondary-dark'}`}>Apa Kata <span className="text-primary italic">Mereka</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[3rem] shadow-sm ${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-secondary-dark'}`}
            >
              <div className="flex text-yellow-400 mb-6 space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className={`text-lg italic leading-relaxed mb-8 ${darkMode ? 'text-slate-400' : 'text-secondary-light'}`}>"{t.text}"</p>
              <div>
                <div className="font-bold text-xl">{t.name}</div>
                <div className="text-primary text-sm font-semibold">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
