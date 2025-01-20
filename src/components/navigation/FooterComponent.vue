<template>
  <div class="flex flex-col items-center bg-[#1E1E1F] border-[1px] border-[#383838] mx-[10px] rounded-2xl py-[20px] px-[20px] gap-6 mb-[85px] md:mb-[45px] md:w-[80%] lg:hidden">
    <div class="flex flex-wrap items-start gap-10">
      <social-component icon="ri-mail-line" title="EMAIL" content="riggie@usi.ch" />
      <social-component icon="ri-map-pin-2-line" title="LOCATION" content="Lugano, CH" />
    </div>

    <separator class="w-[90%] bg-[#383838]" />

    <div class="flex justify-center gap-3 w-[90%] text-[20px]">
      <a class="no-underline" href="https://github.com/edoriggio" target="_blank"><i class="ri-github-fill"></i></a>
      <a class="no-underline" href="https://linkedin.com/in/edoardo-riggio/" target="_blank"><i class="ri-linkedin-fill"></i></a>
      <a class="no-underline" href="https://scholar.google.com/citations?user=WUofafkAAAAJ&hl=en" target="_blank"><i class="ri-graduation-cap-fill"></i></a>
    </div>
  </div>
</template>

<script lang="ts">
import SocialComponent from "@/components/sidebar/SocialComponent.vue";
import {Separator} from "@/components/ui/separator";

export default {
  name: "FooterComponent",
  components: {Separator, SocialComponent}
}
</script>
