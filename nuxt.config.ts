import { defineNuxtConfig } from 'nuxt/config'
import vuetify from "vite-plugin-vuetify"

const isSsr = Boolean(process.env.NUXT_SSR)
const gqlTokenStorageName = process.env.GRAPHQL_TOKEN_STORAGE_NAME || 'gql:default'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: isSsr,

  components: [
    {
      path: "~/components",
      pathPrefix: true
    }
  ],

  // TypeScript Configuration
  typescript: {
    strict: true,
  },

  // Include Styles
  css: [
    "vuetify/lib/styles/main.sass",
    "assets/style/app.scss",
    "@mdi/font/css/materialdesignicons.css"
  ],

  // Intilizate Nuxt Modules
  modules: [
    // Doc: https://pinia.vuejs.org/ssr/nuxt.html
    "@pinia/nuxt",
    // Doc: https://nuxt-graphql-client.web.app/getting-started/quick-start
    'nuxt-graphql-client',
    // Doc: https://v8.i18n.nuxtjs.org/getting-started/setup
    '@nuxtjs/i18n',
    // Doc: https://github.com/ivodolenc/nuxt-font-loader
    "nuxt-font-loader",
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        // @ts-ignore
        // Doc: https://vuetifyjs.com/en/getting-started/installation/
        config.plugins.push(vuetify())
      })
    },
  ],

  // Vite Configuration
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },

  // FontLoader Configuration
  fontLoader: {
    external: [
      {
        src: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap",
        family: "Lato",
        class: "font-lato"
      }
    ]
  },

  // Apollo Configuration
  'graphql-client': {
    clients: {
      default: {
        host: `${process.env.GRAPHQL_TARGET}${process.env.GRAPHQL_PATH}` || '',
        token: {
          type: 'Bearer',
          name: process.env.GRAPHQL_TOKEN || 'Authorization',
        },
        tokenStorage: {
          mode: 'cookie',
          name: gqlTokenStorageName,
        },
        schema: './schema.graphql'
      },
    },
  },

  // i18n Configuration
  i18n: {
    baseUrl: process.env.BASE_URL || '',
    strategy: 'prefix_except_default',
    langDir: 'i18n',
    // https://v8.i18n.nuxtjs.org/guide/lazy-load-translations
    locales: [
      {
        code: 'en_US',
        name: 'English',
        files: ['en'],
      },
      {
        code: 'ru_RU',
        name: 'Russian',
        files: ['ru']
      }
    ],
    defaultLocale: process.env.LOCATION_DEFAULT_LOCALISATION_CODE,
    detectBrowserLanguage: false,
    lazy: true,
  },
})
