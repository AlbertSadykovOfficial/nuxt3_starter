/*
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  // any custom Vitest config you require

  // You can alternatively set environment: 'nuxt' in your Vitest configuration
  // to enable the Nuxt environment for all tests.
  // environment: 'nuxt'
})
*/

// --- OR ---

import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    // Окружение в котором будет выполнятся тестирование для всех по-умолчанию
    environment: 'happy-dom',
  },
});