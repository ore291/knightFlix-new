<template>
  <div>
    <Header />
    <NavBar />
    <div class="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3" >
      <div v-for="movie in movies.results" :key="movie.id">
        <Thumbnail :movie='movie' />
      </div>   
    </div>
    
   

  </div>
</template>

<script>
import genres from "../../utils";

export default {
  async asyncData({ params, $axios }) {
    // let id = genres.genres.find(x => x.name === params.name).id;
    let url = genres.genres.find(x => x.name === params.name).url;
    // if (id === 0 || 1) {
    //   let url = url;
    // } else {
    //   let url = url.concat(id)
    // }
    // console.log(id);
    // console.log(url)
    const movies = await $axios.$get(
     url || `/trending/movie/week?api_key=${process.env.API_KEY}&language=en-US`
      // `genre/movie/list?api_key=${process.env.API_KEY}&`
    );
    return { movies };
  },
};
</script>

<style>
</style>