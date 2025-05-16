"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index)
  }

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "AI Content Generator",
      description:
        "An AI-powered content generation tool that helps users create blog posts, social media content, and more. Built with React, Node.js, and OpenAI API.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "Express", "OpenAI", "Firebase"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, task assignment, and progress tracking. Built with React, Firebase, and Tailwind CSS.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux", "React DnD"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  // Different layout variants for each project
  const getProjectLayout = (index: number) => {
    switch (index % 3) {
      case 0:
        return "md:col-span-2" // Wide
      case 1:
        return "row-span-1 md:row-span-2" // Tall
      case 2:
        return "md:col-span-3" // Full width
      default:
        return ""
    }
  }

  // Scroll reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal")

    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = revealElements[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active")
        }
      }
    }

    window.addEventListener("scroll", revealOnScroll)
    revealOnScroll() // Check on load

    return () => window.removeEventListener("scroll", revealOnScroll)
  }, [])

  return (
    <section id="projects" ref={ref} className="py-20">
      <div className="container mx-auto">
        <div className="section-number">03 / Projects</div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold font-space mb-12"
        >
          My <span className="text-accent-blue">Projects</span>
        </motion.h2>

        {/* Timeline indicator for desktop */}
        <div className="hidden md:block relative mb-8">
          <div className="absolute left-0 right-0 h-1 bg-dark-bg-alt top-4"></div>
          <div className="flex justify-between relative">
            {projects.map((_, index) => (
              <div key={index} className="relative">
                <div className="w-8 h-8 rounded-full bg-accent-blue flex items-center justify-center relative z-10">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-sm text-text-secondary">
                  {2023 - index}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects grid with different layouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-card overflow-hidden ${getProjectLayout(index)} reveal reveal-delay-${index + 1}`}
            >
              {/* Project header */}
              <div className="relative">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold font-space text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-sm rounded-full bg-accent-blue/20 text-accent-cyan">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 text-sm rounded-full bg-dark-bg-alt/50 text-text-secondary">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <p className="text-text-secondary mb-4 line-clamp-2">{project.description}</p>

                <button
                  onClick={() => toggleProject(index)}
                  className="glass-card w-full px-4 py-2 flex items-center justify-center gap-2 transition-colors"
                >
                  {expandedProject === index ? (
                    <>
                      <span>Hide Details</span>
                      <ChevronUp size={18} />
                    </>
                  ) : (
                    <>
                      <span>View Details</span>
                      <ChevronDown size={18} />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {expandedProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-4">
                        <p className="text-text-secondary">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 text-sm rounded-full bg-accent-blue/20 text-accent-cyan">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4 pt-2">
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card px-4 py-2 flex items-center gap-2"
                          >
                            <Github size={18} />
                            <span>Code</span>
                          </Link>
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card px-4 py-2 flex items-center gap-2 text-accent-cyan"
                          >
                            <ExternalLink size={18} />
                            <span>Live Demo</span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
