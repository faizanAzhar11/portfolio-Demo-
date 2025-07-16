import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Faizan Azhar",
    title: "Senior Software Engineer",
    subtitle: "Azure Specialist & Technical Consultant",
    bio: "I am a dedicated software developer who loves creating high-quality products in competitive environments. I'm committed to innovation and always seeking new challenges and opportunities. With 5+ years of experience in full-stack development, I specialize in Azure cloud solutions, Power Platform, and AI implementations.",
    location: "Remote, Ireland",
    email: "faziazhar1@gmail.com",
    phone: "+923435391151",
    website: "https://faizanazhar.dev",
    profileImage: "/faizanpic.jpg",
    resumeUrl: "/Resume - Faizan_Azhar_Software_Eng.pdf"
  },
  
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/faizanazhar",
      icon: "Github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/faizanazhar",
      icon: "Linkedin"
    },
    {
      name: "Email",
      url: "mailto:faziazhar1@gmail.com",
      icon: "Mail"
    },
    {
      name: "Phone",
      url: "tel:+923435391151",
      icon: "Phone"
    }
  ],

  skills: [
    // Frontend
    { name: "React", category: "Frontend", level: "Expert", icon: "⚛️" },
    { name: "Next.js", category: "Frontend", level: "Expert" },
    { name: "TypeScript", category: "Frontend", level: "Expert" },
    { name: "JavaScript", category: "Frontend", level: "Expert" },
    { name: "Angular", category: "Frontend", level: "Advanced" },
    { name: "Tailwind CSS", category: "Frontend", level: "Advanced" },
    { name: "React Query", category: "Frontend", level: "Advanced" },
    { name: "HTML5/CSS3", category: "Frontend", level: "Expert" },
    
    // Backend
    { name: "Node.js", category: "Backend", level: "Expert" },
    { name: ".NET Core", category: "Backend", level: "Expert" },
    { name: "C#", category: "Backend", level: "Expert" },
    { name: "Python", category: "Backend", level: "Advanced" },
    { name: "FastAPI", category: "Backend", level: "Advanced" },
    { name: "GraphQL", category: "Backend", level: "Intermediate" },
    { name: "REST APIs", category: "Backend", level: "Expert" },
    
    // Cloud & DevOps
    { name: "Azure", category: "Cloud", level: "Expert", icon: "☁️" },
    { name: "Azure Functions", category: "Cloud", level: "Expert" },
    { name: "Azure OpenAI", category: "Cloud", level: "Advanced" },
    { name: "Azure DevOps", category: "Cloud", level: "Advanced" },
    { name: "Power Platform", category: "Cloud", level: "Expert" },
    { name: "Power Apps", category: "Cloud", level: "Expert" },
    { name: "Docker", category: "Tools", level: "Advanced" },
    { name: "CI/CD", category: "Tools", level: "Advanced" },
    
    // Databases
    { name: "SQL Server", category: "Database", level: "Advanced" },
    { name: "MongoDB", category: "Database", level: "Advanced" },
    { name: "CosmosDB", category: "Database", level: "Advanced" },
    { name: "Firebase", category: "Database", level: "Intermediate" },
    
    // Programming Languages
    { name: "C#", category: "Languages", level: "Expert" },
    { name: "TypeScript", category: "Languages", level: "Expert" },
    { name: "JavaScript", category: "Languages", level: "Expert" },
    { name: "Python", category: "Languages", level: "Advanced" },
    { name: "SQL", category: "Languages", level: "Advanced" },
    { name: "C++", category: "Languages", level: "Intermediate" },
    
    // Tools
    { name: "Git", category: "Tools", level: "Expert" },
    { name: "VS Code", category: "Tools", level: "Expert" },
    { name: "Visual Studio", category: "Tools", level: "Advanced" },
    { name: "Postman", category: "Tools", level: "Advanced" },
    { name: "Figma", category: "Tools", level: "Intermediate" }
  ],

  experience: [
    {
      id: "tekenable",
      company: "Tekenable Ltd",
      position: "Senior Software Engineer (Full Stack) & Technical Consultant",
      location: "Remote, Ireland",
      type: "Remote",
      startDate: "Feb 2022",
      endDate: "Present",
      description: "Leading full-stack development and technical consulting for enterprise clients, specializing in Azure cloud solutions and Power Platform implementations.",
      achievements: [
        "Successfully delivered and led development for EPassport ERA system, managing client requirements and weekly demos",
        "Developed and managed Power Apps solution pipelines across multiple environments",
        "Created custom connectors in C# for Power Apps integration",
        "Built media streaming service for ERA platform",
        "Developed third-party endpoints for media broadcasting (France & UK)",
        "Implemented 5-level horse pedigree system using PCF in React with React Query",
        "Deployed CI/CD pipelines for Azure Functions and PCF components",
        "Developed successful POC for 'chat with docs' using Azure AI services that secured new client"
      ],
      technologies: [
        "Azure OpenAI", "Azure Document Intelligence", "Azure Cognitive Search", 
        "React", "FastAPI", ".NET", ".NET Core", "Python", "Angular", 
        "Power Apps", "Azure", "DevOps", "Docker", "C#"
      ]
    },
    {
      id: "codebreakers",
      company: "Code Breakers",
      position: "Full-Stack Developer",
      location: "Remote, USA",
      type: "Remote",
      startDate: "Oct 2020",
      endDate: "Jan 2022",
      description: "Developed comprehensive web applications for hospitality and transportation industries using modern JavaScript technologies.",
      achievements: [
        "Developed complete online hotel management system with booking and administration features",
        "Built online taxi system with real-time tracking and payment integration",
        "Implemented Google Maps integration for location services",
        "Created responsive user interfaces for both web and mobile platforms"
      ],
      technologies: [
        "Node.js", "React", "React Native", "Google Maps API", "Firebase"
      ]
    },
    {
      id: "alphasquad",
      company: "AlphaSquad",
      position: "Full-Stack Developer",
      location: "Onsite, Islamabad",
      type: "Onsite",
      startDate: "Jan 2020",
      endDate: "Sep 2020",
      description: "Developed and deployed a major online education system for a Saudi client using modern web technologies.",
      achievements: [
        "Successfully delivered comprehensive online education platform",
        "Implemented serverless architecture for optimal performance and cost efficiency",
        "Created scalable GraphQL APIs for efficient data management",
        "Developed cross-platform mobile application using React Native"
      ],
      technologies: [
        "Node.js", "React", "React Native", "Serverless", "GraphQL", "Firebase"
      ]
    }
  ],

  projects: [
    {
      id: "epassport-era",
      title: "EPassport ERA System",
      description: "Enterprise-grade passport processing system with advanced document verification and workflow management.",
      longDescription: "Led the development of a comprehensive electronic passport processing system that streamlines the entire passport application and verification process. The system includes advanced document verification, workflow management, and integration with government databases.",
      technologies: ["React", "Azure", "C#", ".NET Core", "Power Apps", "Azure Functions"],
      features: [
        "Advanced document verification using Azure AI",
        "Workflow management for passport processing",
        "Integration with government databases",
        "Real-time status tracking",
        "Automated notification system",
        "Multi-language support"
      ],
      status: "Completed",
      category: "Web App",
      imageUrl: "/projects/epassport-era.jpg"
    },
    {
      id: "chat-with-docs",
      title: "Chat with Documents POC",
      description: "AI-powered document analysis system using Azure OpenAI and Cognitive Search for intelligent document querying.",
      longDescription: "Developed a proof-of-concept that allows users to have natural language conversations with their documents. The system uses Azure OpenAI for natural language processing and Azure Cognitive Search for intelligent document retrieval.",
      technologies: ["Azure OpenAI", "Azure Document Intelligence", "Azure Cognitive Search", "React", "FastAPI", "Python"],
      features: [
        "Natural language document querying",
        "Intelligent document parsing and indexing",
        "Real-time chat interface",
        "Support for multiple document formats",
        "Semantic search capabilities",
        "Context-aware responses"
      ],
      status: "Completed",
      category: "AI/ML",
      githubUrl: "https://github.com/faizanazhar/chat-with-docs",
      imageUrl: "/projects/chat-with-docs.jpg"
    },
    {
      id: "horse-pedigree",
      title: "Horse Pedigree System",
      description: "5-level horse pedigree tracking system built with PCF controls in React, featuring comprehensive genealogy management.",
      longDescription: "Developed a sophisticated horse pedigree tracking system that manages 5 levels of horse genealogy. Built using Power Apps Component Framework (PCF) with React and React Query for optimal performance.",
      technologies: ["React", "React Query", "PCF", "Power Apps", "TypeScript"],
      features: [
        "5-level pedigree visualization",
        "Interactive family tree interface",
        "Advanced search and filtering",
        "Data validation and verification",
        "Export capabilities",
        "Mobile-responsive design"
      ],
      status: "Completed",
      category: "Web App",
      imageUrl: "/projects/horse-pedigree.jpg"
    },
    {
      id: "sql-to-nlp",
      title: "SQL to Natural Language Converter",
      description: "Custom Dynamics 365 control that converts SQL queries into natural language using Hugging Face models.",
      longDescription: "Built a custom control for Dynamics 365 that helps users understand complex SQL queries by converting them into plain English explanations using advanced NLP models from Hugging Face.",
      technologies: ["React", "FastAPI", "Hugging Face", "Docker", "Dynamics 365 PCF"],
      features: [
        "SQL query parsing and analysis",
        "Natural language generation",
        "Integration with Dynamics 365",
        "Real-time query explanation",
        "Support for complex queries",
        "Dockerized deployment"
      ],
      status: "Completed",
      category: "AI/ML",
      githubUrl: "https://github.com/faizanazhar/sql-to-nlp",
      imageUrl: "/projects/sql-to-nlp.jpg"
    },
    {
      id: "hotel-management",
      title: "Hotel Management System",
      description: "Comprehensive hotel management platform with booking, room management, and customer service features.",
      longDescription: "Developed a full-featured hotel management system that handles reservations, room management, customer service, and billing. The system includes both web and mobile interfaces for staff and customers.",
      technologies: ["Node.js", "React", "React Native", "Firebase", "Google Maps"],
      features: [
        "Online booking system",
        "Room and inventory management",
        "Customer management",
        "Billing and payment processing",
        "Staff management dashboard",
        "Mobile app for customers"
      ],
      status: "Completed",
      category: "Web App",
      imageUrl: "/projects/hotel-management.jpg"
    },
    {
      id: "online-education",
      title: "Online Education Platform",
      description: "Scalable online education system built for Saudi client with course management, assessments, and progress tracking.",
      longDescription: "Developed a comprehensive online education platform that supports course creation, student enrollment, assessments, and progress tracking. Built with modern web technologies and serverless architecture for scalability.",
      technologies: ["Node.js", "React", "React Native", "Serverless", "GraphQL", "Firebase"],
      features: [
        "Course creation and management",
        "Student enrollment system",
        "Interactive assessments and quizzes",
        "Progress tracking and analytics",
        "Video content delivery",
        "Mobile learning app"
      ],
      status: "Completed",
      category: "Web App",
      imageUrl: "/projects/online-education.jpg"
    }
  ],

  certifications: [
    {
      id: "dp-100",
      name: "DP-100: Azure Data Scientist Associate",
      issuer: "Microsoft",
      issueDate: "Jan 2025",
      credentialId: "DP-100-2025",
      credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/FaizanAzhar/DP100",
      badgeUrl: "/badges/dp-100.png",
      skills: ["Azure Machine Learning", "Data Science", "Python", "MLOps", "AI Development"]
    },
    {
      id: "ai-102",
      name: "AI-102: Designing and Implementing a Microsoft Azure AI Solution",
      issuer: "Microsoft",
      issueDate: "Jun 2023",
      credentialId: "AI-102-2023",
      credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/FaizanAzhar/AI102",
      badgeUrl: "/badges/ai-102.png",
      skills: ["Azure AI Services", "Cognitive Services", "Computer Vision", "Natural Language Processing", "AI Solutions"]
    },
    {
      id: "ai-900",
      name: "AI-900: Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      issueDate: "Jul 2023",
      credentialId: "AI-900-2023",
      credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/FaizanAzhar/AI900",
      badgeUrl: "/badges/ai-900.png",
      skills: ["AI Fundamentals", "Machine Learning", "Azure AI", "Responsible AI"]
    },
    {
      id: "pl-900",
      name: "PL-900: Microsoft Power Platform Fundamentals",
      issuer: "Microsoft",
      issueDate: "Aug 2023",
      credentialId: "PL-900-2023",
      credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/FaizanAzhar/PL900",
      badgeUrl: "/badges/pl-900.png",
      skills: ["Power Apps", "Power Automate", "Power BI", "Power Platform", "Low-Code Development"]
    },
    {
      id: "az-900",
      name: "AZ-900: Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      issueDate: "Jul 2023",
      credentialId: "AZ-900-2023",
      credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/FaizanAzhar/AZ900",
      badgeUrl: "/badges/az-900.png",
      skills: ["Azure Fundamentals", "Cloud Computing", "Azure Services", "Cloud Security"]
    }
  ],

  education: [
    {
      id: "air-university",
      institution: "Air University",
      degree: "Bachelor of Engineering",
      field: "Software Engineering",
      startDate: "2017",
      endDate: "2020",
      gpa: "3.01",
      location: "Islamabad, Pakistan",
      description: "Focused on software engineering principles, web development, and emerging technologies.",
      achievements: [
        "Final Year Project: Telecommute Churn Prediction Model with 95% accuracy",
        "Built scientific calculator in C++",
        "Developed eBay web scraper using C#",
        "Created Hotel Management System using MEAN stack",
        "Implemented heart attack prediction model in Python",
        "Twitter sentiment analysis using R"
      ]
    }
  ]
};
