<template>
  <div>
    ESLint Test
    <div>Var: {{ s }}</div>
  </div>
</template>

<script lang="ts" setup>
// https://eslint.nuxt.com/packages/module
/*
  ESLint Test
  Можно попробовать исправить код, поставить отступы,
  ESLint все исправит по команде npm run lint:fix
*/
const s = 21
console.log('asdsadas')
</script>
