import mutations from '../mutations'

describe('mutattions', () => {
  test('setItems set sate.items to items', () => {
    const items = [{ id: 1 }, { id: 2 }]
    const state = {
      items: []
    }
    mutations.setItems(state, { items })
    expect(state.items).toBe(items)
  })
})
