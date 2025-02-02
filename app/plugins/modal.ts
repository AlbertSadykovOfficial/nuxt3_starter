import type { TModal } from '~/models/Types/TModal'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      modal: <TModal>{},
    },
  }
})
