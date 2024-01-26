// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'nuxt3-vuex-module',
  ],

  i18n: {
    lazy: true,
    langDir: "language/",
    strategy: "prefix",
    locales: [
      { code: "ar-AE", iso: "ar-AE", file: "ar-AE.js", name: "عربي" },
      { code: "en-US", iso: "en-US", file: "en-US.js", name: "English"}
    ],
     defaultLocale: 'en-US',
  }

})
