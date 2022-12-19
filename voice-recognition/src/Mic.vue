<template>
  <div class="mic-container d-flex align-center justify-content-center">
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

  border-radius: 50%;
  border: 2px solid white;

  background: dodgerblue;
  cursor: pointer;
  transition: 0.5s;
  padding: 0.3em;
}

.mic-container:hover {
  background: rgb(29, 133, 236);
  border: 2px solid rgb(220, 220, 220);
}

.mic-icon {
  min-width: 1.5em;
  min-height: 1.5em;
  color: white;
}

.recording {
  background: rgb(223, 77, 77);
}
</style>
