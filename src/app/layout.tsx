import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib/config'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  ],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.links.twitter,
    creator: siteConfig.links.twitter,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Faizan Azhar',
  jobTitle: 'Senior Software Engineer & Technical Consultant',
  description: 'Senior Software Engineer specializing in Azure, React, and full-stack development',
  url: siteConfig.url,
  image: `${siteConfig.url}/faizanpic.jpg`,
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin,
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Tekenable Ltd',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Ireland',
    },
  },
  knowsAbout: [
    'Azure',
    'React',
    'TypeScript',
    'Power Platform',
    'AI Development',
    'Full Stack Development',
    'C#',
    'Python',
    'Node.js',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'DP-100: Azure Data Scientist Associate',
      credentialCategory: 'Microsoft Certification',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Microsoft',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'AI-102: Designing and Implementing a Microsoft Azure AI Solution',
      credentialCategory: 'Microsoft Certification',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Microsoft',
      },
    },
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Air University',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Islamabad',
      addressCountry: 'Pakistan',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
