import { describe, it, expect, mountSuspended } from '@/tests/utils/index'

import TestPageComponent from '~/pages/tests/index.vue'

function factory ({ props = {}, data = {} }) {
  return mountSuspended(TestPageComponent, {
    props
  })
}

describe('[TestsPage] - Страница тестирования формы', async () => {
  const wrapper = await factory({})

  const banner = wrapper.find('div[data-qa="password-length-correct-banner"]')
  const submitButton = wrapper.find('button[data-qa="submit-form-button"]')

  it('(Invalid) Проверка пароля 1234567', async () => {
    await wrapper.find('input[data-qa="input-password"]').setValue("1234567")

    expect(banner.exists()).toBe(false)
    expect(submitButton.html()).toContain('disabled=""')
  })

  it('(Valid) Проверка пароля 123456789', async () => {
    await wrapper.find('input[data-qa="input-password"]').setValue("123456789")
    const bannerAfter = wrapper.find('div[data-qa="password-length-correct-banner"]')

    expect(bannerAfter.exists()).toBe(true)
    expect(bannerAfter.text()).toBe('Password Length Correct! You can Submit Form')

    expect(submitButton.html()).not.toContain('disabled="')
  })
})