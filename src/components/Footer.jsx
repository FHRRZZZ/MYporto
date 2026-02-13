import React from 'react';

const Footer = ({ darkMode }) => (
  <footer className={`py-16 border-t font-medium transition-colors ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-slate-100 text-secondary-light'}`}>
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
      <div>
        <div className="text-2xl font-bold text-primary mb-4 tracking-tighter">MIQDAD <span className={darkMode ? 'text-white' : 'text-secondary-dark'}>FH</span></div>
        <p>© {new Date().getFullYear()} Miqdad Portfolio. Hak cipta dilindungi.</p>
      </div>
      <div className="flex space-x-12">
        <a href="#home" className="hover:text-primary transition-colors">Beranda</a>
        <a href="#projects" className="hover:text-primary transition-colors">Portofolio</a>
        <a href="#contact" className="hover:text-primary transition-colors">Kontak</a>
      </div>
    </div>
  </footer>
);

export default Footer;
