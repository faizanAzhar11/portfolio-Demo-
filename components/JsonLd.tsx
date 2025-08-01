import { personalInfo, experiences, certifications } from '@/lib/data'

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "jobTitle": personalInfo.title,
    "email": personalInfo.email,
    "telephone": personalInfo.phone,
    "url": personalInfo.website,
    "sameAs": [
      personalInfo.github,
      personalInfo.linkedin
    ].filter(Boolean),
    "description": personalInfo.bio,
    "worksFor": {
      "@type": "Organization",
      "name": experiences[0]?.company,
      "description": experiences[0]?.position
    },
    "knowsAbout": [
      "Software Engineering",
      "Full Stack Development",
      "Azure Cloud Services",
      "React",
      "TypeScript",
      "Next.js",
      ".NET",
      "Python",
      "Machine Learning"
    ],
    "hasCredential": certifications.map(cert => ({
      "@type": "EducationalOccupationalCredential",
      "name": cert.name,
      "credentialCategory": "certification",
      "recognizedBy": {
        "@type": "Organization",
        "name": cert.issuer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
