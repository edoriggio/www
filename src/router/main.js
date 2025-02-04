import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ExperiencePage from "../pages/ExperiencePage.vue";
import PublicationsPage from "../pages/PublicationsPage.vue";
import ProjectsPage from "../pages/ProjectsPage.vue";
import ProjectPage from "../pages/ProjectPage.vue";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", component: HomePage },
        { path: "/experience", component: ExperiencePage },
        { path: "/publications", component: PublicationsPage },
        { path: "/projects", component: ProjectsPage },
        { path: "/projects/:name", component: ProjectPage },
    ]
});
export default router;
