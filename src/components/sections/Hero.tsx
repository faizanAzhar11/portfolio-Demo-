'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin } from 'lucide-react'
import Image from 'next/image'
import { personalInfo } from '@/lib/data'
import { Button } from '@/components/ui/Button'

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    window.open(personalInfo.resume, '_blank')
  }

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
                👋 Welcome to my portfolio
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                <span className="block">Hi, I&apos;m</span>
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light mb-6">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed">
                {personalInfo.bio}
              </p>
              
              {/* Location */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-8 text-gray-500 dark:text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                onClick={scrollToAbout}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore My Work
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
              
              <Button
                onClick={downloadResume}
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              <a 
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-700"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a 
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-700"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-700"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background decoration for image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full transform rotate-6 scale-105 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400 to-blue-500 rounded-full transform -rotate-6 scale-110 opacity-10"></div>
              
              {/* Profile image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-8 ring-white/10 dark:ring-gray-800/50">
                <Image
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full opacity-80"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-8 h-8 bg-indigo-500 rounded-full opacity-60"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center cursor-pointer"
            onClick={scrollToAbout}
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll down</span>
            <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
