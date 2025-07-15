export const personalInfo = {
  name: "Faizan Azhar",
  title: "Senior Software Engineer & Azure Specialist",
  email: "faziazhar1@gmail.com",
  phone: "+923435391151",
  location: "Remote, Ireland",
  image: "/faizanpic.jpg",
  resume: "/Resume - Faizan_Azhar_Software_Eng.pdf",
  social: {
    github: "https://github.com/faizanAzhar11",
    linkedin: "https://linkedin.com/in/faizan-azhar",
  },
  bio: "I am a dedicated software developer who loves creating high-quality products in competitive environments. I'm committed to innovation and always seeking new challenges and opportunities."
}

export const experience = [
  {
    id: 1,
    title: "Senior Software Engineer (Full Stack) & Technical Consultant",
    company: "Tekenable ltd",
    location: "Remote, Ireland",
    period: "Feb 2022 - Present",
    responsibilities: [
      "Successfully delivered and led the development and support for EPassport ERA: Understanding the requirements from the client, creating user stories, and presenting weekly demos of the product to clients.",
      "Develop and manage Power Apps solutions pipelines for different environments",
      "Develop custom connectors in C# for Power Apps",
      "Develop the media stream service for ERA.",
      "Develop the third-party endpoints for media broadcasting for France and the UK.",
      "Develop a horse pedigree for 5 levels using PCF in React with React Query.",
      "Deploy CI/CD pipelines for Azure Functions and PCF",
      "Develop a POC (chat with docs) that leads to a successful client"
    ],
    technologies: ["Azure Open AI", "Azure Document Intelligence", "Azure Cognitive Search", "React", "Fast Api", ".Net", ".NetCore", "Python", "Angular", "Power Apps", "Azure", "DevOps", "Docker"]
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Code Breakers",
    location: "Remote, USA",
    period: "Oct 2020 – Jan 2022",
    responsibilities: [
      "Develop the online hotel management system.",
      "Develop the online taxi system."
    ],
    technologies: ["Node.js", "React", "React Native", "Google Maps", "Firebase"]
  },
  {
    id: 3,
    title: "Full-Stack Developer",
    company: "AlphaSquad",
    location: "Onsite, Islamabad",
    period: "Jan 2020 - Sep 2020",
    responsibilities: [
      "Developed and deployed a major Online Education System for a Saudi client project. Worked with modern technologies."
    ],
    technologies: ["Node.js", "React", "React Native", "Serverless", "GraphQL", "Firebase"]
  }
]

export const skills = {
  languages: ["TypeScript", "JavaScript", "C#", "Python", "SQL"],
  frontend: ["React", "Next.js", "Angular", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Node.js", ".NET Core", "Fast API", "Express.js"],
  cloud: ["Azure", "Azure Functions", "Azure DevOps", "Power Platform", "Firebase"],
  databases: ["SQL Server", "MongoDB", "CosmosDB"],
  tools: ["Docker", "Git", "Power Apps", "Power Automate", "CI/CD"]
}

export const certifications = [
  {
    id: 1,
    name: "DP-100: Azure Data Scientist Associate",
    issuer: "Microsoft",
    date: "Jan 2025 – Present",
    credentialId: null
  },
  {
    id: 2,
    name: "AI-102: Designing and Implementing a Microsoft Azure AI Solution",
    issuer: "Microsoft",
    date: "Jun 2023 – Present",
    credentialId: null
  },
  {
    id: 3,
    name: "AI-900: Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "Jul 2023 – Present",
    credentialId: null
  },
  {
    id: 4,
    name: "PL-900: Microsoft Power Platform Fundamentals",
    issuer: "Microsoft",
    date: "Aug 2023 – Present",
    credentialId: null
  },
  {
    id: 5,
    name: "AZ-900: Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "Jul 2023 – Present",
    credentialId: null
  }
]

export const projects = [
  {
    id: 1,
    title: "EPassport ERA",
    description: "Led development and support for EPassport ERA system, managing client requirements and weekly demos.",
    technologies: ["Azure", "React", "Power Apps", "C#"],
    category: "Enterprise",
    featured: true
  },
  {
    id: 2,
    title: "Chat with Docs POC",
    description: "Developed a proof of concept for document chat functionality that secured a successful client.",
    technologies: ["Azure Open AI", "Azure Document Intelligence", "Azure Cognitive Search", "React", "Fast API"],
    category: "AI/ML",
    featured: true
  },
  {
    id: 3,
    title: "Horse Pedigree System",
    description: "Built a 5-level horse pedigree system using PCF in React with React Query.",
    technologies: ["React", "React Query", "PCF", "Power Apps"],
    category: "Web Application",
    featured: false
  },
  {
    id: 4,
    title: "SQL Query to Natural Language",
    description: "Custom Dynamics 365 control that converts SQL queries into natural language using Hugging Face.",
    technologies: ["Dynamics 365", "React", "FastAPI", "Hugging Face", "Docker"],
    category: "Open Source",
    featured: true
  }
]

export const education = {
  degree: "Bachelor of Engineering in Software Engineering",
  institution: "Air University Islamabad",
  period: "2017 – 2020",
  cgpa: "3.01"
}
