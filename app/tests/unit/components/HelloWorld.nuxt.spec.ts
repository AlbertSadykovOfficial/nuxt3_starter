// @vitest-environment happy-dom
// Строка выше устанавливает окружение в котором будут запущены тесты,
// В данном случае Нужен Happy Dom, чтоб все корректно отработало 
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import HelloWorld from '../../../pages/tests/components/HelloWorld.vue'

describe('HelloWorld2', () => {
  it('component renders Hello world properly 2', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.text()).toContain('Hello world')
  })
})