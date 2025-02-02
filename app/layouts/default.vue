<template>
  <div class="p-5">
    <Header />
    <slot />
  </div>
</template>

<script setup>
import Header from '~/components/layouts/Header/index.vue'
</script>
