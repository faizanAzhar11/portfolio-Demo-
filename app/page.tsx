import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { TechStack } from '@/components/sections/tech-stack'
import { Projects } from '@/components/sections/projects'
import { Certifications } from '@/components/sections/certifications'
import { Contact } from '@/components/sections/contact'
import { JsonLd } from '@/components/seo/json-ld'

export default function Home() {
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
