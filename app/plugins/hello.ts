/*
  https://nuxt.com/docs/guide/directory-structure/plugins

  Пример (Object Syntax Plugins)
  Плагин автоматически будет загружен из этого каталога
  Но каталоги не поддерживают автоимпорт, их требуется импортровать вручную
  plugins: [
    '~/plugins/bar/baz'
  ]
 */
export default defineNuxtPlugin({
  name: 'my-plugin',
  enforce: 'pre', // or 'post'
  async setup (nuxtApp) {
    // this is the equivalent of a normal functional plugin
  },
  hooks: {
    // You can directly register Nuxt app runtime hooks here
    'app:created'() {
      const nuxtApp = useNuxtApp()
      // do something in the hook
    }
  },
  env: {
    // Set this value to `false` if you don't want the plugin to run when rendering server-only or island components.
    islands: true
  }
})