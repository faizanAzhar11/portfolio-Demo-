export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  github?: string;
  linkedin?: string;
  website?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  gpa?: string;
  achievements?: string[];
}

export interface TechCategory {
  category: string;
  technologies: Technology[];
}

export interface Technology {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Faizan Azhar",
  title: "Senior Software Engineer & Technical Consultant",
  email: "faziazhar1@gmail.com",
  phone: "+923435391151",
  location: "Remote",
  bio: "I am a dedicated software developer who loves creating high-quality products in competitive environments. I'm committed to innovation and always seeking new challenges and opportunities.",
  github: "https://github.com/faizanAzhar11",
  linkedin: "https://linkedin.com/in/faizan-azhar",
  website: "https://faizanazhar.dev"
};

export const experiences: Experience[] = [
  {
    id: "tekenable-2022",
    company: "Tekenable ltd",
    position: "Senior Software Engineer (Full Stack) & Technical Consultant",
    location: "Remote, Ireland",
    period: "Feb 2022 - Present",
    achievements: [
      "Successfully delivered and led the development and support for EPassport ERA: Understanding the requirements from the client, creating user stories, and presenting weekly demos of the product to clients.",
      "Develop and manage Power Apps solutions pipelines for different environments",
      "Develop custom connectors in C# for Power Apps",
      "Develop the media stream service for ERA",
      "Develop the third-party endpoints for media broadcasting for France and the UK",
      "Develop a horse pedigree for 5 levels using PCF in React with React Query",
      "Deploy CI/CD pipelines for Azure Functions and PCF",
      "Develop a POC (chat with docs) that leads to a successful client"
    ],
    technologies: ["Azure Open AI", "Azure Document Intelligence", "Azure Cognitive Search", "React", "Fast API", ".NET", ".NET Core", "Python", "Angular", "Power Apps", "Azure", "DevOps", "Docker"]
  },
  {
    id: "codebreakers-2020",
    company: "Code Breakers",
    position: "Full-Stack Developer",
    location: "Remote, USA",
    period: "Oct 2020 – Jan 2022",
    achievements: [
      "Develop the online hotel management system",
      "Develop the online taxi system"
    ],
    technologies: ["Node.js", "React", "React Native", "Google Maps", "Firebase"]
  },
  {
    id: "alphasquad-2020",
    company: "AlphaSquad",
    position: "Full-Stack Developer",
    location: "Onsite, Islamabad",
    period: "Jan 2020 - Sep 2020",
    achievements: [
      "Developed and deployed a major Online Education System for a Saudi client project",
      "Worked with modern technologies"
    ],
    technologies: ["Node.js", "React", "React Native", "Serverless", "GraphQL", "Firebase"]
  }
];

export const certifications: Certification[] = [
  {
    id: "dp-100",
    name: "DP-100: Azure Data Scientist Associate",
    issuer: "Microsoft",
    date: "Jan 2025 – Present"
  },
  {
    id: "ai-102",
    name: "AI-102: Designing and Implementing a Microsoft Azure AI Solution",
    issuer: "Microsoft",
    date: "Jun 2023 – Present"
  },
  {
    id: "ai-900",
    name: "AI-900: Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "Jul 2023 – Present"
  },
  {
    id: "pl-900",
    name: "PL-900: Microsoft Power Platform Fundamentals",
    issuer: "Microsoft",
    date: "Aug 2023 – Present"
  },
  {
    id: "az-900",
    name: "AZ-900: Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "Jul 2023 – Present"
  }
];

export const projects: Project[] = [
  {
    id: "sql-query-converter",
    title: "SQL Query Conversion to Sentence using Hugging Face",
    description: "Built a custom control for Dynamics 365 that converts SQL queries into natural language using the Hugging Face model.",
    technologies: ["Dynamics 365", "PCF Control React", "FastAPI", "Hugging Face", "Docker"],
    featured: true
  },
  {
    id: "epassport-era",
    title: "EPassport ERA",
    description: "Led the development and support for EPassport ERA, including media streaming services and third-party endpoints for broadcasting.",
    technologies: ["Azure", "React", "C#", ".NET", "Power Apps"],
    featured: true
  },
  {
    id: "horse-pedigree",
    title: "Horse Pedigree System",
    description: "Developed a horse pedigree system for 5 levels using PCF in React with React Query.",
    technologies: ["React", "React Query", "PCF", "Power Apps"],
    featured: false
  },
  {
    id: "churn-prediction",
    title: "Telecommute Churn Prediction Model",
    description: "Developed using Python and Django with 95% accuracy in predicting churn. Designed the front-end interface using HTML and CSS.",
    technologies: ["Python", "Django", "HTML", "CSS", "Machine Learning"],
    featured: true
  }
];

export const education: Education[] = [
  {
    id: "air-university",
    institution: "Air University",
    degree: "Bachelor of Engineering",
    field: "Software Engineering",
    location: "Islamabad",
    period: "2017 – 2020",
    gpa: "3.01"
  }
];

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Angular", level: "Advanced" },
      { name: "React Native", level: "Advanced" },
      { name: "HTML/CSS", level: "Expert" },
      { name: "Tailwind CSS", level: "Advanced" }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: ".NET", level: "Expert" },
      { name: ".NET Core", level: "Expert" },
      { name: "C#", level: "Expert" },
      { name: "Node.js", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "FastAPI", level: "Advanced" }
    ]
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "Azure", level: "Expert" },
      { name: "Azure Functions", level: "Advanced" },
      { name: "Azure OpenAI", level: "Advanced" },
      { name: "Azure Cognitive Search", level: "Advanced" },
      { name: "Docker", level: "Advanced" },
      { name: "CI/CD", level: "Advanced" }
    ]
  },
  {
    category: "Databases & Tools",
    technologies: [
      { name: "SQL Server", level: "Advanced" },
      { name: "Firebase", level: "Advanced" },
      { name: "Power Apps", level: "Expert" },
      { name: "Power Platform", level: "Advanced" },
      { name: "GraphQL", level: "Advanced" }
    ]
  },
  {
    category: "AI & Machine Learning",
    technologies: [
      { name: "Hugging Face", level: "Advanced" },
      { name: "Azure Document Intelligence", level: "Advanced" },
      { name: "Machine Learning", level: "Intermediate" },
      { name: "NLP", level: "Intermediate" }
    ]
  }
];
