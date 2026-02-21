import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Layanan', href: '#services' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'glass mx-4 rounded-none' : 'bg-transparent'}`}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-bangers text-primary tracking-wider uppercase flex items-center gap-2"
        >
          <div className="bg-comic-black text-white px-2 py-1 transform -skew-x-12">MIQDAD</div>
          <div className="text-secondary transform skew-x-12">FH</div>
        </motion.div>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-bangers text-lg uppercase tracking-widest transition-all hover:scale-110 hover:text-primary ${darkMode ? 'text-white' : 'text-comic-black'}`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 border-3 border-comic-black shadow-comic transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-white text-slate-600'}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 border-2 border-comic-black bg-white">
            {darkMode ? <Sun size={24} className="text-yellow-500" /> : <Moon size={24} className="text-slate-600" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 border-2 border-comic-black bg-white">
            {isMobileMenuOpen ? <X size={28} className="text-comic-black" /> : <Menu size={28} className="text-comic-black" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`md:hidden mx-4 mt-2 border-3 border-comic-black shadow-comic-lg ${darkMode ? 'bg-slate-900' : 'bg-white'}`}
          >
            <div className="px-6 py-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-bangers uppercase tracking-widest ${darkMode ? 'text-white' : 'text-comic-black'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
