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
        "@nuxt/image",
        '@nuxtjs/tailwindcss',
        "nuxt-viewport"
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
    image: {
        dir: 'assets/images',
    },
})