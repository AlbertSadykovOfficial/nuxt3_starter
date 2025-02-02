// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    // https://eslint.nuxt.com/packages/module
    ['@nuxt/eslint', {
      config: {
        // Форматирование стилей
        // Cм. дефолтные настройки ESLint
        // https://eslint.style/guide/config-presets#configuration-factory
        stylistic: true,
      },
    }],

    // https://nuxt.com/modules/pinia
    '@pinia/nuxt',

    // https://nuxt.com/docs/getting-started/testing
    // Добавить Vitest integration в Nuxt DevTools для добавления тестов в development
    '@nuxt/test-utils/module',

    // https://nuxt.com/modules/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /* --- Typescript Module --- */

  // Auto import components: https://go.nuxtjs.dev/config-components
  // Компоненты в указанных директориях будут видны в глобальном пространстве
  components: [
    '~/components/core/Basic',
    '~/components/core/Fields',
    '~/components/core/Modals',
  ],

  devtools: {
    enabled: true,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // tailwind
    '@/assets/css/tailwind/index.css',
  ],
  compatibilityDate: '2024-11-01',

  vite: {
    // Удаление консоли из билда
    esbuild: {
      drop: ['debugger'],
      pure: ['console.log', 'console.error', 'console.warn', 'console.debug', 'console.trace'],
    },
  },

  /* --- Typescript Module --- */
  // https://nuxt.com/docs/guide/concepts/typescript
  typescript: {
    // Показывать ошибки в Runtime
    typeCheck: true,
    // Строгий режим
    // Можно выключить при миграции кодовой базы на Typescript
    strict: true,
  } })
