<!-- components/ShowListOfItems.vue -->
<template>
  <div class="intro-container">
    <p class="intro-text">
      Sleep de onderstaande items om ze te herschikken:
    </p>

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

    <button class="intro-button" @click="shuffleItems">
      Willekeurig herschikken
    </button>
  </div>
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

function shuffleItems() {
  const shuffled = [...availableItems.value].sort(() => Math.random() - 0.5)
  store.commit('setAvailableItems', shuffled)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=MedievalSharp&display=swap');

:root {
  --main-border: #8b5e3c;
  --text-color: #3b2f2f;
  --button-bg: #c2a177;
  --button-hover: #a67c52;
  --shadow-light: rgba(0, 0, 0, 0.1);
}

.intro-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  margin: 2rem auto 0;
  border: 4px double var(--main-border);
  border-radius: 1rem;
  box-shadow: 0 10px 20px var(--shadow-light);
  font-family: 'Libre Baskerville', serif;
  max-width: 700px;
  text-align: center;
}

.intro-text {
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.intro-button {
  background-color: var(--button-bg);
  color: var(--text-color);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-family: 'MedievalSharp', cursive;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 2rem;
}

.intro-button:hover {
  background-color: var(--button-hover);
  transform: translateY(-2px);
}

.item {
  background-color: #fff8dc;
  border: 2px solid var(--main-border);
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  font-family: 'Libre Baskerville', serif;
  color: var(--text-color);
  transition: background-color 0.3s ease;
  width: 100%;
}

.item:hover {
  background-color: #fff1c1;
}
</style>
