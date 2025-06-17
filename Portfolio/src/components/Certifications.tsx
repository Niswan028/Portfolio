import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';

const certificates = [
  { name: 'Industry AI Hackathon (24 hrs)', file: '/certs/ai-hackathon.pdf' },
  { name: 'Linux Fundamentals Certificate', file: '/certs/linux.pdf' },
  { name: 'Multi-Cloud AI Workshop', file: '/certs/multicloud.pdf' },
  { name: 'Asda using Java', file: '/certs/infosys1.pdf' },
  { name: 'Introduction to Sql', file: '/certs/infosys2.pdf' },
  { name: 'Introduction to Nosql Database', file: '/certs/infosys3.pdf' },
  { name: 'HackingFlix Participation', file: '/certs/hackingflix.pdf' },
];

const Certifications: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-16 px-4 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-md text-gray-400">
            Recognitions and participations across cloud, AI, Linux, and cybersecurity
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-700/30 to-purple-400/10 backdrop-blur-md border border-purple-400/20 rounded-lg p-4 flex flex-col items-center justify-center text-center text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ width: '100%', aspectRatio: '1 / 1', maxWidth: '160px', margin: 'auto' }}
            >
              <FileText className="w-7 h-7 text-yellow-300 mb-2" />
              <h3 className="text-sm font-medium mb-1">{cert.name}</h3>
              <div className="flex items-center text-xs text-purple-300 gap-1">
                <span>View</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
