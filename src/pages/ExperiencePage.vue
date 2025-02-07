<template>
  <div class="flex flex-col bg-[#1E1E1F] border-[1px] border-[#383838] mx-[10px] rounded-2xl py-[20px] px-[20px] gap-8 md:w-[80%] lg:px-[30px] lg:py-[20px] lg:sticky lg:top-[40px]">
    <navigation-component page="experience"/>

    <exp-timeline-component icon="ri-book-2-line" title="Education" v-model:experience="education" />
    <exp-timeline-component class="mb-[15px]" icon="ri-briefcase-line" title="Experience" v-model:experience="work" />
  </div>
</template>

<script lang="ts">
import NavigationComponent from "../components/navigation/NavigationComponent.vue";
import {mapState} from "pinia";
import {type Experience, useEducationStore} from "../store/experience.js";
import ExpTimelineComponent from "../components/TimelineComponent.vue";

export default {
  name: 'ExperiencePage',
  components: {ExpTimelineComponent, NavigationComponent},
  data() {
    return {
      education: this.getSortedEducation() as Experience[],
      work: this.getSortedWork() as Experience[],
    }
  },
  methods: {
    ...mapState(useEducationStore, ['getSortedEducation', 'getSortedWork'])
  },
}
</script>
