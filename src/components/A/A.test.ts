import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import A from './A.vue'

describe('<A />', () => {
  it('默认渲染 href 为 #', () => {
    const wrapper = mount(A, {
      slots: {
        default: '默认链接',
      },
    })
    const a = wrapper.find('a')
    expect(a.exists()).toBe(true)
    expect(a.attributes('href')).toBe('#')
  })

  it('点击时触发 click 事件', async () => {
    const onClick = vi.fn()
    const wrapper = mount(A, {
      slots: { default: '点我' },
      attrs: {
        onClick,
      },
    })
    await wrapper.find('a').trigger('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('disabled=true 时不触发点击', async () => {
    const onClick = vi.fn()
    const wrapper = mount(A, {
      props: {
        disabled: true,
      },
      slots: { default: '禁用' },
      attrs: {
        onClick,
      },
    })
    await wrapper.find('a').trigger('click')
    expect(onClick).not.toHaveBeenCalled()
  })

  it('type=email 时 href 转为 mailto:', () => {
    const wrapper = mount(A, {
      props: {
        type: 'email',
        href: 'user@example.com',
      },
      slots: {
        default: '邮箱',
      },
    })
    expect(wrapper.find('a').attributes('href')).toBe('mailto:user@example.com')
  })

  it('type=phone 时 href 转为 tel:', () => {
    const wrapper = mount(A, {
      props: {
        type: 'phone',
        href: '123456',
      },
      slots: {
        default: '电话',
      },
    })
    expect(wrapper.find('a').attributes('href')).toBe('tel:123456')
  })

  it('icon=false 时不渲染图标', () => {
    const wrapper = mount(A, {
      props: {
        icon: false,
      },
      slots: {
        default: '无图标',
      },
    })
    expect(wrapper.findComponent({ name: 'Icon' }).exists()).toBe(false)
  })
})
