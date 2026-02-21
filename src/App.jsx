import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Zap } from 'lucide-react';

import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import BackgroundParticles from './components/BackgroundParticles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import GithubStats from './components/GithubStats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-secondary-dark'} selection:bg-primary/20 selection:text-primary min-h-screen font-sans transition-colors duration-500`}>
      <AnimatePresence>
        {loading && <Preloader finishLoading={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <CustomCursor />
          <BackgroundParticles darkMode={darkMode} />
          
          <div className="relative z-10">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Hero darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Timeline darkMode={darkMode} />
            <Services darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <GithubStats darkMode={darkMode} />
            <Testimonials darkMode={darkMode} />
            <Contact darkMode={darkMode} />
            <Footer darkMode={darkMode} />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="fixed bottom-8 right-8 z-[100]"
          >
            <a 
              href="#contact" 
              className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
            >
              <Zap size={24} className="group-hover:animate-pulse" />
            </a>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default App;
