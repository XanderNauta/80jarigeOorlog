import { createStore } from 'vuex'

export default createStore({
  state: {
    items: [
      { id: 1, name: 'Musket' },
      { id: 2, name: 'Zwaard' },
      { id: 3, name: 'Harnas' },
    ]
  },
  getters: {
  },
  mutations: {
    setItems(state, newItems) {
      state.items = newItems
    },
  },
  actions: {
  },
  modules: {
  }
})
