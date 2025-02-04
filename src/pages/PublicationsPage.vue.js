/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import NavigationComponent from "@/components/navigation/NavigationComponent.vue";
import TimelineComponent from "@/components/TimelineComponent.vue";
import { mapState } from "pinia";
import { useEducationStore } from "@/store/experience.ts";
export default (await import('vue')).defineComponent({
    name: 'PublicationsPage',
    components: { TimelineComponent, NavigationComponent },
    data() {
        return {
            conferences: this.getSortedPublications()['conferences'],
            theses: this.getSortedPublications()['theses']
        };
    },
    methods: {
        ...mapState(useEducationStore, ['getSortedPublications'])
    }
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_componentsOption = { TimelineComponent, NavigationComponent };
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col bg-[#1E1E1F] border-[1px] border-[#383838] mx-[10px] rounded-2xl py-[20px] px-[20px] gap-8 md:w-[80%] lg:px-[30px] lg:py-[20px] lg:sticky lg:top-[40px]") },
    });
    const __VLS_0 = {}.NavigationComponent;
    /** @type { [typeof __VLS_components.NavigationComponent, typeof __VLS_components.navigationComponent, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        page: ("publications"),
    }));
    const __VLS_2 = __VLS_1({
        page: ("publications"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = {}.TimelineComponent;
    /** @type { [typeof __VLS_components.TimelineComponent, typeof __VLS_components.timelineComponent, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        icon: ("ri-team-line"),
        title: ("Conference Papers"),
        experience: ((__VLS_ctx.conferences)),
    }));
    const __VLS_8 = __VLS_7({
        icon: ("ri-team-line"),
        title: ("Conference Papers"),
        experience: ((__VLS_ctx.conferences)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = {}.TimelineComponent;
    /** @type { [typeof __VLS_components.TimelineComponent, typeof __VLS_components.timelineComponent, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        ...{ class: ("mb-[15px]") },
        icon: ("ri-graduation-cap-line"),
        title: ("Theses"),
        experience: ((__VLS_ctx.theses)),
    }));
    const __VLS_14 = __VLS_13({
        ...{ class: ("mb-[15px]") },
        icon: ("ri-graduation-cap-line"),
        title: ("Theses"),
        experience: ((__VLS_ctx.theses)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ['flex', 'flex-col', 'bg-[#1E1E1F]', 'border-[1px]', 'border-[#383838]', 'mx-[10px]', 'rounded-2xl', 'py-[20px]', 'px-[20px]', 'gap-8', 'md:w-[80%]', 'lg:px-[30px]', 'lg:py-[20px]', 'lg:sticky', 'lg:top-[40px]', 'mb-[15px]',];
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
