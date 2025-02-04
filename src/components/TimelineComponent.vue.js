/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { Separator } from "@/components/ui/separator";
export default (await import('vue')).defineComponent({
    name: 'TimelineComponent',
    components: { Separator },
    props: {
        icon: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        experience: {
            type: Object,
            required: true,
        },
        longDates: {
            type: Boolean,
            default: false,
        }
    }
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_componentsOption = { Separator };
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center justify-center w-[41px] h-[41px] border-[1px] border-[#383838] rounded-[6px] text-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: ((__VLS_ctx.icon)) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("font-bold text-[20px]") },
    });
    (__VLS_ctx.title);
    const __VLS_0 = {}.separator;
    /** @type { [typeof __VLS_components.Separator, typeof __VLS_components.separator, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: ("bg-[#383838] h-[20px] ml-[20.5px] mb-[-2px]") },
        orientation: ("vertical"),
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: ("bg-[#383838] h-[20px] ml-[20.5px] mb-[-2px]") },
        orientation: ("vertical"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col gap-5 ml-[13px]") },
    });
    for (const [exp, ind] of __VLS_getVForSourceType((__VLS_ctx.experience))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((exp.type)),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex gap-5") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("flex flex-col items-center") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ class: ("ri-progress-8-line text-[15px]") },
        });
        const __VLS_6 = {}.separator;
        /** @type { [typeof __VLS_components.Separator, typeof __VLS_components.separator, ] } */ ;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
            ...{ class: ("bg-[#383838] mt-[-1.6px]") },
            ...{ class: ((ind === __VLS_ctx.experience.length - 1 ? 'hidden' : '')) },
            orientation: ("vertical"),
        }));
        const __VLS_8 = __VLS_7({
            ...{ class: ("bg-[#383838] mt-[-1.6px]") },
            ...{ class: ((ind === __VLS_ctx.experience.length - 1 ? 'hidden' : '')) },
            orientation: ("vertical"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex flex-col items-start gap-0") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            href: ((exp.link)),
            target: ("_blank"),
            ...{ class: ("no-underline font-bold text-[15px]") },
            ...{ class: ((exp.link ? 'hover:underline' : '')) },
        });
        (exp.institution);
        if (exp.link) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
                ...{ class: ("ri-external-link-line ml-1 text-[15px]") },
            });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("font-normal text-[#D6D6D6] text-[14px]") },
        });
        (exp.type);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("font-thin italic text-[13px]") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (exp.start.toLocaleDateString('default', { month: "short", year: "numeric" }));
        if (exp.end) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (typeof exp.end === 'number' ? 'Present' : exp.end.toLocaleDateString('default', { month: "short", year: "numeric" }));
        }
        if (exp.description) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
                ...{ class: ("font-normal text-[#D6D6D6] text-[14px] mt-2") },
            });
            (exp.description);
        }
    }
    ['flex', 'flex-col', 'flex', 'items-center', 'gap-4', 'flex', 'items-center', 'justify-center', 'w-[41px]', 'h-[41px]', 'border-[1px]', 'border-[#383838]', 'rounded-[6px]', 'text-center', 'font-bold', 'text-[20px]', 'bg-[#383838]', 'h-[20px]', 'ml-[20.5px]', 'mb-[-2px]', 'flex', 'flex-col', 'gap-5', 'ml-[13px]', 'flex', 'gap-5', 'flex', 'flex-col', 'items-center', 'ri-progress-8-line', 'text-[15px]', 'bg-[#383838]', 'mt-[-1.6px]', 'flex', 'flex-col', 'items-start', 'gap-0', 'no-underline', 'font-bold', 'text-[15px]', 'ri-external-link-line', 'ml-1', 'text-[15px]', 'font-normal', 'text-[#D6D6D6]', 'text-[14px]', 'font-thin', 'italic', 'text-[13px]', 'font-normal', 'text-[#D6D6D6]', 'text-[14px]', 'mt-2',];
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
