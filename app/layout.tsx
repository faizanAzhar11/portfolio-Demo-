import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Faizan Azhar - Full Stack Developer',
    template: '%s | Faizan Azhar'
  },
  description: 'Senior Software Engineer specializing in full-stack development, Azure cloud solutions, and AI integrations. Expert in React, .NET, Python, and Power Platform.',
  keywords: ['Faizan Azhar', 'Full Stack Developer', 'Azure', 'React', 'TypeScript', 'Software Engineer', 'AI', 'Power Platform'],
  authors: [{ name: 'Faizan Azhar' }],
  creator: 'Faizan Azhar',
  publisher: 'Faizan Azhar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://faizanazhar.dev',
    title: 'Faizan Azhar - Full Stack Developer',
    description: 'Senior Software Engineer specializing in full-stack development, Azure cloud solutions, and AI integrations.',
    siteName: 'Faizan Azhar Portfolio',
    images: [
      {
        url: '/faizanpic.jpg',
        width: 1200,
        height: 630,
        alt: 'Faizan Azhar - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faizan Azhar - Full Stack Developer',
    description: 'Senior Software Engineer specializing in full-stack development, Azure cloud solutions, and AI integrations.',
    images: ['/faizanpic.jpg'],
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
              description: 'Full Stack Developer specializing in Azure cloud solutions and AI integrations',
              url: 'https://faizanazhar.dev',
              image: 'https://faizanazhar.dev/faizanpic.jpg',
              sameAs: [
                'https://github.com/faizanAzhar11',
                'https://linkedin.com/in/faizanazhar',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Tekenable Ltd',
              },
              alumniOf: {
                '@type': 'Organization',
                name: 'Air University Islamabad',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
