'use client'

import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: 'DP-100: Azure Data Scientist Associate',
    issuer: 'Microsoft',
    date: 'Jan 2025 - Present',
    description: 'Advanced certification in Azure machine learning and data science solutions.',
    status: 'Active',
    badgeColor: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
  },
  {
    title: 'AI-102: Designing and Implementing a Microsoft Azure AI Solution',
    issuer: 'Microsoft',
    date: 'Jun 2023 - Present',
    description: 'Comprehensive certification covering Azure AI services, cognitive services, and machine learning implementations.',
    status: 'Active',
    badgeColor: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
  },
  {
    title: 'AI-900: Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: 'Jul 2023 - Present',
    description: 'Foundational knowledge of artificial intelligence and machine learning concepts on Azure.',
    status: 'Active',
    badgeColor: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
  },
  {
    title: 'PL-900: Microsoft Power Platform Fundamentals',
    issuer: 'Microsoft',
    date: 'Aug 2023 - Present',
    description: 'Core concepts of Power Platform including Power Apps, Power Automate, Power BI, and Power Virtual Agents.',
    status: 'Active',
    badgeColor: 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300'
  },
  {
    title: 'AZ-900: Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'Jul 2023 - Present',
    description: 'Fundamental understanding of cloud services and how they are provided with Microsoft Azure.',
    status: 'Active',
    badgeColor: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
  }
]

const achievements = [
  {
    title: 'Machine Learning Excellence',
    description: 'Achieved 73% F1-score in drug-drug interaction detection, comparable to leading research in the domain.',
    category: 'Research'
  },
  {
    title: 'Technical Leadership',
    description: 'Successfully led development teams and delivered complex projects for international clients.',
    category: 'Leadership'
  },
  {
    title: 'Innovation Recognition',
    description: 'Developed POC that converted into successful client acquisition through technical excellence.',
    category: 'Innovation'
  },
  {
    title: 'Open Source Contribution',
    description: 'Created and published SQL to Natural Language converter for Dynamics 365.',
    category: 'Community'
  }
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and recognitions that validate my expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Microsoft Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                      <Award size={24} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${cert.badgeColor}`}>
                      {cert.status}
                    </span>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm leading-tight">
                  {cert.title}
                </h4>

                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{cert.date}</span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {cert.description}
                </p>

                <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {cert.issuer}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Award size={20} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mr-3">
                        {achievement.title}
                      </h4>
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs">
                        {achievement.category}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see my complete professional credentials?
          </p>
          <a
            href="/Resume - Faizan_Azhar_Software_Eng.pdf"
            download
            className="btn-primary"
          >
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
