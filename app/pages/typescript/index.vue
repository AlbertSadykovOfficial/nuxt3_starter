<template>
  <div>
    <div>TypeScript Page</div>
    <hr>
    <button @click="log">
      {{ msg }}
    </button>
    <hr>
    ToDoList:
    <div
      v-for="(item, index) in fetchedTodos"
      :key="`${index}`"
    >
      {{ index }}: {{ item }}
    </div>
    <button @click="fillToDo">
      Fill ToDo
    </button>
  </div>
</template>

<script lang="ts" setup>
// https://nuxt.com/docs/guide/concepts/typescript
interface ToDo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const fetchedTodos = ref<ToDo[]>([])

const msg = 'Print Hello To Console!'

// functions
function log() {
  console.log(msg)
}

function fillToDo() {
  fetchedTodos.value = [
    {
      userId: 1,
      id: 1,
      title: 'string',
      completed: false,
    },
    {
      userId: 2,
      id: 3,
      title: 'string2',
      completed: true,
    },
  ]
}

/* Typescript Error
fetchedTodos.value = 'hello'
function fillToDo () {
  fetchedTodos.value = [
    {
      userId: '1',
      id: '1',
      title: 123,
      completed: 'safa'
    }
  ]
}
*/
</script>
