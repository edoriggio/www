/// <reference types="../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue";
import FooterComponent from "@/components/navigation/FooterComponent.vue";
export default (await import('vue')).defineComponent({
    name: 'App',
    components: { FooterComponent, SidebarComponent },
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_componentsOption = { FooterComponent, SidebarComponent };
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col mt-[10px] gap-5 md:items-center md:justify-center md:my-[40px] lg:flex-row lg:items-start lg:w-[80%]") },
    });
    const __VLS_0 = {}.SidebarComponent;
    /** @type { [typeof __VLS_components.SidebarComponent, typeof __VLS_components.sidebarComponent, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = {}.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = {}.FooterComponent;
    /** @type { [typeof __VLS_components.FooterComponent, typeof __VLS_components.footerComponent, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ['flex', 'flex-col', 'mt-[10px]', 'gap-5', 'md:items-center', 'md:justify-center', 'md:my-[40px]', 'lg:flex-row', 'lg:items-start', 'lg:w-[80%]',];
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
