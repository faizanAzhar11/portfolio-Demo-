import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-secondary-900 dark:text-secondary-100">
              Hi, I&apos;m{' '}
            </span>
            <span className="text-primary-600">Faizan Azhar</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl text-secondary-700 dark:text-secondary-300 mb-8 animate-slide-up">
            Senior Software Engineer & Technical Consultant
          </h2>
          
          <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Dedicated software developer specializing in full-stack development with Azure, React, .NET, and modern web technologies. 
            Currently based in Ireland, creating high-quality products in competitive environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Link>
            
            <Link
              href="/resume.pdf"
              download="Faizan_Azhar_Resume.pdf"
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary-200 hover:bg-secondary-300 dark:bg-secondary-800 dark:hover:bg-secondary-700 text-secondary-800 dark:text-secondary-200 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              View Resume
            </Link>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/faizanAzhar11"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-100 dark:hover:bg-primary-900 rounded-full transition-all duration-200 transform hover:scale-110"
            >
              <Github className="h-6 w-6 text-secondary-700 dark:text-secondary-300" />
            </a>
            
            <a
              href="https://linkedin.com/in/faizanazhar11"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-100 dark:hover:bg-primary-900 rounded-full transition-all duration-200 transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6 text-secondary-700 dark:text-secondary-300" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-secondary-400" />
      </div>
    </section>
  )
}
