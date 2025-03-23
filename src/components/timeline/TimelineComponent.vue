<template>
  <div class="flex flex-col">
    <div class="flex items-center gap-4">
      <div class="flex items-center justify-center w-[41px] h-[41px] border-[1px] border-[#383838] rounded-[6px] text-center">
        <i :class="icon"></i>
      </div>

      <p class="font-bold text-[20px]">{{ title }}</p>
    </div>

    <separator class="bg-[#383838] h-[20px] ml-[20.5px] mb-[-2px]" orientation="vertical"/>

    <div class="flex flex-col gap-5 ml-[13px]">
      <div v-for="(exp, ind) in experience" :key="exp.type">
        <div class="flex gap-5">
            <span class="flex flex-col items-center">
              <i class="ri-progress-8-line text-[15px]"></i>
              <separator
                  class="bg-[#383838] mt-[-1.6px]"
                  :class="ind === experience.length-1 ? 'hidden' : ''"
                  orientation="vertical"
              />
            </span>

          <div class="flex flex-col items-start gap-0">
            <a :href="exp.link"
               target="_blank"
               class="no-underline font-bold text-[15px]"
               :class="exp.link ? 'hover:underline' : ''"
            >
              {{ exp.institution }} <i v-if="exp.link" class="ri-external-link-line ml-1 text-[15px]"></i>
            </a>
            <p class="font-normal text-[#D6D6D6] text-[14px]">{{ exp.type }}</p>
            <p class="font-thin italic text-[13px]">
              <span>{{ exp.start.toLocaleDateString('default', {month: "short", year: "numeric"}) }}</span>
              <span v-if="exp.end">
                - {{ typeof exp.end === 'number' ? 'Present' : exp.end.toLocaleDateString('default', {month: "short", year: "numeric"}) }}
              </span>
            </p>
            <p v-if="exp.description" class="font-normal text-[#D6D6D6] text-[14px] mt-2">{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type {PropType} from "vue";
import type {Experience} from "../../store/experience.ts";
import {Separator} from "../ui/separator";

export default {
  name: 'TimelineComponent',
  components: {Separator},
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
      type: Object as PropType<Array<Experience>>,
      required: true,
    },
    longDates: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
