<template>
  <div class="flex gap-3 justify-center items-center">
    <div class="flex items-center justify-center w-[40px] h-[40px] border-[1px] border-[#383838] rounded-[6px] text-center">
      <i :class="icon"></i>
    </div>

    <div class="font-normal text-[14px]">
      <p class="text-[#9D9D9D]">{{ title }}</p>
      <p style="white-space: preserve-breaks;">{{ content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'social-component',
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    }
  }
}
</script>
