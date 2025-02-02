<template>
  <h1
    class="text-4xl font-bold p-5"
    @click="() => $router.push({ name: 'library-example' })"
  >
    Library
  </h1>
  <section class="grid gap-4 p-2 md:p-5 border-t">
    <h2 class="text-2xl font-bold">
      Карточки
    </h2>
    <div class="grid grid-cols-1 gap-4">
      <CardLink
        :id="UrlLink.id"
        :name="UrlLink.name"
        :link="UrlLink.link"
        :short_link="UrlLink.short_link"
        :icon="UrlLink.icon"
        :click_counter="UrlLink.click_counter"
        :comment="UrlLink.comment"
        :created_at="UrlLink.created_at"
        :updated_at="UrlLink.updated_at"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TUrl } from '~/models/Types/TUrl'

import CardLink from '~/components/common/Cards/CardLink/index.vue'

definePageMeta({
  layout: false,
})

const UrlLink: TUrl = {
  id: 2,
  name: 'Name2',
  link: 'dark-board.web.app/root',
  short_link: 'urilink.ru/GhQoYx2',
  icon: 'https://dark-board.web.app/favicon.ico',
  click_counter: '186',
  comment: '',
  created_at: '2025-01-16 09:30:15',
  updated_at: '2025-01-16 09:30:15',
}
</script>
