<template>
  <div class="mic-container">
    <Microphone class="mic-icon"/>
  </div>
</template>

<script setup>
import Microphone from './icons/Microphone.vue'

</script>

<style scoped>
.mic-container{
  height: 5.75vh;
  width: 2.75vw;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: 2px solid white;

  background: dodgerblue;
  cursor: pointer;
  transition: .5s;
}

.mic-container:hover{
  background: rgb(27, 125, 223);
  border: 2px solid rgb(220, 220, 220);
}
</style>
