<template>
  <div class="bottom-0 fixed justify-center left-0 items-center w-full flex flex-row flex-wrap gap-5 navbar py-[20px] lg:relative lg:py-0 lg:w-auto lg:items-start lg:justify-start lg:!border-none lg:!bg-transparent">
    <router-link to="/" class="no-underline"><h1 id="home" class="text-[15px] font-bold menu-button hover:text-[#fff] lg:text-[30px]">About</h1></router-link>
    <router-link to="/experience" class="no-underline"><h1 id="experience" class="text-[15px] font-bold menu-button hover:text-[#fff] lg:text-[30px]">Experience</h1></router-link>
    <router-link to="/service" class="no-underline"><h1 id="service" class="text-[15px] font-bold menu-button hover:text-[#fff] lg:text-[30px]">Service</h1></router-link>
    <router-link to="/publications" class="no-underline"><h1 id="publications" class="text-[15px] font-bold menu-button hover:text-[#fff] lg:text-[30px]">Publications</h1></router-link>
    <router-link to="/projects" class="no-underline"><h1 id="projects" class="text-[15px] font-bold menu-button hover:text-[#fff] lg:text-[30px]">Projects</h1></router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'navigation-component',
  props: {
    page: {
      type: String,
      required: true,
    }
  },
  mounted() {
    let buttons = document.getElementsByClassName('menu-button')

    for (let button of buttons) {
      button.classList.add('text-[#9D9D9D]')
    }

    document.getElementById(this.page)!.classList.remove('text-[#9D9D9D]')
  }
}
</script>

<style scoped>
.navbar {
  background: hsla(240, 1%, 17%, 0.75);
  backdrop-filter: blur(10px);
  border: 1px solid hsl(0, 0%, 22%);
  border-radius: 12px 12px 0 0;
  z-index: 5;
}
</style>
