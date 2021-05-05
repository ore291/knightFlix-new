<template>
  <div class="cursor-pointer group p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
    <nuxt-img :src="imgUrl" width="1920" height="1080" fit="outside" class=""></nuxt-img>
    <div class="p-2">
      <p class="truncate max-w-md ">{{movie.overview}}</p>
      <h2 class="mt-1 text-white text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">{{ movie.title || movie.original_name}}</h2>
      <p class="flex opacity-0 group-hover:opacity-100">
        {{movie.media_type && `${movie.media_type} • `}}{{ }}
        {{movie.release_date || movie.first_air_date}} • {{ }}
        <outline-thumbUp-icon class="h-5 mx-2" />{{movie.vote_count}}
        </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    imgUrl() {
      return (
        `https://image.tmdb.org/t/p/original/${this.movie.backdrop_path}` || `https://image.tmdb.org/t/p/original/${this.movie.poster_path}`
      );
    },
  },
  props: ["movie"],
};
</script>

<style>
</style>