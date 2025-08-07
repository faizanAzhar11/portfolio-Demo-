'use client'

import { motion } from 'framer-motion'
import { 
  Code, Database, Cloud, Smartphone, 
  Brain, Palette, Server, Globe
} from 'lucide-react'

const techCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Angular', 'React Native']
  },
  {
    title: 'Backend Development',
    icon: Server,
    technologies: ['.NET Core', 'Node.js', 'Python', 'FastAPI', 'C#', 'GraphQL']
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    technologies: ['Azure', 'Docker', 'CI/CD', 'Azure Functions', 'DevOps', 'Serverless']
  },
  {
    title: 'Database & Storage',
    icon: Database,
    technologies: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Firebase', 'Azure Cosmos DB']
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    technologies: ['Azure OpenAI', 'Hugging Face', 'Machine Learning', 'NLP', 'Document Intelligence']
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    technologies: ['React Native', 'Cross-platform', 'Mobile UI/UX', 'App Store Deployment']
  },
  {
    title: 'Power Platform',
    icon: Palette,
    technologies: ['Power Apps', 'Power Automate', 'PCF Controls', 'Custom Connectors']
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    technologies: ['REST APIs', 'Microservices', 'Web Security', 'Performance Optimization']
  }
]

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Tech Stack & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                  <category.icon size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs mr-1 mb-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Full-Stack Development',
              'Cloud Architecture',
              'API Design',
              'System Integration',
              'Performance Optimization',
              'Team Leadership',
              'Technical Consulting',
              'Agile Methodologies',
              'Code Review',
              'Mentoring'
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
