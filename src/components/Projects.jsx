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
        <div className="mb-16 relative">
          <h2 className="text-6xl font-bangers text-comic-black dark:text-white transform rotate-[-2deg]">
            PROYEK <span className="text-secondary italic">TERPILIH</span>
          </h2>
          <div className="h-2 w-48 bg-primary mt-2 transform rotate-[-2deg]"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <motion.div 
              key={project.title}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
              className="comic-card p-0 overflow-hidden cursor-pointer flex flex-col group"
            >
              <div className="aspect-video relative border-b-4 border-comic-black overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 contrast-125" />
                <div className="absolute top-4 left-4 comic-badge bg-primary text-white text-xs">
                  {project.category}
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:6px_6px] opacity-10 pointer-events-none"></div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bangers text-comic-black dark:text-white mb-4 uppercase">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="bg-secondary/10 border-2 border-comic-black dark:border-white px-2 py-0.5 font-comic text-xs font-bold text-comic-black dark:text-white">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-primary font-bangers text-xl uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  LIHAT DETAIL <ChevronRight className="ml-1" size={24} />
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
