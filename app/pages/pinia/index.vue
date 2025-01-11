<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

counter.count++
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 })
// or using an action instead
counter.increment()

function increment () {
  counter.increment()
}

function decrement () {
  counter.decrement()
}
</script>

<template>
  <!-- Access the state directly from the store -->
  <div>Current Count: {{ counter.count }}</div>
  <button @click="decrement">-</button>
  <button @click="increment">+</button>
</template>