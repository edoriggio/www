/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { Separator } from "@/components/ui/separator";
import SocialComponent from "@/components/sidebar/SocialComponent.vue";
export default (await import('vue')).defineComponent({
    name: 'SidebarComponent',
    components: { SocialComponent, Separator }
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_componentsOption = { SocialComponent, Separator };
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-wrap items-center bg-[#1E1E1F] border-[1px] border-[#383838] mx-[10px] rounded-2xl py-[20px] px-[20px] gap-8 md:w-[80%] lg:w-[250px] lg:flex-col lg:py-[40px] lg:sticky lg:top-[40px]") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-wrap items-center lg:flex-col gap-8") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        ...{ class: ("w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-[21px]") },
        src: ("../../assets/images/pro-pic.jpg"),
        alt: ("profile picture"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col gap-3 lg:items-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-2xl font-medium") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("bg-[#2B2B2C] px-[15px] py-[5px] w-fit rounded-[7px] font-normal text-[12px]") },
    });
    const __VLS_0 = {}.separator;
    /** @type { [typeof __VLS_components.Separator, typeof __VLS_components.separator, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: ("hidden lg:w-[90%] lg:bg-[#383838] lg:block") },
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: ("hidden lg:w-[90%] lg:bg-[#383838] lg:block") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("hidden lg:flex lg:flex-col lg:items-start lg:gap-6") },
    });
    const __VLS_6 = {}.SocialComponent;
    /** @type { [typeof __VLS_components.SocialComponent, typeof __VLS_components.socialComponent, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        icon: ("ri-mail-line"),
        title: ("EMAIL"),
        content: ("riggie@usi.ch"),
    }));
    const __VLS_8 = __VLS_7({
        icon: ("ri-mail-line"),
        title: ("EMAIL"),
        content: ("riggie@usi.ch"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = {}.SocialComponent;
    /** @type { [typeof __VLS_components.SocialComponent, typeof __VLS_components.socialComponent, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        icon: ("ri-map-pin-2-line"),
        title: ("LOCATION"),
        content: (('Via la Santa 1\nLugano, CH')),
    }));
    const __VLS_14 = __VLS_13({
        icon: ("ri-map-pin-2-line"),
        title: ("LOCATION"),
        content: (('Via la Santa 1\nLugano, CH')),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_18 = {}.SocialComponent;
    /** @type { [typeof __VLS_components.SocialComponent, typeof __VLS_components.socialComponent, ] } */ ;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
        icon: ("ri-building-line"),
        title: ("OFFICE"),
        content: ("D3.13"),
    }));
    const __VLS_20 = __VLS_19({
        icon: ("ri-building-line"),
        title: ("OFFICE"),
        content: ("D3.13"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("hidden lg:flex lg:justify-center lg:gap-3 lg:w-[90%] lg:text-[20px]") },
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
    ['flex', 'flex-wrap', 'items-center', 'bg-[#1E1E1F]', 'border-[1px]', 'border-[#383838]', 'mx-[10px]', 'rounded-2xl', 'py-[20px]', 'px-[20px]', 'gap-8', 'md:w-[80%]', 'lg:w-[250px]', 'lg:flex-col', 'lg:py-[40px]', 'lg:sticky', 'lg:top-[40px]', 'flex', 'flex-wrap', 'items-center', 'lg:flex-col', 'gap-8', 'w-[100px]', 'h-[100px]', 'md:w-[120px]', 'md:h-[120px]', 'rounded-[21px]', 'flex', 'flex-col', 'gap-3', 'lg:items-center', 'text-2xl', 'font-medium', 'bg-[#2B2B2C]', 'px-[15px]', 'py-[5px]', 'w-fit', 'rounded-[7px]', 'font-normal', 'text-[12px]', 'hidden', 'lg:w-[90%]', 'lg:bg-[#383838]', 'lg:block', 'hidden', 'lg:flex', 'lg:flex-col', 'lg:items-start', 'lg:gap-6', 'hidden', 'lg:flex', 'lg:justify-center', 'lg:gap-3', 'lg:w-[90%]', 'lg:text-[20px]', 'no-underline', 'ri-github-fill', 'no-underline', 'ri-linkedin-fill', 'no-underline', 'ri-graduation-cap-fill',];
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
