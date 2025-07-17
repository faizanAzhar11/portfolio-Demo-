export function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Faizan Azhar',
    jobTitle: 'Senior Software Engineer & Technical Consultant',
    description: 'Full Stack Developer with expertise in Azure, React, .NET, Python, and AI solutions. Senior Software Engineer at Tekenable Ltd with 5+ years experience.',
    url: 'https://faizanazhar.dev',
    email: 'faziazhar1@gmail.com',
    telephone: '+923435391151',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK'
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Tekenable Ltd',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IE'
      }
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'Air University Islamabad',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PK'
      }
    },
    knowsAbout: [
      'Azure',
      'React',
      '.NET',
      'Python',
      'Power Apps',
      'AI Solutions',
      'Node.js',
      'Docker',
      'DevOps',
      'Angular',
      'TypeScript',
      'JavaScript',
      'C#',
      'FastAPI',
      'Azure Functions',
      'Azure Open AI',
      'Azure Document Intelligence',
      'Azure Cognitive Search'
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'DP-100: Azure Data Scientist Associate',
        credentialCategory: 'Microsoft Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Microsoft'
        },
        dateCreated: '2025-01'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'AI-102: Designing and Implementing a Microsoft Azure AI Solution',
        credentialCategory: 'Microsoft Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Microsoft'
        },
        dateCreated: '2023-06'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'AI-900: Microsoft Azure AI Fundamentals',
        credentialCategory: 'Microsoft Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Microsoft'
        },
        dateCreated: '2023-07'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'PL-900: Microsoft Power Platform Fundamentals',
        credentialCategory: 'Microsoft Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Microsoft'
        },
        dateCreated: '2023-08'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'AZ-900: Microsoft Azure Fundamentals',
        credentialCategory: 'Microsoft Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Microsoft'
        },
        dateCreated: '2023-07'
      }
    ],
    sameAs: [
      'https://github.com/faizanAzhar11',
      'https://linkedin.com/in/faizanazhar'
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
