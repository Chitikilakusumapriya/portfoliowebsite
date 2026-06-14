import {
  Code2,
  Database,
  FileCode,
  GitBranch,
  Globe,
  Layers,
  Server,
  Terminal,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const typingRoles = [
  "Python Developer",
  "Java Developer",
  "Problem Solver",
  "Software Engineering Enthusiast",
];

export const education = [
  {
    institution: "Vel Tech University",
    degree: "Bachelor of Technology (Computer Science and Engineering)",
    period: "2023 – 2027",
    score: "CGPA: 9.09/10",
    highlight: true,
  },
  {
    institution: "Narayana Junior College",
    degree: "MPC",
    period: "",
    score: "95%",
    highlight: false,
  },
  {
    institution: "Narayana School",
    degree: "Secondary Education",
    period: "",
    score: "98%",
    highlight: false,
  },
];

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export const skillCategories: { title: string; skills: Skill[] }[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: Terminal },
      { name: "Java", icon: Code2 },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML5", icon: Globe },
      { name: "CSS3", icon: Layers },
      { name: "JavaScript", icon: FileCode },
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      { name: "Flask", icon: Server },
      { name: "Spring Boot", icon: Server },
      { name: "Spring MVC", icon: Layers },
      { name: "Spring Data JPA", icon: Database },
      { name: "Thymeleaf", icon: FileCode },
      { name: "PostgreSQL", icon: Database },
      { name: "SQLAlchemy", icon: Database },
      { name: "Maven", icon: Wrench },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "Eclipse IDE", icon: Code2 },
      { name: "H2 Database", icon: Database },
    ],
  },
];

export const projects = [
  {
    title: "Smart Trip Planning & Driver Monitoring System",
    description:
      "A comprehensive trip management platform with intelligent route optimization and real-time driver monitoring capabilities.",
    features: [
      "Multi-destination trip planning",
      "Route optimization",
      "Flask backend",
      "PostgreSQL integration",
      "Geolocation APIs",
    ],
    tech: ["Python", "Flask", "PostgreSQL", "APIs"],
    gradient: "from-red-600/20 to-orange-600/20",
  },
  {
    title: "Smart Campus Event Management System",
    description:
      "Full-featured event management platform for campus events with registration and administrative controls.",
    features: [
      "Event registration platform",
      "Admin management dashboard",
      "Spring Boot application",
      "Database integration",
    ],
    tech: ["Java", "Spring Boot", "Thymeleaf", "SQL"],
    gradient: "from-rose-600/20 to-red-600/20",
  },
  {
    title: "RoadGuard – Road Damage Reporting System",
    description:
      "Community-driven road damage reporting system with geolocation and image upload for infrastructure monitoring.",
    features: [
      "Road issue reporting",
      "Image upload support",
      "GPS location integration",
      "Tracking and monitoring system",
    ],
    tech: ["Python", "Flask", "GPS", "Image Processing"],
    gradient: "from-red-700/20 to-pink-600/20",
  },
  {
    title: "Intelligent Token System",
    description:
      "Digital queue management solution with real-time token tracking for improved service efficiency.",
    features: [
      "Smart queue management",
      "Digital token generation",
      "Real-time token tracking",
      "Service efficiency improvement",
    ],
    tech: ["Java", "Spring Boot", "Real-time", "Database"],
    gradient: "from-orange-600/20 to-red-600/20",
  },
];

export const achievements = [
  {
    title: "SQL (Basic) – HackerRank",
    description: "Certified in SQL fundamentals through HackerRank assessment.",
  },
  {
    title: "Hackathon Participation",
    description: "Actively participated in hackathons and software development events.",
  },
  {
    title: "Academic Excellence",
    description: "Maintained CGPA of 9.09/10 throughout Computer Science program.",
  },
];

export const contactInfo = {
  name: "Kusumapriya Chitikila",
  email: "kusumapriyachitikila@gmail.com",
  phone: "+91 8522832751",
  location: "Visakhapatnam, Andhra Pradesh, India",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
};
