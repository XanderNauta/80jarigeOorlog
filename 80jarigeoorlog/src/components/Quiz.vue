<template>
  <div class="intro-container">
    <h2 class="intro-title">Quiz: Het Begin van de Republiek</h2>

    <div v-if="step === 'meerkeuze'">
      <p class="intro-text">
        Vraag {{ currentQuestionIndex + 1 }} van {{ totalQuestions }}:<br />
        {{ questions[currentQuestionIndex].text }}
      </p>

      <div class="lists-container">
        <div class="list">
          <label
              v-for="(option, index) in questions[currentQuestionIndex].options"
              :key="index"
              class="block mb-2"
          >
            <input
                type="radio"
                :value="option"
                v-model="userAnswers[currentQuestionIndex]"
                class="mr-2"
            />
            {{ option }}
          </label>
        </div>
      </div>

      <button
          @click="nextQuestion"
          :disabled="!userAnswers[currentQuestionIndex]"
          class="mt-4 px-4 py-2 bg-yellow-700 text-white rounded hover:bg-yellow-800"
      >
        Volgende
      </button>
    </div>

    <div v-else-if="step === 'stad'">
      <p class="intro-text">
        Vraag {{ totalQuestions }} van {{ totalQuestions }}:<br />
        <strong>Welke stad was in de tijd van de Republiek het centrum van handel en rijkdom?</strong>
      </p>

      <input
          v-model="openStad"
          placeholder="Typ hier de naam van de stad"
          class="w-full mt-4 p-2 rounded border-2 border-yellow-800"
      />

      <button
          @click="finishQuiz"
          :disabled="openStad.trim() === ''"
          class="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
      >
        Inleveren
      </button>
    </div>

    <div v-else-if="step === 'klaar'">
      <p class="intro-text font-semibold text-xl">Je hebt de quiz afgerond!</p>
      <p class="intro-text font-bold text-lg">
        Je score: {{ totalScore }}/{{ totalQuestions }}
      </p>

      <p class="intro-text mt-4">
        Je antwoord op de laatste vraag was: <strong>"{{ openStad }}"</strong><br />
        {{ stadCorrect ? 'Goed gedaan!' : 'Het juiste antwoord was: Amsterdam' }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import axios from 'axios'

const questions = [
  {
    text: 'In welk jaar begon de Republiek der Zeven Verenigde Nederlanden officieel?',
    options: ['1492', '1588', '1648', '1789'],
    correct: '1588',
  },
  {
    text: 'Waarom wilden de noordelijke gewesten geen koning meer?',
    options: [
      'Ze vonden koningen saai',
      'Ze wilden zelf beslissingen nemen',
      'Ze wilden Frankrijk helpen',
      'Ze hielden niet van feesten',
    ],
    correct: 'Ze wilden zelf beslissingen nemen',
  },
  {
    text: 'Hoe heette de man die vaak leider was in de Republiek en ook veldheer was?',
    options: ['Willem van Oranje', 'Rembrandt van Rijn', 'Hugo de Groot', 'Piet Hein'],
    correct: 'Willem van Oranje',
  },
  {
    text: 'Hoeveel gewesten vormden samen de Republiek?',
    options: ['3', '5', '7', '10'],
    correct: '7',
  },
]

const userAnswers = ref(Array(questions.length).fill(null))
const openStad = ref('')
const currentQuestionIndex = ref(0)
const step = ref('meerkeuze')


function nextQuestion() {
  if (currentQuestionIndex.value < questions.length - 1) {
    currentQuestionIndex.value++
  } else {
    step.value = 'stad'
  }
}

const scoreMeerkeuze = computed(() =>
    userAnswers.value.reduce((total, answer, index) => {
      return answer === questions[index].correct ? total + 1 : total
    }, 0)
)

const stadCorrect = computed(() =>
    openStad.value.trim().toLowerCase() === 'amsterdam'
)

const totalScore = computed(() => scoreMeerkeuze.value + (stadCorrect.value ? 1 : 0))
const totalQuestions = questions.length + 1

async function finishQuiz() {
  step.value = 'klaar'
  const passed = totalScore.value >= 5

  console.log(passed)

  try {
    await axios.post('http://135.181.47.101:1234/api/result', {
      quizName: 'VroegmoderneTijd5',
      passed: passed,
    })
    console.log('Resultaat verzonden')
  } catch (error) {
    console.error('Fout bij verzenden resultaat:', error)
  }
}
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
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.list {
  flex: 1 1 100%;
  margin: 1rem;
  border-radius: 0.75rem;
  padding: 1rem;
  background-color: #fff7db;
  border: 2px dashed #8b5e3c;
  font-size: 1rem;
  text-align: left;
}
</style>
