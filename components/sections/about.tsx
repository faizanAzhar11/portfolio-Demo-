import { User, Award, Code, Briefcase } from 'lucide-react'

export function About() {
  const stats = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      label: 'Years Experience',
      value: '5+',
    },
    {
      icon: <Code className="h-6 w-6" />,
      label: 'Projects Completed',
      value: '50+',
    },
    {
      icon: <Award className="h-6 w-6" />,
      label: 'Certifications',
      value: '6',
    },
    {
      icon: <User className="h-6 w-6" />,
      label: 'Happy Clients',
      value: '25+',
    },
  ]

  return (
    <section id="about" className="py-20 bg-secondary-50 dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-secondary-900 dark:text-secondary-100">
                Passionate Software Engineer
              </h3>
              
              <div className="space-y-4 text-secondary-700 dark:text-secondary-300">
                <p>
                  I am a dedicated software developer who loves creating high-quality products in competitive environments. 
                  I&apos;m committed to innovation and always seeking new challenges and opportunities.
                </p>
                
                <p>
                  Currently working as a Senior Software Engineer & Technical Consultant at Tekenable Ltd (Ireland), 
                  where I successfully lead development teams and deliver enterprise-level solutions.
                </p>
                
                <p>
                  My expertise spans across full-stack development with a strong focus on Azure cloud technologies, 
                  React ecosystem, .NET framework, and modern web development practices.
                </p>
                
                <p>
                  I have experience in developing complex applications including EPassport systems, 
                  Power Apps solutions, AI-integrated chat systems, and various web applications.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="card text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex justify-center mb-4 text-primary-600">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-secondary-900 dark:text-secondary-100 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
