export function TechStack() {
  const techCategories = [
    {
      category: 'Frontend',
      technologies: [
        'React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript',
        'HTML5', 'CSS3', 'Tailwind CSS', 'React Query', 'PCF'
      ]
    },
    {
      category: 'Backend',
      technologies: [
        '.NET', '.NET Core', 'C#', 'Node.js', 'Python', 'FastAPI',
        'GraphQL', 'REST APIs', 'Power Apps', 'Azure Functions'
      ]
    },
    {
      category: 'Cloud & DevOps',
      technologies: [
        'Azure', 'Azure OpenAI', 'Azure Cognitive Search', 'Azure Document Intelligence',
        'Docker', 'CI/CD', 'DevOps', 'Serverless', 'Firebase'
      ]
    },
    {
      category: 'Database & AI',
      technologies: [
        'SQL', 'NoSQL', 'Machine Learning', 'NLP', 'Hugging Face',
        'Dynamics 365', 'Power Platform', 'AI/ML Models'
      ]
    },
    {
      category: 'Mobile & Tools',
      technologies: [
        'React Native', 'Google Maps API', 'Git', 'IDA Pro', 'Ghidra',
        'Malware Analysis', 'R', 'Django', 'MEAN Stack'
      ]
    }
  ]

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Technology Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-600">
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="tech-badge"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
