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
.movie-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;

  article {
    width: 200px;
    background: #fff;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.2s;
  }

  article:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    border-radius: 5px;
  }
}
</style>
