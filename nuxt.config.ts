// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    devtools: {enabled: true},

    modules: [
      '@pinia/nuxt',
      '@nuxtjs/apollo',
      "@nuxt/image",
      '@nuxtjs/tailwindcss',
    ],
    

    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://api.escuelajs.co/graphql',
            }
        }
    },
})
