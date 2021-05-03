<template>
  <nav class="relative">
    <div
      class="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide"
    >
      <h2
        class="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
        v-for="genre in genres"
        :key="genre.id"
      >
       <nuxt-link :to="`/genre/${genre.name}`">{{genre.name}}</nuxt-link>
      </h2>
    </div>
    <div
      class="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"
    />
    
  </nav>
</template>

<script>
import genres from "../utils";

export default {
  mounted() {
    // this.getIncidents();
    // console.log(process.env.API_KEY)
    // console.log(this.genres);
  },
  data() {
    return {
      genres: genres.genres,
    };
  },
  computed: {},
  methods: {
    // async getGenreMovies(genre) {
    //   let res = await this.$axios.get(
    //     `genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`
    //   );
    //   return this.$router.push({ path: `/genre/${genre}`, params: {res} })
    // },
    async asyncData({ $axios }) {
      const ip = await $axios.$get("http://icanhazip.com");
      return { ip };
    },
  },
};
</script>

<style>
</style>