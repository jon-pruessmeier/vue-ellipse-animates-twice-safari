<script setup>
  import { ref } from "vue";
  const showProgress = ref(false);
</script>

<template>
  <div class="custom">
    <button @click="showProgress = !showProgress">
      {{ showProgress ? "No Progress" : "Show Progress" }}
    </button>
    <div v-if="showProgress">
      <ve-progress :progress="45" :size="250" reverse />
    </div>
  </div>
</template>

<style scoped>
  .custom {
    height: 80%;
    width: 80%;
    display: flex;
    justify-content: start;
    align-items: center;
    border: 1px;
    border-color: black;
    border-style: solid;
    flex-direction: column;
  }

  button {
    margin-top: 2rem;
    margin-bottom: 5rem;
  }
</style>
