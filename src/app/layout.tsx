import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Faizan Azhar - Senior Software Engineer & Technical Consultant',
  description: 'Full Stack Developer with expertise in Azure, React, .NET, Python, and AI solutions. Senior Software Engineer at Tekenable Ltd with 5+ years experience.',
  keywords: [
    'Faizan Azhar',
    'Full Stack Developer',
    'Senior Software Engineer',
    'Azure',
    'React',
    '.NET',
    'Python',
    'AI Solutions',
    'Power Apps',
    'Technical Consultant'
  ],
  authors: [{ name: 'Faizan Azhar', url: 'https://faizanazhar.dev' }],
  creator: 'Faizan Azhar',
  publisher: 'Faizan Azhar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://faizanazhar.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://faizanazhar.dev',
    title: 'Faizan Azhar - Senior Software Engineer & Technical Consultant',
    description: 'Full Stack Developer with expertise in Azure, React, .NET, Python, and AI solutions. Senior Software Engineer at Tekenable Ltd with 5+ years experience.',
    siteName: 'Faizan Azhar Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Faizan Azhar - Senior Software Engineer & Technical Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faizan Azhar - Senior Software Engineer & Technical Consultant',
    description: 'Full Stack Developer with expertise in Azure, React, .NET, Python, and AI solutions.',
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
    google: 'your-google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
