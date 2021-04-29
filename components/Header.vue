<template>
  <header class="sm:flex items-center justify-between">
    <div class="flex ">
      <div v-for="(items, index) in hItems" :key="index">
        <HeaderItem :Title="items.Title" :icon="items.icon" class="px-5" />
      </div>
    </div>
    <nuxt-img
      class="object-contain"
      src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
      width="200"
      height="100"
    ></nuxt-img>
  </header>
</template>

<script>
export default {
  data() {
    return {
      hItems: [
        {
          Title: "HOME",
          icon: "outline-home-icon",
        },
        {
          Title: "TRENDING",
          icon: "outline-lightningBolt-icon",
        },
      ],
    };
  },
};
</script>

<style>
</style>