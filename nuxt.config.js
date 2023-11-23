import { defineNuxtConfig } from 'nuxt/config'

import { eslint } from './config/eslint'
import { pwa } from './config/pwa'
import { GraphQlClient } from './config/GraphQlClient'
import { googleFonts } from './config/fonts'
import { nuxtIcon } from './config/icons'

export default defineNuxtConfig({
  ssr: !!process.env.IS_SSR,
  srcDir: 'app',

  runtimeConfig: {
    public: {
      env: {
        isServerRendered: process.env.IS_SSR,
        appName: process.env.APP_NAME,
        appDescription: process.env.APP_DESCRIPTION,
        buildMode: process.env.BUILD_MODE
      }
    }
  },

  modules: [
    // https://vueuse.org/guide/
    '@vueuse/nuxt',
    // https://pinia.vuejs.org/core-concepts/
    '@pinia/nuxt',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    // https://github.com/nuxt-modules/eslint
    '@nuxtjs/eslint-module',
    // https://v8.i18n.nuxtjs.org/guide/routing-strategies
    '@nuxtjs/i18n',
    // https://github.com/vite-pwa/nuxt
    '@vite-pwa/nuxt',
    // https://github.com/diizzayy/nuxt-graphql-client
    'nuxt-graphql-client',
    // https://google-fonts.nuxtjs.org/getting-started/options
    '@nuxtjs/google-fonts',
    // https://nuxt.com/modules/icon
    'nuxt-icon',
    // https://html-validator.nuxtjs.org/
    '@nuxtjs/html-validator'
  ],

  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true
  },

  css: ['~/assets/style/app.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/assets/style/source/ui/_index.scss";
          `
        }
      }
    }
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '-theme',
    storageKey: 'selected-theme'
  },

  devServer: {
    port: Number(process.env.APP_PORT) || 3001
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: []
    }
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: process.env.APP_DESCRIPTION },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
      ]
    }
  },

  eslint,
  pwa,
  'graphql-client': GraphQlClient,
  i18n: {
    legacy: true,
    lazy: true,

    baseUrl: process.env.BASE_URL || '/',
    langDir: 'locales',
    defaultLocale: process.env.DEFAULT_SELECTED_LOCALE,
    detectBrowserLanguage: true,

    // https://v8.i18n.nuxtjs.org/guide/lazy-load-translations
    locales: [
      {
        code: 'en_US',
        name: 'English',
        files: ['en']
      },
      {
        code: 'ru_RU',
        name: 'Русский',
        files: ['ru']
      }
    ]
  },
  googleFonts,
  // Icons-list: https://icones.js.org/
  nuxtIcon,

  devtools: {
    enabled: process.env.BUILD_MODE !== 'production'
  }
})
