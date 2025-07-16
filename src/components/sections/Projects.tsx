'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { portfolioData } from '@/lib/data'
import { getStatusColor } from '@/lib/utils'

export default function Projects() {
  const { projects } = portfolioData
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const featuredProjects = projects.filter(project => 
    ['epassport-era', 'chat-with-docs', 'horse-pedigree'].includes(project.id)
  )

  return (
    <section id="projects" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="subheading max-w-3xl mx-auto">
            Showcasing some of my best work and technical achievements
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card card-hover group"
            >
              {/* Project Image */}
              {project.imageUrl && (
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {project.category === 'AI/ML' ? '🤖' : 
                       project.category === 'Web App' ? '🌐' : '💻'}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              )}

              {/* Project Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 ml-2">
                    <Tag className="h-4 w-4 text-gray-400" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-sm">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Projects List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="heading-md text-center text-gray-900 dark:text-white mb-12">
            All Projects
          </h3>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={`all-${project.id}`}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="card card-hover"
              >
                <div className="grid md:grid-cols-4 gap-6 items-start">
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {project.category}
                    </p>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <button
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      )}
                      {project.githubUrl && (
                        <button
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.longDescription || project.description}
                    </p>
                    
                    {project.features && project.features.length > 0 && (
                      <div className="mb-4">
                        <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                          Key Features:
                        </h5>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-1">
                    <h5 className="font-medium text-gray-900 dark:text-white mb-3">
                      Technologies:
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in My Work?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's connect and see how we can work together!
            </p>
            <Button
              size="lg"
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
