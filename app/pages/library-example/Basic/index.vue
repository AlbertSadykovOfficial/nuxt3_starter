<template>
  <h1
    class="text-4xl font-bold p-5"
    @click="() => $router.push('/library-example')"
  >
    Library
  </h1>
  <!-- BUTTONS -->
  <section class="grid gap-4 p-5 border-t">
    <h2 class="text-2xl font-bold">
      Кнопки
    </h2>
    <div class="flex flex-wrap gap-5">
      <Button color="standart">
        Кнопка
      </Button>
      <Button color="primary">
        Кнопка
      </Button>
      <Button color="warning">
        Кнопка
      </Button>
      <Button color="success">
        Кнопка
      </Button>
      <Button color="danger">
        Кнопка
      </Button>
      <Button color="white">
        Кнопка
      </Button>
      <Button color="black">
        Кнопка
      </Button>
    </div>
  </section>
  <!-- FIELDS -->
  <section class="grid gap-4 p-5 border-t">
    <h2 class="text-2xl font-bold">
      Fields
    </h2>
    <div>
      <h3 class="text-xl font-bold">
        InputField
      </h3>
      <div class="flex flex-wrap gap-2 max-w-xs">
        <InputWrapper
          label="Поле ввода"
          subtext="Текст снизу"
        >
          <InputField
            v-model="text"
            placeholder="https://example.com/"
            @focus="displayEvent"
            @keyup.enter="displayEvent"
          />
        </InputWrapper>
        <InputField
          :model-value="text"
          placeholder="https://example.com/"
          :error="text.length > 6"
          @update:model-value="v => text = v"
          @focus="displayEvent"
          @keyup.enter="displayEvent"
        />
        <div>[{{ text }}]</div>
      </div>
    </div>
  </section>
  <!-- MODALS -->
  <section class="grid gap-4 p-5 border-t">
    <h2 class="text-2xl font-bold">
      Модальные окна
    </h2>
    <div class="flex flex-wrap gap-5">
      <BaseModal
        v-model="show"
        :modal-id="modalId"
        title="Модальное окно"
        @close="() => show = false"
      >
        <h3
          id="modal-title"
          class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
        >
          Invite your team
        </h3>
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Your new project has been created. Invite your
          team to collaborate on this project.
        </p>
        <div class="mt-4 flex flex-col sm:flex-row sm:items-center sm:-mx-2 gap-4">
          <Button
            color="white"
            class="w-full"
            @click="() => show = false"
          >
            Закрыть (v-model)
          </Button>
          <Button
            color="black"
            class="w-full"
            @click="() => closeModal()"
          >
            Закрыть (plugin)
          </Button>
        </div>
      </BaseModal>
      <Button @click="() => show = !show">
        Open Modal (v-model)
      </Button>
      <Button @click="() => openModal()">
        Open Modal (plugin)
      </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
// ======================= //
//         Input           //
// ======================= //
const text = ref<string>('Hello')

const displayEvent = function (e: Event) {
  console.log(e)
}

// ======================= //
//          Modals         //
// ======================= //
const { $modal } = useNuxtApp()

const show = ref<boolean>(false)
const modalId = 'test-modal'

const openModal = function () {
  $modal[modalId].open()
}
const closeModal = function () {
  $modal[modalId].close()
}
</script>
