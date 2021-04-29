<template>
  <div class="group flex flex-col cursor-pointer hover:text-white">
    <component :is="icon"  class="w-10 h-10 group-hover:animate-bounce" />
    <p class="opacity-0 group-hover:opacity-100 active:text-red-300">{{ Title }}</p>
  </div>
</template>

<script>
export default {
  props: ["Title", "icon"],
};
</script>

<style>
</style>