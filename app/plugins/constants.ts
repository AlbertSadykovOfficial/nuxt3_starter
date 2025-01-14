/*
  https://nuxt.com/docs/guide/directory-structure/plugins

  Плагин автоматически будет загружен из этого каталога
  Но каталоги не поддерживают автоимпорт, их требуется импортровать вручную
  plugins: [
    '~/plugins/bar/baz'
  ]
 */
import * as Constants from '@/constants/'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      CONSTANTS: Constants
    }
  }
})
