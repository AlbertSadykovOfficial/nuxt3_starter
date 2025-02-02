<template>
  <button
    class="middle center rounded-lg py-3 px-6 font-sans text-xs font-bold shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    :class="buttonColor"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'ButtonComponent',
})

interface Props {
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
})

const buttonColor = computed(() => (
  {
    primary: 'text-white bg-orange-500 shadow-orange-500/50 hover:shadow-orange-500/40',
    warning: 'text-white bg-yellow-400 shadow-yellow-400/20 hover:shadow-yellow-400/40',
    success: 'text-white bg-green-500 shadow-green-500/20 hover:shadow-green-500/40',
    danger: 'text-white bg-red-500 shadow-red-500/20 hover:shadow-red-500/40',
    white: 'text-gray-900 bg-white shadow-gray-900/20 hover:shadow-gray-900/40',
    black: 'text-white bg-gray-900 shadow-gray-900/20 hover:shadow-gray-900/40',
  }[props.color]
))
</script>
