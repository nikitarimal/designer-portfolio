import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Skills from '@/components/sections/skills'
import Projects from '@/components/sections/projects'
import Certifications from '@/components/sections/certifications'
import Contact from '@/components/sections/contact'
import Experience from '@/components/sections/experience'

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Experience />
    </main>
  )
}
