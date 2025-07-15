import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-mono' 
})

export const metadata: Metadata = {
  title: {
    default: 'Faizan Azhar - Senior Software Engineer & Azure Specialist',
    template: '%s | Faizan Azhar'
  },
  description: 'Senior Software Engineer specializing in Azure, React, Power Platform, and modern web technologies. Expert in full-stack development with 3+ years of experience.',
  keywords: [
    'Faizan Azhar',
    'Software Engineer',
    'Azure',
    'React',
    'Power Platform', 
    'Full Stack Developer',
    'TypeScript',
    'Node.js',
    'C#',
    'Power Apps',
    'Azure Functions',
    'DevOps'
  ],
  authors: [{ name: 'Faizan Azhar', url: 'https://github.com/faizanAzhar11' }],
  creator: 'Faizan Azhar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://faizan-portfolio.azurestaticapps.net',
    title: 'Faizan Azhar - Senior Software Engineer & Azure Specialist',
    description: 'Senior Software Engineer specializing in Azure, React, Power Platform, and modern web technologies.',
    siteName: 'Faizan Azhar Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Faizan Azhar - Senior Software Engineer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faizan Azhar - Senior Software Engineer & Azure Specialist',
    description: 'Senior Software Engineer specializing in Azure, React, Power Platform, and modern web technologies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Faizan Azhar',
              jobTitle: 'Senior Software Engineer',
              worksFor: {
                '@type': 'Organization',
                name: 'Tekenable ltd',
              },
              url: 'https://faizan-portfolio.azurestaticapps.net',
              sameAs: [
                'https://github.com/faizanAzhar11',
                'https://linkedin.com/in/faizan-azhar',
              ],
              knowsAbout: [
                'Azure',
                'React',
                'Power Platform',
                'TypeScript',
                'Node.js',
                'C#',
                'Software Engineering'
              ],
              alumniOf: {
                '@type': 'Organization',
                name: 'Air University Islamabad',
              },
            }),
          }}
        />
      </head>
      <body 
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          jetbrainsMono.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
