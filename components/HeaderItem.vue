<template>
  <div class="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
    <component :is="icon" class="h-8 mb-1 group-hover:animate-bounce" />
    <p
      class="tracking-widest opacity-0 group-hover:opacity-100 active:text-red-300 items-center"
    >
      {{ Title }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["Title", "icon"],
};
</script>

<style>
</style>