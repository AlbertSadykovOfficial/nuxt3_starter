<template>
  <ClientOnly>
    <!--
      Требуется элемент с указанным id (modals)
      [Находится в app.vue]
    -->
    <Teleport to="#modals">
      <div
        v-if="show"
        :id="modalId"
        class="relative flex justify-center"
      >
        <div
          class="fixed inset-0 z-10 overflow-y-auto bg-black/30"
          role="dialog"
          aria-modal="true"
          @click="() => close()"
        >
          <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              class="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >&#8203;</span>
            <div
              class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle"
              @click.stop
            >
              <slot />
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BaseModal',
})

interface IBaseModalProps {
  modalId?: string
  modelValue?: boolean
}

const props = withDefaults(defineProps<IBaseModalProps>(), {
  modalId: `base-modal-${Math.random()}`,
  modelValue: false,
})

const emit = defineEmits<{
  'open': []
  'close': []
  'update:modelValue': [value: boolean]
}>()

const { $modal } = useNuxtApp()

const model = computed<boolean>(() => props.modelValue)
const show = ref<boolean>(false)

const open = () => {
  show.value = true
}
const close = () => {
  show.value = false
}

if (props.modalId) {
  $modal[props.modalId] = {
    open,
    close,
  }
}

watch(show, (value: boolean) => {
  if (value !== model.value) {
    emit('update:modelValue', show.value)
    if (show.value) {
      emit('open')
    } else {
      emit('close')
    }
  }
})

watch(model, (value: boolean) => {
  if (value !== show.value) {
    show.value = value
  }
})
</script>
