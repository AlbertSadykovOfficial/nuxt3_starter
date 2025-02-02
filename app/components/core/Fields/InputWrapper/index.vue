<template>
  <div>
    <label
      v-if="label && label.length"
      class="mb-1 block text-sm text-gray-500 dark:text-gray-300"
      :class="error ? '!text-red-500' : ''"
    >
      {{ label }}
    </label>
    <slot />
    <p
      v-if="subtext && subtext.length"
      class="mt-0.5 text-xs text-gray-400 dark:text-gray-600"
      :class="error ? '!text-red-500' : ''"
    >
      {{ subtext }}
    </p>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'InputWrapper',
})

interface InputWrapperProps {
  label?: string
  subtext?: string
  error?: boolean
}

defineProps<InputWrapperProps>()
</script>
