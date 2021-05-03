<template>
  <header class="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
    <div class="flex flex-grow justify-evenly max-w-2xl">
      <div v-for="(items, index) in hItems" :key="index">
        <HeaderItem :Title="items.Title" :icon="items.icon"  />
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
        {
          Title: "VERIFIED",
          icon: "outline-badgeCheck-icon",
        },
        {
          Title: "COLLECTIONS",
          icon: "outline-collection-icon",
        },
        {
          Title: "SEARCH",
          icon: "outline-search-icon",
        },
        {
          Title: "ACCOUNT",
          icon: "outline-user-icon",
        },
      ],
    };
  },
};
</script>

<style>
</style>