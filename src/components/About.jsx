import React from 'react';

const About = ({ darkMode }) => (
  <section id="about" className={`py-24 transition-colors relative overflow-hidden ${darkMode ? 'bg-slate-900 border-y-4 border-comic-black' : 'bg-primary border-y-4 border-comic-black'}`}>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="comic-card transform rotate-[-1deg]">
          <h2 className="text-5xl font-bangers mb-8 text-comic-black dark:text-white">TENTANG SAYA</h2>
          <p className="text-xl leading-relaxed mb-6 font-comic font-bold text-comic-black dark:text-slate-300">
            Saya adalah seorang <span className="bg-primary px-1">Web & Mobile Developer</span> yang berdedikasi untuk menciptakan solusi digital yang efisien dan inovatif. Dengan pengalaman dalam berbagai framework, saya siap membantu mendigitalkan ide Anda.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="comic-card bg-accent text-white p-4 transform rotate-2">
              <div className="font-bangers text-3xl mb-1 uppercase">Tech Stack</div>
              <div className="font-comic text-xs font-bold uppercase tracking-wider opacity-90">BERAGAM</div>
            </div>
            <div className="comic-card bg-secondary text-white p-4 transform -rotate-2">
              <div className="font-bangers text-3xl mb-1 uppercase">Kualitas</div>
              <div className="font-comic text-xs font-bold uppercase tracking-wider opacity-90">FOKUS UTAMA</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -right-4 comic-badge bg-secondary text-white transform rotate-12 text-2xl px-6 py-2">
            SUPER!
          </div>
          <div className="comic-card border-primary transform rotate-1">
            <h3 className="text-3xl font-bangers mb-4 text-comic-black dark:text-white">KEAHLIAN UTAMA</h3>
            <p className="font-comic font-bold text-comic-black dark:text-slate-300 leading-relaxed text-lg">
              Dari pengembangan web hingga aplikasi mobile, saya menguasai berbagai teknologi untuk memastikan sistem yang saya bangun berjalan optimal, aman, dan mudah digunakan.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
