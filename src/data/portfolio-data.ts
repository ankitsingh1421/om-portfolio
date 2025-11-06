// Dummy data for portfolio sections
import type { 
  Skill, 
  Project, 
  Experience, 
  Certification, 
  Competition, 
  Achievement, 
  Course 
} from "@/types/portfolio";

export const skills: Skill[] = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
    { name: "javascript", level: 80 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "TailwindCSS", level: 90 },

];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "2",
    title: "AI Task Manager",
    description: "Smart task management app with AI-powered prioritization and scheduling",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    tech: ["TypeScript", "Python", "TensorFlow", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "3",
    title: "Real-Time Chat Application",
    description: "WebSocket-based chat with end-to-end encryption and file sharing",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
    tech: ["React", "Socket.io", "Express", "Redis"],
    githubUrl: "#",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    duration: "2022 - Present",
    description: "Leading development of microservices architecture and mentoring junior developers. Improved system performance by 40%.",
    current: true,
  },
  {
    id: "2",
    title: "Full-Stack Developer",
    company: "Digital Solutions Co.",
    duration: "2020 - 2022",
    description: "Built responsive web applications using React and Node.js. Implemented CI/CD pipelines and automated testing.",
  },
  {
    id: "3",
    title: "Frontend Developer",
    company: "StartUp Ventures",
    duration: "2018 - 2020",
    description: "Developed user interfaces for SaaS products. Collaborated with UX designers to create intuitive user experiences.",
  },
];

export const certifications: Certification[] = [
  {
    id: "1",
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialUrl: "#",
  },
  {
    id: "2",
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2022",
  },
  {
    id: "3",
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2021",
  },
];

export const competitions: Competition[] = [
  {
    id: "1",
    name: "Global Hackathon 2023",
    position: "1st Place",
    organizer: "TechCon International",
    date: "2023",
    description: "Built an AI-powered sustainability tracking platform",
  },
  {
    id: "2",
    name: "Code Challenge Championship",
    position: "Top 10",
    organizer: "DevCommunity",
    date: "2022",
  },
  {
    id: "3",
    name: "Regional Programming Contest",
    position: "2nd Place",
    organizer: "ACM ICPC",
    date: "2021",
  },
];

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Open Source Contributor",
    description: "Contributed to 15+ popular open-source projects with 500+ stars collectively",
    date: "2023",
  },
  {
    id: "2",
    title: "Tech Blog Author",
    description: "Published 50+ technical articles reaching 100K+ readers",
    date: "2022",
  },
  {
    id: "3",
    title: "Community Speaker",
    description: "Delivered talks at 10+ tech conferences and meetups",
    date: "2021",
  },
];

export const courses: Course[] = [
  {
    id: "1",
    name: "Advanced System Design",
    provider: "Coursera",
    duration: "12 weeks",
    completionDate: "2023",
    certificateUrl: "#",
  },
  {
    id: "2",
    name: "Machine Learning Specialization",
    provider: "deeplearning.ai",
    duration: "16 weeks",
    completionDate: "2022",
  },
  {
    id: "3",
    name: "Cloud Architecture Masterclass",
    provider: "Udemy",
    duration: "8 weeks",
    completionDate: "2021",
  },
];
