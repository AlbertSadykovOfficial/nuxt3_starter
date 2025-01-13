/*
  https://nuxt.com/docs/guide/directory-structure/plugins

  Плагин автоматически будет загружен из этого каталога
  Но каталоги не поддерживают автоимпорт, их требуется импортровать вручную
  plugins: [
    '~/plugins/bar/baz'
  ]
 */
import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import * as Constants from '@/constants/'

export default defineNuxtPlugin((_, inject) => {
  inject('CONSTANTS', Constants)
})