<template>
  <div>
    <Header />
    <NavBar />
    <div class="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3" >
      <div v-for="movie in trendingMovies" :key="movie.id">
        <Thumbnail :movie='movie' />
      </div>   
    </div>
    
  </div>
</template>

<script>
export default {
  mounted() {
    this.getTrendingMovies();
  },
  data() {
    return {
      trendingMovies:  null
    }
  },
  methods: {
    async getTrendingMovies() {
      let res = await this.$axios.get(
        `trending/movie/week?api_key=${process.env.API_KEY}&language=en-US` 
      );
      return  this.trendingMovies = res.data.results;
     
    },
  },
};
</script>

<style>
</style>