<template>
  <div class="mic-container">
    <Microphone class="mic-icon" />
  </div>
</template>

<script setup>
import Microphone from "./icons/Microphone.vue";
</script>

<style scoped>
.mic-container {
  min-height: 6vh;
  min-width: 3vw;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: 2px solid white;

  background: dodgerblue;
  cursor: pointer;
  transition: 0.5s;
  padding: 0.3em;
}

.mic-container:hover {
  background: rgb(27, 125, 223);
  border: 2px solid rgb(220, 220, 220);
}

.mic-icon {
  min-width: 1.5em;
  min-height: 1.5em;
  color: white;
}
</style>
