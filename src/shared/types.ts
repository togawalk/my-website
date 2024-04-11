export interface Project {
  repoUrl: string;
  description: string;
}

export interface Technology {
  name: string;
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  technologies: Technology[];
}
