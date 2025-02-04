import type { PropType } from "vue";
import type { Experience } from "@/store/experience.js";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: true;
    };
    experience: {
        type: PropType<Array<Experience>>;
        required: true;
    };
    longDates: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: true;
    };
    experience: {
        type: PropType<Array<Experience>>;
        required: true;
    };
    longDates: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    longDates: boolean;
}, {}, {
    Separator: any;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
