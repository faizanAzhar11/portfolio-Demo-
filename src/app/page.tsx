import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import TechStack from '@/components/sections/TechStack'
import Projects from '@/components/sections/Projects'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
