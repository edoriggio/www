<template>
  <div class="flex flex-col bg-[#1E1E1F] border-[1px] border-[#383838] mx-[10px] rounded-2xl py-[20px] px-[20px] gap-8 md:w-[80%] lg:px-[30px] lg:py-[20px] lg:sticky lg:top-[40px]">
    <navigation-component page="publications"/>

    <timeline-component icon="ri-team-line" title="Conference Papers" v-bind:experience="conferences" />
    <timeline-component icon="ri-profile-line" title="Posters" v-bind:experience="posters"></timeline-component>
    <timeline-component class="mb-[15px]" icon="ri-graduation-cap-line" title="Theses" v-bind:experience="theses" />
  </div>
</template>

<script lang="ts">
import NavigationComponent from "../components/navigation/NavigationComponent.vue";
import TimelineComponent from "../components/timeline/TimelineComponent.vue";
import {mapState} from "pinia";
import {type Experience, useEducationStore} from "../store/experience.ts";

export default {
  name: 'PublicationsPage',
  components: {TimelineComponent, NavigationComponent},
  data() {
    return {
      conferences: this.getSortedPublications()['conferences'] as Experience[],
      posters: this.getSortedPublications()['posters'] as Experience[],
      theses: this.getSortedPublications()['theses'] as Experience[],
    }
  },
  methods: {
    ...mapState(useEducationStore, ['getSortedPublications']),
  }
}
</script>
