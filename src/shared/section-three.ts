export interface SectionThreeProps {
    dict: {
        title: string;
        projects: ProjectCardProps[]
    }
}

export interface ProjectCardProps {
    title: string,
    description: string,
    image: string,
    technologies: ProjectCardTech[]
}

export interface ProjectCardTech {
    image: string,
    alt: string
}