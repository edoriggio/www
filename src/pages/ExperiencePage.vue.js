/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import NavigationComponent from "@/components/navigation/NavigationComponent.vue";
import { mapState } from "pinia";
import { useEducationStore } from "@/store/experience.js";
import ExpTimelineComponent from "@/components/TimelineComponent.vue";
export default (await import('vue')).defineComponent({
    name: 'ExperiencePage',
    components: { ExpTimelineComponent, NavigationComponent },
    data() {
        return {
            education: this.getSortedEducation(),
            work: this.getSortedWork(),
        };
    },
    methods: {
        ...mapState(useEducationStore, ['getSortedEducation', 'getSortedWork'])
    },
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_componentsOption = { ExpTimelineComponent, NavigationComponent };
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col bg-[#1E1E1F] border-[1px] border-[#383838] mx-[10px] rounded-2xl py-[20px] px-[20px] gap-8 md:w-[80%] lg:px-[30px] lg:py-[20px] lg:sticky lg:top-[40px]") },
    });
    const __VLS_0 = {}.NavigationComponent;
    /** @type { [typeof __VLS_components.NavigationComponent, typeof __VLS_components.navigationComponent, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        page: ("experience"),
    }));
    const __VLS_2 = __VLS_1({
        page: ("experience"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = {}.ExpTimelineComponent;
    /** @type { [typeof __VLS_components.ExpTimelineComponent, typeof __VLS_components.expTimelineComponent, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        icon: ("ri-book-2-line"),
        title: ("Education"),
        experience: ((__VLS_ctx.education)),
    }));
    const __VLS_8 = __VLS_7({
        icon: ("ri-book-2-line"),
        title: ("Education"),
        experience: ((__VLS_ctx.education)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = {}.ExpTimelineComponent;
    /** @type { [typeof __VLS_components.ExpTimelineComponent, typeof __VLS_components.expTimelineComponent, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        ...{ class: ("mb-[15px]") },
        icon: ("ri-briefcase-line"),
        title: ("Experience"),
        experience: ((__VLS_ctx.work)),
    }));
    const __VLS_14 = __VLS_13({
        ...{ class: ("mb-[15px]") },
        icon: ("ri-briefcase-line"),
        title: ("Experience"),
        experience: ((__VLS_ctx.work)),
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
