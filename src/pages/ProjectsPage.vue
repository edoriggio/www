<template>
  <div class="flex flex-col bg-[#1E1E1F] border-[1px] border-[#383838] mx-[10px] rounded-2xl py-[20px] px-[20px] gap-8 md:w-[80%] lg:px-[30px] lg:py-[20px] lg:sticky lg:top-[40px]">
    <navigation-component page="projects"/>

    <div class="flex flex-wrap gap-4 mb-[-10px]">
      <button
          v-for="category in categories"
          :id="category.toLowerCase().replace(/\s/g, '-')"
          class="categories text-[18px] font-medium menu-button hover:text-[#fff]"
          @click="filterProjects(category)"
      >
        {{ category }}
      </button>
    </div>

    <div class="grid mb-[15px] max-[500px]:grid-cols-1 max-[1320px]:grid-cols-2 min-[1321px]:grid-cols-3 min-[2000px]:grid-col-4 gap-7">
      <router-link v-for="project in projects" :key="project.name" :to="`/projects/${project.image}`" class="flex flex-col gap-3 no-underline link">
        <div class="overflow-hidden rounded-[14px]">
          <img :src="getImage(project.image)" alt="project image" class="rounded-[14px] transition-all">
        </div>

        <div class="flex flex-col gap-0 ml-[10px]">
          <p class="font-bold text-[15px]">{{ project.name }}</p>
          <p class="font-normal text-[#9D9D9D] text-[14px]">{{ project.category }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {mapState} from "pinia";
import NavigationComponent from "../components/navigation/NavigationComponent.vue";
import {type Project, useProjectsStore} from "../store/projects.ts";

export default {
  name: 'ProjectsPage',
  components: {NavigationComponent},
  data() {
    return {
      projects: this.getSortedProjects() as Project[],
      categories: this.getCategories() as string[]
    }
  },
  mounted() {
    document.getElementById('all')!.classList.add('text-[#fff]')
    document.getElementById('all')!.innerHTML = `All (${this.projects.length})`
  },
  methods: {
    getImage(filename: string) {
      return new URL(`/src/assets/projects/pictures/${filename}.png`, import.meta.url).href
    },
    filterProjects(category: string) {
      let categoryClean = category.toLowerCase().replace(/\s/g, '-')
      let buttons = document.getElementsByClassName('categories')

      for (let button of buttons) {
        button.classList.add('text-[#9D9D9D]')
        button.classList.remove('text-[#fff]')
        button.innerHTML = button.innerHTML.replace(/\(.*\)/g, '')
      }

      let el = document.getElementById(categoryClean)!

      el.classList.add('text-[#fff]')

      this.projects = this.getProjectsByCategory()(category)

      el.innerHTML = `${category} (${category === 'All' ? this.projects.length : this.projects.filter(project => project.category === category).length})`
    },
    ...mapState(useProjectsStore, ['getSortedProjects', 'getCategories', "getProjectsByCategory"])
  }
}
</script>

<style scoped>
.link:hover div>img {
  transform: scaleX(1.15) scaleY(1.15);

}

.link:after div>img {
  transform: scaleX(1) scaleY(1);
}
</style>
