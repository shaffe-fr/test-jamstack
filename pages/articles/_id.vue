<template>
  <article>
    <h1>{{ post.title }}</h1>
    {{ post.body }}
  </article>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    }
  },
  async asyncData({ app, params, payload }) {
    if (payload) {
      return { post: payload }
    } else {
      let posts = await require('~/content/posts.json')
      let post = posts.find(post => post.id === Number(params.id))
      return { post }
    }
  },
  head() {
    return {
      title: this.post.title,
    }
  },
}
</script>
