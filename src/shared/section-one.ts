export interface SectionOneProps {
    dict: {
        id: string;
        title: string;
        subtitle: string;
        ctaOne: string;
        ctaTwo: string;
        emailSubject: string;
        emailBody: string;
    },
    codeCard: CodeCard
}

export interface CodeCard {
    name: string;
    local: string;
    age: string;
    project: string;
    projects: string;
}

export interface StatusBadge {
    title: string,
    type: StatusType,
    value: number
}

export enum StatusType {
    COMMITS = "COMMITS",
    PULLREQUEST = "PULLREQUEST",
    STARS = "STARS"

}