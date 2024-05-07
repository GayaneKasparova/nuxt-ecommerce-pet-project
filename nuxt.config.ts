// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    devtools: {enabled: true},

    modules: [
      '@pinia/nuxt',
      '@nuxtjs/apollo',
      "@nuxt/image",
      '@nuxtjs/tailwindcss',
    ],
    css: [
        './assets/styles/styles.scss'
    ],
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://api.escuelajs.co/graphql',
            }
        }
    },
})
