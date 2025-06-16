
<template>
  <draggable
      v-model="pieceImages"
      item-key="correctPosition"
      id="puzzleContainer"
      :move="handleMove"
      @end="handleDragEnd"
  >

    <template #item="{element}">
      <div class="puzzlePieceWrapper">
        <puzzle-piece-component
            :key="element.correctPosition"
            :imageUrl="element.imageUrl"
            class="puzzlePiece"
        />
      </div>
    </template>
  </draggable>

</template>

<script setup lang="ts">


import {PuzzlePieceModel} from '@/models/puzzle-piece';
import PuzzlePieceComponent from "@/components/PuzzlePieceComponent.vue";
import draggable from 'vuedraggable';
import { ref } from 'vue';

//Tip voor puzzelstukjes te maken van afbeeldingen: https://imagy.app/split-image/
const pieceImages = ref<PuzzlePieceModel[]>([
  {imageUrl: "image1x1.png", correctPosition: 0},
  {imageUrl: "image2x1.png", correctPosition: 1},
  {imageUrl: "image3x1.png",correctPosition: 2},
  {imageUrl: "image2x2.png", correctPosition: 4},
  {imageUrl: "image1x2.png", correctPosition: 3},
  {imageUrl: "image3x2.png", correctPosition: 5},
  {imageUrl: "image1x3.png", correctPosition: 6},
  {imageUrl: "image2x3.png", correctPosition: 7},
  {imageUrl: "image3x3.png", correctPosition: 8},
]);

let originalIndex = 0;
let futureIndex = 0;

const emit = defineEmits<{
  (e: 'puzzle-solved'): void
}>()

function handleMove(e: any) {
  originalIndex = e.draggedContext.index;
  futureIndex = e.draggedContext.futureIndex;
  return false;
}

function checkSolution(){
  const isSolved = pieceImages.value.every((piece, index) => piece.correctPosition === index);
  if (isSolved) {
    emit("puzzle-solved")
  }
}

function handleDragEnd() {
  let temp = pieceImages.value[originalIndex];
  pieceImages.value[originalIndex] = pieceImages.value[futureIndex];
  pieceImages.value[futureIndex] = temp;
  checkSolution();
}

</script>

<style scoped lang="scss">
#puzzleContainer {
  display: grid;
  text-align: center;
  grid-template-columns: repeat(3, 350px);
  grid-template-rows: repeat(3, 525px);
  gap: 0;
  margin: 0;
}

/* Control the size of each puzzle piece */
.puzzlePiece {
  width: 100%;
  height: 100%;
  object-fit: contain; // of 'cover' als je liever opvulling wil
  display: block;
  border: none;
  padding: 0;
  margin: 0;
}
.puzzlePieceWrapper {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: block;
}


</style>