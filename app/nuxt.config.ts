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
    // https://eslint.nuxt.com/packages/module
    ['@nuxt/eslint', {
      config: {
        // Форматирование стилей
        // Cм. дефолтные настройки ESLint
        // https://eslint.style/guide/config-presets#configuration-factory
        stylistic: true,
      },
    }],
  ],

  /* --- Typescript Module --- */
  // https://nuxt.com/docs/guide/concepts/typescript
  typescript: {
    // Показывать ошибки в Runtime
    typeCheck: true,
    // Строгий режим
    // Можно выключить при миграции кодовой базы на Typescript
    strict: true,
  }, /* --- Typescript Module --- */
})
