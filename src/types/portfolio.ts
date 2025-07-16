export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  website?: string;
  profileImage: string;
  resumeUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Cloud' | 'Database' | 'Tools' | 'Languages';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  type: 'Remote' | 'Onsite' | 'Hybrid';
  startDate: string;
  endDate: string | 'Present';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  category: 'Web App' | 'Mobile App' | 'Desktop App' | 'AI/ML' | 'API' | 'Other';
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  badgeUrl?: string;
  skills: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  location: string;
  description?: string;
  achievements?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  category: string;
  readingTime: number;
  featured: boolean;
  imageUrl?: string;
}

// Portfolio data structure
export interface PortfolioData {
  personal: PersonalInfo;
  socialLinks: SocialLink[];
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  education: Education[];
  blog?: BlogPost[];
}
