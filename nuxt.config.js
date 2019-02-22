const posts = require('./content/posts.json')
module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'JAMStack',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'A super JAMStack'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  css: [
    '@/assets/sass/general.scss'
  ],
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** List modules Nuxt
   */
  modules: [
    '@nuxtjs/axios'
  ],
  /**
  ** Configuration Axios
  */
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com'
  },
    /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Generate configuration
  */
  generate: {
    routes: function () {
      var baseRoute = [
        '/'
      ]
      var articles = posts.map(function (post) {
        return {
          route: '/articles/' + post.id,
          payload: post
        }
      })
      return baseRoute.concat(articles)
    }
  }
}
