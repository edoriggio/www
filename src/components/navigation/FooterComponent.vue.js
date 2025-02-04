/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import SocialComponent from "@/components/sidebar/SocialComponent.vue";
import { Separator } from "@/components/ui/separator";
export default (await import('vue')).defineComponent({
    name: "FooterComponent",
    components: { Separator, SocialComponent }
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_componentsOption = { Separator, SocialComponent };
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col items-center bg-[#1E1E1F] border-[1px] border-[#383838] mx-[10px] rounded-2xl py-[20px] px-[20px] gap-6 mb-[85px] md:mb-[45px] md:w-[80%] lg:hidden") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-wrap items-center justify-center gap-10") },
    });
    const __VLS_0 = {}.SocialComponent;
    /** @type { [typeof __VLS_components.SocialComponent, typeof __VLS_components.socialComponent, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        icon: ("ri-mail-line"),
        title: ("EMAIL"),
        content: ("riggie@usi.ch"),
    }));
    const __VLS_2 = __VLS_1({
        icon: ("ri-mail-line"),
        title: ("EMAIL"),
        content: ("riggie@usi.ch"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = {}.SocialComponent;
    /** @type { [typeof __VLS_components.SocialComponent, typeof __VLS_components.socialComponent, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        icon: ("ri-map-pin-2-line"),
        title: ("LOCATION"),
        content: (('Via la Santa 1\nLugano, CH')),
    }));
    const __VLS_8 = __VLS_7({
        icon: ("ri-map-pin-2-line"),
        title: ("LOCATION"),
        content: (('Via la Santa 1\nLugano, CH')),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = {}.SocialComponent;
    /** @type { [typeof __VLS_components.SocialComponent, typeof __VLS_components.socialComponent, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        icon: ("ri-building-line"),
        title: ("OFFICE"),
        content: ("D3.13"),
    }));
    const __VLS_14 = __VLS_13({
        icon: ("ri-building-line"),
        title: ("OFFICE"),
        content: ("D3.13"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = {}.separator;
    /** @type { [typeof __VLS_components.Separator, typeof __VLS_components.separator, ] } */ ;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
        ...{ class: ("w-[90%] bg-[#383838]") },
    }));
    const __VLS_20 = __VLS_19({
        ...{ class: ("w-[90%] bg-[#383838]") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-center gap-3 w-[90%] text-[20px]") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ class: ("no-underline") },
        href: ("https://github.com/edoriggio"),
        target: ("_blank"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: ("ri-github-fill") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ class: ("no-underline") },
        href: ("https://linkedin.com/in/edoardo-riggio/"),
        target: ("_blank"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: ("ri-linkedin-fill") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ class: ("no-underline") },
        href: ("https://scholar.google.com/citations?user=WUofafkAAAAJ&hl=en"),
        target: ("_blank"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: ("ri-graduation-cap-fill") },
    });
    ['flex', 'flex-col', 'items-center', 'bg-[#1E1E1F]', 'border-[1px]', 'border-[#383838]', 'mx-[10px]', 'rounded-2xl', 'py-[20px]', 'px-[20px]', 'gap-6', 'mb-[85px]', 'md:mb-[45px]', 'md:w-[80%]', 'lg:hidden', 'flex', 'flex-wrap', 'items-center', 'justify-center', 'gap-10', 'w-[90%]', 'bg-[#383838]', 'flex', 'justify-center', 'gap-3', 'w-[90%]', 'text-[20px]', 'no-underline', 'ri-github-fill', 'no-underline', 'ri-linkedin-fill', 'no-underline', 'ri-graduation-cap-fill',];
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
