<template>
  <div class="puzzlePiece">
    <img :src="require(`../assets/puzzle/${imageUrl}`)" :alt="`Puzzle piece from ${imageUrl}`" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageUrl: string;
}>();
</script>

<style scoped lang="scss">

</style>

