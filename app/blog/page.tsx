import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Insights on Software Development',
  description: 'Technical articles and insights about software development, Azure, React, and modern web technologies.',
}

export default function BlogPage() {
  const posts = [
    {
      title: 'Building Scalable Applications with Azure and React',
      excerpt: 'Learn how to architect and deploy scalable web applications using Azure Static Web Apps and React.',
      date: '2024-01-15',
      readTime: '5 min read',
      slug: 'building-scalable-applications-azure-react',
      category: 'Azure'
    },
    {
      title: 'TypeScript Best Practices for Enterprise Applications',
      excerpt: 'Essential TypeScript patterns and practices for building maintainable enterprise applications.',
      date: '2024-01-10',
      readTime: '8 min read',
      slug: 'typescript-best-practices-enterprise',
      category: 'TypeScript'
    },
    {
      title: 'AI Integration in Modern Web Applications',
      excerpt: 'Exploring how to integrate AI services like Azure OpenAI into your web applications.',
      date: '2024-01-05',
      readTime: '6 min read',
      slug: 'ai-integration-web-applications',
      category: 'AI'
    }
  ]

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-900 dark:text-secondary-100">
              Blog
            </h1>
            <p className="text-xl text-secondary-700 dark:text-secondary-300">
              Insights on software development, Azure, and modern web technologies
            </p>
          </div>
          
          <div className="grid gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="card hover:shadow-2xl transition-all duration-300 border-l-4 border-primary-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="tech-badge">{post.category}</span>
                  <div className="flex items-center space-x-4 text-sm text-secondary-600 dark:text-secondary-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 text-secondary-900 dark:text-secondary-100">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-secondary-700 dark:text-secondary-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-secondary-600 dark:text-secondary-400">
              More articles coming soon! Stay tuned for insights on software development and technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
