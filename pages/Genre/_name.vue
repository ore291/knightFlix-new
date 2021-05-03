<template>
  <div>
    <Header />
    <NavBar />
    {{this.$route.params.name}}
   

  </div>
</template>

<script>
import genres from "../../utils";

export default {
  async asyncData({ params, $axios }) {
    const id = genres.genres.find(x => x.name === params.name).id;
    let url = genres.genres.find(x => x.name === params.name).url;
    if (id === 0 || 1) {
      let url = url;
    } else {
      let url = `genres.genres.find(x => x.name === params.name).url${id}`
    }
    console.log(url)
    const movies = await $axios.$get(
     url
      // `genre/movie/list?api_key=${process.env.API_KEY}&`
    );
    return { movies };
  },
};
</script>

<style>
</style>