import { SkillCategory } from "@/shared/types";

export const skillCategory: SkillCategory[] = [
  {
    id: "backend",
    categoryName: "Backend",
    technologies: [
      { name: "NestJS" },
      { name: "PostgreSQL" },
      { name: "Express" },
    ],
  },
  {
    id: "frontend",
    categoryName: "Frontend",
    technologies: [
      { name: "React" },
      { name: "Redux Toolkit" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Sass/Scss" },
      { name: "Next.js" },
      { name: "TailwindCSS" },
    ],
  },
  {
    id: "other",
    categoryName: "Other",
    technologies: [
      { name: "Typescript" },
      { name: "Docker" },
      { name: "Git" },
      { name: "Linux" },
    ],
  },
];
