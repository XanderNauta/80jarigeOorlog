<template>
  <div style="max-width:700px; margin:2rem auto 0; padding:3rem 2rem; border:4px double #8b5e3c; border-radius:1rem; box-shadow:0 10px 20px rgba(0,0,0,0.1); font-family: 'Libre Baskerville', serif; text-align:center;">
    <h2 style="color:#3b2f2f; margin-bottom:2rem; font-size:1.5rem; line-height:1.6;">
      Drop hier de items
    </h2>
    <draggable
        v-model="droppedItems"
        group="items"
        item-key="id"
        :animation="200"
        style="width: 100%;"
    >
      <template #item="{ element }">
        <div
            style="
            background-color: #fff8dc;
            border: 2px solid #8b5e3c;
            padding: 1rem;
            margin: 0.5rem 0;
            border-radius: 0.5rem;
            font-family: 'Libre Baskerville', serif;
            color: #3b2f2f;
            transition: background-color 0.3s ease;
            width: 100%;
            cursor: grab;
          "
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :style="{ backgroundColor: hover ? '#fff1c1' : '#fff8dc' }"
        >
          {{ element.name }}
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import {computed, ref} from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const droppedItems = computed({
  get: () => store.state.droppedItems,
  set: (val) => store.commit('setDroppedItems', val)
})

const hover = ref(false)

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
