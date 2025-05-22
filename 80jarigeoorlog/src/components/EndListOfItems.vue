<template>
  <h2>Drop hier de items</h2>
  <draggable
      v-model="droppedItems"
      group="items"
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

const droppedItems = computed({
  get: () => store.state.droppedItems,
  set: (val) => store.commit('setDroppedItems', val)
})
</script>

<style scoped>

</style>