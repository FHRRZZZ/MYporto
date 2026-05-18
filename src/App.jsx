import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import BackgroundParticles from './components/BackgroundParticles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

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
          <ScrollToTop />
          <ScrollProgress />
          <CustomCursor />
          <BackgroundParticles darkMode={darkMode} />
          
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home darkMode={darkMode} />} />
                <Route path="/about" element={<AboutPage darkMode={darkMode} />} />
                <Route path="/projects" element={<ProjectsPage darkMode={darkMode} />} />
                <Route path="/services" element={<ServicesPage darkMode={darkMode} />} />
                <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
              </Routes>
            </main>

            <Footer darkMode={darkMode} />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="fixed bottom-8 right-8 z-[100]"
          >
            <Link 
              to="/contact" 
              className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
            >
              <Zap size={24} className="group-hover:animate-pulse" />
            </Link>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default App;
