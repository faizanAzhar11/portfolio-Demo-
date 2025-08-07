'use client'

import { motion } from 'framer-motion'
import { Code, Users, Trophy, Heart } from 'lucide-react'

export function About() {
  const highlights = [
    {
      icon: Code,
      title: '5+ Years Experience',
      description: 'Building scalable applications with modern technologies'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Leading development teams and mentoring junior developers'
    },
    {
      icon: Trophy,
      title: 'Certified Professional',
      description: 'Multiple Azure certifications and continuous learning'
    },
    {
      icon: Heart,
      title: 'Passion for Innovation',
      description: 'Always exploring new technologies and best practices'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate about creating innovative solutions that make a difference
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Building the Future with Code
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I'm a dedicated software engineer with over 5 years of experience in full-stack 
                  development, specializing in Azure cloud solutions and AI integrations. Currently 
                  serving as a Senior Software Engineer at Tekenable Ltd, where I lead development 
                  teams and deliver innovative solutions for enterprise clients.
                </p>
                
                <p>
                  My expertise spans across modern web technologies, cloud platforms, and emerging 
                  AI technologies. I'm passionate about creating scalable, maintainable solutions 
                  that solve real-world problems and drive business value.
                </p>
                
                <p>
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
                  projects, and sharing knowledge with the developer community. I believe in continuous 
                  learning and staying ahead of technology trends.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Key Achievements
              </h3>
              
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  <span>Led development of EPassport ERA system for international clients</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  <span>Developed AI-powered chat with documents POC that converted to successful client</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  <span>Architected and deployed CI/CD pipelines for Azure Functions and PCF controls</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  <span>Created custom Power Apps connectors and media streaming services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  <span>Built machine learning models achieving 73% F1-score for DDI detection</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <highlight.icon size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
