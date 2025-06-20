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
        teaching: [
            {
                institution: "Software Atelier 3",
                type: "Bachelor's Course (2nd Year)",
                description: "",
                start: new Date("09/01/2022"),
                end: new Date("01/01/2023"),
            },
            {
                institution: "Software Atelier 4",
                type: "Bachelor's Course (2nd Year)",
                description: "",
                start: new Date("02/01/2023"),
                end: new Date("06/01/2023"),
            },
            {
                institution: "Software Atelier 3",
                type: "Bachelor's Course (2nd Year)",
                description: "",
                start: new Date("09/01/2023"),
                end: new Date("01/01/2024"),
            },
            {
                institution: "Software Atelier 4",
                type: "Bachelor's Course (2nd Year)",
                description: "",
                start: new Date("02/01/2024"),
                end: new Date("06/01/2024"),
            },
            {
                institution: "Software Atelier 3",
                type: "Bachelor's Course (2nd Year)",
                description: "",
                start: new Date("09/01/2024"),
                end: new Date("01/01/2025"),
            },
            {
                institution: "Software Architecture",
                type: "Master's Course (1st Year)",
                description: "",
                start: new Date("02/01/2025"),
                end: new Date("06/01/2025"),
            },
        ] as Experience[],
        supervision: [
            {
                institution: "Github Workflow Analysis VS Code Extension",
                type: "Eduard Bilous - BSc in Computer Science",
                description: "",
                start: new Date("02/01/2025"),
                end: new Date("06/01/2025"),
            },
            {
                institution: "Large-Scale Analysis of GitHub CI/CD Workflows",
                type: "Jovy Dinglasan - MSc in Management and Informatics",
                description: "",
                start: new Date("02/01/2025"),
                end: new Date("06/01/2025"),
            },
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
        conferences: [
            {
                institution: "[C1] Conversation Disentanglement As-a-Service",
                type: "E. Riggio, M. Raglianti and M. Lanza, 2023 IEEE/ACM 31st International Conference on Program " +
                    "Comprehension (ICPC), Melbourne, Australia",
                start: new Date("05/15/2023"),
                link: "https://ieeexplore.ieee.org/document/10173991"
            }
        ] as Experience[],
        theses: [
            {
                institution: "[T1] CODI: A Conversation Disentanglement Microservice",
                type: "Bachelor's Thesis",
                start: new Date("07/01/2022"),
                link: "https://raw.githubusercontent.com/edoriggio/www/main/src/assets/pdfs/rigg2022a.pdf"
            },
            {
                institution: "[T2] APIScout: An Information Retrieval System for OpenAPI Specifications",
                type: "Master's Thesis",
                start: new Date("06/01/2024"),
                link: "https://raw.githubusercontent.com/edoriggio/www/main/src/assets/pdfs/rigg2024a.pdf"
            }
        ]
    }),
    getters: {
        getSortedEducation(): Experience[] {
            return this.education.sort((a, b) => b.start.getTime() - a.start.getTime())
        },
        getSortedTeaching(): Experience[] {
            return this.teaching.sort((a, b) => b.start.getTime() - a.start.getTime())
        },
        getSortedSupervision(): Experience[] {
            return this.supervision.sort((a, b) => b.start.getTime() - a.start.getTime())
        },
        getSortedWork(): Experience[] {
            return this.work.sort((a, b) => b.start.getTime() - a.start.getTime())
        },
        getSortedPublications(): Object {
            return {
                "conferences": this.conferences.sort((a, b) => b.start.getTime() - a.start.getTime()),
                "theses": this.theses.sort((a, b) => b.start.getTime() - a.start.getTime())
            }
        }
    }
})