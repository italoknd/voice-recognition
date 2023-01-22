<script setup>
import VueVoiceRecognition from './components/VueVoiceRecognition.vue'
</script>

<template>
  <div class="app">
    <div class="d-flex justify-content-center">
      <VueVoiceRecognition />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#app {
  max-width: 100vw;
  max-height: 100vh;
}

body {
  background-image: linear-gradient(90deg, #3960ec, rgb(0, 153, 255));
  color: white;
}
</style>
