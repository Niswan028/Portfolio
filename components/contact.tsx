"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)
    alert("Thanks for your message! This is a demo, so no message was actually sent.")
    setFormState({ name: "", email: "", message: "" })
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
    <section id="contact" ref={ref} className="py-20">
      <div className="container mx-auto">
        <div className="section-number">04 / Contact</div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold font-space mb-12"
        >
          Get In <span className="text-accent-blue">Touch</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3 reveal reveal-delay-1">
              <h3 className="text-2xl font-bold font-space mb-6">Contact Info</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-blue/20 text-accent-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <Link href="niswan0077@gmail.com" className="text-text-secondary transition-colors">
                      niswan0077@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-blue/20 text-accent-cyan">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">LinkedIn</h4>
                    <Link
                      href="https://www.linkedin.com/in/niswan-g-0554aa290/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary transition-colors"
                    >
                      linkedin.com/in/Niswan G
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-blue/20 text-accent-cyan">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">GitHub</h4>
                    <Link
                      href="https://github.com/Niswan028"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary transition-colors"
                    >
                      github.com/Niswan G
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 reveal reveal-delay-2">
              <h3 className="text-2xl font-bold font-space mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-text-secondary mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full glass-card p-3 bg-transparent border-gray-700 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-text-secondary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full glass-card p-3 bg-transparent border-gray-700 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full glass-card p-3 bg-transparent border-gray-700 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="glass-card px-6 py-3 bg-accent-blue/30 text-white border-accent-blue/50 flex items-center gap-2 transition-colors"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
