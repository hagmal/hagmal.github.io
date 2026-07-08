import type { ProjectDetails } from "./types";

export const projects: ProjectDetails[] = [
    {
        id: "imf-workbench",
        title: "IMF Workbench GUI",
        description: "Bacheloroppgave utviklet for SIRIUS-Labs (UiO). Et webbasert brukergrensesnitt mot IMF Workbench. Inkludert SSE, sesjonsbasert isolasjon, Makefile-parser og AI-assistert feilforklaring via Gemini API.",
        projectType: "studieprosjekt",
        technologies: ["React", "TypeScript", "ASP.NET Core", "Docker", "C#"],
        githubUrl: "https://github.com/group23-bachelor/imf-workbench-gui",
        images: [],
    },
    {
        id: "quiztech",
        title: "QuizTech",
        description: "Fullstack webapplikasjon i form av en quizplattform med innlogging, registrering og mulighet for å lage og gjennomføre quiz.",
        projectType: "studieprosjekt",
        technologies: ["React", "TypeScript", "ASP.NET Core", "C#"],
        githubUrl: "https://github.com/hagmal/quizapp",
        images: [],
    },
    {
        id: "niceplace",
        title: "NicePlace",
        description: "Android-applikasjon med mulighet for å legge til favorittsteder i kart...",
        projectType: "studieprosjekt",
        technologies: ["Kotlin", "Jetpack Compose"],
        githubUrl: "https://github.com/hagmal/NicePlace",
        images: [],
    },
    {
        id: "birthdays",
        title: "Birthdays",
        description: "Android-applikasjon som holder styr på venners bursdager...",
        projectType: "studieprosjekt",
        technologies: ["Kotlin", "Jetpack Compose"],
        githubUrl: "https://github.com/hagmal/Birthdays",
        images: [],
    },
    {
        id: "numbino",
        title: "Numbino",
        description: "Android-applikasjon som er et mattespill designet for barn...",
        projectType: "studieprosjekt",
        technologies: ["Kotlin", "Jetpack Compose"],
        githubUrl: "https://github.com/hagmal/Numbino",
        images: [],
    },
];