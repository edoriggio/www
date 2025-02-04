/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
export default (await import('vue')).defineComponent({
    name: 'navigation-component',
    props: {
        page: {
            type: String,
            required: true,
        }
    },
    mounted() {
        let buttons = document.getElementsByClassName('menu-button');
        for (let button of buttons) {
            button.classList.add('text-[#9D9D9D]');
        }
        document.getElementById(this.page).classList.remove('text-[#9D9D9D]');
    }
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bottom-0 fixed justify-center left-0 items-center w-full flex flex-row flex-wrap gap-5 navbar py-[20px] lg:relative lg:py-0 lg:w-auto lg:items-start lg:justify-start lg:!border-none lg:!bg-transparent") },
    });
    const __VLS_0 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        to: ("/"),
        ...{ class: ("no-underline") },
    }));
    const __VLS_2 = __VLS_1({
        to: ("/"),
        ...{ class: ("no-underline") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        id: ("home"),
        ...{ class: ("text-[15px] font-bold menu-button hover:text-[#fff] lg:text-[30px]") },
    });
    __VLS_5.slots.default;
    var __VLS_5;
    const __VLS_6 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        to: ("/experience"),
        ...{ class: ("no-underline") },
    }));
    const __VLS_8 = __VLS_7({
        to: ("/experience"),
        ...{ class: ("no-underline") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        id: ("experience"),
        ...{ class: ("text-[15px] font-bold menu-button hover:text-[#fff] lg:text-[30px]") },
    });
    __VLS_11.slots.default;
    var __VLS_11;
    const __VLS_12 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        to: ("/publications"),
        ...{ class: ("no-underline") },
    }));
    const __VLS_14 = __VLS_13({
        to: ("/publications"),
        ...{ class: ("no-underline") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        id: ("publications"),
        ...{ class: ("text-[15px] font-bold menu-button hover:text-[#fff] lg:text-[30px]") },
    });
    __VLS_17.slots.default;
    var __VLS_17;
    const __VLS_18 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
        to: ("/projects"),
        ...{ class: ("no-underline") },
    }));
    const __VLS_20 = __VLS_19({
        to: ("/projects"),
        ...{ class: ("no-underline") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        id: ("projects"),
        ...{ class: ("text-[15px] font-bold menu-button hover:text-[#fff] lg:text-[30px]") },
    });
    __VLS_23.slots.default;
    var __VLS_23;
    ['bottom-0', 'fixed', 'justify-center', 'left-0', 'items-center', 'w-full', 'flex', 'flex-row', 'flex-wrap', 'gap-5', 'navbar', 'py-[20px]', 'lg:relative', 'lg:py-0', 'lg:w-auto', 'lg:items-start', 'lg:justify-start', 'lg:!border-none', 'lg:!bg-transparent', 'no-underline', 'text-[15px]', 'font-bold', 'menu-button', 'hover:text-[#fff]', 'lg:text-[30px]', 'no-underline', 'text-[15px]', 'font-bold', 'menu-button', 'hover:text-[#fff]', 'lg:text-[30px]', 'no-underline', 'text-[15px]', 'font-bold', 'menu-button', 'hover:text-[#fff]', 'lg:text-[30px]', 'no-underline', 'text-[15px]', 'font-bold', 'menu-button', 'hover:text-[#fff]', 'lg:text-[30px]',];
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
