'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { portfolioData } from '@/lib/data'
import { getSkillLevelColor } from '@/lib/utils'

export default function TechStack() {
  const { skills } = portfolioData
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const categories = [
    'Frontend',
    'Backend', 
    'Cloud',
    'Database',
    'Languages',
    'Tools'
  ] as const

  const skillsByCategory = categories.reduce((acc, category) => {
    acc[category] = skills.filter(skill => skill.category === category)
    return acc
  }, {} as Record<typeof categories[number], typeof skills>)

  return (
    <section id="skills" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
            Tech Stack & Skills
          </h2>
          <p className="subheading max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {skillsByCategory[category]?.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="card card-hover group cursor-default"
                  >
                    <div className="text-center">
                      {skill.icon && (
                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                          {skill.icon}
                        </div>
                      )}
                      
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                        {skill.name}
                      </h4>
                      
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${getSkillLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Level Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Skill Levels
          </h4>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Expert', 'Advanced', 'Intermediate', 'Beginner'].map((level) => (
              <div key={level} className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSkillLevelColor(level)}`}>
                  {level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20"
        >
          <h3 className="heading-md text-center text-gray-900 dark:text-white mb-12">
            Currently Focused On
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Azure Cloud',
                description: 'Building scalable cloud solutions with Azure services, Functions, and AI capabilities',
                technologies: ['Azure Functions', 'Azure OpenAI', 'Azure DevOps', 'CosmosDB'],
                icon: '☁️',
              },
              {
                title: 'Power Platform',
                description: 'Creating custom business applications and automations using Microsoft Power Platform',
                technologies: ['Power Apps', 'Power Automate', 'PCF Controls', 'Dataverse'],
                icon: '⚡',
              },
              {
                title: 'AI Development',
                description: 'Implementing AI solutions for document processing and natural language understanding',
                technologies: ['Azure AI', 'OpenAI API', 'Cognitive Search', 'Machine Learning'],
                icon: '🤖',
              },
            ].map((focus, index) => (
              <motion.div
                key={focus.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="card card-hover text-center"
              >
                <div className="text-5xl mb-4">{focus.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {focus.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {focus.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {focus.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
