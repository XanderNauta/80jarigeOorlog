<template>
  <div class="home-view">
    <div class="home-section">
      <Home msg="Welkom in 1566" />
    </div>
    <div class="tekst-section">
      <TekstBolk />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from '@/components/HomePage.vue';
import TekstBolk from '@/components/TekstBolk.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Home,
    TekstBolk,
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=MedievalSharp&display=swap');

.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
padding: 2rem;
  background-color: #fef8e5;
  font-family: 'Libre Baskerville', serif;
}

.home-section,
.tekst-section {
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #fffaf0;
  border: 4px double #8b5e3c;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.home-section {
  text-align: center;
}

.tekst-section {
  font-family: 'MedievalSharp', cursive;
  font-size: 1.1rem;
  color: #3b2f2f;
}
</style>
