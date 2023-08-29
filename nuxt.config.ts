// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [],
      link: []
    }
  },
  css: ["@/assets/style/main.scss"],
  vite: {
    build: {
      minify: true,
      cssCodeSplit: true,
    }
  },
  devtools: { enabled: false },
})
