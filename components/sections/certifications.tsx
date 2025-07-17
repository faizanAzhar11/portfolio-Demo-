import { Award, Calendar, ExternalLink } from 'lucide-react'

export function Certifications() {
  const certifications = [
    {
      title: 'DP-100: Azure Data Scientist Associate',
      issuer: 'Microsoft',
      date: 'Jan 2025 - Present',
      status: 'Active',
      link: null
    },
    {
      title: 'AI-102: Designing and Implementing a Microsoft Azure AI Solution',
      issuer: 'Microsoft',
      date: 'Jun 2023 - Present',
      status: 'Active',
      link: null
    },
    {
      title: 'AI-900: Microsoft Azure AI Fundamentals',
      issuer: 'Microsoft',
      date: 'Jul 2023 - Present',
      status: 'Active',
      link: null
    },
    {
      title: 'PL-900: Microsoft Power Platform Fundamentals',
      issuer: 'Microsoft',
      date: 'Aug 2023 - Present',
      status: 'Active',
      link: null
    },
    {
      title: 'AZ-900: Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: 'Jul 2023 - Present',
      status: 'Active',
      link: null
    }
  ]

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card hover:shadow-2xl transition-all duration-300 border-l-4 border-primary-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <Award className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                      {cert.status}
                    </span>
                  </div>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-secondary-900 dark:text-secondary-100">
                {cert.title}
              </h3>
              
              <p className="text-secondary-700 dark:text-secondary-300 mb-3">
                {cert.issuer}
              </p>
              
              <div className="flex items-center space-x-2 text-sm text-secondary-600 dark:text-secondary-400">
                <Calendar className="h-4 w-4" />
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
