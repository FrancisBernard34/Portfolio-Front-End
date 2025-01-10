import Hero from '@/components/hero'
import Projects from '@/components/projects'
import About from '@/components/about'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import BackToTop from '@/components/back-to-top'

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <BackToTop />
    </main>
  )
}
