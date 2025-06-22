<template>
  <section v-if="movie">
    <img :src="movie.Poster" :alt="movie.Title" />
    <h1>{{ movie.Title }}</h1>
    <p>{{ movie.Plot }}</p>
    <strong>Rating: {{ movie.imdbRating }}</strong>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movieId = route.params.id
const movie = ref(null)

onMounted(async () => {
  const API_KEY = '9dfbf03b' // ✅ your OMDb API key
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}&plot=full`)
  const data = await res.json()
  movie.value = data
  console.log('Fetched movie:', movie.value)
})
</script>


<style scoped lang="scss">
section {
  max-width: 600px;
  margin: auto;
  padding: 1rem;
  background: white;
  border-radius: 8px;

  img {
    width: 100%;
    border-radius: 8px;
  }

  h1 {
    margin-top: 1rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
  }

  strong {
    display: block;
    margin-top: 1rem;
  }
}
</style>
