import Link from 'next/link'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary-50 dark:bg-secondary-900 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:faziazhar1@gmail.com"
                className="flex items-center space-x-2 text-secondary-600 hover:text-primary-600 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>faziazhar1@gmail.com</span>
              </a>
              <a
                href="tel:+923435391151"
                className="flex items-center space-x-2 text-secondary-600 hover:text-primary-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+92 343 5391151</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="#about"
                className="block text-secondary-600 hover:text-primary-600 transition-colors"
              >
                About Me
              </Link>
              <Link
                href="#projects"
                className="block text-secondary-600 hover:text-primary-600 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#certifications"
                className="block text-secondary-600 hover:text-primary-600 transition-colors"
              >
                Certifications
              </Link>
              <Link
                href="/resume.pdf"
                download
                className="block text-secondary-600 hover:text-primary-600 transition-colors"
              >
                Download Resume
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/faizanAzhar11"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary-200 dark:bg-secondary-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/faizanazhar11"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary-200 dark:bg-secondary-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-600 text-sm">
              © {new Date().getFullYear()} Faizan Azhar. All rights reserved.
            </p>
            <p className="text-secondary-600 text-sm mt-2 md:mt-0">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
