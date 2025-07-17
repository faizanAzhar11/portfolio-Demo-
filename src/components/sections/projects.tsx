'use client'

import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCode, FiZap, FiDatabase } from 'react-icons/fi'

export function Projects() {
  const projects = [
    {
      title: 'EPassport ERA System',
      description: 'Led development of a comprehensive passport management system with weekly client demos. Built with modern tech stack including React, Azure services, and real-time features.',
      tech: ['React', 'Azure', '.NET', 'C#', 'DevOps'],
      icon: FiCode,
      color: 'from-blue-500 to-cyan-500',
      highlights: ['Client requirement analysis', 'Weekly demo presentations', 'Full-stack development']
    },
    {
      title: 'AI-Powered Chat with Documents',
      description: 'Developed a POC that converts documents into interactive chat experiences using Azure OpenAI, leading to successful client acquisition.',
      tech: ['Azure OpenAI', 'Azure Cognitive Search', 'Azure Document Intelligence', 'Python', 'FastAPI'],
      icon: FiZap,
      color: 'from-purple-500 to-pink-500',
      highlights: ['AI integration', 'Document processing', 'Client success']
    },
    {
      title: 'Power Apps Custom Connectors',
      description: 'Created custom connectors in C# for Power Apps, enabling seamless integration with external systems and improving workflow efficiency.',
      tech: ['Power Apps', 'C#', 'Custom Connectors', 'API Integration'],
      icon: FiDatabase,
      color: 'from-green-500 to-emerald-500',
      highlights: ['Custom development', 'API integration', 'Power Platform']
    },
    {
      title: 'Horse Pedigree System',
      description: 'Built a complex 5-level horse pedigree system using PCF in React with React Query for efficient data management and visualization.',
      tech: ['React', 'PCF', 'React Query', 'Data Visualization'],
      icon: FiCode,
      color: 'from-orange-500 to-red-500',
      highlights: ['Complex data structure', 'Custom visualization', 'Performance optimization']
    },
    {
      title: 'SQL to Natural Language Converter',
      description: 'Open-source project: Built a Dynamics 365 PCF control that converts SQL queries to natural language using Hugging Face models.',
      tech: ['Dynamics 365', 'PCF', 'React', 'FastAPI', 'Hugging Face', 'Docker'],
      icon: FiGithub,
      color: 'from-indigo-500 to-purple-500',
      highlights: ['Open source', 'NLP integration', 'Docker deployment'],
      github: 'https://github.com/faizanAzhar11'
    },
    {
      title: 'Online Education System',
      description: 'Developed and deployed a comprehensive online education platform for a Saudi client using modern serverless architecture.',
      tech: ['Node.js', 'React', 'React Native', 'Serverless', 'GraphQL', 'Firebase'],
      icon: FiCode,
      color: 'from-teal-500 to-blue-500',
      highlights: ['Serverless architecture', 'Mobile app', 'International client']
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development, 
            AI integration, and cloud solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl card-hover shadow-lg"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
                  <project.icon className="h-6 w-6 text-white" />
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <FiGithub className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </a>
                )}
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Want to see more of my work or discuss a project?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/faizanAzhar11"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2"
            >
              <FiGithub className="h-5 w-5" />
              <span>View GitHub</span>
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary flex items-center space-x-2"
            >
              <FiExternalLink className="h-5 w-5" />
              <span>Get In Touch</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
