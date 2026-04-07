interface SectionOneProps {
    dict: {
        title: string;
        subtitle: string;
        cta: string;
    },
    codeCard: CodeCard
}

interface CodeCard {
    name: string;
    local: string;
    age: string;
    project: string;
    projects: string;
}