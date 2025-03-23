<template>
  <div>
    <p class="font-bold text-[20px]">News</p>

    <div class="flex flex-col gap-3 mt-3 max-[490px]:gap-6">
      <div v-for="newz in news" class="flex items-start gap-3 text-justify text-[#D6D6D6] max-[490px]:flex-col">
        <span class="flex-grow-0 flex-shrink-0 basis-[95px] bg-[#2B2B2C] text-center py-[5px] rounded-[7px] font-normal text-[12px] max-[490px]:basis-[28px] max-[490px]:w-[95px]">
          {{ newz.date.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'}) }}
        </span>

        <p v-html="newz.content"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {mapState} from "pinia";
import {type News, useNewsStore} from "../../store/news.ts";

export default {
  name: 'NewsTimeline',
  data() {
    return {
      news: this.news().sort((a: News, b: News) => b.date.getTime() - a.date.getTime()) as News[],
    }
  },
  methods: {
    ...mapState(useNewsStore, ['news'])
  }
}
</script>
