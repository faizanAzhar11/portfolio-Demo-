import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import TechStack from '@/components/sections/TechStack'
import Projects from '@/components/sections/Projects'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'
import { JsonLd } from '@/components/JsonLd'

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Certifications />
      <Contact />
    </>
  )
}
