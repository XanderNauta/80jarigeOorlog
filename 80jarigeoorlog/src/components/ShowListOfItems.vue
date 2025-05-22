<!-- components/ShowListOfItems.vue -->
<template>
  <draggable
      v-model="availableItems"
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

const availableItems = computed({
  get: () => store.state.availableItems,
  set: (val) => store.commit('setAvailableItems', val)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=MedievalSharp&display=swap');

.intro-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  margin-top: 2rem;
  background-color: #fef8e5;
  border: 4px double #8b5e3c;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Libre Baskerville', serif;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.intro-text {
  font-size: 1.5rem;
  color: #3b2f2f;
  margin-bottom: 2rem;
}

.intro-button {
  background-color: #c2a177;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-family: 'MedievalSharp', cursive;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.intro-button:hover {
  background-color: #a67c52;
}
</style>
