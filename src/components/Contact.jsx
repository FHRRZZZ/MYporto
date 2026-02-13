import React from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const Contact = ({ darkMode }) => (
  <section id="contact" className={`py-24 transition-colors ${darkMode ? 'bg-slate-900 border-t border-slate-800' : 'bg-white border-t border-slate-100'}`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-primary rounded-[4rem] p-8 md:p-24 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-48 -mb-48" />
        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">Siap mewujudkan ide Anda?</h2>
            <p className="text-blue-100 text-xl mb-12">Mari berkolaborasi untuk membangun sesuatu yang luar biasa.</p>
            <div className="flex space-x-6">
              <a href="#" className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all border border-white/20"><Github /></a>
              <a href="#" className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all border border-white/20"><Linkedin /></a>
              <a href="#" className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all border border-white/20"><Mail /></a>
            </div>
          </div>
          <form className={`p-8 rounded-[3rem] space-y-4 shadow-xl ${darkMode ? 'bg-slate-900 border border-slate-700' : 'bg-white'}`}>
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-secondary-dark'}`}>Kirim Pesan</h3>
            <input type="text" placeholder="Nama Anda" className={`w-full p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary border transition-all ${darkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-secondary-dark'}`} />
            <input type="email" placeholder="Email Anda" className={`w-full p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary border transition-all ${darkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-secondary-dark'}`} />
            <textarea placeholder="Pesan Anda" rows="4" className={`w-full p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary border transition-all ${darkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-secondary-dark'}`}></textarea>
            <button className="w-full bg-secondary-dark text-white p-5 rounded-2xl font-bold hover:bg-slate-950 transition-all flex items-center justify-center group shadow-xl shadow-slate-900/10" type="button">
              Kirim Sekarang <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
