// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/apollo',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-viewport',
  ],
  typescript: {
    strict: true,
  },
  plugins: [
    '~/plugins/axios', // Register the Axios plugin
  ],
  css: ['./assets/styles/styles.scss'],
});
