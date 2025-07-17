'use client'

import { motion } from 'framer-motion'
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiTool,
  FiCloudLightning,
  FiZap
} from 'react-icons/fi'

export function TechStack() {
  const techCategories = [
    {
      icon: FiCode,
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      technologies: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      icon: FiServer,
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      technologies: ['.NET', 'C#', 'Python', 'Node.js', 'FastAPI', 'RESTful APIs', 'GraphQL']
    },
    {
      icon: FiCloudLightning,
      title: 'Cloud & DevOps',
      color: 'from-purple-500 to-pink-500',
      technologies: ['Azure', 'Docker', 'CI/CD', 'Azure Functions', 'Azure DevOps', 'GitHub Actions']
    },
    {
      icon: FiDatabase,
      title: 'Database',
      color: 'from-orange-500 to-red-500',
      technologies: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'Cosmos DB', 'Firebase']
    },
    {
      icon: FiZap,
      title: 'AI & Machine Learning',
      color: 'from-indigo-500 to-purple-500',
      technologies: ['Azure OpenAI', 'Azure Cognitive Search', 'Azure Document Intelligence', 'Hugging Face', 'Machine Learning']
    },
    {
      icon: FiTool,
      title: 'Tools & Platforms',
      color: 'from-teal-500 to-blue-500',
      technologies: ['Power Apps', 'Power Platform', 'Dynamics 365', 'Git', 'Visual Studio', 'VS Code']
    }
  ]

  return (
    <section id="tech-stack" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I work with to build scalable, efficient, and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl card-hover shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (techIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Core Specializations
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Azure Cloud Solutions', 'Full-Stack Development', 'AI & Machine Learning', 'Power Platform', 'DevOps & CI/CD'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
