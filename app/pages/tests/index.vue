<template>
  <div>
    <h1>Tests</h1>
    <form>
      <input
        v-model="email"
        id="email"
        type="text"
        name="email"
        data-qa="input-email"
      >
      <div>
        <input
          v-model="password"
          id="password"
          type="password"
          name="password"
          data-qa="input-password"
        />
        <PasswordCorrectBanner
          v-if="passwordLengthCorrect"
          data-qa="password-length-correct-banner"
        />
      </div>
      <SubmitButton
        data-qa="submit-form-button"
        :disabled="!passwordLengthCorrect"
      />
    </form>
  </div>
</template>
<script setup lang="ts">
import SubmitButton from './components/SubmitButton.vue'
import PasswordCorrectBanner from './components/PasswordCorrectBanner.vue'

const email = ref('')
const password = ref('')

const passwordLengthCorrect = computed(() => (password.value.length > 8))
</script>
