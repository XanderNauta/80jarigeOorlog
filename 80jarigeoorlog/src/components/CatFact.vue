<template>
  <div>
    <h1> Secret Cat Facts</h1>
    <p v-if="loading">Laden...</p>
    <p v-else-if="error">Er is een fout opgetreden: {{ error }}</p>
    <p v-else>{{ catFact }}</p>
    <button @click="fetchCatFact">Nieuw feit</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const catFact = ref('');
    const loading = ref(false);
    const error = ref(null);

    const fetchCatFact = async () => {
      loading.value = true;
      error.value = null;
      try {
        const response = await axios.get('https://catfact.ninja/fact');
        catFact.value = response.data.fact;
      } catch (err) {
        error.value = err.message || 'Onbekende fout';
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchCatFact);

    return {
      catFact,
      loading,
      error,
      fetchCatFact,
    };
  },
};
</script>

<style scoped>
button {
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 16px;
}
</style>