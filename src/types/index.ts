export interface Skill {
  name: string;
  icon: string;
  description: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}