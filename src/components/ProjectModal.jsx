import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose, darkMode }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl ${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-secondary-dark'}`}
        >
          <button 
            onClick={onClose}
            className={`absolute top-6 right-6 p-3 rounded-full z-10 transition-colors ${darkMode ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-100 text-secondary-dark hover:bg-slate-200'}`}
          >
            <X size={24} />
          </button>
          <div className="aspect-video w-full overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">{project.category}</span>
            <h2 className={`text-4xl mt-4 mb-6 leading-tight ${darkMode ? 'text-white' : 'text-secondary-dark'}`}>{project.title}</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className={`px-4 py-2 rounded-full text-xs font-bold ${darkMode ? 'bg-slate-800 text-primary-light' : 'bg-slate-100 text-primary'}`}>
                  {tag}
                </span>
              ))}
            </div>
            <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-slate-400' : 'text-secondary-light'}`}>
              {project.longDesc}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center hover:bg-primary-dark transition-all">
                Kunjungi Website <ExternalLink className="ml-2" size={20} />
              </button>
              <button className={`px-8 py-4 rounded-full font-bold border-2 transition-all ${darkMode ? 'border-slate-700 text-white hover:bg-slate-800' : 'border-slate-200 text-secondary-dark hover:bg-slate-50'}`}>
                Lihat Case Study
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default ProjectModal;
