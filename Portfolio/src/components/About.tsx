import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref}
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background comic texture layer */}
      <div className="absolute inset-0 comic-panel opacity-10"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
           I’m Niswan G, an aspiring software developer currently pursuing an Integrated M.Tech in Computer Science and Engineering at Sri Krishna College of Engineering and Technology, Coimbatore. I’m passionate about full-stack development and building intelligent applications using machine learning models. I love creating projects that solve real-world problems, whether it’s through sleek user interfaces, robust backends, or predictive ML systems. With a CGPA of 7.83 and a dedication to continuous learning, I enjoy collaborating with others, exploring new technologies, and turning ideas into impactful solutions.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-12 flex items-center justify-center gap-3">
            <Star className="w-8 h-8 text-yellow-400" />
            Digital Arsenal
            <Star className="w-8 h-8 text-yellow-400" />
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'Node.js', 'Express', 'AI/ML', 'TypeScript', 'Mysql', 'Javascript', 'GitHub'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="p-4 bg-black/50 rounded-lg border border-green-500/30 hover:border-green-500/60 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-green-300 font-mono">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
