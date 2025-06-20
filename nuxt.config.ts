// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/global.css"],
  modules: ["@pinia/nuxt"],
  app: {
    head: {
      title: "官方網站",
    },
    baseURL: process.env.NODE_ENV === "production" ? "/OfficalWebSite/" : "/",
    buildAssetsDir: "/static/",
  },
});
