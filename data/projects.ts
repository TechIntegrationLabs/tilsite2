import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MINE - Rehabilitation Program",
    description: "A comprehensive rehabilitation program designed to assist individuals in their recovery journey.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    imageUrl: "/images/MINEapp (2).jpg",
    liveUrl: "https://mineapp.techintegrationlabs.com",
    githubUrl: "https://github.com/TechIntegrationLabs/minealchemyapp"
  },
  {
    id: 2,
    title: "Memory App",
    description: "An application focused on enhancing memory retention and cognitive skills.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    imageUrl: "/images/memoriesapp.jpg",
    liveUrl: "https://memoryapp.techintegrationlabs.com",
    githubUrl: "https://github.com/TechIntegrationLabs/ideasApp"
  },
  {
    id: 3,
    title: "Bob Project",
    description: "A project named Bob, details to be determined.",
    technologies: ["Angular", "TypeScript", "Sass"],
    imageUrl: "/images/bobapp.jpg",
    liveUrl: "https://bob.techintegrationlabs.com",
    githubUrl: "https://github.com/TechIntegrationLabs/-bobv2"
  },
  {
    id: 4,
    title: "Darin Thomas | Northern Utah Real Estate",
    description: "Real estate services specializing in Northern Utah, provided by Darin Thomas.",
    technologies: ["Next.js", "GraphQL", "Styled Components"],
    imageUrl: "/images/realtorsite.jpg",
    liveUrl: "https://darinthomas.techintegrationlabs.com"
  },
  {
    id: 5,
    title: "Dreamwalk Park",
    description: "A prototype site for Dreamwalk Park, offering a virtual tour experience.",
    technologies: ["Gatsby", "Contentful", "Chakra UI"],
    imageUrl: "/images/dreamwalksite.jpg",
    liveUrl: "https://dreamwalk.techintegrationlabs.com"
  },
  {
    id: 6,
    title: "IdentAI",
    description: "An AI-driven identification platform, details to be determined.",
    technologies: ["Django", "Python", "Machine Learning"],
    imageUrl: "/images/dreamwalksite.jpg",
    liveUrl: "https://identai.techintegrationlabs.com"
  },
  {
    id: 7,
    title: "OmniTask AI",
    description: "An AI-powered task management system designed to optimize productivity.",
    technologies: ["Flask", "React Native", "SQLite"],
    imageUrl: "/images/dreamwalksite.jpg",
    liveUrl: "https://omnitaskai.com"
  }
];
