import {defineStore} from "pinia";

export type Experience = {
    institution: string,
    type: string,
    description: string,
    start: Date,
    end: Date,
    link: string,
}

export const useEducationStore = defineStore('experience', {
    state: () => ({
        education: [
            {
                institution: "Università della Svizzera italiana",
                type: "BSc in Computer Science",
                description: "",
                start: new Date("09/01/2019"),
                end: new Date("07/01/2022"),
            },
            {
                institution: "Università della Svizzera italiana",
                type: "MSc in Software and Data Engineering",
                description: "",
                start: new Date("09/01/2022"),
                end: new Date("07/01/2024"),
            },
            {
                institution: "Università della Svizzera italiana",
                type: "PhD in Informatics",
                description: "",
                start: new Date("08/01/2024"),
                end: -1,
            }
        ] as Experience[],
        work: [
            {
                institution: "Frontend Developer Intern",
                type: "Agic Technology",
                description: "",
                start: new Date("07/01/2021"),
                end: new Date("09/01/2021"),
            },
            {
                institution: "Freelance Full-stack Developer",
                type: "ERC Apps",
                description: "",
                start: new Date("09/01/2015"),
                end: new Date("02/01/2024"),
            },
            {
                institution: "Doctoral Research Assistant",
                type: "Università della Svizzera italiana",
                description: "",
                start: new Date("08/01/2024"),
                end: -1,
            },
            {
                institution: "Organizer",
                type: "NeuralWave",
                description: "",
                start: new Date("02/01/2022"),
                end: -1,
            },
            {
                institution: "Teaching Assistant",
                type: "Università della Svizzera italiana",
                description: "",
                start: new Date("09/01/2022"),
                end: -1,
            }
        ] as Experience[],
        publications: [
            {
                institution: "Conversation Disentanglement As-a-Service",
                type: "E. Riggio, M. Raglianti and M. Lanza, 2023 IEEE/ACM 31st International Conference on Program " +
                    "Comprehension (ICPC), Melbourne, Australia",
                start: new Date("05/15/2023"),
                link: "https://ieeexplore.ieee.org/document/10173991"
            }
        ] as Experience[],
    }),
    getters: {
        getSortedEducation(): Experience[] {
            return this.education.sort((a, b) => b.start.getFullYear() - a.start.getFullYear());
        },
        getSortedWork(): Experience[] {
            return this.work.sort((a, b) => b.start.getFullYear() - a.start.getFullYear());
        },
        getSortedPublications(): Experience[] {
            return this.publications.sort((a, b) => a.start.getFullYear() - b.start.getFullYear());
        }
    }
})