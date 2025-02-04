/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import NavigationComponent from "@/components/navigation/NavigationComponent.vue";
export default (await import('vue')).defineComponent({
    name: 'HomePage',
    components: { NavigationComponent },
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_componentsOption = { NavigationComponent };
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col bg-[#1E1E1F] border-[1px] border-[#383838] mx-[10px] rounded-2xl py-[20px] px-[20px] gap-8 md:w-[80%] lg:px-[30px] lg:py-[20px] lg:sticky lg:top-[40px]") },
    });
    const __VLS_0 = {}.NavigationComponent;
    /** @type { [typeof __VLS_components.NavigationComponent, typeof __VLS_components.navigationComponent, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        page: ("home"),
    }));
    const __VLS_2 = __VLS_1({
        page: ("home"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-justify text-[#D6D6D6]") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("https://usi.ch"),
        target: ("_blank"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("https://design.inf.usi.ch/"),
        target: ("_blank"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("https://si.usi.ch/"),
        target: ("_blank"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("https://www.inf.usi.ch/faculty/pautasso/"),
        target: ("_blank"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("https://www.inf.usi.ch/faculty/lanza/"),
        target: ("_blank"),
    });
    ['flex', 'flex-col', 'bg-[#1E1E1F]', 'border-[1px]', 'border-[#383838]', 'mx-[10px]', 'rounded-2xl', 'py-[20px]', 'px-[20px]', 'gap-8', 'md:w-[80%]', 'lg:px-[30px]', 'lg:py-[20px]', 'lg:sticky', 'lg:top-[40px]', 'text-justify', 'text-[#D6D6D6]',];
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
