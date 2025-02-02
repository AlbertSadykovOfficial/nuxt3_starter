// @vitest-environment happy-dom
// Строка выше устанавливает окружение в котором будут запущены тесты,
// В данном случае Нужен Happy Dom, чтоб все корректно отработало
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Button from '../../../../../components/core/Basic/Button/index.vue'

function factory({ props = {}, data = {} }) {
  return mount(Button, {
    props,
    data() {
      return data
    },
  })
}

describe('Кнопка [Button]', () => {
  const wrapper = factory({
    props: {
      color: 'primary',
    },
  })

  it('Должна установить переданный цвет через параметры', async () => {
    expect(wrapper.classes().join(' ')).toContain('text-white bg-orange-500 shadow-orange-500/50 hover:shadow-orange-500/40')
  })

  it('Должна поменять цвет при изменении параметра динамически', async () => {
    await wrapper.setProps({ color: 'success' })
    expect(wrapper.classes().join(' ')).toContain('text-white bg-green-500 shadow-green-500/20 hover:shadow-green-500/40')
  })

  it('Не должна содержать классов цвета, переданного изначально', async () => {
    await wrapper.setProps({ color: 'success' })
    expect(wrapper.classes().join(' ')).not.toContain('text-white bg-orange-500 shadow-orange-500/50 hover:shadow-orange-500/40')
  })

  /*
  it ('Тестирование computed свойства цвета без рендерига компонента', () => {
    console.log(Button, Button.computed)
    expect(Button.computed.buttonColor.call({ color: 'warning' })).toBe('text-white bg-yellow-400 shadow-yellow-400/20 hover:shadow-yellow-400/40')
  })
   */
})
