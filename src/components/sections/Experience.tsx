'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Calendar, MapPin } from 'lucide-react'
import { portfolioData } from '@/lib/data'
import { formatDateShort } from '@/lib/utils'

export default function Experience() {
  const { experience } = portfolioData
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="subheading max-w-3xl mx-auto">
            My professional journey and key achievements
          </p>
        </motion.div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card card-hover"
            >
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Company Info */}
                <div className="lg:col-span-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {job.company}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    {job.position}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDateShort(job.startDate)} - {job.endDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location} ({job.type})</span>
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="lg:col-span-3">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                        >
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="heading-md text-center text-gray-900 dark:text-white mb-12">
            Career Journey
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500"></div>
            
            <div className="space-y-12">
              {experience.map((job, index) => (
                <motion.div
                  key={`timeline-${job.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {job.company}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 text-sm">
                        {job.position}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                        {formatDateShort(job.startDate)} - {job.endDate}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
