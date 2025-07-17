export function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Faizan Azhar',
    url: 'https://faizanazhar.dev',
    jobTitle: 'Senior Software Engineer & Technical Consultant',
    description: 'Senior Software Engineer specializing in full-stack development with Azure, React, .NET, and modern web technologies.',
    worksFor: {
      '@type': 'Organization',
      name: 'Tekenable Ltd',
      url: 'https://tekenable.com'
    },
    sameAs: [
      'https://github.com/faizanAzhar11',
      'https://linkedin.com/in/faizanazhar11'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IE'
    },
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Azure',
      'C#',
      '.NET',
      'Node.js',
      'Python',
      'Azure OpenAI',
      'Full Stack Development',
      'Technical Consulting'
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'DP-100: Azure Data Scientist Associate',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Microsoft'
        }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'AI-102: Designing and Implementing a Microsoft Azure AI Solution',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Microsoft'
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
