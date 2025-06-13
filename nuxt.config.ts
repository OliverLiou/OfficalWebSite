// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/global.css"],
  modules: ["@pinia/nuxt"],
  app: {
    head: {
      title: '眾饕企業社官方網站'
    }
  }
});
