// import { shallowMount } from '@vue/test-utils'
import { it, describe, expect, shallowMount } from '@/tests/utils/index'

import CardLink from '../../../../components/common/Cards/CardLink/index.vue'

const link = {
  id: 2,
  name: 'Name2',
  link: 'dark-board.web.app/root',
  short_link: 'urilink.ru/GhQoYx2',
  icon: 'https://dark-board.web.app/favicon.ico',
  click_counter: '186',
  comment: '',
  created_at: '2025-01-16 09:30:15',
  updated_at: '2025-01-16 09:30:15',
}

function factory({ props = link, data = {}, ...other }) {
  return shallowMount(CardLink, {
    props,
    data() {
      return data
    },
    ...other,
  })
}

describe('[CardLink] - Компонент Web-Ссылка', () => {
  it('Проверка рендеринга параметров', () => {
    const wrapper = factory({
      props: {
        ...link,
      },
    })

    expect(wrapper.props().link).toBe(link.link)
    expect(wrapper.props().short_link).toBe(link.short_link)
    expect(wrapper.props().click_counter).toBe(link.click_counter)

    expect(wrapper.text()).toContain(link.link)
    expect(wrapper.text()).toContain(link.short_link)
    expect(wrapper.text()).toContain(link.click_counter)
  })

  /*
  it("Порождает событие без монтирования компонента", () => {
    const events = {}
    const $emit = (event, ...args) => { events[event] = [...args] }

    CardLink.vm.methods.emitEvent.call({ $emit })

    expect(events.copy).toEqual([])
  })
  */
})
