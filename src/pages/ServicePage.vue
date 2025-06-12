<template>
  <div class="flex flex-col bg-[#1E1E1F] border-[1px] border-[#383838] mx-[10px] rounded-2xl py-[20px] px-[20px] gap-8 md:w-[80%] lg:px-[30px] lg:py-[20px] lg:sticky lg:top-[40px]">
    <navigation-component page="service"/>

    <exp-timeline-component icon="ri-graduation-cap-line" title="Co-supervision" v-model:experience="supervision" />
    <exp-timeline-component class="mb-[15px]" icon="ri-presentation-fill" title="Teaching Assistant" v-model:experience="teaching" />
  </div>
</template>

<script lang="ts">
import NavigationComponent from "../components/navigation/NavigationComponent.vue";
import {mapState} from "pinia";
import {type Experience, useEducationStore} from "../store/experience.js";
import ExpTimelineComponent from "../components/timeline/TimelineComponent.vue";

export default {
  name: 'ServicePage',
  components: {ExpTimelineComponent, NavigationComponent},
  data() {
    return {
      teaching: this.getSortedTeaching() as Experience[],
      supervision: this.getSortedSupervision() as Experience[],
    }
  },
  methods: {
    ...mapState(useEducationStore, ['getSortedTeaching', 'getSortedSupervision'])
  },
}
</script>
