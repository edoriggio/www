/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import NavigationComponent from "@/components/navigation/NavigationComponent.vue";
import { mapState } from "pinia";
import { Project, useProjectsStore } from "@/store/projects";
import { prototype } from "tailwindcss";
export default (await import('vue')).defineComponent({
    name: 'ProjectPage',
    components: { NavigationComponent },
    data() {
        return {
            project: this.getProject()(this.$route.params.name),
            related: [],
        };
    },
    mounted() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.related = this.getProjectsByCategory()(this.project.category).filter(project => project.name != this.project.name);
    },
    watch: {
        $route(to) {
            this.project = this.getProject()(to.params.name);
            this.related = this.getProjectsByCategory()(this.project.category).filter(project => project.name != this.project.name);
        }
    },
    methods: {
        getImage(filename, where) {
            return new URL(`/src/assets/projects/${where}/${filename}.png`, import.meta.url).href;
        },
        ...mapState(useProjectsStore, ["getProject", "getProjectsByCategory"]),
    }
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_componentsOption = { NavigationComponent };
    let __VLS_components;
    let __VLS_directives;
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
        ...{ class: ("box-top flex flex-col gap-1.5 bg-[#2B2B2C] rounded-2xl px-[20px] py-[18px]") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-[14px] w-full flex") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex-none w-[110px] self-stretch text-[#9D9D9D]") },
    });
    if (__VLS_ctx.project.language) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    if (__VLS_ctx.project.language) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.project.language);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-[14px] w-full flex") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex-none w-[110px] self-stretch text-[#9D9D9D]") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("break-all") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.project.category);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-[14px] w-full flex") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex-none w-[110px] self-stretch text-[#9D9D9D]") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("break-all") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.project.date.getFullYear());
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-[14px] w-full flex") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex-none w-[110px] self-stretch text-[#9D9D9D]") },
    });
    if (__VLS_ctx.project.github) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("break-all") },
    });
    if (__VLS_ctx.project.github) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            href: ((__VLS_ctx.project.github)),
            target: ("_blank"),
            ...{ class: ("no-underline hover:underline") },
        });
        (__VLS_ctx.project.github.substring(19));
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ class: ("ri-external-link-line ml-1 text-[15px]") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-[14px] w-full flex") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex-none w-[110px] self-stretch text-[#9D9D9D]") },
    });
    if (__VLS_ctx.project.link) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("break-all") },
    });
    if (__VLS_ctx.project.link) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            href: ((__VLS_ctx.project.link)),
            target: ("_blank"),
            ...{ class: ("no-underline hover:underline") },
        });
        (__VLS_ctx.project.link.substring(8));
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ class: ("ri-external-link-line ml-1 text-[15px]") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-[14px] w-full flex") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex-none w-[110px] self-stretch text-[#9D9D9D]") },
    });
    if (__VLS_ctx.project.doi) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("break-all") },
    });
    if (__VLS_ctx.project.doi) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            href: ((__VLS_ctx.project.doi)),
            target: ("_blank"),
            ...{ class: ("no-underline hover:underline") },
        });
        (__VLS_ctx.project.doi.substring(16));
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ class: ("ri-external-link-line ml-1 text-[15px]") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col gap-6 mx-[25px]") },
        ...{ class: ((__VLS_ctx.related.length == 0 ? 'mb-[25px]' : '')) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        ...{ class: ("w-[80px] border-[1px] border-[#383838] rounded-full p-1") },
        src: ((__VLS_ctx.getImage(__VLS_ctx.project.image, 'icons'))),
        alt: ("project logo"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col gap-3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("font-bold text-[27px]") },
    });
    (__VLS_ctx.project.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ style: ({}) },
        ...{ class: ("font-normal text-[#D6D6D6] text-[16px] text-justify") },
    });
    (__VLS_ctx.project.description);
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ((__VLS_ctx.getImage(__VLS_ctx.project.image, 'pictures'))),
        alt: (""),
    });
    if (__VLS_ctx.related.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex flex-col gap-4 mb-[15px] mt-[15px]") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("font-bold text-[20px]") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex flex-wrap gap-8") },
        });
        for (const [proj] of __VLS_getVForSourceType((__VLS_ctx.related))) {
            const __VLS_6 = {}.RouterLink;
            /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
                key: ((proj.name)),
                to: ((proj.image)),
                ...{ class: ("flex no-underline items-center gap-3 w-fit") },
            }));
            const __VLS_8 = __VLS_7({
                key: ((proj.name)),
                to: ((proj.image)),
                ...{ class: ("flex no-underline items-center gap-3 w-fit") },
            }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
                ...{ class: ("w-[60px] border-[1px] border-[#383838] rounded-full p-1") },
                src: ((__VLS_ctx.getImage(proj.image, 'icons'))),
                alt: ("project logo"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("flex flex-col") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
                ...{ class: ("font-bold text-[15px]") },
            });
            (proj.name);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
                ...{ class: ("font-normal text-[#9D9D9D] text-[14px]") },
            });
            (proj.date.getFullYear());
            __VLS_11.slots.default;
            var __VLS_11;
        }
    }
    ['flex', 'flex-col', 'bg-[#1E1E1F]', 'border-[1px]', 'border-[#383838]', 'mx-[10px]', 'rounded-2xl', 'py-[20px]', 'px-[20px]', 'gap-8', 'md:w-[80%]', 'lg:px-[30px]', 'lg:py-[20px]', 'lg:sticky', 'lg:top-[40px]', 'box-top', 'flex', 'flex-col', 'gap-1.5', 'bg-[#2B2B2C]', 'rounded-2xl', 'px-[20px]', 'py-[18px]', 'text-[14px]', 'w-full', 'flex', 'flex-none', 'w-[110px]', 'self-stretch', 'text-[#9D9D9D]', 'text-[14px]', 'w-full', 'flex', 'flex-none', 'w-[110px]', 'self-stretch', 'text-[#9D9D9D]', 'break-all', 'text-[14px]', 'w-full', 'flex', 'flex-none', 'w-[110px]', 'self-stretch', 'text-[#9D9D9D]', 'break-all', 'text-[14px]', 'w-full', 'flex', 'flex-none', 'w-[110px]', 'self-stretch', 'text-[#9D9D9D]', 'break-all', 'no-underline', 'hover:underline', 'ri-external-link-line', 'ml-1', 'text-[15px]', 'text-[14px]', 'w-full', 'flex', 'flex-none', 'w-[110px]', 'self-stretch', 'text-[#9D9D9D]', 'break-all', 'no-underline', 'hover:underline', 'ri-external-link-line', 'ml-1', 'text-[15px]', 'text-[14px]', 'w-full', 'flex', 'flex-none', 'w-[110px]', 'self-stretch', 'text-[#9D9D9D]', 'break-all', 'no-underline', 'hover:underline', 'ri-external-link-line', 'ml-1', 'text-[15px]', 'flex', 'flex-col', 'gap-6', 'mx-[25px]', 'w-[80px]', 'border-[1px]', 'border-[#383838]', 'rounded-full', 'p-1', 'flex', 'flex-col', 'gap-3', 'font-bold', 'text-[27px]', 'font-normal', 'text-[#D6D6D6]', 'text-[16px]', 'text-justify', 'flex', 'flex-col', 'gap-4', 'mb-[15px]', 'mt-[15px]', 'font-bold', 'text-[20px]', 'flex', 'flex-wrap', 'gap-8', 'flex', 'no-underline', 'items-center', 'gap-3', 'w-fit', 'w-[60px]', 'border-[1px]', 'border-[#383838]', 'rounded-full', 'p-1', 'flex', 'flex-col', 'font-bold', 'text-[15px]', 'font-normal', 'text-[#9D9D9D]', 'text-[14px]',];
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
