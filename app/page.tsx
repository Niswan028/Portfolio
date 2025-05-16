import { Suspense } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Preloader from "@/components/preloader"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-dark-bg via-dark-bg-alt to-dark-bg text-white overflow-hidden">
      <Suspense fallback={<div className="h-screen w-screen bg-dark-bg" />}>
        <Preloader />
      </Suspense>
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
