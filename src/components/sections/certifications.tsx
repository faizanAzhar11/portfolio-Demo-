'use client'

import { motion } from 'framer-motion'
import { FiAward, FiCalendar, FiCheck } from 'react-icons/fi'

export function Certifications() {
  const certifications = [
    {
      title: 'DP-100: Azure Data Scientist Associate',
      issuer: 'Microsoft',
      date: 'Jan 2025 - Present',
      status: 'Active',
      description: 'Azure machine learning, data science workflows, and MLOps practices',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI-102: Designing and Implementing a Microsoft Azure AI Solution',
      issuer: 'Microsoft',
      date: 'Jun 2023 - Present',
      status: 'Active',
      description: 'Azure AI services, cognitive services, and AI solution architecture',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI-900: Microsoft Azure AI Fundamentals',
      issuer: 'Microsoft',
      date: 'Jul 2023 - Present',
      status: 'Active',
      description: 'Fundamentals of AI, machine learning, and Azure AI services',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'PL-900: Microsoft Power Platform Fundamentals',
      issuer: 'Microsoft',
      date: 'Aug 2023 - Present',
      status: 'Active',
      description: 'Power Apps, Power Automate, Power BI, and Power Virtual Agents',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'AZ-900: Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: 'Jul 2023 - Present',
      status: 'Active',
      description: 'Azure cloud concepts, services, security, and governance',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const certificationStats = [
    { label: 'Active Certifications', value: '5', icon: FiAward },
    { label: 'Microsoft Certified', value: '100%', icon: FiCheck },
    { label: 'Specialization Areas', value: '3', icon: FiCalendar }
  ]

  return (
    <section id="certifications" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in cloud technologies, 
            AI solutions, and Microsoft platforms.
          </p>
        </motion.div>

        {/* Certification Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {certificationStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl card-hover shadow-lg text-center"
            >
              <stat.icon className="h-8 w-8 text-primary-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl card-hover shadow-lg"
            >
              {/* Certification Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color}`}>
                  <FiAward className="h-6 w-6 text-white" />
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                  {cert.status}
                </span>
              </div>

              {/* Certification Content */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  {cert.title}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {cert.issuer}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiCalendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.date}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialization Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Specialization Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Azure Cloud & AI',
                description: 'Comprehensive knowledge of Azure services, AI solutions, and cloud architecture',
                icon: '☁️'
              },
              {
                title: 'Data Science & ML',
                description: 'Machine learning workflows, data analysis, and AI model deployment',
                icon: '🤖'
              },
              {
                title: 'Power Platform',
                description: 'Power Apps, Power Automate, Power BI, and low-code/no-code solutions',
                icon: '⚡'
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {area.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
