"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Globe, Server, Smartphone, Terminal } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      items: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      items: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"],
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Prisma"],
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      items: ["React Native", "Flutter", "Responsive Design", "Progressive Web Apps"],
    },
    {
      category: "DevOps",
      icon: <Terminal className="w-6 h-6" />,
      items: ["Git", "Docker", "CI/CD", "AWS", "Vercel", "GitHub Actions"],
    },
    {
      category: "Programming",
      icon: <Code className="w-6 h-6" />,
      items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Rust"],
    },
  ]

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
    <section id="skills" ref={ref} className="py-20">
      <div className="container mx-auto">
        <div className="section-number">02 / Skills</div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold font-space mb-12"
        >
          My <span className="text-accent-blue">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface SkillCardProps {
  skill: {
    category: string
    icon: React.ReactNode
    items: string[]
  }
  index: number
}

function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <div className={`glass-card p-6 transition-all duration-300 reveal reveal-delay-${(index % 4) + 1}`}>
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-lg bg-accent-blue/20 text-accent-cyan mr-3">{skill.icon}</div>
        <h3 className="text-xl font-bold font-space">{skill.category}</h3>
      </div>

      <ul className="grid grid-cols-2 gap-2">
        {skill.items.map((item, i) => (
          <li key={i} className="flex items-center">
            <span className="w-2 h-2 bg-accent-blue rounded-full mr-2"></span>
            <span className="text-text-secondary">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
