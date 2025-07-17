'use client'

import { motion } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import Image from 'next/image'

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
              >
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                  Faizan Azhar
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300"
              >
                Senior Software Engineer & Technical Consultant
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
              >
                Full Stack Developer with expertise in Azure, React, .NET, Python, and AI solutions. 
                I love creating high-quality products and am committed to innovation and excellence.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <FiMail className="h-5 w-5" />
                <span>Get In Touch</span>
              </button>
              
              <a
                href="/Resume - Faizan_Azhar_Software_Eng.pdf"
                download
                className="btn-secondary flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <FiDownload className="h-5 w-5" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex space-x-6"
            >
              <a
                href="https://github.com/faizanAzhar11"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
                aria-label="GitHub"
              >
                <FiGithub className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </a>
              <a
                href="https://linkedin.com/in/faizanazhar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </a>
              <a
                href="mailto:faziazhar1@gmail.com"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
                aria-label="Email"
              >
                <FiMail className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 p-2 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-2">
                  <Image
                    src="/faizanpic.jpg"
                    alt="Faizan Azhar"
                    width={304}
                    height={304}
                    className="w-full h-full rounded-full object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
