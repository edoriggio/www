<template>
  <div class="flex flex-wrap items-center bg-[#1E1E1F] border-[1px] border-[#383838] mx-[10px] rounded-2xl py-[20px] px-[20px] gap-8 md:w-[80%] lg:w-[250px] lg:flex-col lg:py-[40px] lg:sticky lg:top-[40px]">
    <div class="flex flex-wrap items-center lg:flex-col gap-8">
      <img class="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-[21px]" src="../../assets/images/pro-pic.jpg" alt="profile picture">

      <div class="flex flex-col gap-3 lg:items-center">
        <p class="text-2xl font-medium">Edoardo Riggio</p>
        <span class="bg-[#2B2B2C] px-[15px] py-[5px] w-fit rounded-[7px] font-normal text-[12px]">PhD Student @ USI</span>
      </div>
    </div>

    <separator class="hidden lg:w-[90%] lg:bg-[#383838] lg:block"/>

    <div class="hidden lg:flex lg:flex-col lg:items-start lg:gap-6">
      <social-component icon="ri-mail-line" title="EMAIL" content="riggie@usi.ch" />
      <social-component icon="ri-map-pin-2-line" title="LOCATION" :content="'Via la Santa 1\nLugano, CH'" />
      <social-component icon="ri-building-line" title="OFFICE" content="D3.13" />
    </div>

    <div class="hidden lg:flex lg:justify-center lg:gap-3 lg:w-[90%] lg:text-[20px]">
      <a class="no-underline" href="https://github.com/edoriggio" target="_blank"><i class="ri-github-fill"></i></a>
      <a class="no-underline" href="https://linkedin.com/in/edoardo-riggio/" target="_blank"><i class="ri-linkedin-fill"></i></a>
      <a class="no-underline" href="https://scholar.google.com/citations?user=WUofafkAAAAJ&hl=en" target="_blank"><i class="ri-graduation-cap-fill"></i></a>
    </div>
  </div>
</template>

<script lang="ts">
import {Separator} from "../ui/separator";
import SocialComponent from "../sidebar/SocialComponent.vue";

export default {
  name: 'SidebarComponent',
  components: {SocialComponent, Separator}
}
</script>
