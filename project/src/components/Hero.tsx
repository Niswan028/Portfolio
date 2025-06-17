import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code2, Zap, Cpu } from 'lucide-react';
import meImage from '../me.jpg';


const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Code with Soul';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-20"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Code2 className="w-12 h-12 text-green-500/30" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-32"
        animate={{ y: [20, -20, 20], rotate: [0, 180, 360] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Zap className="w-8 h-8 text-blue-500/30" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-40"
        animate={{ x: [-30, 30, -30] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Cpu className="w-10 h-10 text-purple-500/30" />
      </motion.div>

      {/* Profile Photo in Top-Right */}
     <motion.img
      src={meImage}// replace with your actual image path
  className="absolute top-[40%] right-10 transform -translate-y-1/2 w-72 h-72 border-4 border-green-500 object-cover shadow-2xl"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 1.2, duration: 0.8 }}
/>


      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="glitch font-bold mb-4 text-4xl md:text-6xl" data-text={displayText}>
            {displayText}
            <span className="terminal-cursor">_</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Engineering{' '}
          <span className="text-green-400 font-semibold">uncommon ideas</span>{' '}
          into digital reality. Where{' '}
          <span className="text-blue-400 font-semibold">precision</span> meets{' '}
          <span className="text-purple-400 font-semibold">creativity</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {['Full-Stack Developer', 'AI Enthusiast'].map((role, index) => (
            <motion.span
              key={role}
              className="px-4 py-2 bg-black/50 border border-green-500/30 rounded-full text-green-300 backdrop-blur-sm"
              whileHover={{ 
                borderColor: '#00ff00',
                boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)'
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.5 + index * 0.2 }}
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-green-400"
          >
            <span className="text-sm mb-2 font-mono">scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
