import { Code, Globe, Cpu, Layers, Hammer } from "lucide-react";

export const personalInfo = {
  name: "Siddharth Kumar Rai",
  role: "Full Stack Developer | AI Engineer",
  email: "siddharthkumarrai23@gmail.com",
  phone: "+91 7319792636",
  github: "https://github.com/SiddharthRai22",
  linkedin: "http://www.linkedin.com/in/iam-siddharth",
  about: "Computer Science Engineer and Full Stack Developer specializing in MERN stack and AI-powered applications. Experienced in building scalable web solutions and integrating LLMs, LangChain, and AI Agents to create intelligent, real-time systems.",
};

export const skills = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "Tailwind CSS", "MERN Stack", "REST APIs"],
  },
  {
    category: "AI & Automation",
    items: ["LLMs", "LangChain", "Prompt Engineering", "AI Agents", "n8n", "MCP"],
  },
  {
    category: "Core",
    items: ["DSA", "OOPs"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Java", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "Tailwind CSS", "MERN Stack", "REST APIs"],
  },
  {
    title: "AI & Automation",
    icon: Cpu,
    skills: ["LLMs", "LangChain", "Prompt Engineering", "AI Agents", "n8n", "MCP"],
  },
  {
    title: "Core & Tools",
    icon: Layers,
    skills: ["DSA", "OOPs", "Git", "GitHub", "Postman", "VS Code"],
  },
];

export const projects = [
  {
    title: "AI Website Generator",
    description: "An AI-powered application that generates fully functional websites from simple prompts using MERN stack and LLM integration. Features a credit-based system with Stripe, user authentication, and real-time generation previews.",
    live: "https://websitebuilder-6.onrender.com/",
    github: "https://github.com/SiddharthRai22/websiteBuilder",
    tags: ["React", "Node.js", "MongoDB", "LLM", "Stripe", "Clerk"],
    images: ["/ai-website-generator.png", "/ai-web-1.png", "/ai-web-2.png"],
  },
  {
    title: "Finance Dashboard UI",
    description: "A modern and responsive finance dashboard UI that provides a clean visualization of financial data. Designed with a focus on user experience, it includes charts, financial summaries, and intuitive layouts for better user interaction.",
    live: "https://finance-dashboard-ui-project.onrender.com/",
    github: "https://github.com/SiddharthRai22/Finance-Dashboard-UI-Project",
    tags: ["React.js", "Tailwind CSS"],
    images: ["/finance-dashboard.png", "/finance-web-1.png"],
  },
];

export const education = [
  {
    degree: "B.Tech CSE",
    institution: "Technocrats Institute of Technology, Bhopal",
    period: "2022–2026",
  },
  {
    degree: "12th (PCM), CBSE",
    institution: "Gurukul Vidyapeeth, Hajipur",
    period: "Completed",
  },
];
