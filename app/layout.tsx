import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Faizan Azhar - Senior Software Engineer & Technical Consultant',
    template: '%s | Faizan Azhar'
  },
  description: 'Senior Software Engineer specializing in Azure, React, .NET, and modern web technologies. Technical consultant with expertise in full-stack development and cloud solutions.',
  keywords: ['Faizan Azhar', 'Software Engineer', 'Full Stack Developer', 'Azure', 'React', 'TypeScript', 'Next.js', '.NET', 'Technical Consultant'],
  authors: [{ name: 'Faizan Azhar', url: 'https://faizanazhar.dev' }],
  creator: 'Faizan Azhar',
  metadataBase: new URL('https://faizanazhar.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://faizanazhar.dev',
    title: 'Faizan Azhar - Senior Software Engineer & Technical Consultant',
    description: 'Senior Software Engineer specializing in Azure, React, .NET, and modern web technologies.',
    siteName: 'Faizan Azhar Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Faizan Azhar - Senior Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faizan Azhar - Senior Software Engineer & Technical Consultant',
    description: 'Senior Software Engineer specializing in Azure, React, .NET, and modern web technologies.',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
