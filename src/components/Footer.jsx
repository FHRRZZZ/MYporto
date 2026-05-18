import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ darkMode }) => {
  const footerLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang', path: '/about' },
    { name: 'Proyek', path: '/projects' },
    { name: 'Kontak', path: '/contact' },
  ];

  return (
    <footer className={`py-12 border-t-4 border-comic-black font-medium transition-colors ${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-comic-black'}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div>
          <Link to="/">
            <div className="text-3xl font-bangers text-primary mb-2 tracking-widest uppercase flex items-center justify-center md:justify-start gap-2">
              <div className="bg-comic-black text-white px-2 transform -skew-x-12">MIQDAD</div>
              <div className="text-secondary dark:text-primary-light transform skew-x-12">FH</div>
            </div>
          </Link>
          <p className="font-comic font-bold uppercase text-sm tracking-tighter">© {new Date().getFullYear()} Miqdad Portfolio. THE END.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="font-bangers text-xl uppercase tracking-widest hover:text-primary transition-colors hover:scale-110 transform"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
