<template>
  <div class="history-container">
    <ul class="history-list">
      <router-link to="/" exact-active-class="active-link"><li>naar start</li></router-link>
      <router-link to="/opstand" exact-active-class="active-link"><li>Opstand tegen Spanje</li></router-link>
        <li><router-link to="/Nederlanden" exact-active-class="active-link">
          Ontstaan van de Republiek der Zeven Verenigde Nederlanden</router-link></li>
      <li><router-link to="/vrede" exact-active-class="active-link">Vrede van Münster</router-link></li>
    </ul>
  </div>
</template>



<script setup lang="ts">
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=MedievalSharp&display=swap');

.history-container {
  max-width: 100%;
  padding: 2rem;
  background-color: #fef8e5;
  border: 5px double #8b5e3c;
  border-radius: 1rem;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  font-family: 'Libre Baskerville', serif;
  text-align: center;
}

.history-list a {
  color: inherit; 
  text-decoration: none;
  display: block;
}

.history-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  margin: 0;
  gap: 1rem;
}

.history-list li {
  background-color: #fffaf0;
  color: #3b2f2f;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-family: 'MedievalSharp', cursive;
  font-size: 1.1rem;
  min-width: 200px;
  border: 2px solid #c2a177;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, background-color 0.3s ease;
}

.history-list li:hover,
.history-list .active-link {
  background-color: #fff3d0;
  transform: scale(1.05);
  font-weight: bold;
}

</style>