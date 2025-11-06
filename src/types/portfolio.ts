// TypeScript interfaces for portfolio data

export interface NavItem {
  id: string;
  label: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  current?: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Competition {
  id: string;
  name: string;
  position: string;
  organizer: string;
  date: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date?: string;
}

export interface Course {
  id: string;
  name: string;
  provider: string;
  duration: string;
  completionDate: string;
  certificateUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
