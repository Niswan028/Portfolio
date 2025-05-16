"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCard, setActiveCard] = useState(0)

  const cards = [
    {
      title: "Education",
      content:
        "Currently pursuing an integrated M.Tech in Computer Science and Engineering. Expected to graduate in 2028. CGPA: 7.81.",
    },
    {
      title: "Experience",
      content:
        "Worked as a Software Engineering Intern at Tech Company XYZ, where I contributed to developing web applications using React and Node.js.",
    },
    {
      title: "Interests",
      content:
        "Passionate about full-stack development, machine learning, and AI. Always eager to explore new technologies and build impactful digital solutions.",
    },
  ]

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
    revealOnScroll()

    return () => window.removeEventListener("scroll", revealOnScroll)
  }, [])

  return (
    <section id="about" ref={ref} className="py-20">
      <div className="container mx-auto">
        <div className="section-number">01 / About</div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold font-space mb-12"
        >
          About <span className="text-accent-blue">Me</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3 reveal reveal-delay-1">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-xl bg-accent-blue/20 blur-xl"></div>
              <div className="glass-card relative w-full h-full overflow-hidden rounded-xl">
              <Image
                src="/N.jpg"
                alt="Profile"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />

              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <p className="text-text-secondary text-lg mb-6 reveal reveal-delay-2">
              I'm currently in my 3rd year of an integrated M.Tech program in Computer Science and Engineering, graduating in 2028. My academic performance has been consistent with a CGPA of 7.81.
            </p>
            <p className="text-text-secondary text-lg mb-8 reveal reveal-delay-3">
              I have a strong passion for full-stack development, particularly in building scalable and user-centric web applications. Alongside development, I'm exploring machine learning, computer vision, and data-driven technologies that enhance user experience and functionality. I believe in continuous learning and aim to contribute meaningfully to modern software and AI projects.
            </p>

            <div className="relative reveal reveal-delay-4">
              <div className="flex gap-4 mb-6">
                {cards.map((card, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCard(index)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      activeCard === index ? "bg-accent-blue text-white" : "glass text-text-secondary"
                    }`}
                  >
                    {card.title}
                  </button>
                ))}
              </div>

              <div className="relative min-h-[150px]">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`glass-card p-6 absolute top-0 left-0 w-full transition-opacity duration-500 ${
                      activeCard === index ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-accent-cyan mb-3">{card.title}</h3>
                    <p className="text-text-secondary">{card.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
