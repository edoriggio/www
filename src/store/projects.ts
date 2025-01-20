import {defineStore} from "pinia";

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
}

export const useProjectsStore = defineStore("projects", {
    state: () => ({
        projects: [
            {
                name: "ChinaConvitto",
                description: "This application is part of \"Convitto Nazionale Vittorio Emanuele II\" student " +
                    "mobility project. Convitto is a high school in Rome that has an annual 3-week trip to China. " +
                    "During the stay, students will have to participate in morning classes at university, followed " +
                    "by evening cultural tours. To facilitate their permanence, I decided to create this " +
                    "application. Having been a student of this high school, I lived firsthand this fantastic " +
                    "experience. Though, during the visits, I noticed that the culture shock was substantial. " +
                    "Therefore, the goal of this application is to make the students prepare for the trip beforehand.",
                image: "chinaconvitto",
                category: "Mobile App",
                language: "VueNative",
                date: new Date("06/01/2018"),
                github: "https://github.com/edoriggio/china-convitto",
                link: undefined,
                doi: undefined,
            },
            {
                name: "Game Of Life",
                description: "This program was made by me and Michele Cattaneo as the final project for the " +
                    "\"Programming Fundamentals 2\" (OOP with Java) course at USI. For this project we decided to " +
                    "create an interactive Java program to simulate the famous John Horton Conway's Game of Life. " +
                    "With this project we tried to combine everything we learned during this course, such as: " +
                    "inheritance, polymorphism, observer patterns, exception handling... This program is a cellular " +
                    "automata which follows the Game of Life rules. In our case, we decided to use Torus rule to " +
                    "manage borders and Moore neighborhood to define the neighbors of a cell. Furthermore, because " +
                    "of the design of our program (which makes the most out of OOP and inheritance), it is possible " +
                    "to easily add other kinds of neighborhood and border rules.",
                image: "game-of-life",
                category: "Application",
                language: "Java",
                date: new Date("05/01/2020"),
                github: "https://github.com/edoriggio/game-of-life",
                link: undefined,
                doi: undefined,
            },
            {
                name: "Checq.me",
                description: "The project our team decided to develop was checq.me. checq.me is a web application " +
                    "that allows students, professors, and teaching assistants to prepare, perform, and grade " +
                    "mastery checks. The main idea of the project is to simplify the process of managing mastery " +
                    "checks. The web application we developed contains all the tools that professors and teaching " +
                    "assistants need to organise and grade mastery checks. Also, tools for students are provided, " +
                    "such as ways to prepare and schedule mastery checks. Our team developed this application with " +
                    "ease of use in mind so that both professors and students can have a pleasant experience.",
                image: "checq-me",
                category: "Website",
                language: "Node.js",
                date: new Date("11/01/2020"),
                github: "https://github.com/martino-giorgi/checq.me",
                link: undefined,
                doi: undefined,
            },
            {
                name: "Neural Wave",
                description: "Neural Wave is an event in which participants have the opportunity to work on " +
                    "cutting-edge projects while leveraging state-of-the-art AI techniques such as ML, NLP, computer " +
                    "vision, and more. Companies offer real-world challenges to be tackled by the participants by " +
                    "contributing with datasets and propose specific challenges. The first edition of Neural Wave " +
                    "took place in Lugano from the 25th to the 27th of October 2024. In the Neural Wave organization " +
                    "team, I am responsible for the design, development, and deployment of our website.",
                image: "neural-wave",
                category: "Website",
                language: "Vue.js",
                date: new Date("10/01/2024"),
                github: "https://github.com/neural-wave/www",
                link: "https://neuralwave.ch",
                doi: undefined,
            },
            {
                name: "Raytracer",
                description: "During the fifth semester of university, in the Computer Graphics course, the " +
                    "professor made us implement a raytracer from scratch in C++. This raytracer is able to render " +
                    "cones, spheres, and planes. These shapes can have custom materials (such as matte, translucent, " +
                    "mirror, and glass) and textures. To simulate the light effects on the objects we used the " +
                    "Phong lighting model and shadows. In addition, I've also implemented tone mapping, gamma " +
                    "correction, and the Fresnel effect. Finally, the raytracer is also able to render a 1024x768 " +
                    "60FPS video in which the light sources move in a programmable pattern. The output of the " +
                    "raytracer can be seen in the assets below.",
                image: "raytracer",
                category: "Application",
                language: "C++",
                date: new Date("11/01/2021"),
                github: "https://github.com/edoriggio/raytracer",
                link: undefined,
                doi: undefined,
            },
            {
                name: "Rasterizer",
                description: "During the fifth semester of my Bachelor's degree, in the Computer Graphics course, " +
                    "one of the assignments required me to create a rasterizer in JavaScript in two weeks. This " +
                    "rasterizer is able to raster a interactive 3D terrain. The user can change the viewing angle, " +
                    "as well as changing the direction of the light. In addition, the user is also able to modify " +
                    "the terrain itself. By using the dedicated slider, it is possible to scale the terrain and to " +
                    "increase or decrease the bias. The terrain is divided into 5 different levels: water, sand, " +
                    "grass, rocks, and snow. The ranges between these level can also be modified by using the 'Water " +
                    "Level' slider.",
                image: "rasterizer",
                category: "Application",
                language: "JavaScript",
                date: new Date("12/01/2021"),
                github: "https://github.com/edoriggio/rasterizer",
                link: undefined,
                doi: undefined,
            },
            {
                name: "Cape Simulation",
                description: "During the fifth semester of my Bachelor's degree, in the Computer Graphics course, " +
                    "one of the assignments required me to create a very basic physics simulator in JavaScript in " +
                    "one week. This is an extension of the rasterizer project. Here, we were asked to create a " +
                    "cloth simulation using Javascript and GLMatrix. The rendering part had already been tackled in" +
                    " the aforementioned project. In the case of this project, we had to implement a mass-spring " +
                    "system to animate the piece of cloth. As with the other project, this is also interactive, this " +
                    "means that the user can move both the point of view and the direction of the light. In " +
                    "addition, the user can also choose to anchor or release three predefined points.",
                image: "cape-simulation",
                category: "Application",
                language: "JavaScript",
                date: new Date("12/02/2021"),
                github: "https://github.com/edoriggio/cape-simulation",
                link: undefined,
                doi: undefined,
            },
            {
                name: "Quantum Network",
                description: "During the first semester of my Master's, in the Distributed Systems course, my group " +
                    "(composed by Lorenzo Zaniol, Isin Su Ecevit, and me) developed a functioning quantum network. " +
                    "This network was written in Python using the NetSquid library. The topology of the network is " +
                    "a Star topology, this means that the center of the network is a Quantum Source that generates " +
                    "entangled Bell pairs. On the other hand, the points of the star are nodes with quantum " +
                    "memories. One of the points of the network is a Quantum Repeater. This repeater is connected to " +
                    "a remote node which has a Quantum Source as well as a quantum memory. The repeater will " +
                    "receive one qubit from the source, one qubit from the remote node, and will perform " +
                    "Entanglement Swapping on those qubits. A more detailed report on the project can be found in " +
                    "the GitHub repository for this project.",
                image: "quantum-network",
                category: "Script",
                language: "Python",
                date: new Date("02/01/2024"),
                github: "https://github.com/edoriggio/quantum-network",
                link: undefined,
                doi: undefined,
            },
            {
                name: "CoDi",
                description: "Modern instant messaging applications (e.g., Gitter, Slack, Discord) provide users " +
                    "with real-time communication means. Developers use them for collaborative development, to ask " +
                    "for code reviews, and to have software-related discussions. In short, a (potential) treasure " +
                    "trove for program comprehension. However, as with any high-throughput \"chat application\", " +
                    "messages interleave, leading to concurrent conversations. Associating messages to conversations " +
                    "is called conversation disentanglement, a useful and necessary pre-processing step to analyze " +
                    "datasets of instant messages. Although various conversation disentanglement algorithms have " +
                    "been proposed, it is cumbersome to set up proper execution environments and hard to ensure " +
                    "input data format consistency, calling for better practices and tool support. \n\n We present " +
                    "CODI, a RESTful API micro-service and web interface for conversation disentanglement. It " +
                    "provides an easy way to disentangle conversation transcripts with pre-trained models or to " +
                    "train new ones on custom datasets, features, and hyper-parameters. CODI allows validation of " +
                    "manually annotated conversations, checks input consistency, and computes performance metrics. " +
                    "It achieves state-of-the-art performances on transcripts of IRC, Slack, and Discord " +
                    "conversations. We show how CODI can provide a significant improvement to reusability " +
                    "(and replicability) of research results, while reducing the efforts and potential mistakes due " +
                    "to configuration, setup, and execution.\n\n Both the report and the poster of my thesis, from " +
                    "which the paper was written from, can be found in the GitHub repository for this project",
                image: "codi",
                category: "Website",
                language: "Python",
                date: new Date("04/01/2023"),
                github: "https://github.com/USIREVEAL/CODI",
                link: "https://codi.si.usi.ch",
                doi: "https://doi.org/10.1109/ICPC58990.2023.00018"
            },
            {
                name: "Airlinr",
                description: "This app is designed to help travelers avoid unexpected fees by providing a simple and " +
                    "efficient way to check if their luggage meets the specific dimensions and weight " +
                    "requirements set by various airlines. Airlines often have strict rules regarding the size, " +
                    "weight, and number of bags passengers are allowed to bring, and exceeding these limits can " +
                    "result in expensive additional charges. With this app, users can easily input their luggage's " +
                    "dimensions and weight, and the app will immediately compare these figures against the policies " +
                    "of different airlines. This way, travelers can quickly determine if their luggage is within " +
                    "acceptable limits or if adjustments are needed before they head to the airport.",
                image: "airlinr",
                category: "Design",
                language: undefined,
                date: new Date("08/01/2018"),
                github: undefined,
                link: undefined,
                doi: undefined,
            }
        ] as Project[],
    }),
    getters: {
        getProject(state) {
            return (id: string): Project => state.projects.find(el => el.image === id) as Project
        },
        getProjectsByCategory(state) {
          return function (category: string): Project[] {
              if (category === "All") {
                  return state.projects.sort((a, b) => b.date.getTime() - a.date.getTime())
              }

              return state.projects.filter(el => el.category === category)
          }
        },
        getSortedProjects(): Project[] {
            return this.projects.sort((a, b) => b.date.getTime() - a.date.getTime())
        },
        getCategories(): string[] {
            return ["All", ...new Set(this.projects.map(el => el.category))].sort()
        }
    }
})
