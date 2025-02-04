import { type Project } from "@/store/projects.ts";
declare const _default: import("vue").DefineComponent<{}, {}, {
    projects: Project[];
    categories: string[];
}, {}, {
    getSortedProjects: () => any;
    getCategories: () => any;
    getProjectsByCategory: () => any;
    getImage(filename: string): string;
    filterProjects(category: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    NavigationComponent: any;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
