import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@primevue/nuxt-module',
    '@vueuse/motion/nuxt'
  ],
  css: [
    '~/assets/css/styles.scss',
    '~/assets/css/tailwind.css',
    '~/assets/css/main.css',
    'primeicons/primeicons.css'
  ],
  components: [
    {
      path: '~/domains',
      prefix: 'Domains',
      pathPrefix: true
    },
    '~/components'
  ],
  primevue: {
    importTheme: { from: '~/assets/themes/my-theme/theme.ts' },
    options: {
      unstyled: false
    },
    autoImport: true,
  }
})
