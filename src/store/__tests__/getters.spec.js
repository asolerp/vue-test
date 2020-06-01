import getters from '../getters'

describe('getters', () => {
  test('displayItems return sthe first 20 items from state.items', () => {
    const items = Array(21).fill().map((v, i) => i)
    const state = {
      items
    }
    const result = getters.displayItems(state)
    const expectedResult = items.slice(0, 20)
    expect(result).toEqual(expectedResult)
  })
  test('maxPage returns a rounded number usint the current items', () => {
    const items = Array(49).fill().map((v, i) => i)
    const restult = getters.maxPage({ items })
    expect(restult).toBe(3)
  })
})
