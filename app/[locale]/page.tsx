import Hero from '@/components/hero'
import Projects from '@/components/projects'
import About from '@/components/about'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import BackToTop from '@/components/back-to-top'
import Footer from '@/components/footer'
import { setRequestLocale } from 'next-intl/server'
import { Locale } from '@/types/locale'

export default async function Home({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  
  setRequestLocale(locale)

  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}
