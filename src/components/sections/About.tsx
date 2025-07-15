'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
            <p>{personalInfo.bio}</p>
            <p>
              With over 3 years of experience as a Senior Software Engineer, I specialize in 
              Azure cloud technologies, full-stack development, and modern web applications. 
              I&apos;ve successfully led development teams and delivered enterprise-scale solutions.
            </p>
            <p>
              Currently working at Tekenable ltd as a Technical Consultant, where I develop 
              Power Apps solutions, Azure Functions, and modern web applications using React, 
              TypeScript, and .NET technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
