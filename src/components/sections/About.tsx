'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { portfolioData } from '@/lib/data'

export default function About() {
  const { personal, education } = portfolioData
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '5', label: 'Azure Certifications' },
    { number: '100%', label: 'Client Satisfaction' },
  ]

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="subheading max-w-3xl mx-auto">
            Passionate about creating innovative solutions and driving digital transformation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {personal.bio}
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Currently working as a Senior Software Engineer at Tekenable Ltd, I lead the development 
                of enterprise-grade applications using modern technologies. My expertise spans across 
                Azure cloud services, Power Platform, and AI implementations.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                I have a proven track record of delivering successful projects, from the EPassport ERA 
                system to innovative AI-powered document analysis solutions. My goal is to bridge the 
                gap between technology and business needs, creating solutions that drive real value.
              </p>

              {/* Education */}
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-soft">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Education
                </h3>
                {education.map((edu) => (
                  <div key={edu.id} className="border-l-4 border-primary-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {edu.degree} in {edu.field}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.startDate} - {edu.endDate} • {edu.location}
                    </p>
                    {edu.gpa && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        CGPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="card card-hover text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="heading-md text-center text-gray-900 dark:text-white mb-12">
            Core Values
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Always seeking new challenges and creative solutions to complex problems.',
                icon: '💡',
              },
              {
                title: 'Quality',
                description: 'Committed to delivering high-quality products that exceed expectations.',
                icon: '⭐',
              },
              {
                title: 'Collaboration',
                description: 'Believing in the power of teamwork and effective communication.',
                icon: '🤝',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="card card-hover text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
