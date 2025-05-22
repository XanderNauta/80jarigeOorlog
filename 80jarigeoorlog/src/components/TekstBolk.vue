<template>
  <div class="intro-container">
    <p class="intro-text">{{ messageList[currentIndex] }}</p>
    <button class="intro-button" @click="nextMessage">Volgende</button>
  </div>
</template>

<script setup lang="ts">
import {onUpdated, ref} from 'vue'
import {useRouter} from "vue-router";
const router = useRouter()


const messageList = [
  'Welkom!',
  'De 16e eeuw was een periode van onrust in de Nederlanden...',
  'het katholieke spanje verloor haar grip en protestantse ideeën verspreidden zich snel in de Nederlande.',
  'In 1566 barstte het los: woedende menigten vernielden religieuze beelden in kerken.',
  'Deze "Beeldenstorm" was geen op zichzelf staand incident...',
  'Het was het begin van een lange strijd: de Tachtigjarige Oorlog.',
  'De opstand tegen Spanje leidde uiteindelijk tot de geboorte van een nieuwe natie...',
  'De Republiek der Zeven Verenigde Nederlanden.',
  'Klik verder om deze indrukwekkende geschiedenis te ontdekken.'
]

const currentIndex = ref(0)

// onUpdated(() => {
//   console.log("hoi")
//   nextMessage()
// })

function nextMessage() {
  if (currentIndex.value < messageList.length - 1) {
    currentIndex.value++
  } else {
    router.push('/opstand')
  }
}
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
