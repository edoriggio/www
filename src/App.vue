<template>
  <div class="flex flex-col mt-[10px] gap-5 md:items-center md:justify-center md:my-[40px] lg:flex-row lg:items-start lg:w-[80%]">
    <sidebar-component/>
    <router-view/>
    <footer-component/>
  </div>
</template>

<script lang="ts">
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue";
import FooterComponent from "@/components/navigation/FooterComponent.vue";

export default {
  name: 'App',
  components: {FooterComponent, SidebarComponent},
}
</script>

<style>
@media (min-width: 1024px) {
  #app {
    display: flex;
    justify-content: center;
  }
}
</style>
