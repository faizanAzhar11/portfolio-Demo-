import { ExternalLink, Github } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: 'EPassport ERA System',
      description: 'Led development of a comprehensive EPassport system with client requirements analysis, user story creation, and weekly demos.',
      technologies: ['React', 'C#', '.NET Core', 'Azure', 'Power Apps'],
      link: null,
      github: null,
      featured: true
    },
    {
      title: 'AI Chat with Documents',
      description: 'Developed a POC chat system that successfully led to client acquisition, integrating Azure OpenAI and Document Intelligence.',
      technologies: ['Azure OpenAI', 'Azure Document Intelligence', 'Azure Cognitive Search', 'React', 'FastAPI'],
      link: null,
      github: null,
      featured: true
    },
    {
      title: 'Horse Pedigree System',
      description: 'Built a complex 5-level horse pedigree system using PCF in React with React Query for efficient data management.',
      technologies: ['React', 'React Query', 'PCF', 'Power Apps'],
      link: null,
      github: null,
      featured: false
    },
    {
      title: 'Media Broadcasting Service',
      description: 'Developed third-party endpoints for media broadcasting services for France and the UK markets.',
      technologies: ['.NET', 'C#', 'Azure Functions', 'Media Streaming'],
      link: null,
      github: null,
      featured: false
    },
    {
      title: 'Online Education System',
      description: 'Developed and deployed a major online education system for a Saudi client using modern technologies.',
      technologies: ['Node.js', 'React', 'React Native', 'GraphQL', 'Firebase'],
      link: null,
      github: null,
      featured: false
    },
    {
      title: 'Hotel Management System',
      description: 'Built a comprehensive online hotel management system with booking, inventory, and guest management features.',
      technologies: ['Node.js', 'React', 'React Native', 'Firebase'],
      link: null,
      github: null,
      featured: false
    },
    {
      title: 'Taxi Management System',
      description: 'Developed an online taxi system with real-time tracking, booking, and payment integration.',
      technologies: ['Node.js', 'React', 'React Native', 'Google Maps API', 'Firebase'],
      link: null,
      github: null,
      featured: false
    },
    {
      title: 'SQL to Natural Language Converter',
      description: 'Built a custom Dynamics 365 control that converts SQL queries to natural language using Hugging Face models.',
      technologies: ['Dynamics 365', 'PCF', 'React', 'FastAPI', 'Hugging Face', 'Docker'],
      link: null,
      github: 'https://github.com/faizanAzhar11',
      featured: true
    }
  ]

  return (
    <section id="projects" className="py-20 bg-secondary-50 dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card ${project.featured ? 'ring-2 ring-primary-500' : ''} hover:shadow-2xl transition-all duration-300`}
            >
              {project.featured && (
                <div className="bg-primary-600 text-white text-xs px-3 py-1 rounded-full inline-block mb-4">
                  Featured
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-3 text-secondary-900 dark:text-secondary-100">
                {project.title}
              </h3>
              
              <p className="text-secondary-700 dark:text-secondary-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="tech-badge text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                )}
                
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-secondary-600 hover:text-primary-600 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
