import React from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const Contact = ({ darkMode }) => (
  <section id="contact" className={`py-24 transition-colors relative ${darkMode ? 'bg-slate-900 border-t-4 border-comic-black' : 'bg-comic-paper border-t-4 border-comic-black'}`}>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="comic-card bg-accent p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 transform rotate-45 border-4 border-comic-black"></div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-bangers text-white mb-6 leading-none tracking-wider">
              SIAP BERAKSI BERSAMA?
            </h2>
            <p className="text-white font-comic font-bold text-xl mb-12">Mari berkolaborasi untuk membangun sesuatu yang luar biasa.</p>
            <div className="flex space-x-4">
              <a href="#" className="comic-button bg-white text-comic-black p-4"><Github size={28} /></a>
              <a href="#" className="comic-button bg-white text-comic-black p-4"><Linkedin size={28} /></a>
              <a href="#" className="comic-button bg-white text-comic-black p-4"><Mail size={28} /></a>
            </div>
          </div>
          
          <form className="comic-card space-y-4 p-8 transform rotate-1">
            <h3 className="text-3xl font-bangers text-comic-black dark:text-white mb-6 uppercase tracking-tight">Kirim Pesan</h3>
            <div className="space-y-4">
              <input type="text" placeholder="NAMA ANDA" className="comic-input w-full uppercase dark:bg-slate-700 dark:text-white dark:border-white" />
              <input type="email" placeholder="EMAIL ANDA" className="comic-input w-full uppercase dark:bg-slate-700 dark:text-white dark:border-white" />
              <textarea placeholder="PESAN ANDA" rows="4" className="comic-input w-full uppercase dark:bg-slate-700 dark:text-white dark:border-white"></textarea>
            </div>
            <button className="comic-button w-full bg-secondary text-white flex items-center justify-center group text-xl" type="button">
              KIRIM SEKARANG <Send className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
