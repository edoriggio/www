export type Experience = {
    institution: string;
    type: string;
    description: string;
    start: Date;
    end: Date;
    link: string;
};
export declare const useEducationStore: import("pinia").StoreDefinition<"experience", {
    education: Experience[];
    work: Experience[];
    conferences: Experience[];
    theses: {
        institution: string;
        type: string;
        start: Date;
        link: string;
    }[];
}, {
    getSortedEducation(): Experience[];
    getSortedWork(): Experience[];
    getSortedPublications(): Object;
}, {}>;
