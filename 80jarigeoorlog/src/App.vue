<template>
  <div id="app">
    <MenubarView />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import MenubarView from "@/components/MenubarView.vue";
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=MedievalSharp&display=swap');

#app {
  font-family: 'Libre Baskerville', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fef8e5;
  min-height: 100vh;
  padding: 0.5rem;
}

nav {
  padding: 1.5rem;
  background-color: #fffaf0;
  border-bottom: 2px solid #c2a177;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

nav a {
  font-family: 'MedievalSharp', cursive;
  font-size: 1.1rem;
  color: #3b2f2f;
  text-decoration: none;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

nav a:hover {
  background-color: #fff3d0;
  transform: scale(1.05);
}

nav a.router-link-exact-active {
  background-color: #fff3d0;
  font-weight: bold;
  transform: scale(1.05);
}
</style>
