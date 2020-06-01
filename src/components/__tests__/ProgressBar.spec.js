import { shallowMount } from '@vue/test-utils'
import ProgressBar from '../ProgressBar.vue'

describe('ProgressBar.vue', () => {
  const wrapper = shallowMount(ProgressBar)

  beforeEach(() => {
    jest.useFakeTimers()
  })

  test('initializes with 0% width', () => {
    expect(wrapper.element.style.width).toBe('0%')
  })

  test('displays the bar when start is called', async () => {
    expect(wrapper.classes()).toContain('hidden')
    await wrapper.vm.start()
    expect(wrapper.classes()).not.toContain('hidden')
  })

  test('sets the bar to 100% width when finish is called', async () => {
    await wrapper.vm.start()
    await wrapper.vm.finish()
    expect(wrapper.element.style.width).toBe('100%')
  })

  test('hides the bar when finish is called', async () => {
    await wrapper.vm.start()
    await wrapper.vm.finish()
    expect(wrapper.classes()).toContain('hidden')
  })

  test('resets to 0% width when start is called', async () => {
    await wrapper.vm.finish()
    await wrapper.vm.start()
    expect(wrapper.element.style.width).toBe('0%')
  })

  test('removes error class when start is called', async () => {
    await wrapper.vm.fail()
    await wrapper.vm.start()
    expect(wrapper.classes()).not.toContain('error')
  })

  test('sets the bar to 100% width when fail is called', async () => {
    await wrapper.vm.fail()
    expect(wrapper.classes()).toContain('error')
  })

  test('styles the bar correctly when fail is called', async () => {
    await wrapper.vm.fail()
    expect(wrapper.element.style.width).toBe('100%')
  })

  // test('increases width by 1% every 100ms after start call', async () => {
  //   await wrapper.vm.start()
  //   jest.runTimersToTime(100)
  //   expect(wrapper.element.style.width).toBe('1%')
  //   jest.runTimersToTime(900)
  //   expect(wrapper.element.style.width).toBe('10%')
  //   jest.runTimersToTime(4000)
  //   expect(wrapper.element.style.width).toBe('50%')
  // })

  test('clears timer when finish is called', async () => {
    jest.spyOn(window, 'clearInterval')
    setInterval.mockReturnValue(123)
    await wrapper.vm.start()
    await wrapper.vm.finish()
    expect(window.clearInterval).toHaveBeenCalledWith(123)
  })
})
