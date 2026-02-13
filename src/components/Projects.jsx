import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    { 
      title: "E-Commerce Platform", 
      category: "Web App", 
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Express", "MySQL", "Tailwind"],
      longDesc: "Platform e-commerce lengkap dengan fitur manajemen produk, keranjang belanja, integrasi pembayaran, dan dashboard admin yang intuitif."
    },
    { 
      title: "E-Learning System", 
      category: "Web Platform", 
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
      tags: ["Next.js", "Laravel", "PostgreSQL"],
      longDesc: "Sistem pembelajaran digital yang mendukung kelas online, kuis interaktif, progres belajar siswa, dan manajemen materi guru."
    },
    { 
      title: "WhatsApp Bot AI", 
      category: "Tool / Service", 
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
      tags: ["Node.js", "OpenAI API", "Venom-bot"],
      longDesc: "Bot WhatsApp yang diintegrasikan dengan kecerdasan buatan untuk menjawab pertanyaan pelanggan secara otomatis dan mengelola pesanan."
    },
    { 
      title: "Scan Absensi", 
      category: "System Web", 
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800",
      tags: ["Flutter", "Express", "Firebase"],
      longDesc: "Sistem absensi modern menggunakan scan QR Code yang terhubung langsung ke dashboard pemantauan real-time bagi instansi."
    },
  ];

  return (
    <section id="projects" className={`py-24 transition-colors ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-4xl mb-16 ${darkMode ? 'text-white' : 'text-secondary-dark'}`}>Proyek <span className="text-primary italic">Terpilih</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.title}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className={`group cursor-pointer rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}
            >
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-10">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">{project.category}</span>
                <h3 className={`text-2xl mt-4 mb-6 font-bold ${darkMode ? 'text-white' : 'text-secondary-dark'}`}>{project.title}</h3>
                <div className="flex items-center text-primary font-bold">
                  Lihat Detail <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} darkMode={darkMode} />}
    </section>
  );
};

export default Projects;
