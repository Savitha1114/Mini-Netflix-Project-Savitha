<template>
  <section class="movie-grid">
    <article
      v-for="movie in movies"
      :key="movie.imdbID"
      @click="goToDetails(movie.imdbID)"
    >
      <img :src="movie.Poster" :alt="movie.Title" />
      <h2>{{ movie.Title }}</h2>
    </article>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const movies = ref([])

const goToDetails = (id) => {
  router.push(`/movie/details/${id}`)
}

onMounted(async () => {
  const API_KEY = '9dfbf03b'
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=batman`)
  const data = await res.json()
  movies.value = data.Search || []
})
</script>

<style scoped lang="scss">
/* your responsive SCSS from earlier */
</style>
