import { createStore } from 'vuex'

export default createStore({
  state: {
    availableItems: [
      { id: 1, name: 'Musket' },
      { id: 2, name: 'Zwaard' },
      { id: 3, name: 'Harnas' },
    ],
    droppedItems: [],

  },
  getters: {
  },
  mutations: {
    setAvailableItems(state, newItems) {
      state.availableItems = newItems
    },

    setDroppedItems(state, items){
      state.droppedItems = items
    }
  },
  actions: {
  },
  modules: {
  }
})
