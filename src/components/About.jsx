import React from 'react';

const About = ({ darkMode }) => (
  <section id="about" className={`py-24 transition-colors ${darkMode ? 'bg-slate-900 border-t border-slate-800' : 'bg-slate-50 border-t border-slate-100'}`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className={`text-4xl mb-8 ${darkMode ? 'text-white' : 'text-secondary-dark'}`}>Tentang Saya</h2>
          <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-secondary-light'}`}>
            Saya adalah seorang <strong>Web & Mobile Developer</strong> yang berdedikasi untuk menciptakan solusi digital yang efisien dan inovatif. Dengan pengalaman dalam berbagai framework, saya siap membantu mendigitalkan ide Anda.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className={`p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
              <div className="text-primary font-bold text-3xl mb-1">Beragam</div>
              <div className={`text-[10px] font-bold uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-secondary-light'}`}>Tech Stack</div>
            </div>
            <div className={`p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
              <div className="text-primary font-bold text-3xl mb-1">Fokus</div>
              <div className={`text-[10px] font-bold uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-secondary-light'}`}>Kualitas Sistem</div>
            </div>
          </div>
        </div>
        <div className={`p-8 rounded-3xl shadow-sm border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
          <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-secondary-dark'}`}>Keahlian Utama</h3>
          <p className={darkMode ? 'text-slate-400' : 'text-secondary-light leading-relaxed'}>
            Dari pengembangan web hingga aplikasi mobile, saya menguasai berbagai teknologi untuk memastikan sistem yang saya bangun berjalan optimal, aman, dan mudah digunakan.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
