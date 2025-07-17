import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Faizan Azhar - Senior Software Engineer & Technical Consultant',
    template: '%s | Faizan Azhar'
  },
  description: 'Senior Software Engineer specializing in full-stack development with Azure, React, .NET, and modern web technologies. Based in Ireland with expertise in enterprise solutions.',
  keywords: ['Faizan Azhar', 'Software Engineer', 'Full Stack Developer', 'Azure', 'React', '.NET', 'Technical Consultant', 'Ireland', 'Portfolio'],
  authors: [{ name: 'Faizan Azhar' }],
  creator: 'Faizan Azhar',
  metadataBase: new URL('https://faizanazhar.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://faizanazhar.dev',
    title: 'Faizan Azhar - Senior Software Engineer & Technical Consultant',
    description: 'Senior Software Engineer specializing in full-stack development with Azure, React, .NET, and modern web technologies.',
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
    description: 'Senior Software Engineer specializing in full-stack development with Azure, React, .NET, and modern web technologies.',
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
  verification: {
    google: 'your-google-verification-code',
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
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background">
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
