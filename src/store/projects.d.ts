export type Project = {
    name: string;
    description: string;
    image: string;
    category: string;
    date: Date;
    github: string;
    link: string;
    language: string;
    doi: string;
};
export declare const useProjectsStore: import("pinia").StoreDefinition<"projects", {
    projects: Project[];
}, {
    getProject(state: {
        projects: {
            name: string;
            description: string;
            image: string;
            category: string;
            date: Date;
            github: string;
            link: string;
            language: string;
            doi: string;
        }[];
    } & import("pinia").PiniaCustomStateProperties<{
        projects: Project[];
    }>): (id: string) => Project;
    getProjectsByCategory(state: {
        projects: {
            name: string;
            description: string;
            image: string;
            category: string;
            date: Date;
            github: string;
            link: string;
            language: string;
            doi: string;
        }[];
    } & import("pinia").PiniaCustomStateProperties<{
        projects: Project[];
    }>): (category: string) => Project[];
    getSortedProjects(): Project[];
    getCategories(): string[];
}, {}>;
