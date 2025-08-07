'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar } from 'lucide-react'

const projects = [
  {
    title: 'EPassport ERA System',
    description: 'Led development of international passport management system with media streaming capabilities for France and UK broadcasting.',
    technologies: ['React', 'Azure', '.NET Core', 'Azure Functions', 'DevOps'],
    highlights: [
      'Client requirement analysis and user story creation',
      'Weekly demo presentations to international clients',
      'Media streaming service development',
      'Third-party endpoint integrations'
    ],
    period: '2022 - Present',
    company: 'Tekenable Ltd'
  },
  {
    title: 'Horse Pedigree Visualization',
    description: 'Developed an interactive 5-level horse pedigree visualization using PCF controls with React Query for data management.',
    technologies: ['React', 'PCF Controls', 'React Query', 'Power Platform'],
    highlights: [
      '5-level hierarchical data visualization',
      'Custom Power Platform PCF controls',
      'Optimized data fetching with React Query',
      'Interactive family tree interface'
    ],
    period: '2022 - 2023',
    company: 'Tekenable Ltd'
  },
  {
    title: 'AI-Powered Chat with Documents',
    description: 'Built POC for document interaction using Azure OpenAI, Document Intelligence, and Cognitive Search that converted to successful client.',
    technologies: ['Azure OpenAI', 'Document Intelligence', 'Cognitive Search', 'FastAPI', 'React'],
    highlights: [
      'Natural language document querying',
      'Azure AI service integrations',
      'Proof of concept to production conversion',
      'Client acquisition through technical demonstration'
    ],
    period: '2023',
    company: 'Tekenable Ltd'
  },
  {
    title: 'Online Education Platform',
    description: 'Developed and deployed comprehensive education system for Saudi client with modern tech stack and scalable architecture.',
    technologies: ['Node.js', 'React', 'React Native', 'Serverless', 'GraphQL', 'Firebase'],
    highlights: [
      'Cross-platform mobile and web applications',
      'Serverless architecture implementation',
      'GraphQL API design and development',
      'International client deployment'
    ],
    period: '2020',
    company: 'AlphaSquad'
  },
  {
    title: 'Hotel & Taxi Management Systems',
    description: 'Built comprehensive management systems for hospitality and transportation services with real-time tracking and booking capabilities.',
    technologies: ['Node.js', 'React', 'React Native', 'Google Maps API', 'Firebase'],
    highlights: [
      'Real-time location tracking integration',
      'Booking and reservation systems',
      'Cross-platform mobile applications',
      'Payment gateway integrations'
    ],
    period: '2020 - 2022',
    company: 'Code Breakers'
  },
  {
    title: 'SQL to Natural Language Converter',
    description: 'Open-source Dynamics 365 PCF control that converts SQL queries to natural language using Hugging Face models.',
    technologies: ['Dynamics 365', 'PCF Controls', 'React', 'FastAPI', 'Hugging Face', 'Docker'],
    highlights: [
      'Custom Dynamics 365 control development',
      'AI model integration for language processing',
      'Docker containerization',
      'Open-source contribution'
    ],
    period: '2023',
    company: 'Open Source',
    github: 'https://github.com/faizanAzhar11',
    isOpenSource: true
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of projects that demonstrate my technical expertise and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-4">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {project.period}
                    </span>
                    <span>{project.company}</span>
                  </div>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Key Highlights */}
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Key Highlights:
                </h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Open Source Badge */}
              {project.isOpenSource && (
                <div className="mt-4">
                  <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                    Open Source
                  </span>
                </div>
              )}
            </motion.div>
          ))}
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
            Interested in working together or learning more about these projects?
          </p>
          <a href="#contact" className="btn-primary">
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  )
}
