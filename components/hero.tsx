"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex flex-col justify-center pt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h2 className="text-accent-cyan text-xl md:text-2xl font-mono mb-2">Hello, my name is</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-space text-white mb-4">Niswan G</h1>
          <h3 className="text-2xl md:text-4xl text-text-secondary font-space">I'm a Full Stack Web Developer.</h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-text-secondary text-lg md:text-xl max-w-2xl mb-8"
        >
          I’m passionate about building full-stack web applications and exploring machine learning technologies.
          Currently focused on developing scalable, user-focused digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <Link href="#projects" className="glass-card px-6 py-3 text-accent-cyan flex items-center gap-2">
            View My Work
          </Link>
          <Link href="#contact" className="glass-card px-6 py-3 text-white flex items-center gap-2">
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex gap-6"
        >
          <Link
            href="https://github.com/Niswan028"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors"
          >
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/niswan-g-0554aa290/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors"
          >
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="niswan0077@gmail.com" className="text-text-secondary transition-colors">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-text-secondary"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  )
}
