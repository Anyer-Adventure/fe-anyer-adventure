// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@': '',
    '~': './',
    '@config': './data',
  },
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt'
  ],
})
