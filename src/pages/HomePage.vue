<template>
  <div class="flex flex-col bg-[#1E1E1F] border-[1px] border-[#383838] mx-[10px] rounded-2xl py-[20px] px-[20px] gap-8 md:w-[80%] lg:px-[30px] lg:py-[20px] lg:sticky lg:top-[40px]">
    <navigation-component page="home"/>

    <p class="text-justify text-[#D6D6D6]">
      I'm a PhD candidate in Informatics at Università della Svizzera italiana (<a href="https://usi.ch"
      target="_blank">USI</a>) in Lugano, Switzerland. From August 2024, I am part of the <a
      href="https://design.inf.usi.ch/" target="_blank">DESIGN</a> group – part of the Software Institute (<a
      href="https://si.usi.ch/" target="_blank">SI</a>) – under the supervision of <a
      href="https://www.inf.usi.ch/faculty/pautasso/" target="_blank">Prof. Dr. Cesare Pautasso</a>.
      My PhD research is focused on assessing and strengthening the software supply chain of DevOps environments.
      <br><br>
      In 2022, I obtained a Bachelor's degree in Computer Science at USI, defending my thesis titled "CODI: A
      Conversation Disentanglement Microservice" under the supervision of <a
      href="https://www.inf.usi.ch/faculty/lanza/" target="_blank">Prof. Dr. Michele Lanza</a>. In 2024, I obtained
      a Master's degree in Software and Data Engineering (MSDE) at USI, defending my thesis titled "API Scout: An
      Information Retrieval System for OpenAPI Specifications" under the supervision of
      <a href="https://www.inf.usi.ch/faculty/pautasso/" target="_blank">Prof. Dr. Cesare Pautasso</a>.
    </p>

    <news-timeline/>
  </div>
</template>

<script lang="ts">
import NavigationComponent from "../components/navigation/NavigationComponent.vue";
import NewsTimeline from "../components/timeline/NewsTimeline.vue";

export default {
  name: 'HomePage',
  components: {NewsTimeline, NavigationComponent},
}
</script>
