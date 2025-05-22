<template>
  <div class="intro-container">
    <h1 class="intro-title">Wat had een Nederlandse soldaat die tegen de Spanjaarden vocht?</h1>
    <p class="intro-text">Een blik op de uitrusting, wapens en kleding van de Tachtigjarige Oorlog.</p>
  </div>

  <div class="lists-container">
    <div class="list">
      <ShowListOfItems />
    </div>
    <div class="list">
      <EndListOfItems />
    </div>
  </div>
</template>



<script setup lang="ts">

import ShowListOfItems from "@/components/ShowListOfItems.vue";
import EndListOfItems from "@/components/EndListOfItems.vue";
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=MedievalSharp&display=swap');

.intro-container {
  text-align: center;
  background-color: #fef8e5;
  border: 4px double #8b5e3c;
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Libre Baskerville', serif;
  max-width: 800px;
}

.intro-title {
  font-family: 'MedievalSharp', cursive;
  font-size: 2rem;
  color: #5c3a1a;
  margin-bottom: 0.5rem;
}

.intro-text {
  font-size: 1.2rem;
  color: #3b2f2f;
  margin-bottom: 1rem;
}

.lists-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.list {
  flex: 1 1 45%;
  margin: 1rem;
  border-radius: 0.75rem;
  padding: 1rem;

}

</style>
