"use client"

import { motion } from 'framer-motion'
import { personalInfo, experiences, education } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Learn more about my journey, experience, and passion for technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              My Story
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              With over 5 years of experience in software development, I specialize in building 
              scalable web applications and cloud solutions. My expertise spans across full-stack 
              development with a strong focus on Azure cloud services, React ecosystem, and .NET technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I've had the privilege of working with clients from different countries, delivering 
              high-quality solutions that meet their specific needs. My passion lies in solving 
              complex problems and staying up-to-date with the latest technology trends.
            </p>
          </motion.div>

          {/* Stats and Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <h4 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">5+</h4>
                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <h4 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">50+</h4>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <h4 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">{experiences.length}</h4>
                <p className="text-gray-600 dark:text-gray-400">Companies Worked</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <h4 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">10+</h4>
                <p className="text-gray-600 dark:text-gray-400">Technologies</p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Education</h4>
              {education.map((edu) => (
                <div key={edu.id} className="mb-4 last:mb-0">
                  <h5 className="font-medium text-gray-900 dark:text-white">{edu.degree} in {edu.field}</h5>
                  <p className="text-primary-600 dark:text-primary-400">{edu.institution}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.period} • {edu.location}</p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">CGPA: {edu.gpa}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
