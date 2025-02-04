/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { mapState } from "pinia";
import NavigationComponent from "@/components/navigation/NavigationComponent.vue";
import { useProjectsStore } from "@/store/projects.ts";
export default (await import('vue')).defineComponent({
    name: 'ProjectsPage',
    components: { NavigationComponent },
    data() {
        return {
            projects: this.getSortedProjects(),
            categories: this.getCategories()
        };
    },
    mounted() {
        document.getElementById('all').classList.add('text-[#fff]');
        document.getElementById('all').innerHTML = `All (${this.projects.length})`;
    },
    methods: {
        getImage(filename) {
            return new URL(`/src/assets/projects/pictures/${filename}.png`, import.meta.url).href;
        },
        filterProjects(category) {
            let categoryClean = category.toLowerCase().replace(/\s/g, '-');
            let buttons = document.getElementsByClassName('categories');
            for (let button of buttons) {
                button.classList.add('text-[#9D9D9D]');
                button.classList.remove('text-[#fff]');
                button.innerHTML = button.innerHTML.replace(/\(.*\)/g, '');
            }
            let el = document.getElementById(categoryClean);
            el.classList.add('text-[#fff]');
            this.projects = this.getProjectsByCategory()(category);
            el.innerHTML = `${category} (${category === 'All' ? this.projects.length : this.projects.filter(project => project.category === category).length})`;
        },
        ...mapState(useProjectsStore, ['getSortedProjects', 'getCategories', "getProjectsByCategory"])
    }
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_componentsOption = { NavigationComponent };
    let __VLS_components;
    let __VLS_directives;
    ['link',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col bg-[#1E1E1F] border-[1px] border-[#383838] mx-[10px] rounded-2xl py-[20px] px-[20px] gap-8 md:w-[80%] lg:px-[30px] lg:py-[20px] lg:sticky lg:top-[40px]") },
    });
    const __VLS_0 = {}.NavigationComponent;
    /** @type { [typeof __VLS_components.NavigationComponent, typeof __VLS_components.navigationComponent, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        page: ("projects"),
    }));
    const __VLS_2 = __VLS_1({
        page: ("projects"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-wrap gap-4 mb-[-10px]") },
    });
    for (const [category] of __VLS_getVForSourceType((__VLS_ctx.categories))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    __VLS_ctx.filterProjects(category);
                } },
            key: ((__VLS_ctx.categories)),
            id: ((category.toLowerCase().replace(/\s/g, '-'))),
            ...{ class: ("categories text-[18px] font-medium menu-button hover:text-[#fff]") },
        });
        (category);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid mb-[15px] max-[500px]:grid-cols-1 max-[1320px]:grid-cols-2 min-[1321px]:grid-cols-3 min-[2000px]:grid-col-4 gap-7") },
    });
    for (const [project] of __VLS_getVForSourceType((__VLS_ctx.projects))) {
        const __VLS_6 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
            key: ((project.name)),
            to: ((`/projects/${project.image}`)),
            ...{ class: ("flex flex-col gap-3 no-underline link") },
        }));
        const __VLS_8 = __VLS_7({
            key: ((project.name)),
            to: ((`/projects/${project.image}`)),
            ...{ class: ("flex flex-col gap-3 no-underline link") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("overflow-hidden rounded-[14px]") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
            src: ((__VLS_ctx.getImage(project.image))),
            alt: ("project image"),
            ...{ class: ("rounded-[14px] transition-all") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex flex-col gap-0 ml-[10px]") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("font-bold text-[15px]") },
        });
        (project.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("font-normal text-[#9D9D9D] text-[14px]") },
        });
        (project.category);
        __VLS_11.slots.default;
        var __VLS_11;
    }
    ['flex', 'flex-col', 'bg-[#1E1E1F]', 'border-[1px]', 'border-[#383838]', 'mx-[10px]', 'rounded-2xl', 'py-[20px]', 'px-[20px]', 'gap-8', 'md:w-[80%]', 'lg:px-[30px]', 'lg:py-[20px]', 'lg:sticky', 'lg:top-[40px]', 'flex', 'flex-wrap', 'gap-4', 'mb-[-10px]', 'categories', 'text-[18px]', 'font-medium', 'menu-button', 'hover:text-[#fff]', 'grid', 'mb-[15px]', 'max-[500px]:grid-cols-1', 'max-[1320px]:grid-cols-2', 'min-[1321px]:grid-cols-3', 'min-[2000px]:grid-col-4', 'gap-7', 'flex', 'flex-col', 'gap-3', 'no-underline', 'link', 'overflow-hidden', 'rounded-[14px]', 'rounded-[14px]', 'transition-all', 'flex', 'flex-col', 'gap-0', 'ml-[10px]', 'font-bold', 'text-[15px]', 'font-normal', 'text-[#9D9D9D]', 'text-[14px]',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
