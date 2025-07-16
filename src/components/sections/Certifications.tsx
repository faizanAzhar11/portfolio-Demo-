'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, ExternalLink, Calendar } from 'lucide-react'
import { portfolioData } from '@/lib/data'

export default function Certifications() {
  const { certifications } = portfolioData
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="certifications" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="subheading max-w-3xl mx-auto">
            Professional certifications that validate my expertise in Microsoft Azure and cloud technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card card-hover group cursor-pointer"
              onClick={() => cert.credentialUrl && window.open(cert.credentialUrl, '_blank')}
            >
              {/* Badge Image Placeholder */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Award className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {cert.name}
              </h3>

              <p className="text-primary-600 dark:text-primary-400 font-semibold text-center mb-3">
                {cert.issuer}
              </p>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span>Issued: {cert.issueDate}</span>
              </div>

              {cert.credentialUrl && (
                <div className="flex items-center justify-center gap-2 text-sm text-primary-600 dark:text-primary-400 mb-4">
                  <ExternalLink className="w-4 h-4" />
                  <span>View Credential</span>
                </div>
              )}

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                  Skills Validated:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {certifications.length}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                Active Certifications
              </div>
            </div>
            
            <div className="card">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                Microsoft Azure Focus
              </div>
            </div>
            
            <div className="card">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                2023-2025
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                Certification Period
              </div>
            </div>
          </div>
        </motion.div>

        {/* Commitment to Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 card max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Continuous Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I believe in staying current with the latest technologies and best practices. 
            These certifications represent my commitment to professional development and 
            my expertise in Microsoft Azure ecosystem. I regularly update my certifications 
            and explore new technologies to provide the best solutions for my clients.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
