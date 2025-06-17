import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications'; // ✅ Correct import
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <motion.div 
      className={`min-h-screen transition-colors duration-500 ${
        isDark 
          ? 'bg-black text-white' 
          : 'bg-gradient-to-br from-gray-100 to-white text-gray-900'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ThemeToggle isDark={isDark} toggle={toggleTheme} />
      
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Certifications /> 
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
          <p className="font-mono text-sm">
            © 2025 • Crafted with{' '}
            <span className="text-red-400">♥</span>{' '}
            and endless{' '}
            <span className="text-green-400">{"{ }"}</span>
          </p>
        </footer>
      </main>
    </motion.div>
  );
}

export default App;
