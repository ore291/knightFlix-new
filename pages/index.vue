<template>
  <div>
    <Header />
    <NavBar />
  </div>
</template>

<script>
export default {
  mounted() {
    this.getTrendingMovies();
  },
  methods: {
    async getTrendingMovies() {
      let res = await this.$axios.get(
        `trending/movie/week?api_key=${process.env.API_KEY}&language=en-US`
      );
      return console.log(res);
    },
  },
};
</script>

<style>
</style>