<script setup>
import { ref, onMounted } from 'vue'

const transcript = ref('')
const is_recording = ref(false)

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition
const sr = new Recognition()

onMounted(() => {
  sr.continuous = true
  //this command tell us that the component will be listening us till we stop it
  sr.interimResults = true
  //this one will take the results of the speech

  sr.onStart = () => {
    console.log('VR started')
    is_recording.value = true
  }

  //on start recording
  sr.onStop = () => {
    console.log('VR stopped')
    is_recording.value = false
  }

  sr.onResult = event => {
    console.log(event)
    const text = Array.from(event.results)
      .map(res => res[0])
      .map(res => {
        res.transcript
      })
      .join('')

    transcript.value = text
  }
})

const toggle_mic = () => {
  console.log('entered here')
  if (is_recording.value) sr.stop()
  else sr.start()
}
</script>

<template>
  <div class="app">
    <button :class="`mic`" @click="toggle_mic()">Record</button>
    <div class="transcript" v-text="transcript"></div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
  background: dodgerblue;
  color: white;
}
</style>
