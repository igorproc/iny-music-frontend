import { defineNuxtPlugin } from 'nuxt/app'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { DARK_THEME, dark } from '~/utils/themes'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    // add theme
    theme: {
      defaultTheme: DARK_THEME,
      themes: {
        dark,
      },
    },
  })
  app.vueApp.use(vuetify)
})
