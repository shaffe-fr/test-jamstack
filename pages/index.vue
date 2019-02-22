<template>
  <section>
    <h1 class="text-center">Les derniers articles</h1>
    <li v-for="post in posts" :key="post.id">
      <nuxt-link
        :to="{ name:'articles-id', params: { id: post.id } }"
      >({{ post.id }}) {{ post.title }}</nuxt-link>
    </li>
  </section>
</template>

<script>
import getPosts from '@/content/posts.json'

export default {
  data() {
    return {
      posts: [],
    }
  },
  // Get data on server before render
  asyncData({ app, params }) {
    let posts = [...getPosts].splice(0, 10)
    return { posts }
  },
  head() {
    return {
      title: 'Accueil',
    }
  },
}
</script>
