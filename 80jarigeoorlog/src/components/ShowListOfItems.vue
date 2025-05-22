<template>
  <draggable
      v-model="items"
      @end="onDragEnd"
      item-key="id"
      :animation="200"
  >
    <template #item="{ element }">
      <div class="item">
        {{ element.name }}
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// Computed list from Vuex store
const items = computed({
  get: () => store.state.items,
  set: (newList) => {
    store.commit('setItems', newList)
  }
})

const onDragEnd = () => {
  // Optional: commit the new order again if needed
  store.commit('setItems', items.value)
}

</script>



<style scoped>

</style>