import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Sparkles, Palette, Code, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section 
      ref={ref}
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            Digital Creations
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Two masterpieces that showcase the intersection of art and technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* AI Chatbot Project */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="hologram p-8 rounded-2xl backdrop-blur-md border border-blue-500/30 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <Brain className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Neural Companion</h3>
                  <p className="text-blue-300">AI Fitness Chatbot</p>
                </div>
              </div>

              {/* Chat Preview Screenshot */}
              <div className="bg-black/50 rounded-lg p-4 mb-6 border border-green-500/20 text-gray-300">
                <p className="text-sm">An AI-powered chatbot built to guide users through personalized fitness recommendations and advice. Explore it live:</p>
                <a
                  href="https://fitaichat.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-green-400 hover:underline"
                >
                  Visit Chatbot <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'Tailwind CSS', 'Framer Motion', 'ML Model', 'Netlify'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed">
                Developed a fitness assistant chatbot that provides exercise tips, workout plans, and nutritional guidance. 
                The interface is sleek and interactive, demonstrating frontend skills and AI integration.
              </p>
            </div>
          </motion.div>

          {/* Portfolio Project */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="hologram p-8 rounded-2xl backdrop-blur-md border border-purple-500/30 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <Palette className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Digital Canvas</h3>
                  <p className="text-purple-300">This Very Portfolio</p>
                </div>
              </div>

              <div className="relative mb-6 bg-black/50 rounded-lg p-6 border border-purple-500/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <motion.div
                        key={i}
                        className="h-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-green-400 font-mono text-sm">
                    <Code className="w-4 h-4" />
                    <span>Creating digital art with code...</span>
                    <motion.div
                      className="w-2 h-4 bg-green-400"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vite'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
               <p className="text-gray-300 leading-relaxed">
  This portfolio is designed in a unique and creative way to stand out. It includes smooth animations and interactive elements that make browsing the site more engaging and enjoyable.
</p>


                <div className="flex items-center gap-2 text-yellow-400">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
