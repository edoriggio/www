<template>
  <div class="flex flex-col bg-[#1E1E1F] border-[1px] border-[#383838] mx-[10px] rounded-2xl py-[20px] px-[20px] gap-8 md:w-[80%] lg:px-[30px] lg:py-[20px] lg:sticky lg:top-[40px]">
    <navigation-component page="projects" />

    <div class="box-top flex flex-col gap-1.5 bg-[#2B2B2C] rounded-2xl px-[20px] py-[18px]">
      <div class="text-[14px] w-full flex">
        <div class="flex-none w-[110px] self-stretch text-[#9D9D9D]"><p v-if="project.language">Language</p></div>
        <div><p v-if="project.language">{{ project.language }}</p></div>
      </div>

      <div class="text-[14px] w-full flex">
        <div class="flex-none w-[110px] self-stretch text-[#9D9D9D]"><p>Type</p></div>
        <div class="break-all"><p>{{ project.category }}</p></div>
      </div>

      <div class="text-[14px] w-full flex">
        <div class="flex-none w-[110px] self-stretch text-[#9D9D9D]"><p>Year</p></div>
        <div class="break-all"><p>{{ project.date.getFullYear() }}</p></div>
      </div>

      <div class="text-[14px] w-full flex">
        <div class="flex-none w-[110px] self-stretch text-[#9D9D9D]"><p v-if="project.github">Repository</p></div>
        <div class="break-all">
          <a :href="project.github" target="_blank" v-if="project.github" class="no-underline hover:underline">
            {{ project.github.substring(19) }}
            <i class="ri-external-link-line ml-1 text-[15px]"></i>
          </a>
        </div>
      </div>

      <div class="text-[14px] w-full flex">
        <div class="flex-none w-[110px] self-stretch text-[#9D9D9D]"><p v-if="project.link">Link</p></div>
        <div class="break-all">
          <a :href="project.link" target="_blank" v-if="project.link" class="no-underline hover:underline">
            {{ project.link.substring(8) }}
            <i class="ri-external-link-line ml-1 text-[15px]"></i>
          </a>
        </div>
      </div>

      <div class="text-[14px] w-full flex">
        <div class="flex-none w-[110px] self-stretch text-[#9D9D9D]"><p v-if="project.doi">DOI</p></div>
        <div class="break-all">
          <a :href="project.doi" target="_blank" v-if="project.doi" class="no-underline hover:underline">
            {{ project.doi.substring(16) }}
            <i class="ri-external-link-line ml-1 text-[15px]"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-6 mx-[25px]" :class="related.length == 0 ? 'mb-[25px]' : ''">
      <img class="w-[80px] border-[1px] border-[#383838] rounded-full p-1" :src="getImage(project.image, 'icons')" alt="project logo">

      <div class="flex flex-col gap-3">
        <p class="font-bold text-[27px]">{{ project.name }}</p>
        <p style="white-space: preserve-breaks;" class="font-normal text-[#D6D6D6] text-[16px] text-justify">{{ project.description }}</p>
      </div>

      <img :src="getImage(project.image, 'pictures')" alt="">

      <div v-if="related.length > 0" class="flex flex-col gap-4 mb-[15px] mt-[15px]">
        <p class="font-bold text-[20px]">Related Projects</p>

        <div class="flex flex-wrap gap-8">
          <router-link
              v-for="proj in related"
              :key="proj.name"
              :to="proj.image"
              class="flex no-underline items-center gap-3 w-fit"
          >
            <img class="w-[60px] border-[1px] border-[#383838] rounded-full p-1" :src="getImage(proj.image, 'icons')" alt="project logo">

            <div class="flex flex-col">
              <p class="font-bold text-[15px]">{{ proj.name }}</p>
              <p class="font-normal text-[#9D9D9D] text-[14px]">{{ proj.date.getFullYear() }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavigationComponent from "../components/navigation/NavigationComponent.vue";
import {mapState} from "pinia";
import {useProjectsStore} from "../store/projects";
import type {Project} from "../store/projects";

export default {
  name: 'ProjectPage',
  components: {NavigationComponent},
  data() {
    return {
      project: this.getProject()(this.$route.params.name) as Project,
      related: [] as Project[],
    }
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    this.related = this.getProjectsByCategory()(this.project.category).filter(project => project.name != this.project.name)
  },
  watch: {
    $route (to) {
      this.project = this.getProject()(to.params.name)
      this.related = this.getProjectsByCategory()(this.project.category).filter(project => project.name != this.project.name)
    }
  },
  methods: {
    getImage(filename: string, where: string) {
      return new URL(`/src/assets/projects/${where}/${filename}.png`, import.meta.url).href
    },
    ...mapState(useProjectsStore, ["getProject", "getProjectsByCategory"]),
  }
}
</script>

<style scoped>
.wrap {
  word-break: break-word;
}
</style>

<!-- hihihuhuhahahoho -->
