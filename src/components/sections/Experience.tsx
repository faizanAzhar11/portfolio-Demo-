import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((exp) => (
            <div key={exp.id} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
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
