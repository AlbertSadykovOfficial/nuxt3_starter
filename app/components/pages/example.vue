<template>
  <div
    @scroll="scroll"
  >
    <div>
      <input
        v-model="filter"
        type="text"
      >
    </div>
    <div
      v-for="item in list"
      :key="item.id"
      class="flex justify-between"
    >
      <div>
        {{ item.name }}
      </div>
      <div>
        <button @click="() => openModal(item)">
          Edit
        </button>
        <button @click="() => copyId(item)">
          Copy Id
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { debounce } from '@/utils/debounce'

/**
 * @typedef TItem
 * @type {object}
 * @property {number | string} id - Идентификатор модели.
 * @property {string} name - Название.
 */
type TItem = {
  id: number | string
  name: string
}

// ======================= //
//           Page          //
// ======================= //
defineOptions({
  name: 'LinksPage',
})

// ======================= //
//        Variables        //
// ======================= //
const { $modal } = useNuxtApp()

/**
 * Модель для редактирования ссылки
 * @type {TItem}
 */
const ItemEdit = ref<TItem | null>(null)

/**
 * Фильтры
 * @type {string}
 */
const filter = ref('')

/**
 * Список ссылок
 * @type {Array<TItem>}
 */
const list = ref([] as TItem[])

// ======================= //
//         Modals          //
// ======================= //
function openModal(item: TItem) {
  $modal['modal'].open()
  ItemEdit.value = {
    ...item,
  }
}

// ======================= //
//        Functions        //
// ======================= //
function getList() {
  return Promise.resolve({ data: { value: [] } })
}
/**
 * Получение списка
 * @async
 */
async function loadList() {
  const { data } = await getList()
  if (data.value) {
    list.value = data.value
  }
}

/**
 * Получение списка с отложкой через 500 мс
 * @function
 * @async
 */
const debouncedLoadList = debounce(loadList, 500)

// ======================= //
//          Utils          //
// ======================= //
/**
 * Копирование идентификатора
 * @param {TItem} O
 * @returns {undefined}
 */
function copyId(O: TItem) {
  console.log(O.id)
}

// ======================= //
//         Events          //
// ======================= //
/**
 * Функция вызова при пролистывании
 * @function
 */
function scroll() {
  console.log('scroll')
}

onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onUpdated(() => {
  console.log('onUpdated')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onRenderTracked(() => {
  console.log('onRenderTracked')
})

onRenderTriggered(() => {
  console.log('onRenderTriggered')
})
onDeactivated(() => {
  console.log('onUnmounted')
})

onActivated(() => {
  console.log('onActivated')
})
onDeactivated(() => {
  console.log('onDeactivated')
})

onServerPrefetch(() => {
  console.log('onServerPrefetch')
})

onErrorCaptured(() => {
  console.log('onErrorCaptured')
})

watch(filter,
  () => debouncedLoadList(),
)

// ======================= //
//          SETUP          //
// ======================= //
loadList()
</script>
