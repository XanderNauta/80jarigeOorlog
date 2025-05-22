<template>
  <div>
    <h1>Hoi welkom in mijn eerste com</h1>
    <h2 v-if="isRendered "> hoi</h2>

    <button @click="toggleHeader">toggle</button>
  </div>
</template>



<script setup lang="ts">

import {ref} from "vue";

const isRendered  = ref(false)
function toggleHeader(): void{
  isRendered.value = !isRendered.value;
}

</script>


<style scoped>

</style>