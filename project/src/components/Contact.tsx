import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([
    '$ Welcome to the communication terminal',
    '$ Type "help" for available commands',
    '$ Or type "connect" to reveal contact form',
    '$'
  ]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    if (isInView && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInView]);

  const handleTerminalCommand = (command: string) => {
    const newOutput = [...terminalOutput, `$ ${command}`];

    switch (command.toLowerCase()) {
      case 'help':
        newOutput.push('Available commands:');
        newOutput.push('  connect - reveal contact form');
        newOutput.push('  social - show social links');
        newOutput.push('  clear - clear terminal');
        newOutput.push('  whoami - about this human');
        break;
      case 'connect':
        newOutput.push('Initializing secure connection...');
        newOutput.push('Contact form activated!');
        setShowContactForm(true);
        break;
      case 'social':
        newOutput.push('Social networks found:');
        newOutput.push('  → https://github.com/Niswan028');
        newOutput.push('  → https://www.linkedin.com/in/niswan-g-0554aa290');
        newOutput.push('  → niswan0077@gmail.com');
        break;
      case 'clear':
        setTerminalOutput(['$']);
        setTerminalInput('');
        return;
      case 'whoami':
        newOutput.push('A full-stack developer who believes in:');
        newOutput.push('  → Clean code and elegant solutions');
        newOutput.push('  → The power of human-centered design');
        newOutput.push('  → Building bridges between ideas and reality');
        break;
      default:
        newOutput.push(`Command not found: ${command}`);
        newOutput.push('Type "help" for available commands');
    }

    newOutput.push('$');
    setTerminalOutput(newOutput);
    setTerminalInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTerminalOutput(prev => [
      ...prev,
      '$ Message transmission initiated...',
      '$ Encryption: Active',
      '$ Status: Message sent successfully!',
      "$ Thank you for reaching out. I'll respond soon.",
      '$'
    ]);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      ref={ref}
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Initialize Contact
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to build something extraordinary together? Let's connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hologram rounded-2xl backdrop-blur-md border border-green-500/30 overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-black/50 p-4 border-b border-green-500/30 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <Terminal className="w-4 h-4" />
              <span className="font-mono text-sm">contact@terminal:~$</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 bg-black/30 font-mono text-sm scanlines">
            <div className="h-64 overflow-y-auto mb-4">
              {terminalOutput.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={`${line.startsWith('$') && line !== '$' ? 'text-green-400' : 'text-gray-300'}`}
                >
                  {line}
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-green-400">
              <span>$</span>
              <input
                ref={inputRef}
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && terminalInput.trim()) {
                    handleTerminalCommand(terminalInput.trim());
                  }
                }}
                className="flex-1 bg-transparent outline-none text-white"
                placeholder="Enter command..."
              />
              <div className="terminal-cursor w-2 h-4"></div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 hologram p-8 rounded-2xl backdrop-blur-md border border-blue-500/30"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-400" />
              Secure Communication Channel
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-mono">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-mono">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-mono">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={4}
                  className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full p-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-lg text-white font-semibold transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Transmit Message
              </motion.button>
            </form>
          </motion.div>
        )}

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex justify-center gap-6"
        >
          {[
            { icon: Github, label: 'GitHub', href: 'https://github.com/Niswan028' },
            { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/niswan-g-0554aa290' },
            { icon: Mail, label: 'Email', href: 'mailto:niswan0077@gmail.com' }
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-black/50 border border-gray-600 hover:border-green-500 rounded-full transition-colors group"
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
