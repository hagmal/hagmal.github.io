// Prosjektkort til forsiden
export interface ProjectCard {
    id: string;
    title: string;
    description: string;
    projectType: "studieprosjekt" | "privat prosjekt";
    technologies: string[];
}

// Informasjon på detaljside
export interface ProjectDetails extends ProjectCard {
    githubUrl: string;
    images: string[];
}