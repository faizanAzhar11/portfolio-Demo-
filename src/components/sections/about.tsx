'use client'

import { motion } from 'framer-motion'
import { FiUser, FiCode, FiAward, FiTarget } from 'react-icons/fi'

export function About() {
  const stats = [
    { icon: FiCode, label: 'Years Experience', value: '5+' },
    { icon: FiTarget, label: 'Projects Completed', value: '20+' },
    { icon: FiAward, label: 'Certifications', value: '5' },
    { icon: FiUser, label: 'Clients Served', value: '15+' },
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I am a dedicated software developer who loves creating high-quality products in competitive environments. 
            I&apos;m committed to innovation and always seeking new challenges and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Currently working as a Senior Software Engineer & Technical Consultant at Tekenable Ltd, 
                where I lead development teams and deliver innovative solutions using cutting-edge technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                I specialize in full-stack development with expertise in Azure cloud services, 
                React, .NET, Python, and AI solutions. My experience spans from developing 
                Power Apps solutions to creating AI-powered applications using Azure OpenAI.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Key Highlights:
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Led EPassport ERA development with weekly client demos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Developed custom Power Apps connectors and solutions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Built AI-powered chat applications using Azure OpenAI</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Implemented CI/CD pipelines for Azure Functions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Open-source contributor with Hugging Face integration</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl card-hover text-center"
              >
                <stat.icon className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Education
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Bachelor of Engineering in Software Engineering
            </h4>
            <p className="text-primary-600 dark:text-primary-400 mb-2">
              Air University Islamabad
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              2017 - 2020 | CGPA: 3.01
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
