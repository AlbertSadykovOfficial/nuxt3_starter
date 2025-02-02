<template>
  <input
    v-bind="$attrs"
    class="block w-full text-sm form-input"
    :value="modelValue"
    :class="{ '!border-red-500 focus:ring-red-500': error }"
    @input="input"
  >
</template>

<script setup lang="ts">
defineOptions({
  name: 'InputText',
})

interface InputFieldModel {
  modelValue?: string | number
  error?: boolean
}

withDefaults(defineProps<InputFieldModel>(), {
  modelValue: '',
  error: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const input = function (e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
