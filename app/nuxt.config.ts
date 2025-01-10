// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: {
    enabled: true
  },

  vite: {
    // Удаление консоли из билда
    esbuild: {
      drop: ['debugger'],
      pure: ['console.log', 'console.error', 'console.warn', 'console.debug', 'console.trace'],
    }
  },

  modules: [
    ['@nuxt/eslint', {
      config: {
        stylistic: true,
      },
    }],
  ],

  /* --- Typescript Module --- */
  typescript: {
    // Показывать ошибки в Runtime
    typeCheck: true,
    // Строгий режим
    // Можно выключить при миграции кодовой базы на Typescript
    strict: true,
  }, /* --- Typescript Module --- */
})
