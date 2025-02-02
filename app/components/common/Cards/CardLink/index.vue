<template>
  <div class="relative flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white p-3 max-w-full shadow-none drop-shadow-sm">
    <div class="flex min-w-0 items-center gap-x-3">
      <div class="flex-none rounded-full border border-gray-200 bg-gradient-to-t from-gray-100 p-2">
        <img
          alt="Иконка "
          class="blur-0 rounded-full size-6 sm:size-6"
          draggable="false"
          width="20"
          height="20"
          loading="lazy"
          :src="icon"
          style="color: transparent;"
        >
      </div>
      <div class="min-w-0 overflow-hidden">
        <div class="flex items-center gap-1 sm:gap-2">
          <a
            class="truncate font-semibold text-gray-800 hover:text-black"
            :href="short_link"
            target="_blank"
            rel="noreferrer"
          >
            {{ short_link }}
          </a>
          <div class="flex items-center gap-1 sm:gap-2">
            <button
              class="relative group rounded-full p-1.5 transition-all duration-75 border border-gray-200 bg-gray-50 hover:scale-100 hover:bg-gray-100 active:bg-gray-100"
              type="button"
              @click="(e: Event) => emit('copy', e)"
            >
              <span class="sr-only">Copy</span>
              <Icon
                icon="IconCopy"
                class="w-4 h-4"
              />
            </button>
            <button
              class="group rounded-full border border-gray-200 bg-gray-50 p-1.5 transition-all duration-75 hover:bg-gray-100 focus:outline-none"
              @click="(e: Event) => emit('qr', e)"
            >
              <span class="sr-only">Show QR Code</span>
              <Icon
                icon="IconQrcode"
                class="w-4 h-4"
              />
            </button>
          </div>
        </div>
        <div class="flex items-center gap-1">
          <Icon
            icon="IconCornerDownRight"
            stroke="1.25"
            class="h-4 w-4 text-gray-400"
          />
          <a
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            class="max-w-60 truncate text-sm text-gray-400 underline-offset-4 transition-all hover:text-gray-700 hover:underline sm:max-w-72"
          >
            {{ link }}
          </a>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <div class="block rounded-md border border-gray-200 bg-gray-50 transition-colors hover:bg-gray-100">
        <div class="flex items-center justify-center gap-1 px-1 py-[0.2rem] xs:px-2 sm:px-3">
          <Icon
            icon="IconClick"
            class="h-4 w-4 text-gray-700"
          />
          <div class="flex items-center whitespace-nowrap text-sm text-gray-500">
            {{ click_counter }}
            <!--
              <span class="ml-1 hidden sm:inline-block">нажатий</span>
            -->
          </div>
        </div>
      </div>
      <button
        type="button"
        class="rounded-md border border-white px-1 py-2 transition-all duration-75 hover:bg-gray-50 focus:outline-none focus:ring-0 active:bg-gray-100"
        @click="(e) => emit('edit', e)"
      >
        <span class="sr-only">Edit</span>
        <Icon
          icon="IconDotsVertical"
          class="h-5 w-5 text-gray-500"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TUrl } from '~/models/Types/TUrl'

defineOptions({
  name: 'CardLinkComponent',
})

defineProps<TUrl>()

const emit = defineEmits<{
  qr: [event: Event]
  copy: [event: Event]
  edit: [event: Event]
}>()
</script>
