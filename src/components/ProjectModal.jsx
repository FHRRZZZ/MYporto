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
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto comic-card p-0"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 comic-button bg-secondary text-white p-2 z-20"
          >
            <X size={24} />
          </button>
          
          <div className="aspect-video w-full overflow-hidden border-b-4 border-comic-black relative">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover contrast-125" />
            <div className="absolute inset-0 bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:6px_6px] opacity-10 pointer-events-none"></div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="comic-badge bg-primary text-white mb-4 inline-block">
              {project.category}
            </div>
            <h2 className="text-5xl font-bangers text-comic-black dark:text-white mt-4 mb-6 leading-none">
              {project.title}
            </h2>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="comic-badge bg-white text-comic-black border-2 border-comic-black font-bangers">
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-xl font-comic font-bold leading-relaxed mb-10 text-comic-black dark:text-slate-300">
              {project.longDesc}
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button className="comic-button bg-primary text-white flex items-center text-xl">
                KUNJUNGI WEBSITE <ExternalLink className="ml-2" size={24} />
              </button>
              <button className="comic-button bg-white text-comic-black flex items-center text-xl">
                CASE STUDY
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default ProjectModal;
