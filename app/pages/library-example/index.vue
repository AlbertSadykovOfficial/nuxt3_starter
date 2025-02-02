<template>
  <div class="grid gap-5 p-5">
    <h1 class="text-4xl font-bold">
      Library
    </h1>
    <div class="flex flex-wrap gap-5 p-5 border-t">
      <NuxtLink
        class="hover:underline"
        to="/library-example/Basic"
      >
        База
      </NuxtLink>
      <NuxtLink
        class="hover:underline"
        to="/library-example/Cards"
      >
        Карточки
      </NuxtLink>
      <NuxtLink
        class="hover:underline"
        to="/library-example/Other"
      >
        Другое
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
</script>
